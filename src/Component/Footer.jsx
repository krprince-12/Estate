import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';
const Footer = () => {
  return (
<>
    <motion.footer 
    initial={{opacity:0,y:-100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.7}}
    className="bg-gray-900 text-gray-400 py-6 px-3">
    <div className=' w-full border border-gray-800 rounded-xl mt-10 bg-gray-800/20 py-20'>
      <div className="max-w-6xl mx-auto" >
      <div className="mb-6 md:mb-0">
            <h2 className="text-white font-bold text-xl flex items-center">
              <span className="mr-2"></span> LEFTLOGO
            </h2>
            
          </div>
          
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-8 mt-10">
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left ml-10">
            <div>
              <h3 className="text-white font-semibold">General</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold">Case Studies</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Content Marketing</a></li>
                <li><a href="#" className="hover:text-white">Print-on-Demand</a></li>
                <li><a href="#" className="hover:text-white">Conversion Rate Optimization</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Done-for-you systems</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-2 md:mt-1">
            <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
              <FaTwitter />
            </a>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 mt-10 mb-0">
          &copy;  Copyright 2025. All rights reserved by <span></span>
          <span className="text-white font-semibold">LEFTLOGO</span>
        </div>
    
      </div>
      </div>
    </motion.footer>


    </>
  )
}

export default Footer