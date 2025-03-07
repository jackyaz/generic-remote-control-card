function getRemoteStyle_geemarctv100(config) {
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
    width: calc(var(--sz) * 294px);
    height: calc(var(--sz) * 1000px);
    margin: 0 auto
}

#remote-control-geemarctv100 {
    position: relative;
    background: url(${base_url}/geemarctv100.png) no-repeat;
    background-size: contain;
    width: calc(var(--sz) * 294px);
    height: calc(var(--sz) * 1000px);
}

#remote-control-geemarctv100 ul {
    margin: 0;
    padding: 0;
    list-style-type: none
}

#gee_power a,
#gee_mute a,
#gee_av a,
#gee_vol_up a,
#gee_vol_down a,
#gee_prog_up a,
#gee_prog_down a,
#gee_btn_1 a,
#gee_btn_2 a,
#gee_btn_3 a,
#gee_btn_4 a,
#gee_btn_5 a,
#gee_btn_6 a,
#gee_btn_7 a,
#gee_btn_8 a,
#gee_btn_9 a,
#gee_back a,
#gee_btn_0 a,
#gee_ok a {
    position: absolute;
    disrwd: block
}

#remote-control-geemarctv100 li#gee_power a {
    left: calc(var(--sz) * 45px);
    top: calc(var(--sz) * 68px);
    width: calc(var(--sz) * 87px);
    height: calc(var(--sz) * 93px);
    background: url(${base_url}/gee_power.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_mute a {
    left: calc(var(--sz) * 39px);
    top: calc(var(--sz) * 180px);
    width: calc(var(--sz) * 91px);
    height: calc(var(--sz) * 47px);
    background: url(${base_url}/gee_mute.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_av a {
    left: calc(var(--sz) * 169px);
    top: calc(var(--sz) * 181px);
    width: calc(var(--sz) * 86px);
    height: calc(var(--sz) * 45px);
    background: url(${base_url}/gee_av.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_vol_up a {
    left: calc(var(--sz) * 37px);
    top: calc(var(--sz) * 244px);
    width: calc(var(--sz) * 91px);
    height: calc(var(--sz) * 74px);
    background: url(${base_url}/gee_vol_up.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_vol_down a {
    left: calc(var(--sz) * 36px);
    top: calc(var(--sz) * 332px);
    width: calc(var(--sz) * 94px);
    height: calc(var(--sz) * 77px);
    background: url(${base_url}/gee_vol_down.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_prog_up a {
    left: calc(var(--sz) * 166px);
    top: calc(var(--sz) * 243px);
    width: calc(var(--sz) * 93px);
    height: calc(var(--sz) * 74px);
    background: url(${base_url}/gee_prog_up.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_prog_down a {
    left: calc(var(--sz) * 169px);
    top: calc(var(--sz) * 331px);
    width: calc(var(--sz) * 89px);
    height: calc(var(--sz) * 74px);
    background: url(${base_url}/gee_prog_down.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_1 a {
    left: calc(var(--sz) * 21px);
    top: calc(var(--sz) * 433px);
    width: calc(var(--sz) * 76px);
    height: calc(var(--sz) * 95px);
    background: url(${base_url}/gee_btn_1.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_2 a {
    left: calc(var(--sz) * 109px);
    top: calc(var(--sz) * 431px);
    width: calc(var(--sz) * 79px);
    height: calc(var(--sz) * 95px);
    background: url(${base_url}/gee_btn_2.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_3 a {
    left: calc(var(--sz) * 196px);
    top: calc(var(--sz) * 431px);
    width: calc(var(--sz) * 80px);
    height: calc(var(--sz) * 95px);
    background: url(${base_url}/gee_btn_3.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_4 a {
    left: calc(var(--sz) * 21px);
    top: calc(var(--sz) * 545px);
    width: calc(var(--sz) * 76px);
    height: calc(var(--sz) * 94px);
    background: url(${base_url}/gee_btn_4.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_5 a {
    left: calc(var(--sz) * 111px);
    top: calc(var(--sz) * 544px);
    width: calc(var(--sz) * 77px);
    height: calc(var(--sz) * 92px);
    background: url(${base_url}/gee_btn_5.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_6 a {
    left: calc(var(--sz) * 198px);
    top: calc(var(--sz) * 543px);
    width: calc(var(--sz) * 76px);
    height: calc(var(--sz) * 94px);
    background: url(${base_url}/gee_btn_6.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_7 a {
    left: calc(var(--sz) * 21px);
    top: calc(var(--sz) * 655px);
    width: calc(var(--sz) * 79px);
    height: calc(var(--sz) * 95px);
    background: url(${base_url}/gee_btn_7.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_8 a {
    left: calc(var(--sz) * 110px);
    top: calc(var(--sz) * 656px);
    width: calc(var(--sz) * 81px);
    height: calc(var(--sz) * 92px);
    background: url(${base_url}/gee_btn_8.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_9 a {
    left: calc(var(--sz) * 198px);
    top: calc(var(--sz) * 652px);
    width: calc(var(--sz) * 77px);
    height: calc(var(--sz) * 95px);
    background: url(${base_url}/gee_btn_9.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_back a {
    left: calc(var(--sz) * 22px);
    top: calc(var(--sz) * 768px);
    width: calc(var(--sz) * 79px);
    height: calc(var(--sz) * 89px);
    background: url(${base_url}/gee_back.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_btn_0 a {
    left: calc(var(--sz) * 110px);
    top: calc(var(--sz) * 766px);
    width: calc(var(--sz) * 81px);
    height: calc(var(--sz) * 94px);
    background: url(${base_url}/gee_btn_0.png) no-repeat;
    background-size: contain;
}

#remote-control-geemarctv100 li#gee_ok a {
    left: calc(var(--sz) * 196px);
    top: calc(var(--sz) * 763px);
    width: calc(var(--sz) * 79px);
    height: calc(var(--sz) * 91px);
    background: url(${base_url}/gee_ok.png) no-repeat;
    background-size: contain;
}

@media(hover: hover) and (pointer: fine) {
    #remote-control-geemarctv100 li#gee_power a:hover {
        background: url(${base_url}/gee_power_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_mute a:hover {
        background: url(${base_url}/gee_mute_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_av a:hover {
        background: url(${base_url}/gee_av_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_vol_up a:hover {
        background: url(${base_url}/gee_vol_up_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_vol_down a:hover {
        background: url(${base_url}/gee_vol_down_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_prog_up a:hover {
        background: url(${base_url}/gee_prog_up_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_prog_down a:hover {
        background: url(${base_url}/gee_prog_down_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_1 a:hover {
        background: url(${base_url}/gee_btn_1_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_2 a:hover {
        background: url(${base_url}/gee_btn_2_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_3 a:hover {
        background: url(${base_url}/gee_btn_3_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_4 a:hover {
        background: url(${base_url}/gee_btn_4_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_5 a:hover {
        background: url(${base_url}/gee_btn_5_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_6 a:hover {
        background: url(${base_url}/gee_btn_6_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_7 a:hover {
        background: url(${base_url}/gee_btn_7_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_8 a:hover {
        background: url(${base_url}/gee_btn_8_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_9 a:hover {
        background: url(${base_url}/gee_btn_9_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_back a:hover {
        background: url(${base_url}/gee_back_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_btn_0 a:hover {
        background: url(${base_url}/gee_btn_0_over.png) no-repeat 0px 0px;
        background-size: contain;
    }

    #remote-control-geemarctv100 li#gee_ok a:hover {
        background: url(${base_url}/gee_ok_over.png) no-repeat 0px 0px;
        background-size: contain;
    }
}
  `;
}

function getRemoteHtml_geemarctv100(config){
 const template = config.remote_template;
 return `

 <div class="container">
   <div style="text-align:center">
     <h1>${config.name}</h1>
   </div>
   <div id="remote-control-geemarctv100">
     <ul>
       <li id="gee_power" class="myButton-${template}"><a draggable="false" href="#" title="gee_power"></a></li>
       <li id="gee_mute" class="myButton-${template}"><a draggable="false" href="#" title="gee_mute"></a></li>
       <li id="gee_av" class="myButton-${template}"><a draggable="false" href="#" title="gee_av"></a></li>
       <li id="gee_vol_up" class="myButton-${template}"><a draggable="false" href="#" title="gee_vol_up"></a></li>
       <li id="gee_vol_down" class="myButton-${template}"><a draggable="false" href="#" title="gee_vol_down"></a></li>
       <li id="gee_prog_up" class="myButton-${template}"><a draggable="false" href="#" title="gee_prog_up"></a></li>
       <li id="gee_prog_down" class="myButton-${template}"><a draggable="false" href="#" title="gee_prog_down"></a></li>
       <li id="gee_btn_1" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_1"></a></li>
       <li id="gee_btn_2" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_2"></a></li>
       <li id="gee_btn_3" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_3"></a></li>
       <li id="gee_btn_4" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_4"></a></li>
       <li id="gee_btn_5" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_5"></a></li>
       <li id="gee_btn_6" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_6"></a></li>
       <li id="gee_btn_7" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_7"></a></li>
       <li id="gee_btn_8" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_8"></a></li>
       <li id="gee_btn_9" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_9"></a></li>
       <li id="gee_back" class="myButton-${template}"><a draggable="false" href="#" title="gee_back"></a></li>
       <li id="gee_btn_0" class="myButton-${template}"><a draggable="false" href="#" title="gee_btn_0"></a></li>
       <li id="gee_ok" class="myButton-${template}"><a draggable="false" href="#" title="gee_ok"></a></li>
     </ul>
   </div>
 </div>
`;
}
