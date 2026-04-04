const Order = require("../models/Order");
const Cart = require("../models/Cart");

// PLACE ORDER
exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId }).populate(
      "products.productId"
    );

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ msg: "Cart is empty" });
    }

    // calculate total
    let totalAmount = 0;

    cart.products.forEach((item) => {
      totalAmount += item.productId.price * item.quantity;
    });

    const order = new Order({
      userId,
      // ✅ Replace cart.products directly with this mapped version
      products: cart.products.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount,
    });

    await order.save();

    // clear cart after order
    cart.products = [];
    await cart.save();

    res.json({ msg: "Order placed", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET USER ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate(
      "products.productId"
    );

    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};