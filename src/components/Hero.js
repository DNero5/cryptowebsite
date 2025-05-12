"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[80vh] xl:min-h-screen overflow-hidden">
      {/* Background Banner Image */}
      <img
        src="/herobanner.png"
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-cover object-[center_30%]"
      />

      {/* Content Overlay */}
      <div className="relative z-10 bg-black/50 w-full h-full flex items-center justify-center p-4 sm:p-8">
        <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full w-full px-4 sm:px-6">
          <div className="flex flex-col justify-center text-white items-center sm:items-start">
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-white
              xl:font-[Bahnschrift] xl:font-bold xl:text-[60px] xl:text-left xl:leading-[64px] xl:tracking-[-0.02em]
              md:font-[Abhaya Libre] md:font-semibold md:text-[32px] md:leading-[42px] md:tracking-[-0.02em]
              font-[Abhaya Libre] font-semibold text-[42px] leading-[42px] text-center tracking-[-0.02em]"
            >
              Trade Stocks, Crypto, Currencies, Options, Forex and More.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="font-[Abhaya Libre] text-[22px] mt-5 leading-[30px] xl:text-left text-center tracking-[-0.02em] mb-6"
            >
              Join millions of users from beginners to professionals who buy
              crypto, trade, and manage their investments smarter with Top
              Market Trade.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl text-lg transition duration-300 w-fit"
            >
              Open Free Account
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
