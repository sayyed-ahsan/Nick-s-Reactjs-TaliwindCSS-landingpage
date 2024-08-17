import React from "react";
import videoImage from "../../medias/amazon.png";

const Amazon = () => {

  return (
    <div className="mx-auto max-w-[1392px] ">
      <div className=" bg-[#F29E13] rounded-[25px] pb-[40px] px-[12px]  sm:px-0 mt-[100px] mb-[50px] mx-[20px]">
        <div className="text-center md:text-[48px] text-[40px]  text-white py-[60px]">
          How CustomSync Import data from Amazon
        </div>
        <div className="flex justify-center ">
          <img src={videoImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Amazon;
