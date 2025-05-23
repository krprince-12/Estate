import React from "react";

const Footer = () => {
  return (
    <div
      className="relative bg-black text-white p-10 md:p-20 min-h-screen"
      style={{
        backgroundImage: "url('/footer.png')"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-2xl font-bold">
            So? What are you going to do about it?
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            (Fix your broken systems? Or Just dream?)
          </p>
          <button className="mt-5 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            Book a Call
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col md:flex-row justify-between">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">CONTACT US</h3>
            <p className="mt-2 font-bold">Automically</p>
            <p className="text-gray-400">HEAD OFFICE</p>
            <p className="text-gray-400">Nayapalli, Bhubaneshwar</p>

            <h3 className="mt-5 text-xl font-semibold">PHONE</h3>
            <p className="text-gray-400">+91 84259 87371</p>
            <p className="text-gray-400">+91 73600 91805</p>

            <h3 className="mt-5 text-xl font-semibold">EMAIL</h3>
            <p className="text-gray-400">info@automically.com</p>

            <div className="flex mt-4 space-x-3">
              <a href="#" className="text-white hover:text-gray-400">
                🔗
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                📺
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                🐦
              </a>
            </div>
          </div>

          {/* Business Links */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-xl font-semibold">BUSINESS</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  HOW IT WORKS?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  PRICING
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 mb-0">
              &copy; Copyright 2025. All rights reserved by <span></span>
              <span className="text-white font-semibold">AUTOMICLLY</span>
            </div>
    </div>
  );
};

export default Footer;
