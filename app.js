console.log('Starting App.js...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

console.log('Command: ', command);

if
