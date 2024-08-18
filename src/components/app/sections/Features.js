import React, { useState } from "react";
import Shipstation from "../../medias/shipstation.png";
import Veeqo from "../../medias/veeqo.png";
import featureImg1 from "../../medias/feature-img1.png";
import featureImg2 from "../../medias/feature-img2.png";
import featureImg3 from "../../medias/feature-img3.png";
import featureImg4 from "../../medias/feature-img4.png";
import tikMark from "../../medias/tikVector.png";
import AnimatedDiv from "../../core/AnimationDiv";
import AosAnimation from "../../core/AosAnimation";

const Features = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="mx-auto max-w-[1120px]  px-[24px] sm:px-0 mt-[200px] mb-[150px]" id="Features">
      <AnimatedDiv duration={1} delay={0.2}>
        <p className="sm:text-[48px] text-[42px] text-center">
          <span className="text-[#1387f2]">Features</span> you Will Love
        </p>
      </AnimatedDiv>
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

      {show ? <div className="flex flex-wrap justify-between gap-y-[24px]">
        <AosAnimation
          animationType="fade-right"
          duration={2000}
          delay={100}
        >
          <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
            <img src={featureImg1} alt="Stay in Sync" />
            <h3 className="text-[24px] font-semibold mt-[4px]">Stay in Sync</h3>
            <p className="text-[16px] text-gray-500 text-left">
              Custom data is synced as orders come in to ShipStation. Not on a
              timer, not when you click a  automatic.
            </p>
          </div>
        </AosAnimation>
        <AosAnimation
          animationType="fade-right"
          duration={2000}
          delay={100}
        >
          <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
            <img src={featureImg2} alt="Choose Where Data Goes" />
            <h3 className="text-[24px] font-semibold mt-[4px]">
              Choose Where Data Goes
            </h3>
            <p className="text-[16px] text-gray-500 text-left">
              Sync custom data into any of these sections of a ShipStation order:
            </p>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">Line Item Description</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">Note  Buyer</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">Internal Notes</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">Custom Field 1, 2, or 3</p>
            </div>
          </div>
        </AosAnimation>
        <AosAnimation
          animationType="fade-left"
          duration={2000}
          delay={100}
        >
          <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
            <img src={featureImg3} alt="Customizable" />
            <h3 className="text-[24px] font-semibold mt-[4px]">Customizable</h3>
            <p className="text-[16px] text-gray-500 text-left">
              Fully customizable display of the item's custom data:
            </p>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">
                Include/exclude item names
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">
                Include/exclude
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={tikMark} alt="tik mark" />
              <p className="text-[16px] text-gray-500">
                Include/exclude custom field names
              </p>
            </div>
          </div>
        </AosAnimation>
        <AosAnimation
          animationType="fade-left"
          duration={2000}
          delay={100}
        >
          <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
            <img src={featureImg4} alt="Store Selection" />
            <h3 className="text-[24px] font-semibold mt-[4px]">
              Store Selection
            </h3>
            <p className="text-[16px] text-gray-500 text-left">
              Have multiple Amazon stores connected to ShipStation? Choose only
              the stores ync.
            </p>
          </div>
        </AosAnimation>
      </div>
        :
        <div className="flex flex-wrap justify-between gap-y-[24px]">
          <AosAnimation
            animationType="fade-right"
            duration={2000}
            delay={100}
          >
            <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
              <img src={featureImg1} alt="Stay in Sync" />
              <h3 className="text-[24px] font-semibold mt-[4px]">Stay in Sync</h3>
              <p className="text-[16px] text-gray-500 text-left">
                Custom data is synced as orders come in to ShipStation. Not on a
                timer, not when you click a button; it's automatic.
              </p>
            </div>
          </AosAnimation>
          <AosAnimation
            animationType="fade-right"
            duration={2000}
            delay={100}
          >
            <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
              <img src={featureImg2} alt="Choose Where Data Goes" />
              <h3 className="text-[24px] font-semibold mt-[4px]">
                Choose Where Data Goes
              </h3>
              <p className="text-[16px] text-gray-500 text-left">
                Sync custom data into any of these sections of a ShipStation order:
              </p>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">Line Item Description</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">Note from Buyer</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">Internal Notes</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">Custom Field 1, 2, or 3</p>
              </div>
            </div>
          </AosAnimation>
          <AosAnimation
            animationType="fade-left"
            duration={2000}
            delay={100}
          >
            <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
              <img src={featureImg3} alt="Customizable" />
              <h3 className="text-[24px] font-semibold mt-[4px]">Customizable</h3>
              <p className="text-[16px] text-gray-500 text-left">
                Fully customizable display of the item's custom data:
              </p>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">
                  Include/exclude item names
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">
                  Include/exclude quantity
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <img src={tikMark} alt="tik mark" />
                <p className="text-[16px] text-gray-500">
                  Include/exclude custom field names
                </p>
              </div>
            </div>
          </AosAnimation>
          <AosAnimation
            animationType="fade-left"
            duration={2000}
            delay={100}
          >
            <div className="sm:max-w-[262px] max-w-full p-[12px] sm:mx-auto mx-[0]">
              <img src={featureImg4} alt="Store Selection" />
              <h3 className="text-[24px] font-semibold mt-[4px]">
                Store Selection
              </h3>
              <p className="text-[16px] text-gray-500 text-left">
                Have multiple Amazon stores connected to ShipStation? Choose only
                the stores you want to sync.
              </p>
            </div>
          </AosAnimation>
        </div>}
    </div >
  );
};

export default Features;
