'use strict';
const fs = require('fs'),
      http = require('http'),
      server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/api':
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify({ name: 'jon thomas' }));
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home'});
      res.end();
      break;
    case '/home':
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(fs.readFileSync(`.${req.url}.html`));
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(3000);
