// npm global command, comes with node
// npm --version

// local dependency - use it only on this project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores importent info about project/package)
// manuall approach (create package.json in the root, create properties etc..)
// npm init (step by step,  press enter to skip)
// npm init -y everything default

// install devDependencies
// npm i nodemon -D

// const _= require('lodash')
// const items =[1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hi there");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home Page");
  }

  if (req.url === "/about") {
    //   blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("about Page");
  } else res.end("error Page");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
