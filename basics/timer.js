'use strict';
const EventEmitter = require('events'),
      fs = require('fs');

class Timer extends EventEmitter {
  time(asyncFunction, ...args) {
    console.time('execute');
    asyncFunction(...args, (error, data) => {
      if (error) return this.emit('error', error);
      this.emit('data', data);
      console.timeEnd('execute');
    });
  }
}

let timer = new Timer();

timer.time(fs.readFile, './numbers.txt');
timer.on('error', (error) => { console.error(error); })
timer.on('data', (data) => { console.log(data.toString().trim()); })
