"use client";

import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gray-700 relative text-white">
        <div className="absolute inset-0 bg-gradient-to-b z-10" />
        <img
          src="/signup.png"
          alt="Trading background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 p-10 flex flex-col justify-center max-w-xl mx-auto text-center">
          <img src="/logo.png" alt="Logo" className="w-32 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Join Today & Receive up to <br />
            <span className="text-orange-400">100 USDT Bonus</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Embark on a journey with BitWealth, where innovation meets
            opportunity in the dynamic world of blockchain and cryptocurrency.
            Position yourself for success with our advanced, secure platform.
            Begin your trading adventure with a welcome bonus!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-700">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Sign Up Your Account
          </h2>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-white text-center">
            Already registered?{" "}
            <a href="/signin" className="font-semibold text-white">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
