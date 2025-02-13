

import React from "react"

function Carousel() {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img style={{ height: "50vh", width: "80vh", objectFit: "contain", margin: "0 auto" }}
             src="https://www.pagetraffic.in/wp-content/uploads/2022/06/limeroad.jpg" 
             className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img style={{ height: "50vh", width: "80vh", objectFit: "contain", margin: "0 auto" }} 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwPN_awdOh4gKkbe_7vsj5QhjkuMM-e2ehKqnZsGvo5nYV39KNhpg_uxSXE7taikBjHYXAhz9xEdOtsTJ4N56911SjqA239sodXNY-C5kPimmzYe2nTWX93oeN1PEUa0z7K2su0fgzx00/s640/web+banner1-01.jpg" 
              className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img style={{ height: "50vh", width: "auto", objectFit: "contain", margin: "0 auto" }}
              src="https://www.shopickr.com/wp-content/uploads/2017/01/limeroad-end-of-season-fashion-sale-offers-coupons-deals-india-shopickr.jpg" 
              className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Carousel