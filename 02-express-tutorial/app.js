const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products/", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.send(newProduct);
});

app.get("/api/products/:ProductID", (req, res) => {
  const { ProductID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(ProductID)
  );

  if (!singleProduct) {
    return res.status(404).send("Page not found");
  }

  return res.send(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched for your search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
