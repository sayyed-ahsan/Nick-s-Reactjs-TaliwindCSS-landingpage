import React from "react";
import Shipstation from "../../medias/shipstation.png";
import Veeqo from "../../medias/veeqo.png";

const Features = () => {
  return (
    <div>
      <p className="text-3xl text-center font-bold ">
        <span className="">Features</span> you Will Love
      </p>

      <div className="flex bg-[#8fa3bb] p-2">
        <div className="bg-[#FFFFFF] p-3 rounded-md">
          <img src={Shipstation}></img>
        </div>
        <div>
          <img src={Veeqo}></img>
        </div>
      </div>

      <div>
        <img></img>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Features;
