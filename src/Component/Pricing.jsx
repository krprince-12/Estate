import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 sm:p-10"
    >
      <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium ml-4 sm:ml-20">PRICING</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-5 ml-4 sm:ml-20">Your investment</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4">

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold">Standard</h3>
          <p className="text-2xl font-bold my-2">$6,900/<span className="text-sm">month</span></p>
          <p className="text-sm">Billed monthly</p>
          <button className="border border-white text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-gray-900 transition">Get started</button>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited requests
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited users
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Pause or cancel anytime
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold">Ad-hoc</h3>
          <p className="text-2xl font-bold my-2">Custom</p>
          <p className="text-sm">For one-off needs, contact sales.</p>
          <button className="border border-white text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-gray-900 transition">Contact sales</button>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Documentation with every project
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              45-minute project consultation
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Discounted subscription transition
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;