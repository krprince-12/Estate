import React from "react";

const Onboarding = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black px-2 sm:px-20 ">
      <img
        src="/group.png"
        alt="Onboarding Automation"
        className="w-1/2 h-1/2 ml-40 "
      />

      <div className="absolute top-1/3 left-4 sm:left-10 text-green-700 ml-30 ">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold overflow-hidden whitespace-nowrap ml-40">
          Automating <span className="text-gray-300">~90%</span> of <br /> your onboarding process.
        </h1>
        <p className="mt-3 text-sm sm:text-lg text-gray-400 ml-40">
          We hunt, engage, and warm up your prospects, <br /> you seal the deal.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
