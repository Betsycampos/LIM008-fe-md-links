"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = exports.fileMd = exports.fileReturnMd = exports.checkIfIsDirectory = exports.checkIfIsFile = void 0;

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
// export const fileMd = (myRoute) => {
//    return path.extname(myRoute) === '.md';
// };
// función de recursión


exports.checkIfIsDirectory = checkIfIsDirectory;

var fileReturnMd = function fileReturnMd(myRoute) {
  var collectionArrayPath = [];

  if (checkIfIsFile(myRoute)) {
    collectionArrayPath.push(myRoute);
  } else {
    var files = fs.readdirSync(myRoute); //lee el directorio de la ruta

    files.forEach(function (file) {
      var newRoute = path.join(myRoute, file);
      collectionArrayPath = collectionArrayPath.concat(fileReturnMd(newRoute));
    });
  }

  return collectionArrayPath;
};

exports.fileReturnMd = fileReturnMd;

var fileMd = function fileMd(myRoute) {
  return fileReturnMd(myRoute).filter(function (file) {
    return path.extname(file) === '.md';
  });
};

exports.fileMd = fileMd;
console.log(fileMd("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba")); // }
// console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba'));
// export const fileMd = (newRoute) => {
// //     const filesMd = newRoute.filter((file => path.extname(file) === '.md'));
// // console.log('gooooooo' + filesMd);
// }
// console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba').filter((file => path.extname(file) === '.md')))
//Función que extrae los links de mis archivos .md

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