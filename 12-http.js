const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("welcome to about page");
  }

  res.end(`<h1>OOPS!</h1>
  <p>page not found</p>
  <a href="/">homepage</a>`);
});

server.listen(5000);
