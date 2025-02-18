import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import Navbar from "../components/Navbar";
import "../styles/ProductDetail.css";
import { FaHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null); 

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find((p) => p.id === parseInt(productId));
        setProduct(foundProduct);

        if (foundProduct) {
          const filteredProducts = data.products.filter(
            (p) =>
              p.category.type === foundProduct.category.type &&
              p.id !== foundProduct.id
          );
          setRelatedProducts(filteredProducts);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }


  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart(product, selectedSize);
    alert("Item added to cart successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4 product-detail-container">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image[0]} className="img-fluid product-image" alt={product.title} />
          </div>

          <div className="col-md-6 product-info">
            <h2 className="product-title">{product.title}</h2>
            <h4 className="brand-name">Brand: {product.brand}</h4>

            {/* Size Selection */}
            <div className="size-selection">
              <h5>Select Size</h5>
              <div className="size-options">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="price-info">
              <p><span className="mrp">M.R.P.: <del>₹{product.before_disc}</del></span></p>
              <p><span className="price">Price: <strong>₹{product.price}</strong></span></p>
              <p className="discount">You Save: <span className="save-amount">₹{product.before_disc - product.price} ({product.offer_percent}% Off)</span></p>
              <p className="tax-info">M.R.P. inclusive of all taxes</p>
            </div>

            <div className="add-to-cart-section">
              <button className="wishlist-btn"><FaHeart /></button>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h3>Related Products</h3>
          <div className="related-products-grid">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((related) => (
                <div key={related.id} className="related-product-card">
                  <Link to={`/products/${related.id}`}>
                    <img src={related.image[0]} alt={related.title} className="related-product-img" />
                    <h5 className="related-title">{related.title}</h5>
                    <p className="related-price">₹{related.price} <del>₹{related.before_disc}</del></p>
                    <p className="related-discount">{related.offer_percent}% Off</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
