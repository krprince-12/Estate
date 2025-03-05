import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full border border-gray-800 rounded-xl mt-10 bg-gray-800/20 py-10 md:py-20">
        <div className="text-center">
          <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">SERVICES</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6">What our clients get</h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Lead generation", desc: "Scalable, affordable outbound & marketing systems to grow your company on autopilot." },
            { title: "Project management", desc: "Bespoke project management systems used by 8-figure agencies & SaaS companies." },
            { title: "Hiring systems", desc: "Automated processes that source, contact, and evaluate candidates for you." },
            { title: "AI service fulfillment", desc: "AI that automates key steps in your fulfillment process to reduce payroll." },
            { title: "CRM buildouts", desc: "Sales systems to track, iterate, and scale growth just like an 8-figure company." },
            { title: "SOPs & consultation", desc: "We’ll help clarify your offer, show you what 8-figure companies are doing, and build you a library of SOPs." },
          ].map((service, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl text-left transition-transform transform hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;