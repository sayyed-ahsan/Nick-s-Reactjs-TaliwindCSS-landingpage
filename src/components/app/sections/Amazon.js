import React from "react";
import YouTube from "react-youtube";

import AmazonImg from "../../medias/amazonImg.png";
import AmazonImg2 from "../../medias/amazonImport.png";
import AmazonImgG from "../../medias/girl.gif";
import AmazonImgG2 from "../../medias/roundedGirl.gif";

const Amazon = () => {
  const videoId = "Jox6R5-rIH0";

  const opts = {
    playerVars: {
      autoplay: 0, // Enable autoplay
      controls: 0, // Show player controls
      modestbranding: 1, // Show YouTube logo without video title
      rel: 0, // Disable related videos at the end
      showinfo: 0, // Hide video title and uploader info
      iv_load_policy: 3, // Disable annotations
    },
  };
  return (
    <div className="mx-auto max-w-[1392px] ">
      <div className=" bg-[#F29E13] rounded-[25px] pt-[20px] pb-[90px] px-[12px]  sm:px-0 mt-[100px] mb-[100px] mx-[20px]">
        <div className="text-center md:text-[48px] text-[40px]  text-white py-[60px]">
          How CustomSync Import data from Amazon
        </div>
        <div className="flex justify-center ">
          <div className="border-white -[20px] rounded-2xl ">
            <img src={AmazonImg2}></img>
            {/* <YouTube videoId={videoId} opts={opts} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazon;
