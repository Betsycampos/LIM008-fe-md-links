"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformRelativePath = exports.checkIfRouteIsAbsolute = void 0;

var path = require('path');

var checkIfRouteIsAbsolute = function checkIfRouteIsAbsolute(myRoute) {
  return path.isAbsolute(myRoute);
};

exports.checkIfRouteIsAbsolute = checkIfRouteIsAbsolute;

var transformRelativePath = function transformRelativePath(myRoute) {
  return path.resolve(myRoute);
}; // //let archivo = 
// export const recorrerCarpeta = () =>{
// };  
// export const archivoEsMd = () =>{
//  };


exports.transformRelativePath = transformRelativePath;