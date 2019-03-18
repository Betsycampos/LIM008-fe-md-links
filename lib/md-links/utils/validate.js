"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var fetch = require('node-fetch');

var validateLinks = function validateLinks(arrObjt) {
  var arrayPromesas = arrObjt.map(function (links) {
    return new Promise(function (resolve, reject) {
      return fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.code = response.status;
          links.statusText = 'OK';
          resolve(links);
        } else {
          links.code = response.status;
          links.statusText = 'FAIL';
          resolve(links);
        }
      }).catch(function (err) {
        links.code = 'No es una URL válida';
        links.statusText = 'FAIL';
        resolve(links);
      });
    });
  });
  return Promise.all(arrayPromesas);
};

exports.validateLinks = validateLinks;