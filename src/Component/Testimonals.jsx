import React from 'react';
import Logos from '../assets/Logos.png';
const Testimonals = () => {
  return (
    <div className="bg-black text-blue text-center py-12">
      <h2 className="mb-4 text-lg font-semibold">
        Trusted by one of India’s most innovative teams
      </h2>
      <img 
        src={Logos} 
        alt="Logos" 
        className="mx-auto mb-4 w-200 h-auto"
      />
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="absolute inset-0 w-300 h-900">
          <img 
            src={Logos} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonals;