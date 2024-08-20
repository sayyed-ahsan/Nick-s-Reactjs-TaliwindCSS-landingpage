import React, { useState } from "react";
import Shipstation from "../../medias/shipstation.png";
import Veeqo from "../../medias/veeqo.png";
import { motion } from 'framer-motion';
import AllFeaturesCard from "./AllFeaturesCard";

const Features = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="mx-auto max-w-[1120px]  px-[24px] sm:px-0 mt-[200px] mb-[150px]" id="Features">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="sm:text-[48px] text-[42px] text-center">
          <span className="text-[#1387f2]">Features</span> you Will Love
        </p>
      </motion.div>
      <div className="flex max-w-[624px] mx-auto bg-[#EDEDED] p-[12px] rounded-[32px] mb-[35px] mt-[40px]">
        <div
          className={`cursor-pointer max-w-[300px] w-full flex items-center justify-center rounded-[16px] p-[22px] animated-bg ${show ? "bg-white" : "bg-[#EDEDED]"}`}
          onClick={() => setShow(true)}
        >
          <img src={Shipstation} alt="Shipstation logo" />
        </div>
        <div
          className={`cursor-pointer max-w-[300px] w-full flex items-center justify-center rounded-[16px] p-[24px] animated-bg ${!show ? "bg-white" : "bg-[#EDEDED]"}`}
          onClick={() => setShow(false)}
        >
          <img src={Veeqo} alt="Veeqo logo" />
        </div>
      </div>

      <motion.div
        key={show}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        {show ? <AllFeaturesCard /> : <AllFeaturesCard />}
      </motion.div>
    </div >
  );
};

export default Features;
