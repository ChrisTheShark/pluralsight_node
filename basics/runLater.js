"use strict";

(function() {

  setTimeout(() => {
      console.log('setTimeout.');
  }, 100);

  setImmediate(() => {
      console.log('immediate.');
  });

  process.nextTick(() => {
      console.log('next tick.');
  });

  console.log('Hello!');

})();
