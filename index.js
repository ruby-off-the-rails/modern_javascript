console.log('change is a new ')
/* global moment */
var moment = require('moment');
var math = require('mathjs');

console.log("i am in the js");


console.log(moment().format("MMM Do YY"));
console.log(moment().startOf('hour').fromNow());


console.log('asldfhjlasdfjasd');

console.log(math.derivative('x^2 + x', 'x'));


var name = "robertaasdfasdf";
var time = "today";

// old syntax
// console.log("hello" + name + "how are you" + time)
console.log(`hello ${name}, how are you ${time}`);

