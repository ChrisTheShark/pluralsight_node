"use strict";
const fs = require('fs');

function sumArray(numlist) {
  return numlist.map(Number).reduce((acc, val) => {
    return acc += val;
  }, 0);
}

function readFileAsArray(file, callback = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(error);
        return callback(error);
      };
      let lines = data.toString().trim().split('\n');
      resolve(lines);
      callback(null, lines)
    });
  });
}

readFileAsArray("./numbers.txt", (error, data) => {
    if (error) throw error;
    console.log(sumArray(data));
});

readFileAsArray("./numbers.txt")
    .then((data) => {
      console.log(sumArray(data));
    })
    .catch((error) => {
      console.error(error);
    });

async function readAndSum(file) {
  let lines = await readFileAsArray(file);
  console.log(sumArray(lines));
}

readAndSum("./numbers.txt");
