import React from "react";

const GetStartedCard = () => {
  return (
    <div className="text-center text-white relative mt-[100px]">
      <div className="w-full h-[120px] bottom-[0px] absolute bg-[#313131] z-[-1]"></div>
      <div className="px-[24px]">
        <div className="mt-[-129px] max-w-[1120px] w-full mx-auto py-[48px] bg-gradient-to-b from-[#1387F2] to-[#1A5B97] rounded-[24px] z-50 px-[10px]">
          <p className="sm:text-[44px] text-[32px] leading-[40px] font-medium">
            Get Started with CustomSync Today
          </p>
          <p className="text-[16px] mt-[7px] mb-[24px]">
            Get 7 days of full access to all toolkits. Cancel anytime.
          </p>
          <button className="text-[#435B73] font-bold text-[16px] bg-white px-[16px] py-[8px] rounded-[8px]">
            Start your free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
