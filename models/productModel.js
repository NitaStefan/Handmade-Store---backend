const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Brățări bărbați/unisex",
      "Brățări damă",
      "Seturi bijuterii",
      "Coliere",
      "Cercei",
      "Broșe",
      "Cordoane, brâuri, curele",
      "Accesorii păr",
      "Eșarfe mireasă",
      "Nuntă și botez",
      "Crăciun",
      "Decorațiuni casă",
    ],
    required: true,
  },
  images: { type: [String], required: true },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
