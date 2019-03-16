#!/usr/bin/env node
const [,, ...args] = process.argv;
console.log(`hello world ${args}`);

import {mdLinks} from './md-links/index.js';
import {linksUnique, totalStast, brokenStats} from './md-links/utils/stats.js';
const options = {
  validate: false,
};  

const path = process.argv[2];
const options1 = process.argv[3];
const options2 = process.argv[4];

if (options1 === '--stats' && options2 === '--validate') {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => console.log(`Total: ${totalStast(resp)} \nUnique: ${linksUnique(resp)} \nBroken: ${brokenStats(resp)}`))
    .catch(err => console.log(err));
} else if (options1 === '--validate') {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => resp.forEach(objectReturn => { console.log(objectReturn.file, objectReturn.href, objectReturn.statusText, objectReturn.code, objectReturn.text)}))
    .catch(err => console.log(err));
} else if (options1 === '--stats') {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => console.log(`Total: ${totalStast(resp)} \nUnique: ${linksUnique(resp)}`))
    .catch(err => console.log(err));
} else {
  mdLinks(path)
    .then(resp => resp.forEach(objectReturn => { console.log(objectReturn.file, objectReturn.href, objectReturn.text)}))
    .catch(err => console.log(err));
}