import React from "react";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "SHOP NOW",
      image: "https://n-img3.junaroad.com/stories/story_p_67921b3a20996709447c021d-1739363111.jpeg",
      followers: "5K",
      likes: 14,
    },
    {
      id: 2,
      title: "INSPO | POOJA HEGDE",
      image: "https://n-img0.junaroad.com/stories/story_p_678dff95107665d19bb4dd33-1738154215.jpeg",
      followers: "15K",
      likes: 38,
    },
    {
      id: 3,
      title: "HASEEN DILRUBA VIBES!",
      image: "https://n-img1.junaroad.com/stories/story_p_678794e0429fe2079de7e364-1738155228.jpeg",
      followers: "6K",
      likes: 27,
    },
    {
      id: 4,
      title: "PURE DESI ELEGANCE!",
      image: "https://n-img2.junaroad.com/stories/story_p_6788b2079e95bec7b278fcf0-1737093242.jpeg",
      followers: "6K",
      likes: 28,
    },
    {
      id: 5,
      title: "SUMMER ESSENTIALS",
      image: "https://n-img0.junaroad.com/stories/story_p_67977690f77e5bd0c06f3ba1-1737981590.jpeg",
      followers: "7K",
      likes: 30,
    },
    {
      id: 6,
      title: "WESTERN CHIC",
      image: "https://n-img0.junaroad.com/stories/story_p_678f80f3429fe29cb86be116-1738151329.jpeg",
      followers: "9K",
      likes: 25,
    },
    {
      id: 7,
      title: "TRADITIONAL LOOKS",
      image: "https://n-img0.junaroad.com/stories/story_p_679215517c7328328b814ec8-1738899358.jpeg",
      followers: "8K",
      likes: 35,
    },
    {
      id: 8,
      title: "STYLISH WINTER",
      image: "https://n-img3.junaroad.com/stories/story_p_67921199c8c932ec03c4b2c6-1737626627.jpeg",
      followers: "12K",
      likes: 40,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div className="card shadow-sm border-0">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <p className="text-muted">By Trend Experts</p>
                <p className="text-muted">{card.followers} Followers</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-danger">
                    <i className="bi bi-heart-fill"></i> {card.likes} Likes
                  </span>
                  <span className="text-success">
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
