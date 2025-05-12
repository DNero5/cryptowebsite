"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GetStarted() {
  const cards = [
    {
      title: "Buy crypto at real price",
      description:
        "Easily purchase Bitcoin, Ether, Tether and other major digital currencies with VISA/Mastercard or by a bank transfer.",
      button: "Buy Crypto",
      image: "/getimg1.png",
    },
    {
      title: "Margin trade with low fees",
      description:
        "Trade a wide range of markets with our award-winning platform. Enjoy low fees, fast execution, and advanced tools.",
      button: "Start Trading",
      image: "/getimg2.png",
    },
    {
      title: "BTC Scalper",
      description:
        "Gain over +210% with our automated BTC scalping strategy. 155 active trades and growing.",
      button: "View Details",
      image: "/getimg3.png",
    },
    {
      title: "Current APY rates",
      description:
        "Earn interest with BTC and USDT at competitive APY rates. Flexible earning options available.",
      button: "Start Earning",
      image: "/getimg4.png",
    },
  ];

  return (
    <section className="bg-gray-600 text-white py-10">
      <div className="text-center ">
        <h1
          className="text-5xl font-bold xl:font-[Bahnschrift] xl:text-[60px] xl:leading-[64px] xl:tracking-[-0.02em]
             md:font-[Abhaya Libre] md:text-[32px] md:leading-[42px] md:tracking-[-0.02em]
             font-[Abhaya Libre] text-[32px] leading-[42px] tracking-[-0.02em]"
        >
          Let's get started
        </h1>
        <p className="font-[Abhaya Libre] text-[16px] mt-5 leading-[30px] tracking-[-0.02em] mb-6">
          Choose one of the following products that suits your needs!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 text-white rounded-3xl shadow-2xl p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full h-80 mb-6">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h2 className="text-3xl font-bold mb-3 text-center">
              {card.title}
            </h2>
            <p className="text-sm xl:text-xl text-gray-300 mb-4 text-center">
              {card.description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-sm">
              {card.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
