// ---------------------------------------
// const { readFileSync } = require("fs");

// we also can do
// const fs = require("fs");
// fs.read;
// ---------------------------------------

const { readFileSync, writeFileSync } = require("fs");
console.log('start with the task........');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sysnc.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task...........");
console.log("starting the next one.........");

// writeFileSync('./content/result-sysnc.txt',`here is the result: ${first}, ${second}`)
//  if the file already exists, node will overide it
//
// if we add { flag: "a" }
//  writeFileSync(
//    "./content/result-sysnc.txt",
//    `here is the result: ${first}, ${second}`,
//    { flag: "a" }
//  );
// this will append it
