import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalBeforeDiscount = cart.reduce((acc, item) => acc + item.before_disc * item.quantity, 0);
  const totalSavings = totalBeforeDiscount - totalPrice;

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <div className="cart-layout">
            {/* Left Side: Cart Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`} className="cart-item-link">
                    <img src={item.image[0]} alt={item.title} className="cart-item-image" />
                  </Link>
                  <div className="cart-item-details">
                    <Link to={`/product/${item.id}`} className="cart-item-title">
                      {item.title}
                    </Link>
                    <p className="cart-brand">BY {item.brand}</p>

                    {/* Quantity Counter */}
                    <div className="quantity-container">
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}>+</button>
                    </div>

                    <p className="cart-size">Size: <span>{item.selectedSize}</span></p>
                    <p className="cart-price">₹{item.price} <del>₹{item.before_disc}</del></p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id, item.selectedSize)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Summary Section */}
            <div className="cart-summary">
              <h3>Summary</h3>
              <p className="summary-item"><span>Total Price:</span> ₹{totalBeforeDiscount}</p>
              <p className="summary-item"><span>Shipping Charges:</span> <span className="free">FREE</span></p>
              <p className="summary-item"><span>Handling Charges:</span> <span className="free">FREE</span></p>
              <p className="summary-item"><span>You Save:</span> ₹{totalSavings}</p>
              <hr />
              <p className="summary-total"><span>Amount Payable:</span> ₹{totalPrice}</p>
              <button className="buy-now-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
