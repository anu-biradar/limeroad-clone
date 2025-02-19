import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/TrendCards.css";

const TrendCards = ({ selectedGender, selectedType }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTrend, setSelectedTrend] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const trends = [
    {
      id: "tie-dye",
      title: "COLOR CHAOS",
      mainImage:
        "https://n-img3.junaroad.com/stories/story_p_67af1e8af77e5b3e2328275c-1739534842.jpeg",
      sideImages: ["/assets/tie_dye_1.jpg", "/assets/tie_dye_2.jpg"],
      followers: "15K",
      likes: 36,
    },
    {
      id: "one-shoulder",
      title: "LESS IS MORE",
      mainImage:
        "https://n-img4.junaroad.com/stories/story_p_67af0af92099674a682885b1-1739525987.jpeg",
      sideImages: ["/assets/one_shoulder_1.jpg", "/assets/one_shoulder_2.jpg"],
      followers: "15K",
      likes: 38,
    },
    {
      id: "boxy-tees",
      title: "GRAB NOW",
      mainImage:
        "https://n-img1.junaroad.com/stories/story_p_67a05d43c8c932ec03d29bdc-1739176108.jpeg",
      sideImages: ["/assets/boxy_tees_1.jpg", "/assets/boxy_tees_2.jpg"],
      followers: "15K",
      likes: 20,
    },
    {
      id: "hyper-bright",
      title: "GENZ CODED",
      mainImage:
        "https://n-img0.junaroad.com/stories/story_p_6790d9a2c8c932ec03c38d41-1738909649.jpeg",
      sideImages: ["/assets/hyper_bright_1.jpg", "/assets/hyper_bright_2.jpg"],
      followers: "15K",
      likes: 16,
    },
  ];

  useEffect(() => {
    if (selectedTrend) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.products.filter(
            (product) =>
              product.category.gender.toLowerCase() === selectedGender.toLowerCase() &&
              product.category.type.toLowerCase() === selectedType.toLowerCase()
          );
          setFilteredProducts(filtered);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedTrend, selectedGender, selectedType]);

  return (
    <div>
      {!selectedTrend && (
        <div className="trend-cards-container">
          {trends.map((trend) => (
            <div key={trend.id} className="trend-card" onClick={() => setSelectedTrend(trend.title)}>
              <div className="image-section">
                <img src={trend.mainImage} alt={trend.title} className="main-image" />
              </div>
              <div className="trend-info">
                <h4>{trend.title}</h4>
                <p>By Trend Experts</p>
                <p>{trend.followers} Followers</p>
                <div className="likes-share">
                  <span>💙 {trend.likes} Likes</span>
                  <span>🔗 Share</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedTrend && (
        <div className="trend-products">
          <button className="back-button" onClick={() => setSelectedTrend(null)}>
            🔙 Back to Trends
          </button>
          <h2>{selectedTrend} Products</h2>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <img src={product.image[0]} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.brand}</p>
                  <p>
                    ₹{product.price}{" "}
                    <span className="before-discount">₹{product.before_disc}</span>
                  </p>
                  <p className="discount">{product.offer_percent}% OFF</p>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendCards;
