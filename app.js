console.log('Starting App.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('loadash');

console.log(_.isString(true));
console.log(_.isString('Yadnyesh'));

// var user = os.userInfo();
//
// //console.log(user);
// // fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}. \n`);
//
// var res = notes.add(10,20);
// console.log(res);
