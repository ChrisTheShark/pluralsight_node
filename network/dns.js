'use strict';
const dns = require('dns'),
      async = require('async');

async.waterfall([
  (callback) => {
    dns.resolve4('www.teamtreehouse.com', (error, address) => {
        if (error) return callback(error);
        callback(null, address);
    });
  },
  (ips, callback) => {
    dns.reverse(ips[0], (error, hostnames) => {
        if (error) return callback(error);
        callback(null, hostnames);
    });
  }], (error, results) => {
      if (error) throw error;
      console.log(results);
  }
);
