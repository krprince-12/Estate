import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full bg-gray-900 text-white flex flex-col items-center justify-center px-6 relative top-0"
      >
        <nav className="w-full flex items-center justify-between py-4 px-8 border border-gray-800 mt-10 rounded-xl bg-gray-800/20">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Logo" className="h-9 w-10" />
            <span className="text-xl font-semibold">LEFTLOGO</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-400">
            <a href="#" onClick={() => handleScroll('pricing')} className="hover:text-white">Pricing</a>
            <a href="#" onClick={() => handleScroll('about')} className="hover:text-white">About Us</a>
            <a href="#" onClick={() => handleScroll('contact')} className="hover:text-white">Contact Us</a>
            <a href="#" onClick={() => handleScroll('hero')} className="hover:text-white">How it works</a>
            <a href="#" onClick={() => handleScroll('faq')} className="hover:text-white">FAQ'S</a>
          </div>
          <button className="hidden md:block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:opacity-90">
            Book Discovery call →
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 text-gray-400 py-4">
            <a href="#" onClick={() => handleScroll('pricing')} className="hover:text-white">Pricing</a>
            <a href="#" onClick={() => handleScroll('about')} className="hover:text-white">About Us</a>
            <a href="#" onClick={() => handleScroll('contact')} className="hover:text-white">Contact Us</a>
            <a href="#" onClick={() => handleScroll('hero')} className="hover:text-white">How it works</a>
            <a href="#" onClick={() => handleScroll('faq')} className="hover:text-white">FAQ'S</a>
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:opacity-90">
              Book Discovery call →
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;