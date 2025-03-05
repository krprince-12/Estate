import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center w-full py-16 md:py-32 px-4 md:px-8 border border-gray-800 rounded-xl mt-10 bg-gray-800/20">
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium overflow-hidden whitespace-nowrap">
          AUTOMATE YOUR BUSINESS
        </span>
      
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 break-words ">
          We build hands-off growth systems for B2B founders
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-3xl mx-auto break-words">
          Find the <em>perfect</em> offer, automate your lead acquisition, & solve your project
          management woes—all while scaling your B2B business to 8 figures.
        </p>
      
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg border-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
            Book intro call →
          </button>
          <button className="border border-gray-400 text-white px-6 py-3 rounded-xl font-medium hover:shadow-blue-500/50 transition duration-300 ease-in-out">
            View pricing
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;