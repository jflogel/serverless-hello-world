'use strict';
const hello = require('./src/hello');
const hello2 = require('./src/hello2');

module.exports.hello = hello.handler;
module.exports.hello2 = hello2.handler;
