import React  from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand ms-4" to="/">
          <img 
            src="https://1000logos.net/wp-content/uploads/2020/07/Limeroad-Logo-500x281.png" 
            alt="LimeRoad Logo" 
            className="logo-img" 
            style={{ height: "60px", width: "100px", display: "block", marginLeft: "15px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-4">
          <li className="nav-item dropdown mega-menu">
              <Link className="nav-link text-dark text-uppercase px-4" to='/products/women'>
                Women
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Ethnic Wear</h6>
                    <Link className="dropdown-item" to="/products/women/kurtas">Kurta Kurtis</Link>
                    <Link className="dropdown-item" to="/products/women/sarees">Sarees</Link>
                    <Link className="dropdown-item" to="/products/women/ethnic-sets">Ethnic Sets</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Western Wear</h6>
                    <Link className="dropdown-item" to="/products/women/dresses">Dresses</Link>
                    <Link className="dropdown-item" to="/products/women/tops">Tops</Link>
                    <Link className="dropdown-item" to="/products/women/jeans">Jeans</Link>
                    <Link className="dropdown-item" to="/products/women/trousers">Trousers</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Jewellery</h6>
                    <Link className="dropdown-item" to="#">Earrings</Link>
                    <Link className="dropdown-item" to="#">Necklaces</Link>
                    <Link className="dropdown-item" to="#">Bracelets</Link>
                    <Link className="dropdown-item" to="#">Rings</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown mega-menu">
              <Link className="nav-link text-dark text-uppercase px-4" to='/products/men'>
                Men
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Top Wear</h6>
                    <Link className="dropdown-item" to="/products/men/T-Shirts">T-Shirts</Link>
                    <Link className="dropdown-item" to="/products/men/shirts">Shirts</Link>
                    <Link className="dropdown-item" to="/products/men/sweaters">Sweaters</Link>
                    <Link className="dropdown-item" to="/products/men/jackets">Jackets</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Bottom Wear</h6>
                    <Link className="dropdown-item" to="/products/men/jeans">Jeans</Link>
                    <Link className="dropdown-item" to="/products/men/Trousers">Trousers</Link>
                    <Link className="dropdown-item" to="/products/men/shorts">Shorts</Link>
                    <Link className="dropdown-item" to="/products/men/joggers">Joggers</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown mega-menu">
              <Link className="nav-link text-dark text-uppercase px-4" to="/products/kids">
                Kids
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Boys' Clothing</h6>
                    <Link className="dropdown-item" to="/products/kids/T-Shirts">T-Shirts</Link>
                    <Link className="dropdown-item" to="/products/kids/hoodies">Hoodies</Link>
                    <Link className="dropdown-item" to="/products/kids/Shorts">Shorts</Link>
                    <Link className="dropdown-item" to="/products/kids/Sweatshirts">Sweatshirts</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Girls' Clothing</h6>
                    <Link className="dropdown-item" to="/products/kids/dresses">Dresses</Link>
                    <Link className="dropdown-item" to="/products/kids/tops">Tops</Link>
                    <Link className="dropdown-item" to="/products/kids/skirts">Skirts</Link>
                    <Link className="dropdown-item" to="/products/kids/leggings">Leggings</Link>
                  </div>
                </div>
              </div>
            </li>

            <li 
              className="nav-item dropdown mega-menu position-relative"
              onMouseEnter={() => setShowHomeDropdown(true)}
              onMouseLeave={() => setShowHomeDropdown(false)}
            >
              <Link className="nav-link text-dark text-uppercase px-4" to="/">
                Home
              </Link>

              {showHomeDropdown && (
                <div className="dropdown-menu mega-content">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Home Decor</h6>
                      <Link className="dropdown-item" to="/products/home/curtains">Curtains</Link>
                      <Link className="dropdown-item" to="/products/home/cushions">Cushions</Link>
                      <Link className="dropdown-item" to="/products/home/wall art">Wall Art</Link>
                    </div>
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Kitchen Essentials</h6>
                      <Link className="dropdown-item" to="#">Dinner Sets</Link>
                      <Link className="dropdown-item" to="#">Cookware</Link>
                      <Link className="dropdown-item" to="#">Storage Containers</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-danger text-uppercase px-4" to="/offers">
                Offers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold text-danger text-uppercase px-4" to="/vmart">
                Vmart
              </Link>
            </li>
          </ul>

 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-center">
                <Link className="nav-link text-dark  fs-6 px-4" to="/scrapbook">
                <i className="bi bi-pencil d-block"></i>
                <span style={{ fontSize: "10px",fontFamily: "Poppins, sans-serif" }} className="fs-10">SCRAPBOOK</span>
                </Link>
            </li>

            <li className="nav-item text-center">
              <Link className="nav-link text-dark  fs-6 px-4" to="/search">
                <i className="bi bi-search d-block"></i>
              <span style={{ fontSize: "10px",fontFamily: "Poppins, sans-serif" }} className="fs-10">SEARCH</span>
              </Link>
            </li>

            <li className="nav-item text-center position-relative">
              <Link className="nav-link text-dark fs-6 px-4" to="/cart">
                <i className="bi bi-cart d-block position-relative"></i>
                <span style={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }} className="fs-10">CART</span>
                {cart.length > 0 && (
                  <span className="cart-badge">{cart.length}</span>
                )}
              </Link>
            </li>

            <li
              className="nav-item text-center position-relative"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <Link className="nav-link text-dark fs-6 px-4" to="#">
                <i className="bi bi-person-circle d-block"></i>
                <span style={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }} className="fs-10">
                  PROFILE
                </span>
              </Link>

              {showProfileMenu && (
                <div className="profile-dropdown">
                  <h6 className="dropdown-title">WELCOME!</h6>
                  <p>To view account details</p>
                  <Link to="/login" className="btn btn-danger btn-sm w-100">
                    LOGIN
                  </Link>
                  <hr />
                  <Link to="/orders" className="dropdown-item">ORDERS</Link>
                  <Link to="/return" className="dropdown-item">RETURN REPLACEMENT</Link>
                  <Link to="/credits" className="dropdown-item">LR CREDITS</Link>
                  <hr />
                  <Link to="/support" className="dropdown-item">CUSTOMER SUPPORT</Link>
                  <Link to="/faq" className="dropdown-item">FAQ & HELP</Link>
                  <Link to="/cart">Cart ({cart.length})</Link>
                </div>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
