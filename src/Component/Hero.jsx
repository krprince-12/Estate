import React from 'react';
import blur from '../assets/bgpic.png';
const Hero = () => {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 mt-0">

    <img
      src='/eli.png'
      alt="Onboarding Automation"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    />
    <div className="relative text-center">
   
      <div className="mb-4 inline-flex items-center px-4 py-2 bg-black/80 rounded-full">
      <span className="bg-red-700 text-white px-4 py-1 rounded-full text-sm font-medium">New</span>
        <span className="text-sm text-gray-300">Automate your Onboarding</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold overflow-hidden whitespace-nowrap">
        <span className="text-pink-400 overflow-hidden">Onboarding.</span>{" "}
        <span className="text-cyan-400 overflow-hidden">Automated.</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Turn leads into clients on autopilot with seamless <br /> onboarding automation.
      </p>
      </div>
      <button className="mt-6 px-6 pl-90 py-3 text-lg font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition">
        Book a Call
      </button>
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-6">
      <img
      src='/blur2.png'
      alt="Onboarding Automation"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    />
      <div className="mt-3">
        <img src={blur} alt="Onboarding Illustration" className="mx-auto mt-4" />
      </div>
</div>
    </>
  );
};

export default Hero;