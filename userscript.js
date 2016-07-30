// ==UserScript==
// @name         Slither Feeder Bot v2
// @namespace    Slither Feeder Bot  by l3mpik
// @version      1.0
// @description  Slither Feeder Bot
// @author       l3mpik
// @match        *://slither.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// ==/UserScript==
//====================   TRY :)   ==========================//

var skin = -1; // 
 
//======================================================//
//GUI: TEST
$("canvas:eq(3)").after("<style>.rainbow { -webkit-animation:rainbow 1s infinite; -ms-animation:rainbow 1s infinite; -o-animation:rainbow 1s infinite; animation:rainbow 1s infinite; }@-webkit-keyframes rainbow { 0% {color: #ff0000;} 10% {color: #ff8000;} 20% {color: #ffff00;} 30% {color: #80ff00;} 40% {color: #00ff00;} 50% {color: #00ff80;} 60% {color: #00ffff;} 70% {color: #0080ff;} 80% {color: #0000ff;} 90% {color: #8000ff;} 100% {color: #ff0080;} }@-ms-keyframes rainbow { 0% {color: #ff0000;} 10% {color: #ff8000;} 20% {color: #ffff00;} 30% {color: #80ff00;} 40% {color: #00ff00;} 50% {color: #00ff80;} 60% {color: #00ffff;} 70% {color: #0080ff;} 80% {color: #0000ff;} 90% {color: #8000ff;} 100% {color: #ff0080;} }@-o-keyframes rainbow { 0% {color: #ff0000;} 10% {color: #ff8000;} 20% {color: #ffff00;} 30% {color: #80ff00;} 40% {color: #00ff00;} 50% {color: #00ff80;} 60% {color: #00ffff;} 70% {color: #0080ff;} 80% {color: #0000ff;} 90% {color: #8000ff;} 100% {color: #ff0080;} }@keyframes rainbow { 0% {color: #ff0000;} 10% {color: #ff8000;} 20% {color: #ffff00;} 30% {color: #80ff00;} 40% {color: #00ff00;} 50% {color: #00ff80;} 60% {color: #00ffff;} 70% { color: #0080ff; }80% {color: #0000ff;} 90% {color: #8000ff;} 100% {color: #ff0080;} }#NiiNJAPW9843knj { font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; height: 50px!important; background-color: rgba(20,20,20, 0.3); position: fixed; top: 0; left: 280px; right: 280px; z-index: 9999999; color: #dddddd!important; font-size: 18px!important; text-align: left!important; line-height: 24px!important; box-sizing: border-box; } #NiiNJAPW9843knj a { color: #66e48c!important; text-decoration: none!important; } #NiiNJAPW9843knj br { display: block!important; height: 0!important; margin: 0px 0!important; } #NiiNJAPW9843knj .small { font-size: 12px!important; color: #cccccc; } #Niinja39_main-container { height: 50px; width: calc(100% - 170px); box-sizing: content-box!important; display: inline-block; vertical-align: top; } .Niinja39_signletext { text-align: center; margin-top: 13px!important; } #NiiNJAPW9843knj .Niinja39_expire { width: 33%; height: 50px; display: inline-block; text-align: center; vertical-align: top; box-sizing: border-box; font-size: 15px; } #NiiNJAPW9843knj .Niinja39_expire p { line-height: 20px; margin-top: 6px; } #NiiNJAPW9843knj .Niinja39_expire p b { font-size: 20px; } #NiiNJAPW9843knj .Niinja39_expire_pkgexp p { margin-top: 9px; display: block; background-color: rgba(255, 0, 0, 0.5); border-radius: 4px; padding: 6px; font-size: 18px; } #NiiNJAPW9843knj .Niinja39_active { text-align: center; height: 50px; display: inline-block; vertical-align: top; } #NiiNJAPW9843knj .Niinja39_active_botsnb { width: 30%; } #NiiNJAPW9843knj .Niinja39_active_expire { width: 25%; } #NiiNJAPW9843knj .Niinja39_active_followcmd, #NiiNJAPW9843knj .Niinja39_active_speedcmd, #NiiNJAPW9843knj .Niinja39_active_randomcmd { width: 15%; } #NiiNJAPW9843knj .Niinja39_active p { background-color: rgba(0,0,0, 0.8); border-radius: 4px; display: block; height: 40px; margin-top: 5px; margin-left: 2.5px; margin-right: 2.5px; margin-bottom: 0; font-size: 17px; line-height: 16px; padding-top: 4px; box-sizing: border-box; position: relative; } #NiiNJAPW9843knj .Niinja39_active p .Niinja39_small { font-size: 12px; } #NiiNJAPW9843knj #Niinja39_bot_load { position: relative; bottom: -2px; left: 0px; width: 0%; height: 2px; background-color: #00ff00; display: block; border-radius: 4px; -webkit-transition: width 2s; -moz-transition: width 2s; -o-transition: width 2s; transition: width 2s; } #NiiNJAPW9843knj #Niinja39_message_container { height: 22px; position: relative; bottom: 0; color: #dddddd; font-size: 14px; text-align: center; background-color: rgba(20,20,20, 0.8); border-radius: 4px; display: none; } #NiiNJAPW9843knj #Niinja39_message_container p { margin-top: -6px; }@media screen and (max-width: 1260px) { #NiiNJAPW9843knj { left: 0!important; rigth: 0!important; width: 100%; background-color: rgba(0,0,0, 0.8); } }@media screen and (min-width: 1400px) { #NiiNJAPW9843knj { margin-left: auto; margin-right: auto; width: 850px; } }</style> <div> <div id='NiiNJAPW9843knj'> <div style=' width:100%' id='Niinja39_main-container' class='rainbow'> <div class='Niinja39_active_botsnb Niinja39_active'> <p>Bots: <br><span id='count'>Waiting</span></p> </div> <div style='width: 300px' class='Niinja39_active_expire Niinja39_active'> <p>Bot Name: <br><span id='botName'>Slither-feeder-bot v2</p> </div> <div class='Niinja39_active_expire Niinja39_active'> <p>Position: <br><span id='x'>0</span>:<span id='y'>0</span></p> </div> </div> </div> ");﻿
//////////////////////////////////////////////////////////

