#!/usr/bin/env node
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cli = require('./cli.js');

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

console.log(args);
console.log(args[0], args[1], args[2])
cli(args[0], args[1], args[2]).then(function (resp) {
  return resp;
});