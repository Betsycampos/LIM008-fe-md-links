"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseIfDirectory = exports.fileMd = exports.checkIfIsDirectory = exports.checkIfIsFile = void 0;

var path = require('path');

var fs = require('fs');

var _require = require('child_process'),
    exec = _require.exec;

var myMarked = require('marked'); // en caso la ruta sea de un archivo


var checkIfIsFile = function checkIfIsFile(myRoute) {
  return fs.statSync(myRoute).isFile();
};

exports.checkIfIsFile = checkIfIsFile;

var checkIfIsDirectory = function checkIfIsDirectory(myRoute) {
  return fs.statSync(myRoute).isDirectory();
};

exports.checkIfIsDirectory = checkIfIsDirectory;

var fileMd = function fileMd(myRoute) {
  return path.extname(myRoute) === '.md';
}; //en caso la ruta sea de un directorio


exports.fileMd = fileMd;

var traverseIfDirectory = function traverseIfDirectory(myRoute) {
  var collectionArrayPath = [];
  var files = fs.readdirSync(myRoute);
  files.forEach(function (file) {
    var newRoute = path.join(myRoute, file); // let route = fs.statSync(newRoute);

    if (checkIfIsDirectory(newRoute)) {
      collectionArrayPath = collectionArrayPath.concat(traverseIfDirectory(newRoute));
    } else if (checkIfIsFile(newRoute) && fileMd(newRoute)) {
      collectionArrayPath.push(newRoute);
    }
  });
  return collectionArrayPath;
};

exports.traverseIfDirectory = traverseIfDirectory;
console.log(traverseIfDirectory("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba")); // export const extraerLosLinks = (arrRutasArchivos) => {
//     const links = [];
//     // console.log('holaa', arrRutasArchivos);
//    /*  for(let i=0; i<arrRutasArchivos.length; i++) {
//         let archivo = arrRutasArchivos[i]
//         let leerArchivo = fs.readFileSync(archivo, 'utf8');
//         const renderer = new myMarked.Renderer();
//         //console.log(renderer);
//         // console.log(renderer.link);
//         renderer.link = (href, title, text) => {
//            return links.push({
//             href: href,
//             text: text,
//             file: archivo,
//             });
//         }; */
//         // console.log(renderer.link)
//         //myMarked(leerArchivo, { renderer: renderer });
//     //}
//     return links;
//   }
// // console.log(extraerLosLinks(datos));