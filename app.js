console.log('Starting App.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

//console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}. \n`);

var res = notes.add(10,20);
console.log(res);
