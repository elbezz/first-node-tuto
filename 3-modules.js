// modules
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");

require("./7-mind-grenade");
console.log(names);

sayHi("lama");
sayHi(names.john);
sayHi(names.peter);

console.log(data);
