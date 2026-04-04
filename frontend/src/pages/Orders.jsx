import { useState, useEffect } from 'react';
import { getOrders } from '../api/orders';
import './Orders.css';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { fetchOrders(); }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await getOrders();
      setOrders(res.data);
    } catch {
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders-page">
        <div className="orders-loading">
          <div className="loading-spinner" />
          <p>Loading orders…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1 className="orders-title">My Orders</h1>
        <p className="orders-subtitle">Track and manage your purchases</p>

        {error && <div className="orders-error"><p>⚠️ {error}</p></div>}

        {orders.length === 0 ? (
          <div className="orders-empty">
            <span className="orders-empty-icon">📦</span>
            <h2>No orders yet</h2>
            <p>Your order history will appear here</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order, i) => (
              <div key={order._id} className="order-card" style={{ animationDelay: `${i * 0.08}s` }}>
                {/* Header */}
                <div className="order-header">
                  <div className="order-id-block">
                    <p className="order-id-label">Order ID</p>
                    <p className="order-id">{order._id.slice(-8).toUpperCase()}</p>
                  </div>
                  <div className="order-meta">
                    <span className="order-date">📅 {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className={`order-status ${order.status}`}>{order.status}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="order-body">
                  <p className="order-items-label">Items</p>
                  <div className="order-items">
                    {order.products.map((item) => (
                      <div key={item.productId?._id} className="order-item">
                        {item.productId?.images?.[0] ? (
                          <img
                            className="order-item-image"
                            src={`http://localhost:5000/uploads/${item.productId.images[0]}`}
                            alt={item.productId?.title}
                          />
                        ) : (
                          <div className="order-item-no-image">👗</div>
                        )}
                        <div className="order-item-info">
                          <p className="order-item-title">{item.productId?.title}</p>
                          <p className="order-item-detail">₹{item.productId?.price} × {item.quantity}</p>
                        </div>
                        <span className="order-item-subtotal">₹{(item.productId?.price || 0) * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="order-footer">
                  <span className="order-total-label">Total</span>
                  <span className="order-total-amount">₹{order.totalAmount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}