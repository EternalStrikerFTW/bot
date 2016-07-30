'use strict'
function rskin(){
return Math.floor((Math.random() * 40)+1)};
var slithernames = {};
//change name

slithernames.nameList = [ 
 //please dont remove this name//  
   'AnonymousBots YT',
  // ////////////////////
   'AnonymousBots', 'AnonymousBots YT', 'AnonymousBots freebots', 'subscribe'
];

slithernames.getRandomName = function() {
return slithernames.nameList[Math.floor((Math.random() * slithernames.nameList.length))];
};
const Bot = require('./dist');
const express = require('express');
const fs = require('fs');
const path = require('path');
var socket = require('socket.io-client')('ws://127.0.0.1:3000')


const bots = []

let perProxy = 2

let server = ''
let gotoX = 0
let gotoY = 0
let alive = 0
let b_name = slithernames.getRandomName();
var _skin = "";


if (!!process.env.SLITHER_PER_PROXY) {
    perProxy = parseInt(process.env.SLITHER_PER_PROXY)
}

let proxies = fs
    .readFileSync(path.join(__dirname, 'proxies.txt'))
    .toString()
    .split(/\r?\n/)
    .filter(function(line) {
        return line.length > 0
    })
 ////////////////////////////////////////////////////

process.on('uncaughtException', function(err) { console.log(err) })
function spawn() {
  
  proxies.forEach(function(proxy, pidx) {
    for(let i = 0; i < perProxy; i++) {
      const bot = new Bot({
        name: slithernames.getRandomName(),
        reconnect: true,
        skin: rskin()  ,
        server: server
      })

      bot.on('position', function(position, snake) {
        snake.facePosition(gotoX, gotoY);
      })

      bot.on('spawn', function() {
        alive++;
		console.log(' Available proxy: ' + proxies.length + '\n Chance to spawn max: ' + proxies.length * perProxy + ' bots' + ' Now: ' + alive + '\n\n\n\n\n\n\n\n');
		socket.emit('bcount', alive);
      })

      bot.on('dead', function() {
        alive--;
		socket.emit('bcount', alive);
      })

      bots.push(bot)
      bot.connect(proxy);
    }
  })
}


socket.on('pos', function(xx, yy) {

    gotoX = xx;
    gotoY = yy;

});

socket.on('cmd', function() {

    bots.forEach(function(bot) {
        const snake = bot.me()
        if (bot.connected && snake) {

            snake.toggleSpeeding('on')

        }
    })

});

socket.on('server', function(data) {

    server = data[0];

 
    spawn();

});



console.log('Waiting for client!');