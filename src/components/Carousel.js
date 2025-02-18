import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex justify-content-center gap-3">
                        <img style={{ height: "40vh", width: "40%", objectFit: "contain", borderRadius: "10px" }}
                            src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1739201760193.jpg?crsl_pos=4"
                            className="d-block" alt="Steal the Deal - Boys" />
                        <img style={{ height: "40vh", width: "40%", objectFit: "contain", borderRadius: "10px" }}
                            src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737985191609.jpg?crsl_pos=4"
                            className="d-block" alt="Steal the Deal - Girls" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center gap-3">
                        <img style={{ height: "40vh", width: "40%", objectFit: "contain", borderRadius: "10px" }}
                            src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737786855099.jpg?crsl_pos=4"
                            className="d-block" alt="Steal the Deal - Shoes" />
                        <img style={{ height: "40vh", width: "40%", objectFit: "contain", borderRadius: "10px" }}
                            src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1738302637685.jpg?crsl_pos=4"
                            className="d-block" alt="Steal the Deal - Accessories" />
                    </div>
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
    );
}

export default Carousel;