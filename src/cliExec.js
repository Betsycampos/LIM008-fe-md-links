#!/usr/bin/env node
const cli = require('./cli.js');

const [,, ...args] = process.argv;
 console.log(args);
console.log(args[0], args[1], args[2])
cli(args[0], args[1], args[2]).then(resp => resp);