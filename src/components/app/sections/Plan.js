import React from "react";
import tikMark from "../../medias/PlantikVector.png";
import { motion } from 'framer-motion';
import AosAnimation from "../../core/AosAnimation";

const Plan = () => {
  return (
    <div className="mx-auto max-w-[1120px] px-[24px] sm:px-0 mt-[100px] mb-[250px]" id="Pricing">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="sm:text-[48px] text-[42px] text-center mb-[64px]">
          Find the <span className="text-[#1387f2]">right plan</span> for you
        </p>
      </motion.div>
      <div className="flex flex-wrap items-center justify-between gap-[24px]">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sm:min-w-[357px] min-w-[357px] w-full mx-auto p-[24px] rounded-[16px] border-[1px] border-[#BABABA]">
            <p className="text-[32px] font-medium leading-6">Starter</p>
            <div className="flex my-[24px]">
              <p className="text-[48px] font-bold">$20</p>
              <p className="text-[#F29E13] text-[32px] font-medium">/mo</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Up to 300 Monthly Orders
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Amazon Custom and Handmade
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Highly Customizable Display
              </p>
            </div>
            <button className="text-[16px] font-bold py-[8px] w-full mt-[24px] border-[1px] border-[#F29E13] rounded-[32px]">
              Get Started
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="sm:min-w-[357px] min-w-[357px] w-full mx-auto p-[24px] shadow-2xl rounded-[16px]"
          >
            <p className="text-[#1387F2] bg-[#E6F3FF] font-bold py-[4px] px-[12px] rounded-[32px] inline-block mb-5px">
              Most Popular
            </p>
            <p className="text-[32px] font-medium leading-">Professional</p>
            <div className="flex my-[24px]">
              <p className="text-[48px] font-bold">$25</p>
              <p className="text-[#F29E13] text-[32px] font-medium">/mo</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Up to 300 Monthly Orders
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Amazon Custom and Handmade
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Highly Customizable Display
              </p>
            </div>
            <button className="text-[16px] text-white font-bold py-[8px] w-full mt-[24px] border-[1px] border-[#F29E13] bg-[#F29E13] rounded-[32px]">
              Get Started
            </button>
          </div></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sm:min-w-[357px] min-w-[357px] w-full mx-auto p-[24px] rounded-[16px] border-[1px] border-[#BABABA]">
            <p className="text-[32px] font-medium leading-6">Business</p>
            <div className="flex my-[24px]">
              <p className="text-[48px] font-bold">$30</p>
              <p className="text-[#F29E13] text-[32px] font-medium">/mo</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Up to 300 Monthly Orders
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Amazon Custom and Handmade
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="" />
              <p className="text-[#7B7B7B] text-[16px]">
                Highly Customizable Display
              </p>
            </div>
            <button className="text-[16px] font-bold py-[8px] w-full mt-[24px] border-[1px] border-[#F29E13] rounded-[32px]">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default Plan;
