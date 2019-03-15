"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

// import { resolve } from 'url';
// import {extractLinks} from '../src/md-links/utils/stats.js'
var fetch = require('node-fetch'); // const fetch = require('node-fetch');
// export const leerArchivo = () =>{
// };


var validateLinks = function validateLinks(arrObjt) {
  var arrayPromesas = arrObjt.map(function (links) {
    return new Promise(function (resolve, reject) {
      return fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.code = response.status;
          links.stat = 'OK';
          resolve(links);
        } else {
          links.code = response.status;
          links.stat = 'FAIL';
          resolve(links);
        }
      }).catch(function (err) {
        links.code = 'No es una URL válida';
        links.stat = 'FAIL';
        resolve(links);
      });
    });
  });
  return Promise.all(arrayPromesas);
}; // validateLinks([ { href: 'https://es.wikipedia.org/wiki/Markdown',
// text: 'Markdown',
// file:
//  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
// { href: 'https://nodejs.org/',
// text: 'Node.js',
// file:
//  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
// { href: 'https://nodejsorg/',
// text: 'Node.js',
// file:
//  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' } ]).then(response => console.log(response))


exports.validateLinks = validateLinks;