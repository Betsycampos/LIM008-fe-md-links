"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseIfDirectory = exports.checkIfIsFile = void 0;

var path = require('path');

var fs = require('fs');

var _require = require('child_process'),
    exec = _require.exec;

var myMarked = require('marked'); // en caso la ruta sea de un archivo


var checkIfIsFile = function checkIfIsFile(myRoute) {
  return fs.statSync(myRoute).isFile();
}; //en caso la ruta sea de un directorio


exports.checkIfIsFile = checkIfIsFile;

var traverseIfDirectory = function traverseIfDirectory(myRoute) {
  var collectionArrayPath = []; // exec('pwd', (err, stdout, stderr) => {
  //     console.log('hola ======== ',stdout);
  //   })

  var files = fs.readdirSync(myRoute);
  files.forEach(function (file) {
    var newRoute = myRoute + '\\' + file;
    var route = fs.statSync(newRoute);

    if (route.isDirectory()) {
      collectionArrayPath = collectionArrayPath.concat(traverseIfDirectory(newRoute));
    } else if (path.extname(newRoute) === '.md') {
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