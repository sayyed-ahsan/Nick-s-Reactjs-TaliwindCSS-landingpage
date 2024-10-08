import React from "react";
import HoursImage from "../../medias/hours.png";
import OrdersImage from "../../medias/ordersImg.png";
import StarImage from "../../medias/starImage.png";

import { motion } from 'framer-motion';

const Companies = () => {
  return (
    <div className="mx-auto max-w-[1120px]  px-[24px] sm:px-0 md:mt-[430px] sm:mt-[250px] mt-[200px] mb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="sm:text-[48px] text-[42px] text-center mb-[64px]">
          Trusted by{" "}
          <span className="text-[#1387f2]">
            {" "}
            Leading <br /> Companies{" "}
          </span>{" "}
          Around the World
        </p>
      </motion.div>

      <div className="mx-auto flex flex-wrap justify-between bg[#5BE1C6] gap-y-[75px]">
        <div className=" mx-auto text-center max-w-[353px] w-full">
          <img className="mx-auto" src={HoursImage} alt="" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex mt-[24px] justify-center">
              <p className="text-[48px] font-bold">200</p>
              <p className="text-[#F29E13] text-[32px] font-medium">hour</p>
            </div>
          </motion.div>
          <p className="text-[24px] mb-[24px]">
            Saved Per <br /> Month
          </p>
          <p className="">
            Custom data is synced as orders come in to ShipStation. Not on a
            timer, not when you click a button; it's automatic.
          </p>
        </div>
        {/* ---- */}
        <div className="mx-auto text-center max-w-[353px] w-full">
          <img className="mx-auto" src={OrdersImage} alt="" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex mt-[24px] justify-center">
              <p className="text-[48px] font-bold">15</p>
              <p className="text-[#F29E13] text-[32px] font-medium">K</p>
            </div>
          </motion.div>
          <p className="text-[24px] mb-[24px]">Orders Synced</p>
          <p className="">
            Custom data is synced as orders come in to ShipStation. Not on a
            timer, not when you click a button; it's automatic.
          </p>
        </div>
        {/* ---- */}
        <div className="mx-auto text-center max-w-[353px] w-full">
          <img className="mx-auto" src={StarImage} alt="" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex mt-[24px] justify-center">
              <p className="text-[48px] font-bold">98</p>
              <p className="text-[#F29E13] text-[32px] font-medium">%</p>
            </div>
          </motion.div>
          <p className="text-[24px] mb-[24px]">
            Customer <br /> Satisfaction
          </p>
          <p className="">
            Custom data is synced as orders come in to ShipStation. Not on a
            timer, not when you click a button; it's automatic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Companies;
