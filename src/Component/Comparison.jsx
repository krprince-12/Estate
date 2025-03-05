import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4"
    >
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-800 w-full max-w-4xl">
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">COMPARISON</span>
        <h2 className="text-2xl font-bold mb-4 mt-5">How do we compare?</h2>
        <table className="min-w-full bg-gray-800">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-sm font-bold"></th>
              <th className="py-3 px-4 text-left">FREELANCE <span className="text-red-500">✖️</span></th>
              <th className="py-3 px-4 text-left">IN-HOUSE <span className="text-red-500">✖️</span></th>
              <th className="py-3 px-4 text-left">OTHER AGENCIES <span className="text-red-500">✖️</span></th>
              <th className="py-3 px-4 text-left">LEFTCLICK <span className="text-green-500">✔️</span></th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Monthly cost", values: ["$7,000+", "$10,000+", "$10,000+", "$6,900/mo!"] },
              { label: "Time to hire", values: ["Days/weeks", "Weeks/months", "Weeks/months", "A few hours!"] },
              { label: "Skill level", values: ["Novice or junior", "Good (hopefully)", "Rolling the dice", "COO-level!"] },
              { label: "First delivery", values: ["Several weeks", "Several weeks", "Several weeks", "2-3 days!"] },
              { label: "Termination", values: ["Significant", "Severance + headache", "Significant", "One click + $0!"] },
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3 px-4">{row.label}</td>
                {row.values.map((value, idx) => (
                  <td key={idx} className="py-3 px-4">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Comparison;