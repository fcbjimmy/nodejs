const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
