function getRemoteStyle_huedimmer(config) {
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;
   
  return `
    ha-card{
        background-color:transparent;
        box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
    margin: 0;
    padding: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
    width: 258px;
    margin: 0 auto
}

#remote-control-huedimmer {
    position: relative;
    background: url(${base_url}/huedimmer.png) no-repeat;
    width: 229px;
    height: 598px;
}

#remote-control-huedimmer ul {
    margin: 0;
    padding: 0;
    list-style-type: none
}

#hue_power_on a,
#hue_dim_up a,
#hue_dim_down a,
#hue_power_off a {
    position: absolute;
    disrwd: block
}

#remote-control-huedimmer li#hue_power_on a {
    left: 8px;
    top: 10px;
    width: 217px;
    height: 186px;
    background: url(${base_url}/on.png) no-repeat
}

#remote-control-huedimmer li#hue_dim_up a {
    left: 9px;
    top: 194px;
    width: 214px;
    height: 110px;
    background: url(${base_url}/dimup.png) no-repeat
}

#remote-control-huedimmer li#hue_dim_down a {
    left: 9px;
    top: 302px;
    width: 213px;
    height: 111px;
    background: url(${base_url}/dimdown.png) no-repeat
}

#remote-control-huedimmer li#hue_power_off a {
    left: 8px;
    top: 410px;
    width: 215px;
    height: 182px;
    background: url(${base_url}/off.png) no-repeat
}

#remote-control-huedimmer li#hue_power_on a:hover a:active {
    background: url(${base_url}/on_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#hue_dim_up a:hover a:active {
    background: url(${base_url}/dimup_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#hue_dim_down a:hover a:active {
    background: url(${base_url}/dimdown_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#hue_power_off a:hover a:active {
    background: url(${base_url}/off_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_huedimmer(config){
 const template = config.remote_template;
 return `

 <div class="container">
   <div style="text-align:center">
     <h1>${config.name}</h1>
   </div>
   <div id="remote-control-huedimmer">
     <ul>
       <li id="hue_power_on" class="myButton-${template}"><a draggable="false" href="#" title="hue_power_on"></a></li>
       <li id="hue_dim_up" class="myButton-${template}"><a draggable="false" href="#" title="hue_dim_up"></a></li>
       <li id="hue_dim_down" class="myButton-${template}"><a draggable="false" href="#" title="hue_dim_down"></a></li>
       <li id="hue_power_off" class="myButton-${template}"><a draggable="false" href="#" title="hue_power_off"></a></li>
     </ul>
   </div>    
 </div>
`;
}
