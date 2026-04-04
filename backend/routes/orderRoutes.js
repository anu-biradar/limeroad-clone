const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");
const { placeOrder, getOrders } = require("../controllers/orderController");

router.post("/place", auth, roleCheck("user"), placeOrder);
router.get("/", auth, roleCheck("user"), getOrders);

module.exports = router;
