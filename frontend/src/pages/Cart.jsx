import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, removeFromCart } from '../api/cart';
import { placeOrder } from '../api/orders';
import { getUploadUrl } from '../api/axios';
import './Cart.css';

const FREE_DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 49;

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => { fetchCart(); }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await getCart();
      setCart(res.data.products || []);
    } catch {
      setError('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      setError('');
      await removeFromCart(productId);
      setMessage('Item removed');
      setTimeout(() => setMessage(''), 2000);
      fetchCart();
    } catch {
      setError('Failed to remove item');
    }
  };

  const handlePlaceOrder = async () => {
    try {
      setError('');
      await placeOrder();
      setMessage('Order placed successfully');
      setCart([]);
      setTimeout(() => navigate('/orders'), 1500);
    } catch {
      setError('Failed to place order');
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.productId?.price || 0) * item.quantity, 0);
  const deliveryFee = subtotal > 0 && subtotal < FREE_DELIVERY_THRESHOLD ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  if (loading) {
    return (
      <div className="cart-page">
        <div className="cart-loading">
          <div className="loading-spinner" />
          <p>Loading cart…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">My Cart</h1>
        <p className="cart-subtitle">{cart.length} item{cart.length !== 1 && 's'} in your bag</p>

        {message && <div className={`cart-toast ${message.includes('Failed') ? 'error' : 'success'}`}>{message}</div>}
        {error && <div className="cart-toast error">{error}</div>}

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Start adding items you love!</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Browse Products →
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.productId?._id} className="cart-item">
                  {item.productId?.images?.[0] ? (
                    <img
                      className="cart-item-image"
                      src={getUploadUrl(item.productId.images[0])}
                      alt={item.productId?.title}
                    />
                  ) : (
                    <div className="cart-item-no-image">👗</div>
                  )}
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.productId?.title}</h4>
                    {item.productId?.brand && <p className="cart-item-brand">{item.productId.brand}</p>}
                    <div className="cart-item-price-row">
                      <span className="cart-item-price">₹{item.productId?.price}</span>
                      <span className="cart-item-qty">×{item.quantity}</span>
                      <span className="cart-item-subtotal">= ₹{(item.productId?.price || 0) * item.quantity}</span>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => handleRemove(item.productId?._id)} title="Remove">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span style={{ color: '#5a8000', fontWeight: 600 }}>{total >= 499 ? 'FREE' : '₹49'}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total < 499 ? total + 49 : total}</span>
              </div>
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order →
              </button>
              <p className="summary-note">🔒 Secure checkout · 30-day returns</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
