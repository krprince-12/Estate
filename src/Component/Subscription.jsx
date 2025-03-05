import React from 'react';
import pic from '/social.avif';
import { motion } from 'framer-motion';

const Subscription = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mt-16 text-center">
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">SUBSCRIPTION STEPS</span>
        <h2 className="text-4xl font-bold mt-6">Here's how it works</h2>
      </div>

      <div className="relative flex justify-center mt-12">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={pic} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 rounded-lg"
          />
        </div>

        <div className="relative bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg w-full">
          {[
            {
              title: "Discovery Call",
              description: "We do discovery calls to understand your business needs, identify automation opportunities, and ensure we’re the right fit to help you scale efficiently.",
              icon: "✅"
            },
            {
              title: "Onboarding",
              description: "Onboarding is just a 30-minute call—quick, painless, and the only one we insist on. We can get it set up as soon as tomorrow—no paperwork, no hoops to jump through!",
              icon: "✅"
            },
            {
              title: "Add projects",
              description: "We run everything on a simple, self-serve ClickUp board—add projects, drop comments, check progress, or just sit back and let us handle the tasks for you. Plus, you'll have a dedicated Slack channel for direct communication, so we're always just a message away!",
              icon: "✅"
            },
            {
              title: "Weekly consultations",
              description: "We offer optional 45-minute weekly consultations for brainstorming, problem-solving, and keeping everything running smoothly.",
              icon: "🔲"
            }
          ].map((step, index) => (
            <div className="flex items-start gap-4 mt-6" key={index}>
              <div className="flex flex-col items-center">
                <div className="w-10 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                {index < 3 && <div className="w-2 h-20 bg-gray-500"></div>}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Subscription;