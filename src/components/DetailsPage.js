import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "SHOP NOW",
    image: "https://n-img3.junaroad.com/stories/story_p_67921b3a20996709447c021d-1739363111.jpeg",
    description: "Trending fashion collection for you.",
    price: "₹999",
  },
  {
    id: 2,
    title: "INSPO | POOJA HEGDE",
    image: "https://n-img0.junaroad.com/stories/story_p_678dff95107665d19bb4dd33-1738154215.jpeg",
    description: "Inspired by Pooja Hegde's iconic fashion style.",
    price: "₹1299",
  },
  {
    id: 3,
    title: "HASEEN DILRUBA VIBES!",
    image: "https://n-img1.junaroad.com/stories/story_p_678794e0429fe2079de7e364-1738155228.jpeg",
    description: "Dramatic looks inspired by Haseen Dilruba.",
    price: "₹1499",
  },
];

const DetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">{product.price}</h4>
          <button className="btn btn-success mt-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
