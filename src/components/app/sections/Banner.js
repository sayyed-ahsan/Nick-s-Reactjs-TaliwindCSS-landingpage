import React from "react";
import HeroImg from "../../medias/hero.png";
import HeroBottomSection from "../../medias/heroButtomImg.png";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#3B79B3] to-[#19344D] flex justify-center pb-[300px]">
        <div>
          <p className="text-[60px] max-w-[567px] font-bold text-white">
            <span className="text-[#F29E13]">Sync</span> your customization from
            <span className="text-[#F29E13]">Amazon</span> to ShipStation and
            Veeqo
          </p>
          <p className="text-[16px] text-white max-w-[321px] mt-[25px] mb-[15px]">
            Custom order data <br /> syncs automatically. No more copy and
            pasting!
          </p>
          <div className="text-white bg-[#F29E13] max-w-[175px] px-5 py-3 rounded-lg font-bold">
            Plans and Pricing
          </div>
        </div>
        <div>
          <img src={HeroImg}></img>
        </div>
      </div>
      <img className="mx-auto mt-[-370px]" src={HeroBottomSection}></img>
    </div>
  );
};

export default Banner;
