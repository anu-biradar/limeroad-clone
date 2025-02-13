import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CategorySection from "../components/CategorySection";
import Banner from "../components/Banner";
import CardSection from "../components/Cardsection";

function Home() {
    return(
        <div>
            <Navbar />

            <CategorySection />

            <Carousel />

            <Banner />

            <CardSection />
        </div>
    )
}

export default Home