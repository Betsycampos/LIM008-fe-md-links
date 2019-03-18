"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./utils/path.js");

var _links = require("./utils/links.js");

var _validate = require("./utils/validate.js");

// lo que tengo que considerar en esta función es
// ver si mi ruta es absoluta, funcion recursiva
// extraer links
// validar
var options = {
  validate: false
};

var mdLinks = function mdLinks(path, options) {
  var newPath = path;
  return new Promise(function (resolve, reject) {
    if ((0, _path.checkIfRouteIsAbsolute)(path) === false) {
      newPath = (0, _path.transformRelativePath)(path);
    }

    var routeRecv = (0, _links.fileReturnMd)(newPath);
    var extractLink = (0, _links.extractLinks)(routeRecv);

    if (options.validate) {
      (0, _validate.validateLinks)(extractLink).then(function (response) {
        return resolve(response);
      }).catch(function (err) {
        return resolve(err);
      });
    } else {
      resolve(extractLink);
    }
  });
}; // mdLinks("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba", {validate: true}).then(resp => console.log(resp))


exports.mdLinks = mdLinks;