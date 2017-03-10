'use strict';
const fs = require('fs'),
      /*
       * Generated with `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem`
       */
      server = require('https').createServer({
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
      });

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('Hello World!\n');
});

server.listen(443);
