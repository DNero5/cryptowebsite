import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CryptoExchangeIntro() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-600 text-center">
      {/* Heading */}
      <h1 className="xl:text-5xl font-bold xl:font-[Bahnschrift] xl:leading-[64px] xl:tracking-[-0.02em]
             md:font-[Abhaya Libre] md:text-[32px] md:leading-[42px] md:tracking-[-0.02em]
             font-[Abhaya Libre] text-[32px] leading-[42px] tracking-[-0.02em]">
        Advanced Currency Exchange
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-white text-sm md:text-base leading-relaxed mb-8">
        Navigate the cryptocurrency market with precision. Our platform offers real-time pricing, 
        comprehensive market analysis, and trend forecasts to inform and enhance your trading strategy. 
        Stay ahead in the dynamic world of crypto with FinFunder’s insightful exchange tools.
      </p>

      {/* Explore Button */}
      <div className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full cursor-pointer transition-all duration-300 mb-12">
        <span>Explore Trades</span>
        <FaArrowRight className="w-4 h-4" />
      </div>

      {/* Image Below */}
      <div className="flex justify-center">
        <img 
          src="/elonmusk.png" 
          alt="Cryptocurrency listing" 
          className="max-w-full rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
