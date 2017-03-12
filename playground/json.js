// var obj = {
//   name: 'Yadnyesh'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "Yadnyesh", "age": 35}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
