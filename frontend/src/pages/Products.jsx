import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts, getByCategory } from '../api/products';
import { addToCart } from '../api/cart';
import { useAuth } from '../hooks/useAuth';
import './Products.css';

const CATEGORIES = ['all', 'men', 'women', 'kids'];

export default function Products() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory]);

  const fetchProducts = async (category) => {
    try {
      setLoading(true);
      const res = category === 'all'
        ? await getAllProducts()
        : await getByCategory(category);
      setProducts(res.data);
    } catch {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'all' ? {} : { category: cat });
  };

  const handleAddToCart = async (productId) => {
    if (!user) {
      setMessage('Please login to add items to cart');
      setTimeout(() => setMessage(''), 2500);
      return;
    }
    try {
      await addToCart(productId);
      setMessage('Added to cart!');
      setTimeout(() => setMessage(''), 2000);
    } catch {
      setMessage('Failed to add to cart');
      setTimeout(() => setMessage(''), 2500);
    }
  };

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h1>Discover Products</h1>
        <p>Curated fashion from top designers & brands</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat === 'all' ? '✨ All' : cat === 'men' ? '👔 Men' : cat === 'women' ? '👗 Women' : '🧒 Kids'}
          </button>
        ))}
      </div>

      {/* Toast */}
      {message && (
        <div className={`products-toast ${message.includes('Failed') || message.includes('login') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      {/* Content */}
      <div className="products-grid-container">
        {loading ? (
          <div className="products-loading">
            <div className="loading-spinner" />
            <p>Loading products…</p>
          </div>
        ) : error ? (
          <div className="products-error">
            <p>😕 {error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="products-empty">
            <span className="empty-icon">🛍️</span>
            <h3>No products found</h3>
            <p>Try a different category or check back later</p>
          </div>
        ) : (
          <>
            <p className="products-count">{products.length} product{products.length !== 1 && 's'} found</p>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image-wrap">
                    {product.images?.[0] ? (
                      <img
                        src={`http://localhost:5000/uploads/${product.images[0]}`}
                        alt={product.title}
                      />
                    ) : (
                      <div className="product-no-image">👗</div>
                    )}
                    <span className="product-category-badge">{product.category}</span>
                  </div>
                  <div className="product-info">
                    {product.brand && <span className="product-brand">{product.brand}</span>}
                    <h4 className="product-title">{product.title}</h4>
                    <div className="product-meta">
                      <span className="product-price">₹{product.price}</span>
                      {product.size && <span className="product-size">{product.size}</span>}
                    </div>
                    <button
                      className="add-to-cart-btn"
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(product._id); }}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}