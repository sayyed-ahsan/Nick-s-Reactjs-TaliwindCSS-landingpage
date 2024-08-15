import React from "react";
import Footer from "../core/Footer";
import Header from "../core/Header";
import Features from "./sections/Features";
import GetStartedCard from "./sections/GetStartedCard";
import Plan from "./sections/Plan";

const MainIndex = () => {
    return (
        <div>
            {/* <Header /> */}
            <Features />
            <Plan />
            <GetStartedCard />
            <Footer />
        </div>
    );
};

export default MainIndex;
