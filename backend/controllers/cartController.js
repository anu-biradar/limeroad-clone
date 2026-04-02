const Cart = require("../models/Cart");

// ADD TO CART
exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity: 1 }],
      });
    } else {
      const itemIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += 1;
      } else {
        cart.products.push({ productId, quantity: 1 });
      }
    }

    await cart.save();

    res.json({ msg: "Added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET CART
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "products.productId"
    );

    res.json(cart);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// REMOVE FROM CART
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId: req.user.id });

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId
    );

    await cart.save();

    res.json({ msg: "Removed from cart", cart });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};