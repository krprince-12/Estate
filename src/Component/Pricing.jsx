import React from 'react';
const Pricing = () => {
  return (
    <>
      <div className="relative z-10 text-center">
      <div className="relative bg-black text-white overflow-hidden">
      <img
        src="/bg.png"
        alt="Top Background"
        className="absolute top-0 left-0 w-full pointer-events-none"
      />
        <h1 className="text-2xl sm:text-2xl font-bold text-red-600 mb-4">Pricing</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Choose the right plan to meet your SEO needs and start optimizing today.
        </p>
        
        <div className="relative flex items-center justify-center min-h-screen bg-black px-2 sm:px-20 ">
          <img
            src="/pricing.png"
            alt="Onboarding Automation"
            className="w-3/4 h-3/4 ml-40"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Pricing;