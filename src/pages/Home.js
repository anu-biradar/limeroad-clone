import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";
import Banner from "../components/Banner";
import CardSection from "../components/Cardsection";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
    const [gender, setGender] = useState("Women");
    const [type, setType] = useState("My Feed"); 
    return(
        <div>
            <Navbar />

            <CategorySection setGender={setGender} setType={setType}/>

            <Carousel />

            <Banner />

            <CardSection />

            <Footer/>
        </div>
    )
}

export default Home