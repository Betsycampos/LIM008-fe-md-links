"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.extractLinks = exports.fileMd = exports.fileReturnMd = exports.checkIfIsDirectory = exports.checkIfIsFile = void 0;
=======
exports.extractLinks = exports.fileMd = exports.fileReturn = exports.checkIfIsDirectory = exports.checkIfIsFile = void 0;
>>>>>>> 423cfc86b242942dbd9daa967304a05c67b15b4b

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

<<<<<<< HEAD
var fileReturnMd = function fileReturnMd(myRoute) {
=======
var fileReturn = function fileReturn(myRoute) {
>>>>>>> 423cfc86b242942dbd9daa967304a05c67b15b4b
  var collectionArrayPath = [];

  if (checkIfIsFile(myRoute)) {
    collectionArrayPath.push(myRoute);
  } else {
    var files = fs.readdirSync(myRoute); //lee el directorio de la ruta

    files.forEach(function (file) {
      var newRoute = path.join(myRoute, file);
<<<<<<< HEAD
      collectionArrayPath = collectionArrayPath.concat(fileReturnMd(newRoute));
=======
      collectionArrayPath = collectionArrayPath.concat(fileReturn(newRoute));
>>>>>>> 423cfc86b242942dbd9daa967304a05c67b15b4b
    });
  }

  ;
  return collectionArrayPath;
<<<<<<< HEAD
}; // console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba'));
=======
};

exports.fileReturn = fileReturn;

var fileMd = function fileMd(myRoute) {
  return fileReturn(myRoute).filter(function (file) {
    return path.extname(file) === '.md';
  });
}; // console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba').filter((file => path.extname(file) === '.md')))
//Función que extrae los links de mis archivos .md
>>>>>>> 423cfc86b242942dbd9daa967304a05c67b15b4b


exports.fileMd = fileMd;

var fileMd = function fileMd(newRoute) {
  var filesMd = newRoute.filter(function (file) {
    return path.extname(file) === '.md';
  });
  console.log('gooooooo' + filesMd);
};

exports.fileMd = fileMd;
console.log(fileReturnMd("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba").filter(function (file) {
  return path.extname(file) === '.md';
})); //Función que extrae los links de mis archivos .md

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