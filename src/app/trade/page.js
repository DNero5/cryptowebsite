"use client";

import React from "react";
import CryptoMarquee from "@/components/CryptoMarquee";
import TradingViewChart from "@/components/TradingViewChart";
import CryptoConversionSection from "@/components/CryptoConversionSection";
import CryptoMarket from "@/components/CryptoMarket";

const Page = () => {
  return (
    <section className="w-full min-h-[120vh] px-6 md:px-16 py-16 bg-gray-600 text-center text-white">
      {/* Marquee */}
      <div className="w-full mb-5">
        <CryptoMarquee />
      </div>

      {/* Heading */}
      <h1
        className="font-['Abhaya_Libre'] text-[32px] leading-[42px] tracking-[-0.02em] font-bold
                   md:text-[32px] md:leading-[42px]
                   xl:text-5xl xl:leading-[64px] xl:font-['Bahnschrift']"
      >
        Trade Overview
      </h1>

      <TradingViewChart />

      {/* Description */}
      <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-200">
        Stay updated with the latest market movements and insights. Analyze key
        trends and make informed trading decisions.
      </p>
       <CryptoConversionSection />
       <CryptoMarket />
    </section>
   
  );
};

export default Page;
