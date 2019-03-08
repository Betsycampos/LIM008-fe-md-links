"use strict";

var mdLinks = function mdLinks(myRoute) {
  if (checkIfRouteIsAbsolute(myRoute) !== true) {} else transformRelativePath(myRoute);
};