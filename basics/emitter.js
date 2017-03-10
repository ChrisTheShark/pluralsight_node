"use strict";
const EventEmitter = require('events');

class EmittingExecutor extends EventEmitter {
  execute(taskFunction) {
    console.log('Before execution.');
    this.emit('start');
    taskFunction();
    this.emit('end');
    console.log('After execution.');
  }
}

let emitter = new EmittingExecutor();

emitter.on('start', () => { console.log('Event emitted for start.') });
emitter.on('end', () => { console.log('Event emitted for end.') });

emitter.execute(() => {
    setTimeout(
    () => {
      console.log('***** Executing Task *****')
    }, 0)
  }
);
