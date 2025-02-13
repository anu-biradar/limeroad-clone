import React from "react";
import "../styles/CategorySection.css";

const CategorySection = () => {
  return (
    <div className="category-container">
      <div className="category-tabs">
        <span className="category-link">WOMEN</span>
        <span className="category-link">MEN</span>
        <span className="category-link flicker">KIDS <span className="new-label">NEW</span></span>
      </div>

      <div className="category-icons">
        <div className="category-item my-feed">
          <div className="my-feed-circle">MY</div>
          <span className="category-text">MY FEED</span>
        </div>
      
        <div className="separator"></div>

        {[
          { name: "Kurtas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE0OxZtLc-AeN7A6tt82gcIL7nXNMRMqmRQ&s" },
          { name: "Tops", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDN4jwODgfkMVzyB9Tqs_H5qIxlMBy6SZzA&s " },
          { name: "Dresses", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgS-JElW4RZazwKXQpIDwegeRLWyKtKrE7Q&s" },
          { name: "Sarees", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YbT469kVBNif3Uq-nAWMh1c0IjoOHe6sUg&s" },
          { name: "Suits", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78VlW45I8cKSLA51A454gNaDiZjOaiIwERA&s" },
          { name: "Ethnic Sets", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Q2uTiDtLMOCalmXftrJJOWvi-qo84k2SEw&s" },
          { name: "Bottoms", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD02peZKD1U3STWqDzoFaU8o_mdxIBtekqw&s" },
          { name: "Bags", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvEzW3nJ_WeGGTN34zW0gqsjzde4cNsp-tAA&s" },
          { name: "Footwear", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMJWRRxcraCGAySAgC9drFwOTQPihRkXoMg&s" },

        ].map((item, index) => (
          <div className="category-item" key={index}>
            <img src={item.img} alt={item.name} className="category-img" />
            <span className="category-text">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
