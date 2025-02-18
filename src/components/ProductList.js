import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const { gender, category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);

        let filteredProducts = data.products.filter((product) => {
          if (!product.category) {
            console.error(`Product with ID ${product.id} is missing category field`);
            return false;
          }
          return product.category.gender.toLowerCase() === gender.toLowerCase();
        });

        if (category) {
          filteredProducts = filteredProducts.filter(
            (product) => product.category.type.toLowerCase() === category.toLowerCase()
          );
        }

        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [gender, category]);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center text-uppercase">{category ? `${gender} - ${category}` : gender}</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-3" onClick={() => handleProductClick(product.id)} style={{ cursor: "pointer" }}>
                <div className="card mb-3">
                  <img src={product.image[0]} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Brand: {product.brand}</p>
                    <p className="card-text">
                      Price: ₹{product.price} <del>₹{product.before_disc}</del> ({product.offer_percent}% Off)
                    </p>
                    <button className="btn btn-danger">Add To Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;