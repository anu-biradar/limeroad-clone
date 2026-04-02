const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// user route
router.get("/user", auth, (req, res) => {
  res.json({ msg: "User route accessed", user: req.user });
});

// vendor route
router.get("/vendor", auth, roleCheck("vendor"), (req, res) => {
  res.json({ msg: "Vendor route accessed" });
});

module.exports = router;