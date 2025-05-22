"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "David Kim",
    title: "Crypto Enthusiast",
    review:
      "What I love about MarketTop is the community aspect. It's not just a trading platform; it's a hub of knowledge and insights. The support team is fantastic, always ready to help with any queries.",
    rating: 4,
    totalReviews: 885,
  },
  {
    name: "Elena Martinez",
    title: "Blockchain Analyst",
    review:
      "MarketTop's tools and resources are top-tier. It's helped me stay ahead of market trends and make smarter trading decisions.",
    rating: 5,
    totalReviews: 1143,
  },
  {
    name: "James Liu",
    title: "Crypto Investor",
    review:
      "MarketTop has transformed the way I manage my assets. I appreciate the transparent analytics and responsive customer service.",
    rating: 4,
    totalReviews: 932,
  },
];

export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="bg-gray-600  xl:py-40 px-6 flex flex-col items-center text-center transition-all duration-500">
      <div className="relative mt-10">
        <FaQuoteRight className="text-orange-200 text-6xl absolute xl:-top-10 xl:-right-10 -top-5 -right-5  " />
        <h2 className="text-white mt-10
              xl:font-[Bahnschrift] xl:font-bold xl:text-[60px] xl:text-left xl:leading-[64px] xl:tracking-[-0.02em]
              md:font-[Abhaya Libre] md:font-semibold md:text-[32px]  md:leading-[42px] md:tracking-[-0.02em]
              font-[Abhaya Libre] font-semibold text-[42px] leading-[42px] text-center tracking-[-0.02em]">
          Success Stories from Our Clients
        </h2>
        <p className="max-w-2xl text-sm md:text-base text-gray-600 mb-12">
          Discover how MarketTop has empowered individuals and businesses in their crypto trading and investment journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="bg-black text-white rounded-full w-64 h-64 flex flex-col items-center justify-center">
          <p className="text-xl font-bold">Amazing !</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-orange-500 ${i >= testimonial.rating ? "opacity-40" : ""}`}
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-blue-400 font-semibold">
            {testimonial.totalReviews} Reviews
          </p>
        </div>

        <div className="max-w-2xl text-left min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                {testimonial.review}
              </p>
              <hr className="my-4" />
              <div>
                <p className="font-bold text-2xl">{testimonial.name}</p>
                <p className="text-sm text-white">{testimonial.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-orange-400 rounded-full hover:bg-orange-100 transition"
            >
              <IoIosArrowBack className="text-orange-500" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 border border-orange-400 rounded-full hover:bg-orange-100 transition"
            >
              <IoIosArrowForward className="text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
