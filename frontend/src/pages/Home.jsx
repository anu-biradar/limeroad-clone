import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Home.css';

const categories = [
  { id: 'women', label: 'Women', emoji: '👗', desc: 'Kurtas, Sarees, Dresses & more', color: '#ff6b9d' },
  { id: 'men',   label: 'Men',   emoji: '👔', desc: 'Shirts, Jeans, Ethnic & more',  color: '#4fc3f7' },
  { id: 'kids',  label: 'Kids',  emoji: '🧒', desc: 'Cute outfits for little ones',   color: '#a5d6a7' },
];

const perks = [
  { icon: '🏪', title: 'Vendor Portal', desc: 'Dedicated dashboards for sellers' },
  { icon: '🛒', title: 'Smart Cart',    desc: 'Interactive shopping experience' },
  { icon: '⚡', title: 'Cloud Media',   desc: 'Fast image delivery via Cloudinary' },
  { icon: '🔐', title: 'Secure Access', desc: 'JWT & Role-based auth' },
];

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content fade-in">
          <span className="hero-badge">New Arrivals 2025 ✨</span>
          <h1 className="hero-title">
            Style That Speaks <span className="hero-accent">Your Language</span>
          </h1>
          <p className="hero-sub">
            Discover thousands of fashion brands curated just for you — from ethnic elegance to street-chic cool.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary hero-cta" onClick={() => navigate('/products')}>
              Shop Now →
            </button>
            {!user && (
              <button className="btn btn-outline hero-cta" onClick={() => navigate('/register')}>
                Join Free
              </button>
            )}
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </section>

      {/* ── Perks Bar ── */}
      <section className="perks-bar">
        {perks.map((p) => (
          <div key={p.title} className="perk-item">
            <span className="perk-icon">{p.icon}</span>
            <div>
              <p className="perk-title">{p.title}</p>
              <p className="perk-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Categories ── */}
      <section className="categories-section">
        <div className="section-header">
          <span className="section-tag">Browse</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-sub">Find the perfect look for every occasion</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="category-card slide-in-up"
              style={{ animationDelay: `${i * 0.1}s`, '--cat-color': cat.color }}
              onClick={() => navigate(`/products?category=${cat.id}`)}
            >
              <div className="cat-emoji">{cat.emoji}</div>
              <h3 className="cat-name">{cat.label}</h3>
              <p className="cat-desc">{cat.desc}</p>
              <div className="cat-arrow">Shop →</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Banner Strip ── */}
      <section className="promo-strip">
        <div className="promo-content">
          <p className="promo-text">🔥 Limited Time Deal — Up to <strong>70% OFF</strong> on Top Brands</p>
          <button className="btn btn-secondary" onClick={() => navigate('/products')}>
            Grab the Deal
          </button>
        </div>
      </section>

      {/* ── Vendor Area ── */}
      {user?.role === 'vendor' && (
        <section className="vendor-section">
          <div className="vendor-card glass-card">
            <span className="vendor-badge badge badge-primary">Vendor Zone</span>
            <h3>Welcome back, {user.name || 'Vendor'}!</h3>
            <p>Manage your products, track orders, and grow your store.</p>
            <button className="btn btn-primary" onClick={() => navigate('/vendor')}>
              Go to Dashboard →
            </button>
          </div>
        </section>
      )}

    </div>
  );
}