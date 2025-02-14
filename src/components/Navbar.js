import React  from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navbar = () => {

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-4">
          <li className="nav-item dropdown mega-menu">
              <Link className="nav-link text-dark text-uppercase px-4" to="/women">
                Women
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Ethnic Wear</h6>
                    <Link className="dropdown-item" to="#">Kurta Kurtis</Link>
                    <Link className="dropdown-item" to="#">Sarees</Link>
                    <Link className="dropdown-item" to="#">Ethnic Sets</Link>
                    <Link className="dropdown-item" to="#">Lehengas</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Western Wear</h6>
                    <Link className="dropdown-item" to="#">Dresses</Link>
                    <Link className="dropdown-item" to="#">Tops</Link>
                    <Link className="dropdown-item" to="#">Jeans</Link>
                    <Link className="dropdown-item" to="#">Co-ord Sets</Link>
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
              <Link className="nav-link text-dark text-uppercase px-4" to="/men">
                Men
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Top Wear</h6>
                    <Link className="dropdown-item" to="#">T-Shirts</Link>
                    <Link className="dropdown-item" to="#">Shirts</Link>
                    <Link className="dropdown-item" to="#">Sweaters</Link>
                    <Link className="dropdown-item" to="#">Jackets</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Bottom Wear</h6>
                    <Link className="dropdown-item" to="#">Jeans</Link>
                    <Link className="dropdown-item" to="#">Trousers</Link>
                    <Link className="dropdown-item" to="#">Shorts</Link>
                    <Link className="dropdown-item" to="#">Joggers</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown mega-menu">
              <Link className="nav-link text-dark text-uppercase px-4" to="/kids">
                Kids
              </Link>
              <div className="dropdown-menu mega-content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Boys' Clothing</h6>
                    <Link className="dropdown-item" to="#">T-Shirts</Link>
                    <Link className="dropdown-item" to="#">Jeans</Link>
                    <Link className="dropdown-item" to="#">Shorts</Link>
                    <Link className="dropdown-item" to="#">Shirts</Link>
                  </div>
                  <div className="col-md-3">
                    <h6 className="dropdown-header">Girls' Clothing</h6>
                    <Link className="dropdown-item" to="#">Dresses</Link>
                    <Link className="dropdown-item" to="#">Tops</Link>
                    <Link className="dropdown-item" to="#">Skirts</Link>
                    <Link className="dropdown-item" to="#">Leggings</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link  text-dark text-uppercase px-4" to="/home">
                Home
              </Link>
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

            <li className="nav-item text-center">
              <Link className="nav-link text-dark  fs-6 px-4" to="/cart">
                <i className="bi bi-cart d-block"></i>
              <span style={{ fontSize: "10px",fontFamily: "Poppins, sans-serif" }} className="fs-10">CART</span>
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