var vps = 0;

var updatespeed = 100;

var st_click = 0;

var _ip = "";

if (skin != -1) {
    data[2] = localStorage.snakercv;
}

var _data = [];

_data[1] = "0";
_data[2] = "";

//======================================================//

$('iframe').remove();


$("canvas:eq(3)").after("<div style='height: 250px; background-color: #000000; opacity: 0.8; filter: alpha(opacity=40); zoom: 1; width: 205px; top: 1%; left: 1%; display: block; position: fixed; text-align: center; font-size: 15px; color: #ffffff; padding: 5px; font-family: Ubuntu; border: 0.5px solid #ffffff; border-radius: 5px;'> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><a>Bots</a></div> <div style='color:#ffffff; display: inline; opacity:0.8; filter:alpha(opacity=100); padding: 10px;' position: fixed;><br><a>Status:</a><a id='scount' > Off </a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br><a></a> Move To Head: <a id='moveh' >On</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br><a>X</a> - Snake Speed: <a id='isspeed' >Off</a> <br><button id='start' style='width: 150px; height: 25px; background:#ff3333; border: 0px; border-radius: 5px;'>OFF</button><br>MODE: <font color='#00ff00'><a id='mode' ></a></font></div> ");



if (vps == 1) {
    var socket = io.connect('ws://your_server_ip');
    $("#mode").text('VPS');
} else {
    var socket = io.connect('ws://127.0.0.1:3000');
    $("#mode").text('LOCAL');
}


window.onkeydown = function(event) {
    if (event.keyCode === 71) {
        $("#botlayer").fadeToggle(1000);
    }
};

document.body.onmousewheel = zoom;

window.onkeydown = function(e) {

    if (e.keyCode === 88) {
        socket.emit('cmd', 1);
        $('#isspeed').text('On');
    }
}

window.onkeyup = function(e) {

    if (e.keyCode === 88) {
        socket.emit('cmd', 0);
        $('#isspeed').text('Off');
    }
}

function zoom(e) {

    gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail || 0);

}

$('#bname').change(function() {

    var name = $('#bname').val();

    _data[1] = name;

});

$('#bskin').change(function() {

    var skin = $('#bskin').val();

    _data[2] = skin;

});



$("#start").click(function() {
    if (st_click == 0) {
        st_click = 1;

        $("#start").css('background', '#4dff4d');
        $("#start").text('Waiting...');

        setTimeout(function() {

            $("#start").text('On');

            if (window["bso"] !== undefined) {

                _data[0] = "" + bso.ip + ":" + bso.po;

                socket.emit('server', _data)

            } else {
                console.log('Try refresh page : /');
            }

        }, 2000);
setInterval(function() {

        if (window["snake"] !== undefined) {

            if (snake != null) {
                var x = snake.xx;
                var y = snake.yy;

                socket.emit('pos', x, y);
            }

        }

    }, updatespeed);
    } else {
        st_click = 0;

        $("#start").css('background', '#ff3333');
        $("#start").text('OFf');
    }

});

socket.on('bcount', function(data) {

    $('#count').text(data);

});

socket.on('pos', function(x,y) {

    $('#x').text(x);
    $('#y').text(y);
});