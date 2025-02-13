import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const Men = () => {

    const [menProducts, setMenProducts] = useState([]);

    useEffect(() => {
      fetch("/products.json")
        .then((res) => res.json())
        .then((data) =>
          setMenProducts(data.products.filter((item) => item.category.gender === "Men"))
        )
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return(
        <div>
            
            <Navbar/>

            <div>
                <h2>Men's Products</h2>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                    {menProducts.map((product) => (
                    <div 
                        key={product.id} 
                        style={{
                        width: "220px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "10px",
                        textAlign: "center",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                        backgroundColor: "#fff"
                        }}
                    >
                        <img 
                        src={product.image[0]} 
                        alt={product.title} 
                        style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }} 
                        />
                        
                        <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
                        <p style={{ color: "#333", fontWeight: "bold", fontSize: "14px" }}>Brand: {product.brand}</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>
                        <span style={{ fontWeight: "bold", color: "#E44D26" }}>₹{product.price}</span> 
                        <span style={{ textDecoration: "line-through", color: "#999", marginLeft: "5px" }}>₹{product.before_disc}</span>
                        <span style={{ color: "green", marginLeft: "5px" }}>({product.offer_percent}% off)</span>
                        </p>
                    </div>
                    ))}
                </div>
                </div>

        </div>
    )
}

export default Men