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

#on a,
#dimup a,
#dimdown a,
#off a {
    position: absolute;
    disrwd: block
}

#remote-control-huedimmer li#on a {
    left: 8px;
    top: 10px;
    width: 217px;
    height: 186px;
    background: url(${base_url}/on.png) no-repeat
}

#remote-control-huedimmer li#dimup a {
    left: 9px;
    top: 194px;
    width: 214px;
    height: 110px;
    background: url(${base_url}/dimup.png) no-repeat
}

#remote-control-huedimmer li#dimdown a {
    left: 9px;
    top: 302px;
    width: 213px;
    height: 111px;
    background: url(${base_url}/dimdown.png) no-repeat
}

#remote-control-huedimmer li#off a {
    left: 8px;
    top: 410px;
    width: 215px;
    height: 182px;
    background: url(${base_url}/off.png) no-repeat
}

#remote-control-huedimmer li#on a:hover {
    background: url(${base_url}/on_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#dimup a:hover {
    background: url(${base_url}/dimup_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#dimdown a:hover {
    background: url(${base_url}/dimdown_over.png) no-repeat 0px 0px
}

#remote-control-huedimmer li#off a:hover {
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
       <li id="on" class="myButton-${template}"><a href="#" title="on"></a></li>
       <li id="dimup" class="myButton-${template}"><a href="#" title="dimup"></a></li>
       <li id="dimdown" class="myButton-${template}"><a href="#" title="dimdown"></a></li>
       <li id="off" class="myButton-${template}"><a href="#" title="off"></a></li>
     </ul>
   </div>    
 </div>
`;
}
