'use strict';
const udp = require('dgram'),
      server = udp.createSocket('udp4'),
      client = udp.createSocket('udp4'),
      PORT = 41234;

server.on('error', (error) => {
    console.error(error);
    process.exit(1);
});

server.on('message', (msg, rinfo) => {
  console.log(msg.toString(), rinfo);
});

server.on('listening', () => {
  let address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(PORT);

client.send("THIS IS A MESSAGE!", PORT, 'localhost', (err) => {
  client.close();
});
