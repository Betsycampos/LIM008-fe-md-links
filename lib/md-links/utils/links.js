"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = exports.fileReturnMd = exports.fileMd = exports.checkIfIsDirectory = exports.checkIfIsFile = void 0;

var path = require('path');

var fs = require('fs');

var myMarked = require('marked'); // en caso la ruta sea de un archivo


var checkIfIsFile = function checkIfIsFile(myRoute) {
  return fs.statSync(myRoute).isFile();
}; // en caso la ruta sea de un directorio


exports.checkIfIsFile = checkIfIsFile;

var checkIfIsDirectory = function checkIfIsDirectory(myRoute) {
  return fs.statSync(myRoute).isDirectory();
}; // seleccionando rutas que tengan archivos .md


exports.checkIfIsDirectory = checkIfIsDirectory;

var fileMd = function fileMd(myRoute) {
  return path.extname(myRoute) === '.md';
}; // función de recursión


exports.fileMd = fileMd;

var fileReturnMd = function fileReturnMd(myRoute) {
  var collectionArrayPath = [];

  if (fs.statSync(myRoute).isDirectory() === false && path.extname(myRoute) === '.md') {
    collectionArrayPath.push(myRoute);
  } else {
    var files = fs.readdirSync(myRoute); //lee el directorio de la ruta

    files.forEach(function (file) {
      var newRoute = path.join(myRoute, file);

      if (checkIfIsDirectory(newRoute)) {
        collectionArrayPath = collectionArrayPath.concat(fileReturnMd(newRoute));
      } else if (checkIfIsFile(newRoute) && fileMd(newRoute)) {
        collectionArrayPath.push(newRoute);
      }
    });
  }

  return collectionArrayPath;
}; //Función que extrae los links de mis archivos .md


exports.fileReturnMd = fileReturnMd;

var extractLinks = function extractLinks(myRoute) {
  var linksExtracted = [];

  var _loop = function _loop(i) {
    var file = myRoute[i];
    var readFile = fs.readFileSync(file, 'utf8');
    var renderer = new myMarked.Renderer();

    renderer.link = function (href, title, text) {
      return linksExtracted.push({
        href: href,
        text: text,
        file: file
      });
    };

    myMarked(readFile, {
      renderer: renderer
    });
  };

  for (var i = 0; i < myRoute.length; i++) {
    _loop(i);
  }

  ;
  return linksExtracted;
};

exports.extractLinks = extractLinks;