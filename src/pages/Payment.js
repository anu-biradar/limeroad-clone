import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Payment.css";

const Payment = () => {
  const { cart } = useContext(CartContext);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Calculate totals
  const totalBeforeDiscount = cart.reduce((acc, item) => acc + item.before_disc * item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalSavings = totalBeforeDiscount - totalPrice;
  const shippingCharges = totalPrice > 500 ? 0 : 50; // Free shipping over ₹500
  const amountPayable = totalPrice + shippingCharges;

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    setPaymentSuccess(true);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p><span>Total Price:</span> ₹{totalBeforeDiscount}</p>
        <p><span>Discount:</span> -₹{totalSavings}</p>
        <p><span>Shipping Charges:</span> {shippingCharges === 0 ? <span className="free">FREE</span> : `₹${shippingCharges}`}</p>
        <hr />
        <p className="summary-total"><span>Amount Payable:</span> ₹{amountPayable}</p>
      </div>

      {/* Payment Options */}
      <h3>Select Payment Method</h3>
      <div className="payment-options">
        {["Credit/Debit Card", "UPI", "Net Banking", "Cash on Delivery"].map((method) => (
          <label key={method} className="payment-option">
            <input
              type="radio"
              name="payment"
              value={method}
              onChange={() => setSelectedPayment(method)}
            />
            {method}
          </label>
        ))}
      </div>

      {/* Pay Now Button */}
      <button className="pay-now-btn" onClick={handlePayment}>
        Pay Now
      </button>

      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Your order has been placed using <strong>{selectedPayment}</strong>.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
