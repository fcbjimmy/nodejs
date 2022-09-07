const { createServer } = require("http");
const port = 3000;
const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log("Something went wrong");
  } else {
    `Server is running on port ${port}`;
  }
});
