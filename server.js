const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/products");
const mongoose = require("mongoose");

const app = express();

//parses data sent to server and attaches body to the req object
app.use(express.json());

//product routes
app.use("/api/products", productRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port ${process.env.PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
