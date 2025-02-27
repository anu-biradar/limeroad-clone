import React, { useState } from "react";
import "../styles/CategorySection.css"

const Profile = ({ setGender, setType }) => {
  const [selectedCategory, setSelectedCategory] = useState("Women"); 

  const categoryData = {
    Women: [
      { label: "My Feed", img: "/assets/my_feed.avif", link: "My Feed" },
      { label: "Kurtas", img: "/assets/kurtas.avif", link: "Kurtas" },
      { label: "Tops", img: "/assets/tops.avif", link: "Tops" },
      { label: "Dresses", img: "/assets/dresses.avif", link: "Shirts" },
      { label: "Saree", img: "/assets/sarees.avif", link: "Saree" },
      { label: "Bags", img: "/assets/bags.avif", link: "Bags" },
      { label: "Footwear", img: "/assets/footwear.avif", link: "Footwear" },
    ],
    Men: [
      { label: "My Feed", img: "/assets/my_feed.avif", link: "My Feed" },
      { label: "T-Shirts", img: "/assets/tshirts.avif", link: "T-Shirts" },
      { label: "Shirts", img: "/assets/men_shirts.avif", link: "Shirts" },
      { label: "Jeans", img: "/assets/men_jeans.avif", link: "Jeans" },
      { label: "Trousers", img: "/assets/men_trousers.avif", link: "Suits" },
      { label: "Formal Shoes", img: "/assets/men_footwear.avif", link: "Formal Shoes" },
    ],
    Kids: [
      { label: "My Feed", img: "/assets/my_feed.avif", link: "My Feed" },
      { label: "Frocks", img: "/assets/girls_frocks.avif", link: "Frocks" },
      { label: "T-Shirts", img: "/assets/boys_t_shirts.avif", link: "T-Shirts" },
      { label: "Boys Shirts", img: "/assets/boys_shirts.avif", link: "Shirts" },
      { label: "Bottom Wear", img: "/assets/boys_bottom.avif", link: "Shorts" },
    ],
    
  };

  return (
    <div className="container text-center mt-4">
      
      <div className="row category-section">
        {["Women", "Men", "Kids"].map((category) => (
          <div className="col-auto" key={category}>
            <button
              className={`category-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setGender(category); 
                setType("My Feed"); 
              }}  >
              {category}
              {/* {category === "Kids" && <span className="new-badge">NEW</span>} */}
            </button>
          </div>
        ))}
      </div>

      
      <div className="row mt-4" style={{ justifyContent: "center" }}>
        {categoryData[selectedCategory].map((item, index) => (
          <div className="col-auto text-center" key={index}>
            <button
              className="image-link"
              onClick={() => {
                setGender(selectedCategory); 
                setType(item.label); 
              }} >
              <img src={item.img} alt={item.label} className="circle-img" />
              <p className="mt-2">{item.label}</p>
            </button>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Profile;