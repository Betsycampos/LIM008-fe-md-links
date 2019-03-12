"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStats = exports.totalStast = exports.linksUnique = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import {validateLinks} from '../src/md-links/utils/validate.js'
var linksUnique = function linksUnique(arrObjt) {
  var newSetLinks = _toConsumableArray(new Set(arrObjt.map(function (links) {
    return links.href;
  })));

  return newSetLinks.length;
};

exports.linksUnique = linksUnique;
console.log(linksUnique([{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejsorg/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}]));

var totalStast = function totalStast(arrObjt) {
  var arrObjtTotal = arrObjt.length;
  return arrObjtTotal;
};

exports.totalStast = totalStast;
console.log(totalStast([{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejsorg/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}, {
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md"
}]));

var brokenStats = function brokenStats(arrObjt) {
  var arrayBroken = arrObjt.filter(function (link) {
    return link.stat === 'FAIL';
  }).length;
  return arrayBroken;
};

exports.brokenStats = brokenStats;
console.log(brokenStats([{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md",
  code: 200,
  stat: 'OK'
}, {
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md",
  code: 200,
  stat: 'OK'
}, {
  href: 'https://nodejsorg/',
  text: 'Node.js',
  file: "C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md",
  code: 'No es una URL válida',
  stat: 'FAIL'
}]));