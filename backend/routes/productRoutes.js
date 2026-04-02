const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const upload = require("../middleware/upload");


const {
  addProduct,
  getProducts,
  getByCategory,
} = require("../controllers/productController");


router.post(
  "/add",
  auth,
  roleCheck("vendor"),
  upload.array("images", 2), // 👈 IMPORTANT
  addProduct
);

// get all
router.get("/", getProducts);

// category filter
router.get("/:category", getByCategory);

module.exports = router;