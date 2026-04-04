const Product = require("../models/Product");

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