'use strict';
const EventEmitter = require('events'),
      Server = require('./server'),
      readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let client = new EventEmitter();
let server = Server(client);
server.on('response', (response) => {
  console.log(response);
});

rl.on('line', (line) => {
  client.emit('command', line);
});
