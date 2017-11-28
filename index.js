#!/usr/bin/env node
let argArray = process.argv.splice(2);

const gitWitch = require('./gitWitch');

gitWitch(argArray[0]);
