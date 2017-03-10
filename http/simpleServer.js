'use strict';
const server = require('http').createServer();

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('Hello World!\n');

  server.setTimeout(100);

  setTimeout(() => {
    response.write('Hello again!\n');
  }, 2000);

  setTimeout(() => {
    response.write('Another hello again!\n');
    response.end();
  }, 4000);
});

server.listen(3000);
