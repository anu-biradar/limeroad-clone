import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CardSection = () => {
  const navigate = useNavigate();

  const [likes, setLikes] = useState(
    Array(8).fill(false) // Store like status for each card
  );

  const cards = [
    {
      id: 1,
      title: "SHOP NOW",
      image: "https://n-img3.junaroad.com/stories/story_p_67921b3a20996709447c021d-1739363111.jpeg",
      followers: "5K",
      initialLikes: 14,
    },
    {
      id: 2,
      title: "INSPO | POOJA HEGDE",
      image: "https://n-img0.junaroad.com/stories/story_p_678dff95107665d19bb4dd33-1738154215.jpeg",
      followers: "15K",
      initialLikes: 38,
    },
    {
      id: 3,
      title: "HASEEN DILRUBA VIBES!",
      image: "https://n-img1.junaroad.com/stories/story_p_678794e0429fe2079de7e364-1738155228.jpeg",
      followers: "6K",
      initialLikes: 27,
    },
    {
      id: 4,
      title: "PURE DESI ELEGANCE!",
      image: "https://n-img2.junaroad.com/stories/story_p_6788b2079e95bec7b278fcf0-1737093242.jpeg",
      followers: "6K",
      initialLikes: 28,
    },
    {
      id: 5,
      title: "SUMMER ESSENTIALS",
      image: "https://n-img0.junaroad.com/stories/story_p_67977690f77e5bd0c06f3ba1-1737981590.jpeg",
      followers: "7K",
      initialLikes: 30,
    },
    {
      id: 6,
      title: "WESTERN CHIC",
      image: "https://n-img0.junaroad.com/stories/story_p_678f80f3429fe29cb86be116-1738151329.jpeg",
      followers: "9K",
      initialLikes: 25,
    },
    {
      id: 7,
      title: "TRADITIONAL LOOKS",
      image: "https://n-img0.junaroad.com/stories/story_p_679215517c7328328b814ec8-1738899358.jpeg",
      followers: "8K",
      initialLikes: 35,
    },
    {
      id: 8,
      title: "STYLISH WINTER",
      image: "https://n-img3.junaroad.com/stories/story_p_67921199c8c932ec03c4b2c6-1737626627.jpeg",
      followers: "12K",
      initialLikes: 40,
    },
  ];

  // Handle card click (Navigate to details page)
  const handleCardClick = (id) => {
    navigate(`/details/${id}`); // Redirect to details page
  };

  // Handle like button
  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  // Handle share functionality
  const handleShare = (title, image) => {
    const text = `Check this out: ${title}`;
    const url = encodeURIComponent(image);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div
              className="card shadow-sm border-0"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(card.id)}
            >
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <p className="text-muted">By Trend Experts</p>
                <p className="text-muted">{card.followers} Followers</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span
                    className={likes[index] ? "text-danger" : "text-muted"}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering card click
                      handleLike(index);
                    }}
                  >
                    <i className="bi bi-heart-fill"></i> {card.initialLikes + (likes[index] ? 1 : 0)} Likes
                  </span>
                  <span
                    className="text-success"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering card click
                      handleShare(card.title, card.image);
                    }}
                  >
                    <i className="bi bi-whatsapp"></i> Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
