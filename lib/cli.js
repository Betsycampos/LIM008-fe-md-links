#!/usr/bin/env node
"use strict";

var _index = require("./md-links/index.js");

var _stats = require("./md-links/utils/stats.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

var options = {
  validate: false
};
var path = process.argv[2];
var options1 = process.argv[3];
var options2 = process.argv[4];

if (options1 === '--stats' && options2 === '--validate' || options1 === '--validate' && options2 === '--stats') {
  options.validate = true;
  (0, _index.mdLinks)(path, options).then(function (resp) {
    return console.log("Total: ".concat((0, _stats.totalStast)(resp), " \nUnique: ").concat((0, _stats.linksUnique)(resp), " \nBroken: ").concat((0, _stats.brokenStats)(resp)));
  }).catch(function (err) {
    return console.log(err);
  });
} else if (options1 === '--validate') {
  options.validate = true;
  (0, _index.mdLinks)(path, options).then(function (resp) {
    return resp.forEach(function (objectReturn) {
      console.log(objectReturn.file, objectReturn.href, objectReturn.statusText, objectReturn.code, objectReturn.text);
    });
  }).catch(function (err) {
    return console.log(err);
  });
} else if (options1 === '--stats') {
  options.validate = true;
  (0, _index.mdLinks)(path, options).then(function (resp) {
    return console.log("Total: ".concat((0, _stats.totalStast)(resp), " \nUnique: ").concat((0, _stats.linksUnique)(resp)));
  }).catch(function (err) {
    return console.log(err);
  });
} else {
  (0, _index.mdLinks)(path, options).then(function (resp) {
    return resp.forEach(function (objectReturn) {
      console.log(objectReturn.file, objectReturn.href, objectReturn.text);
    });
  }).catch(function (err) {
    return console.log(err);
  });
}