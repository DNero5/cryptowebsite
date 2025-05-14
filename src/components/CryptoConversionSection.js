"use client";

import React from "react";

const conversions = [
  { pair: "BTC → USDT", rate: "1 BTC = 85162 USDT", icon: "🟠" },
  { pair: "ETH → USDT", rate: "1 ETH = 2200.64 USDT", icon: "🟣" },
  { pair: "USDT → USDT", rate: "1 USDT = 0.999476 USDT", icon: "🟢" },
  { pair: "XRP → USDT", rate: "1 XRP = 2.15 USDT", icon: "⚫" },
  { pair: "BNB → USDT", rate: "1 BNB = 608.22 USDT", icon: "🟡" },
  { pair: "SOL → USDT", rate: "1 SOL = 139.66 USDT", icon: "🔵" },
  { pair: "USDC → USDT", rate: "1 USDC = 0.999866 USDT", icon: "🔘" },
  { pair: "DOGE → USDT", rate: "1 DOGE = 0.020325 USDT", icon: "🐕" },
  { pair: "ADA → USDT", rate: "1 ADA = 0.634275 USDT", icon: "🔷" },
];

const CryptoConversionSection = () => {
  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Top Crypto Conversions at Your Fingertips
      </h2>

      {/* Subtext */}
      <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-12">
        Explore the most popular cryptocurrency conversions on BitWealth. Our platform provides you with the latest,
        most sought-after exchange rates, ensuring you’re always informed about high-performing currencies.
        Efficient, accurate, and designed for savvy traders like you.
      </p>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {conversions.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-white text-black rounded-xl p-4 shadow-sm"
          >
            <div>
              <div className="text-sm font-semibold">{item.pair}</div>
              <div className="text-xs text-gray-600">{item.rate}</div>
            </div>
            <div className="text-3xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoConversionSection;
