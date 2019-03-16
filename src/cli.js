#!/usr/bin/env node
const [,, ...args] = process.argv;
console.log(`hello world ${args}`);

import {mdLinks} from './md-links/index.js';
const options = {
  validate: false,
};  

const path = process.argv[2];
const options1 = process.argv[3];
const options2 = process.argv[4];

if (options1 === '--validate' && options2 === '--stats') {
  mdLinks(path, options)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
} else if (options1 === '--validate') {
  mdLinks(path, options)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
} else if (options1 === '--stats') {
  mdLinks(path, options)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
} else {
  mdLinks(path)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
}