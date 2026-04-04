const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

router.post("/add", auth, roleCheck("user"), addToCart);
router.get("/", auth, roleCheck("user"), getCart);
router.post("/remove", auth, roleCheck("user"), removeFromCart);

module.exports = router;
