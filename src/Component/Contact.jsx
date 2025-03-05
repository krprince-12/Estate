import React from "react";
const Contact= () => {

  return (
    <div className="bg-gray-900 text-white  flex flex-col items-center justify-center px-4">
    
      <div className="text-center w-full py-35 px-8 border border-gray-800 rounded-xl bg-gray-800/20 mt-10">
      <h2 className=" md:text-4xl font-bold overflow-hidden whitespace-nowrap text-blue-700 mt-20 ">CONTACT US</h2>
      <br></br>
        <h2 className=" md:text-4xl font-bold overflow-hidden whitespace-nowrap">
        Kick things off with a quick{" "}<br></br>
          <span className="text-white">30-minute discovery call today!</span>
        </h2>

        <p className="text-gray-400 text-lg mt-4">
        A friendly, no-commitment chat and consultation with Us at Automiclly{" "}
          <span className="inline-block">👋</span> Book your call now.
        </p>
      <button 
      className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg text-lg font-medium hover:bg-teal-400 transition"> 
       Schedule your call now!→
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-10">No credit card required.</p>
      </div>
    </div>

  );
};

export default Contact;
