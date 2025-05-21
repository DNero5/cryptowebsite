"use client";

import React from "react";
import CryptoMarquee from "@/components/CryptoMarquee";
import Navbar from "@/components/Navbar";

const investmentPlans = [
  {
    name: "Starter",
    duration: "15 Hours",
    interestRate: "2%",
    termsLink: "#",
    limit: "$1000",
    features: [
      "Ideal for Beginners",
      "Low-Risk Introduction",
      "Quick Return Period",
    ],
    totalReturn: "30%",
    recommended: true,
  },
  {
    name: "Growth",
    duration: "45 Days",
    interestRate: "3.5 USD",
    termsLink: "#",
    limit: "$2000 - $5000",
    features: [
      "Accelerated Earnings",
      "Medium-Term Growth",
      "For Experienced Investors",
    ],
    totalReturn: "157.5 USD + capital",
    recommended: false,
  },
  {
    name: "Advanced",
    duration: "60 Years",
    interestRate: "4.5%",
    termsLink: "#",
    limit: "$6000 - $20000",
    features: [
      "High Returns for Experts",
      "Long-Term Investment",
      "Substantial Capital Growth",
    ],
    totalReturn: "270% + capital",
    recommended: true,
  },
  {
    name: "Pro",
    duration: "90 Days",
    interestRate: "6%",
    termsLink: "#",
    limit: "$10000 - $50000",
    features: [
      "Professional Grade",
      "Balanced Risk & Reward",
      "Ideal for Diversified Portfolios",
    ],
    totalReturn: "540% + capital",
    recommended: false,
  },
  {
    name: "Elite",
    duration: "120 Days",
    interestRate: "8%",
    termsLink: "#",
    limit: "$50000+",
    features: [
      "Exclusive Access",
      "Maximum Yield",
      "Tailored Investment Support",
    ],
    totalReturn: "960% + capital",
    recommended: true,
  },
  {
    name: "Custom",
    duration: "Flexible",
    interestRate: "Negotiable",
    termsLink: "#",
    limit: "Based on Agreement",
    features: [
      "Investor-Defined Terms",
      "Flexible Capital Input",
      "Direct Manager Support",
    ],
    totalReturn: "Custom Agreement",
    recommended: false,
  },
];

const Page = () => {
  return (
    <>
      <section className="w-full min-h-[120vh] px-6 md:px-16 py-16 bg-gray-600 text-center text-white">
         <Navbar />
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
        Home Plans
        </h1>

        {/* Description */}
        <p className=" max-w-2xl mx-auto text-base md:text-lg text-gray-200">
          Investment Strategies Flexible Options for Every Trading Ambition.
          Plan aims to cater to different user needs, from those just starting
          in crypto trading to seasoned investors, providing clear options and
          benefits for each pricing tier.
        </p>

          {/* Investment Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-6 p-6 bg-[#f9f9f9]">
        {investmentPlans.map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg bg-white p-6 flex flex-col justify-between border border-gray-100"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-orange-600">{plan.name}</h2>
                {plan.recommended && (
                  <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full">
                    RECOMMENDED
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.duration}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Interest Rate: <strong>{plan.interestRate}</strong>
              </p>
              <a href={plan.termsLink} className="text-sm text-orange-500 underline">
                Terms and Policies
              </a>

              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Investment amount limit:</strong> {plan.limit}
                </p>
                {plan.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>

              <p className="mt-4 font-semibold text-gray-800">
                Total Return : <span className="text-green-600">{plan.totalReturn}</span>
              </p>
            </div>

            <button className="mt-6 bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800">
              Invest Now
            </button>
          </div>
        ))}
      </div>
      </section>

    
    </>
  );
};

export default Page;
