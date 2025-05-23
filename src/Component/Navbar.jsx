import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-0"
    >
      <div className="flex flex-wrap justify-between items-center w-full py-4 px-4 sm:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-white text-lg font-bold">automiclly</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-11 border border-gray-400 px-4 py-2 rounded-full text-sm">
          <Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Services
          </Link>
          <Link to="how-it-works" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            How it Works
          </Link>
          <Link to="pricing" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Contact Us
          </Link>
        </div>

        {/* Download Button */}
        <button className="hidden md:block border border-gray-400 text-gray-400 hover:text-white hover:border-white px-4 py-1 rounded transition duration-300 cursor-pointer">
          Download Brochure
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-col items-center space-y-2 mt-4">
          <Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Services
          </Link>
          <Link to="how-it-works" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            How it Works
          </Link>
          <Link to="pricing" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
            Contact Us
          </Link>
          <button className="border border-gray-400 text-gray-400 hover:text-white hover:border-white px-4 py-1 rounded transition duration-300 cursor-pointer">
            Download Brochure
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;