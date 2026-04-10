import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getSuggestedProducts } from '../api/products';
import { addToCart } from '../api/cart';
import { useAuth } from '../hooks/useAuth';
import { getUploadUrl } from '../api/axios';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [product, setProduct] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [message, setMessage] = useState('');
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError('');
      setActiveImage(0);
      const [productRes, suggestedRes] = await Promise.all([
        getProductById(id),
        getSuggestedProducts(id),
      ]);
      setProduct(productRes.data);
      setSuggested(suggestedRes.data);
    } catch {
      setError('Product not found or failed to load.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      setMessage('Please login to add items to cart');
      setTimeout(() => setMessage(''), 2500);
      return;
    }
    try {
      setAddingToCart(true);
      await addToCart(id);
      setMessage('Added to cart! 🛒');
      setTimeout(() => setMessage(''), 2500);
    } catch {
      setMessage('Failed to add to cart');
      setTimeout(() => setMessage(''), 2500);
    } finally {
      setAddingToCart(false);
    }
  };

  // ── Loading ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="pd-loading">
        <div className="pd-spinner" />
        <p>Loading product…</p>
      </div>
    );
  }

  // ── Error ────────────────────────────────────────────────────────────
  if (error || !product) {
    return (
      <div className="pd-error">
        <span className="pd-error-icon">😕</span>
        <h2>Oops! {error}</h2>
        <button className="pd-back-btn" onClick={() => navigate('/products')}>
          ← Back to Products
        </button>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [];
  const hasImages = images.length > 0;

  return (
    <div className="pd-page">

      {/* ── Toast ─────────────────────────────────────────────────── */}
      {message && (
        <div className={`pd-toast ${message.includes('Failed') || message.includes('login') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      {/* ── Breadcrumb ────────────────────────────────────────────── */}
      <div className="pd-breadcrumb">
        <button onClick={() => navigate('/')}>Home</button>
        <span>›</span>
        <button onClick={() => navigate('/products')}>Products</button>
        <span>›</span>
        <button onClick={() => navigate(`/products?category=${product.category}`)}>
          {product.category}
        </button>
        <span>›</span>
        <span className="pd-breadcrumb-current">{product.title}</span>
      </div>

      {/* ── Main Product Section ──────────────────────────────────── */}
      <div className="pd-main">

        {/* Left: Image Gallery */}
        <div className="pd-gallery">
          {/* Thumbnails */}
          {hasImages && images.length > 1 && (
            <div className="pd-thumbs">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`pd-thumb ${activeImage === i ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={getUploadUrl(img)} alt={`${product.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="pd-main-image">
            {hasImages ? (
              <img
                src={getUploadUrl(images[activeImage])}
                alt={product.title}
              />
            ) : (
              <div className="pd-no-image">👗</div>
            )}
            {product.category && (
              <span className="pd-category-badge">{product.category}</span>
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="pd-info">
          {product.brand && (
            <span className="pd-brand">{product.brand}</span>
          )}
          <h1 className="pd-title">{product.title}</h1>

          <div className="pd-price-row">
            <span className="pd-price">₹{product.price}</span>
            <span className="pd-price-tag">Inclusive of all taxes</span>
          </div>

          {product.size && (
            <div className="pd-detail-row">
              <span className="pd-detail-label">Size</span>
              <span className="pd-size-chip">{product.size}</span>
            </div>
          )}

          {product.category && (
            <div className="pd-detail-row">
              <span className="pd-detail-label">Category</span>
              <span className="pd-detail-value">{product.category}</span>
            </div>
          )}

          {/* Description block (generated from available fields) */}
          <div className="pd-description">
            <h3>Product Details</h3>
            <ul>
              {product.brand && <li><strong>Brand:</strong> {product.brand}</li>}
              <li><strong>Title:</strong> {product.title}</li>
              {product.category && <li><strong>Category:</strong> {product.category}</li>}
              {product.size && <li><strong>Size:</strong> {product.size}</li>}
              <li><strong>Price:</strong> ₹{product.price}</li>
            </ul>
            <p className="pd-desc-note">
              Premium quality {product.category || 'fashion'} wear curated for your style.
              {product.brand ? ` Brought to you by ${product.brand}.` : ''} Shop with confidence — 
              easy returns & secure checkout on TrendHub.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pd-actions">
            <button
              className={`pd-cart-btn ${addingToCart ? 'loading' : ''}`}
              onClick={handleAddToCart}
              disabled={addingToCart}
            >
              {addingToCart ? (
                <><span className="btn-spinner" /> Adding…</>
              ) : (
                <>🛒 Add to Cart</>
              )}
            </button>
            <button
              className="pd-back-btn-outline"
              onClick={() => navigate('/products')}
            >
              ← Continue Shopping
            </button>
          </div>

          {/* Trust badges */}
          <div className="pd-trust">
            <div className="pd-trust-item">🚚 <span>Free Shipping</span></div>
            <div className="pd-trust-item">🔄 <span>Easy Returns</span></div>
            <div className="pd-trust-item">🔒 <span>Secure Payment</span></div>
          </div>
        </div>
      </div>

      {/* ── Suggested Products ────────────────────────────────────── */}
      {suggested.length > 0 && (
        <section className="pd-suggested">
          <div className="pd-suggested-header">
            <h2>You Might Also Like</h2>
            <p>More from the <strong>{product.category}</strong> collection</p>
          </div>

          <div className="pd-suggested-grid">
            {suggested.map((p) => (
              <div
                key={p._id}
                className="pd-sug-card"
                onClick={() => navigate(`/products/${p._id}`)}
              >
                <div className="pd-sug-image">
                  {p.images?.[0] ? (
                    <img src={getUploadUrl(p.images[0])} alt={p.title} />
                  ) : (
                    <div className="pd-sug-no-image">👗</div>
                  )}
                  <span className="pd-sug-badge">{p.category}</span>
                </div>
                <div className="pd-sug-info">
                  {p.brand && <span className="pd-sug-brand">{p.brand}</span>}
                  <h4 className="pd-sug-title">{p.title}</h4>
                  <div className="pd-sug-footer">
                    <span className="pd-sug-price">₹{p.price}</span>
                    {p.size && <span className="pd-sug-size">{p.size}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
