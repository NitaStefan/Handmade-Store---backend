const express = require("express");
const router = express.Router();
const {
  getProductsOfCateg,
  getProducts,
  getCategories,
} = require("../controllers/productController");
// const Product = require("../models/productModel");

//GET all products
router.get("/", getProducts);

//Get possible categories
router.get("/allCategories", getCategories);

//Get products of certain category
router.get("/category/:id", getProductsOfCateg);

//*Create a product
// router.post("/", async (req, res) => {
//   const { name, price, description, category } = req.body;
//   try {
//     const product = await Product.create({
//       name,
//       price,
//       description,
//       category,
//     });
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

module.exports = router;
