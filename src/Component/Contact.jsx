import React from "react";

const Contact = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/eli.png')" }}
    >
      <div className="text-center max-w-lg sm:max-w-2xl">
        <h1 className="text-xl sm:text-2xl font-bold text-red-800">Onboarding</h1>
        <h2 className="text-lg sm:text-2xl font-semibold mt-2">Automated for Everyone</h2>
        <p className="mt-4 text-base sm:text-lg text-green-800">
          Join our newsletter and discover how onboarding automation lets our
          clients kick back, relax, and watch their onboarding handle
          itself—effortlessly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center">
          <input
            type="text"
            placeholder="Your email"
            className="p-3 w-full sm:w-64 text-black rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none"
          />
          <button className="bg-pink-900 text-black px-4 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-semibold hover:bg-gray-300 cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
