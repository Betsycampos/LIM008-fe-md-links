"use strict";

var _index = require("./md-links/index.js");

var _stats = require("./md-links/utils/stats.js");

var options = {
  validate: false
};

var cliFunction = function cliFunction(path, options1, options2) {
  return new Promise(function (resolve, reject) {
    if (options1 === '--stats' && options2 === '--validate' || options1 === '--validate' && options2 === '--stats') {
      options.validate = true;
      (0, _index.mdLinks)(path, options).then(function (resp) {
        return resolve(console.log("Total: ".concat((0, _stats.totalStast)(resp), " \nUnique: ").concat((0, _stats.linksUnique)(resp), " \nBroken: ").concat((0, _stats.brokenStats)(resp))));
      }).catch(function (err) {
        return reject(console.log(err));
      });
    } else if (options1 === '--validate') {
      options.validate = true;
      (0, _index.mdLinks)(path, options).then(function (resp) {
        return resolve(resp.forEach(function (objectReturn) {
          console.log(objectReturn.file, objectReturn.href, objectReturn.statusText, objectReturn.code, objectReturn.text);
        }));
      }).catch(function (err) {
        return reject(console.log(err));
      });
    } else if (options1 === '--stats') {
      options.validate = true;
      (0, _index.mdLinks)(path, options).then(function (resp) {
        return resolve(console.log("Total: ".concat((0, _stats.totalStast)(resp), " \nUnique: ").concat((0, _stats.linksUnique)(resp))));
      }).catch(function (err) {
        return reject(console.log(err));
      });
    } else {
      (0, _index.mdLinks)(path, options).then(function (resp) {
        return resolve(resp.forEach(function (objectReturn) {
          console.log(objectReturn.file, objectReturn.href, objectReturn.text);
        }));
      }).catch(function (err) {
        return reject(console.log(err));
      });
    }
  });
};

module.exports = cliFunction;