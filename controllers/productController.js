const Product = require("../models/productModel");

//GET all products
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

//GET products of certain category
const getProductsOfCateg = async (req, res) => {
  const id = parseInt(req.params.id);
  const categories = Product.schema.path("category").enumValues;
  const product = await Product.find({ category: categories[id] });
  res.status(200).json(product);
};
//GET all possible categories
const getCategories = (req, res) => {
  const categories = Product.schema.path("category").enumValues;
  const data = { categories };
  res.json(data);
};

module.exports = {
  getProducts,
  getProductsOfCateg,
  getCategories,
};
