import React from "react";
import HeroImg from "../../medias/hero.png";
import HeroBottomSection from "../../medias/heroButtomImg.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#3B79B3] to-[#19344D] md:max-h-[1050px] max-h-[1200px] mt-[66px]">
      <div className="md:flex justify-center items-center">
        <div className="px-[24px]">
          <p className="lg:text-[60px] text-[45px] leading-[70px] max-w-[587px] font-bold text-white">
            <span className="text-[#F29E13]">Sync</span> your customization from
            <span className="text-[#F29E13]"> Amazon</span> to ShipStation and
            Veeqo
          </p>
          <p className="text-[16px] text-white max-w-[321px] mt-[25px] mb-[20px]">
            Custom order data <br /> syncs automatically. No more copy and
            pasting!
          </p>
          <div className=" cursor-pointer text-white text-nowrap bg-[#F29E13] max-w-[175px] px-[16px] py-[8px] rounded-lg font-bold">
            Plans and Pricing
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>

      </div>
      <img className="mx-auto" src={HeroBottomSection} alt="" />
    </div>
  );
};

export default Banner;
