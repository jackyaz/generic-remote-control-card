var timeout_id = 0, hold_time = 500, button_held = false

function loadScript(remote_template){
  if(window[`scriptLoaded_${remote_template}`]){
    return;
  }

  var script = document.createElement("script");
  script.src = `/hacsfiles/generic-remote-control-card/remotes/${remote_template}/remote-html.js`;
  script.type = "text/javascript";
  script.async = false;
  document.head.appendChild(script); 
  window[`scriptLoaded_${remote_template}`] = true;
}

function captureClick(e) {
  e.stopPropagation(); // Stop the click from being propagated.
  window.removeEventListener('click', captureClick, true); // cleanup
  button_held = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function held_button(button, config, hass) {
  let buttonData = getButtonData(button.id, config);
  let domain = buttonData.call.split(".")[0]
  let action = buttonData.call.split(".")[1]
  while (button_held === true) {
    hass.callService(domain,
                      action,
                      buttonData.data
                    );
    await sleep(100);
  }
  console.log('Done');
}

class GenericRemotControlCard extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  setConfig(config) {
    loadScript(config.remote_template);
    const root = this.shadowRoot;
    if (root.lastChild) root.removeChild(root.lastChild);

    const cardConfig = Object.assign({}, config);
    this._config = cardConfig
  }

  set hass(hass) {
    const config = this._config;

    loadScript(config.remote_template);

    try{
      const html = window[`getRemoteHtml_${config.remote_template}`](config);
        const css = window[`getRemoteStyle_${config.remote_template}`](config);

        const root = this.shadowRoot;
        this._hass = hass;
        // root.lastChild.hass = hass;

        const card = document.createElement('ha-card');
        if(!this.content && window[`scriptLoaded_${config.remote_template}`]){
           this.content = document.createElement('div');
           const style = document.createElement('style');
           style.textContent = css;
           this.content.innerHTML = html;
           card.appendChild(this.content);
           card.appendChild(style);
           root.appendChild(card);
           this._bindButtons(card, this._hass, this._config);
        }
    } catch(err){
      loadScript(config.remote_template);
    }
  }

  _bindButtons(card, hass, config){
    var buttons =  card.getElementsByClassName(`myButton-${config.remote_template}`);
    var i;
    for (i = 0; i < buttons.length; i++) {
      let button = buttons[i]
        button.addEventListener('mousedown',function() {
          timeout_id = setTimeout(function() {
            button_held=true;
            held_button(button, config, hass);
          }, hold_time);
        });
        button.addEventListener('mouseup',function() {
          clearTimeout(timeout_id);
          button_held = false
        });
        button.addEventListener('mouseleave',function() {
          clearTimeout(timeout_id);
          button_held = false
        });
        button.addEventListener('ontouchstart',function() {
          timeout_id = setTimeout(function() {
            button_held=true;
            held_button(button, config, hass);
          }, hold_time);
        });
        button.addEventListener('ontouchcancel',function() {
          clearTimeout(timeout_id);
          button_held = false
        });
        button.addEventListener('ontouchend',function() {
          clearTimeout(timeout_id);
          button_held = false
        });
        button.addEventListener('click', function(source){
          let buttonData = getButtonData(button.id, config);
          let domain = buttonData.call.split(".")[0]
          let action = buttonData.call.split(".")[1]
          hass.callService(domain,
                            action,
                            buttonData.data
                           );
        });
    }
  }

  getCardSize() {
    return 3;
  }
}

function getButtonData(buttonId, config){
  return config.buttons[buttonId];
}

customElements.define('generic-remote-control-card', GenericRemotControlCard);
