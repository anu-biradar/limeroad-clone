import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useState } from "react";
import TrendCards from "../components/TrendCards";

const Home = () => {
    const [selectedGender, setSelectedGender] = useState("Women");
    const [selectedType, setSelectedType] = useState("My Feed");
    return(
        <div>
            <Navbar />

            <Profile setGender={setSelectedGender} setType={setSelectedType} />

            <Carousel />

            <Banner />

            <TrendCards selectedGender={selectedGender} selectedType={selectedType} />

            <Footer/>
        </div>
    )
}

export default Home