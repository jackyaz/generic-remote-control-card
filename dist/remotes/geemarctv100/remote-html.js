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
    width: 294px;
    margin: 0 auto
}

#remote-control-geemarctv100 {
    position: relative;
    background: url(${base_url}/geemarctv100.png) no-repeat;
    width: 294px;
    height: 1000px;
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
    left: 45px;
    top: 68px;
    width: 87px;
    height: 93px;
    background: url(${base_url}/gee_power.png) no-repeat
}

#remote-control-geemarctv100 li#gee_mute a {
    left: 39px;
    top: 180px;
    width: 91px;
    height: 47px;
    background: url(${base_url}/gee_mute.png) no-repeat
}

#remote-control-geemarctv100 li#gee_av a {
    left: 169px;
    top: 181px;
    width: 86px;
    height: 45px;
    background: url(${base_url}/gee_av.png) no-repeat
}

#remote-control-geemarctv100 li#gee_vol_up a {
    left: 37px;
    top: 244px;
    width: 91px;
    height: 74px;
    background: url(${base_url}/gee_vol_up.png) no-repeat
}

#remote-control-geemarctv100 li#gee_vol_down a {
    left: 36px;
    top: 332px;
    width: 94px;
    height: 77px;
    background: url(${base_url}/gee_vol_down.png) no-repeat
}

#remote-control-geemarctv100 li#gee_prog_up a {
    left: 166px;
    top: 243px;
    width: 93px;
    height: 74px;
    background: url(${base_url}/gee_prog_up.png) no-repeat
}

#remote-control-geemarctv100 li#gee_prog_down a {
    left: 169px;
    top: 331px;
    width: 89px;
    height: 74px;
    background: url(${base_url}/gee_prog_down.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_1 a {
    left: 21px;
    top: 433px;
    width: 76x;
    height: 95px;
    background: url(${base_url}/gee_btn_1.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_2 a {
    left: 109px;
    top: 431px;
    width: 79px;
    height: 95px;
    background: url(${base_url}/gee_btn_2.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_3 a {
    left: 196px;
    top: 431px;
    width: 80px;
    height: 95px;
    background: url(${base_url}/gee_btn_3.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_4 a {
    left: 21px;
    top: 545px;
    width: 76px;
    height: 94px;
    background: url(${base_url}/gee_btn_4.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_5 a {
    left: 111px;
    top: 544px;
    width: 77px;
    height: 92px;
    background: url(${base_url}/gee_btn_5.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_6 a {
    left: 198px;
    top: 543px;
    width: 76px;
    height: 94px;
    background: url(${base_url}/gee_btn_6.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_7 a {
    left: 21px;
    top: 655px;
    width: 79px;
    height: 95px;
    background: url(${base_url}/gee_btn_7.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_8 a {
    left: 110px;
    top: 656px;
    width: 81px;
    height: 92px;
    background: url(${base_url}/gee_btn_8.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_9 a {
    left: 198px;
    top: 652px;
    width: 77px;
    height: 95px;
    background: url(${base_url}/gee_btn_9.png) no-repeat
}

#remote-control-geemarctv100 li#gee_back a {
    left: 22px;
    top: 768px;
    width: 79px;
    height: 89px;
    background: url(${base_url}/gee_back.png) no-repeat
}

#remote-control-geemarctv100 li#gee_btn_0 a {
    left: 110px;
    top: 766px;
    width: 81px;
    height: 94px;
    background: url(${base_url}/gee_btn_0.png) no-repeat
}

#remote-control-geemarctv100 li#gee_ok a {
    left: 196px;
    top: 763px;
    width: 79px;
    height: 91px;
    background: url(${base_url}/gee_ok.png) no-repeat
}

@media(hover: hover) and (pointer: fine) {
    #remote-control-geemarctv100 li#gee_power a:hover {
        background: url(${base_url}/gee_power_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_mute a:hover {
        background: url(${base_url}/gee_mute_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_av a:hover {
        background: url(${base_url}/gee_av_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_vol_up a:hover {
        background: url(${base_url}/gee_vol_up_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_vol_down a:hover {
        background: url(${base_url}/gee_vol_down_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_prog_up a:hover {
        background: url(${base_url}/gee_prog_up_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_prog_down a:hover {
        background: url(${base_url}/gee_prog_down_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_1 a:hover {
        background: url(${base_url}/gee_btn_1_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_2 a:hover {
        background: url(${base_url}/gee_btn_2_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_3 a:hover {
        background: url(${base_url}/gee_btn_3_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_4 a:hover {
        background: url(${base_url}/gee_btn_4_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_5 a:hover {
        background: url(${base_url}/gee_btn_5_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_6 a:hover {
        background: url(${base_url}/gee_btn_6_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_7 a:hover {
        background: url(${base_url}/gee_btn_7_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_8 a:hover {
        background: url(${base_url}/gee_btn_8_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_9 a:hover {
        background: url(${base_url}/gee_btn_9_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_back a:hover {
        background: url(${base_url}/gee_back_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_btn_0 a:hover {
        background: url(${base_url}/gee_btn_0_over.png) no-repeat 0px 0px
    }

    #remote-control-geemarctv100 li#gee_ok a:hover {
        background: url(${base_url}/gee_ok_over.png) no-repeat 0px 0px
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
