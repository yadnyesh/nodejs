console.log('Starting App.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var filteredArray = _.uniq([1,2,3,4,5,6,2,3,4,5,6]);
console.log(filteredArray);
