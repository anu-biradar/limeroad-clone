const Product = require("../models/Product");
const mongoose = require("mongoose");

// ADD PRODUCT (Vendor only)
exports.addProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    
    const title = req.body.title;
    const brand = req.body.brand;
    const price = req.body.price;
    const category = req.body.category;
    const size = req.body.size;

    const images = req.files ? req.files.map(file => file.path) : [];


    const product = new Product({
      title,
      brand,
      price,
      category,
      size,
      images,
      sellerId: req.user.id,
    });

    await product.save();

    res.status(201).json({ msg: "Product added", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET BY CATEGORY
exports.getByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.category,
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET SINGLE PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid product ID" });
    }
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET SUGGESTED PRODUCTS (same category, excluding current)
exports.getSuggestedProducts = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid product ID" });
    }
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ msg: "Product not found" });

    const suggested = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
    }).limit(8);

    res.json(suggested);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};