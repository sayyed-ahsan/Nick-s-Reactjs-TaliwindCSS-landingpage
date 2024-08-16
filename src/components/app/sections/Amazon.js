import React from "react";
import AmazonImg from "../../medias/amazonImport.png";

const Amazon = () => {
  return (
    <div className=" mx-auto max-w-[1392px] ">
      <div className=" bg-[#F29E13] rounded-[25px] pt-[20px] pb-[40px] px-[12px]  sm:px-0 mt-[100px] mb-[100px] mx-[20px]">
        <div className="text-center md:text-[48px] text-[40px]  text-white py-[60px]">
          How CustomSync Import data from Amazon
        </div>
        <div className="flex justify-center ">
          <img className="" src={AmazonImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Amazon;
