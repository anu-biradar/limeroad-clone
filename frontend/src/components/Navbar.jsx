import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Navbar.css';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="LimeRoad" className="navbar-logo-img" />
          <span className="logo-lime">Lime</span><span className="logo-road">Road</span>
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <Link to="/products" className="nav-link">Products</Link>
          {user?.role === 'user' && (
            <>
              <Link to="/cart" className="nav-link">🛒 Cart</Link>
              <Link to="/orders" className="nav-link">📦 Orders</Link>
            </>
          )}
          {user?.role === 'vendor' && (
            <Link to="/vendor" className="nav-link">Dashboard</Link>
          )}
        </nav>

        {/* Auth Actions */}
        <div className="navbar-actions">
          {!user ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary navbar-btn">Join Free</Link>
            </>
          ) : (
            <button className="btn navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <Link to="/products" className="mobile-link">Products</Link>
        {user?.role === 'user' && (
          <>
            <Link to="/cart" className="mobile-link">🛒 Cart</Link>
            <Link to="/orders" className="mobile-link">📦 Orders</Link>
          </>
        )}
        {user?.role === 'vendor' && (
          <Link to="/vendor" className="mobile-link">Dashboard</Link>
        )}
        {!user ? (
          <>
            <Link to="/login" className="mobile-link">Login</Link>
            <Link to="/register" className="mobile-link mobile-link--primary">Join Free</Link>
          </>
        ) : (
          <button className="mobile-link mobile-link--logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}