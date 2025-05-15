"use client";

import React from "react";
import Image from "next/image";

const conversions = [
  {
    pair: "BTC → USDT",
    rate: "1 BTC = 85162 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png", // BTC
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png", // USDT
    ],
  },
  {
    pair: "ETH → USDT",
    rate: "1 ETH = 2200.64 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png", // ETH
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png", // USDT
    ],
  },
  {
    pair: "USDT → USDT",
    rate: "1 USDT = 0.999476 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "XRP → USDT",
    rate: "1 XRP = 2.15 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", // XRP
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "BNB → USDT",
    rate: "1 BNB = 608.22 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/825/large/binance-coin-logo.png", // BNB
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "SOL → USDT",
    rate: "1 SOL = 139.66 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/4128/large/solana.png", // SOL
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "USDC → USDT",
    rate: "1 USDC = 0.999866 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/6319/large/USD_Coin_icon.png", // USDC
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "DOGE → USDT",
    rate: "1 DOGE = 0.020325 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png", // DOGE
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
  {
    pair: "ADA → USDT",
    rate: "1 ADA = 0.634275 USDT",
    icons: [
      "https://coin-images.coingecko.com/coins/images/975/large/cardano.png", // ADA
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
    ],
  },
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
        Explore the most popular cryptocurrency conversions on BitWealth. Our
        platform provides you with the latest, most sought-after exchange rates,
        ensuring you’re always informed about high-performing currencies.
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
            <div className="flex space-x-2">
              {item.icons.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  width={20}
                  height={20}
                  alt="crypto-icon"
                  className="w-6 h-6 rounded-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoConversionSection;
