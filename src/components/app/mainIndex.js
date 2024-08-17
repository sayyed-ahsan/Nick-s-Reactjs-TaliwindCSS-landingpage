import React from "react";
import Footer from "../core/Footer";
import Header from "../core/Header";
import Features from "./sections/Features";
import GetStartedCard from "./sections/GetStartedCard";
import Plan from "./sections/Plan";
import Amazon from "./sections/Amazon";
import Companies from "./sections/Companies";
import Banner from "./sections/Banner";

const MainIndex = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Companies />
      <Features />
      <Amazon />
      <Plan />
      <GetStartedCard />
      <Footer />
    </div>
  );
};

export default MainIndex;
