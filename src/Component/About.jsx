import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center w-full py-10 px-4 sm:px-8 border border-gray-800 rounded-xl mt-10 bg-gray-800/20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mt-10">ABOUT US</h2>
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mt-6 inline-block">AUTOMATE YOUR BUSINESS</span>
        <p className="text-gray-400 text-base sm:text-lg mt-4 mb-10">
          At Automiclly, we build hands-off growth systems for B2B founders who’d rather scale their business than get buried under a mountain of repetitive tasks. Think of us as your business’s autopilot—automating everything from cold email outreach and lead management to project workflows, customer relations, hiring, and analytics.
          <br /><br />
          We don’t just create automations; we build smart, self-sustaining systems that keep your business running (even when you’re off the clock).
          <br /><br />
          Our goal? To free you from the endless cycle of manual work so you can focus on the big picture—growth, strategy, and maybe even taking a vacation for once. Whether it's streamlining operations, boosting productivity, or making sure no lead ever slips through the cracks, we’ve got you covered. Less clicking, more scaling—that’s the Automiclly way. 🚀
        </p>
      </div>
    </motion.div>
  );
}

export default About;