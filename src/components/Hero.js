"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[80vh] xl:min-h-screen overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/herobanner.png"
          alt="Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 bg-black/50 w-full h-full flex items-center justify-center p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col justify-center text-white items-center md:items-start ml-0 xl:ml-[-80px]">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-white font-bold tracking-[-0.02em]
              text-3xl md:text-4xl xl:text-[60px] xl:leading-[64px] xl:font-[Bahnschrift] text-center md:text-left"
            >
              Trade Stocks, Crypto, Currencies, Options, Forex and More.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-[18px] md:text-[20px] xl:text-[22px] mt-5 leading-[30px] tracking-[-0.02em] text-center md:text-left"
            >
              Join millions of users from beginners to professionals who buy
              crypto, trade, and manage their investments smarter with Top
              Market Trade.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl text-lg transition duration-300"
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
