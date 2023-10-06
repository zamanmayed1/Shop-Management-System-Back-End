const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/products.route");
const categoryRouter = require("./routes/category.route");
const customerRouter = require("./routes/customer.route");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// Product Routes
app.use("/api/v1/products", productRoute)
// Category Routes
app.use("/api/v1/categories", categoryRouter)
// Customers Routes
app.use("/api/v1/cutomers", customerRouter)


module.exports = app;
