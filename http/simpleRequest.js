'use strict';
const http = require('http');

// request: http.ClientRequest
let request = http.get('http://www.google.com', (res) => {
  // res: http.IncomingMessage
  res.on('data', (data) => {
    //console.log(data.toString());
  });
});

request.on('error', (error) => {
  console.error(error);
});

console.dir(request.agent);
