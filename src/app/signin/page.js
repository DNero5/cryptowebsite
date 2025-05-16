"use client";

import React from "react";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left: Form Section */}
      <div className="flex-1 bg-gray-700 flex items-center justify-center">
        <div className="max-w-md w-full px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2" />
            Access Your Trading Hub
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white">Remember me</span>
              </label>
              <a
                href="#"
                className="text-orange-500 hover:underline font-medium"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Sign In
            </button>

            <div className="text-center text-sm mt-4 text-white">
              <p>Don&apos;t have an account?</p>
              <a
                href="/signup"
                className="text-orange-500 font-semibold hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right: Image/Info Section */}
      <div className="hidden md:flex w-1/2 bg-blue-700 relative text-white">
        <Image
          src="/signup.png"
          alt="Trading"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-10 h-full w-full">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-32 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Step Into the World of <br /> Smart Trading
          </h2>
          <p className="max-w-sm text-sm opacity-90">
            Enter the realm of BitWealth, where cutting-edge blockchain
            technology meets seamless trading experiences. Stay ahead with our
            secure, intuitive platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
