"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="employees" className="bg-white  md:max-h-[1197] ">
      {/* Footer Section */}
      <footer className="bg-gray-600 text-white max-w-full xl:mt-10  flex flex-col items-center relative py-10">
        {/* CTA Banner inside Footer */}
        <div className="absolute -top-11 xl:-top-30 md:-top-16 hidden  md:py-9 bg-gradient-to-r from-gray-600 via-white to-blue-600 text-black  py-3 xl:py-10 px-6 rounded-lg w-[90%] xl:max-w-[1200px] xl:flex flex-col xl:flex-row md:flex-row items-center justify-between">
          <div>
            <h3 className="xl:text-3xl text-sm md:text-base md:font-inter md:font-semibold font-bold lg:leading-8 tracking-[-0.02em]">
              Subscribe to our newsletter for the latest crypto trends,
              <br />
              BitWealth updates,and exclusive insights.
            </h3>

            <p className="xl:text-sm font-bold gap-1 font-roboto text-xs mt-2 lg:opacity-80 xl:space-x-4 flex flex-wrap items-center">
              BitWealth is your trusted partner in navigating the crypto world.
              <br />
              We&apos;re here to assist you 24/7 with any queries and provide
              support
            </p>
          </div>
          {/* desktop button */}
          <Button
            text="SEND US A MESSAGE"
            className="border-2 border-white hidden xl:block md:hidden"
          />

          {/* tablet button */}
          <Button
            text="MESSAGE US"
            className="border-4 text-xs font-inter font-medium border-[#D6CDF9] xl:hidden md:block hidden whitespace-nowrap"
          />
        </div>

        <div className=" w-full flex flex-row justify-center  mt-10 md:mt-20 ">
          <div className="px-5 xl:px-20 md:px-10 w-full">
            {/* Brand Section */}
            <div className="flex items-center justify-between w-full mb-6">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={220}
                height={250}
                className="h-auto w-[150px] md:w-[450px] xl:w-[150px] object-contain"
              />
              {/* mobile button */}
              <Button
                text="MESSAGE US"
                className="border-4 text-xs font-inter  font-medium border-[#D6CDF9] xl:hidden md:hidden whitespace-nowrap"
              />
            </div>

            {/* Main Footer Content */}
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-full">
              {/* Links Section */}
              <div className="flex flex-wrap xl:flex-nowrap justify-between w-full xl:gap-40 md:gap-24">
                {/* Digital Design */}
                <div className="mb-5">
                  <h4 className="xl:text-2xl text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative xl:whitespace-nowrap">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Important Link
                  </h4>

                  <ul className="xl:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3 xl:whitespace-nowrap">
                    <li>Home</li>
                    <li>Trade</li>
                    <li>Pricing</li>
                    <li>Features</li>
                  </ul>
                </div>

                {/* Development */}
                <div>
                  <h4 className="xl:text-2xl text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Quick Link
                  </h4>
                  <ul className="xl:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3 xl:whitespace-nowrap">
                    <li>Privacy Policy</li>
                    <li>WordPress Development</li>
                    <li>Terms & Conditions</li>
                    <li>Contact</li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div>
                  <h4 className="xl:text-xl xl:font-bold font-roboto font-bold text-sm">
                    Let&apos;s do it!
                  </h4>

                  <div className="flex space-x-4 xl:mt-5 mt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="text-[#4267B2] w-5 h-5 xl:w-7 xl:h-7 hover:opacity-80 transition" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-[#1DA1F2] w-5 h-5 xl:w-7 xl:h-7 hover:opacity-80 transition" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-[#C13584] w-5 h-5 xl:w-7 xl:h-7 hover:opacity-80 transition" />
                    </a>
                  </div>

                  <div className="md:hidden lg:block">
                    <p className="xl:mt-10 mt-7 xl:text-xl xl:font-semibold xl:opacity-80 text-sm font-inter font-medium relative after:content-[''] after:w-16 after:h-[2px] xl:after:block after:bg-[#8568ED] after:mt-1 after:absolute after:left-0 after:hidden">
                      hello@sitiodesign.com
                    </p>
                    <p className="xl:mt-3 xl:text-xl xl:font-semibold xl:opacity-80 text-sm font-inter font-medium">
                      +234 8160304426
                    </p>
                  </div>
                </div>

                <div className="md:block lg:hidden hidden">
                  <h4 className="xl:text-2xl  text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative whitespace-nowrap">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Product Strategy
                  </h4>
                  <ul className="lg:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3">
                    <li>Market Research</li>
                    <li>Customer Strategy</li>
                    <li>Business Strategy</li>
                    <li>Competitor Analysis</li>
                    <li>User Research</li>
                  </ul>
                </div>

                <div className="md:block xl:hidden hidden md:mr-64 ">
                  <p className="text-sm font-inter font-medium relative after:content-[''] after:w-16 after:h-[2px] md:after:block after:bg-[#8568ED] after:mt-1 after:absolute after:left-0 after:hidden">
                    hello@dentsu.com
                  </p>
                  <p className="md:mt-4 text-sm font-inter font-medium ">
                    +234 8160304426
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t md:border-t border-[#E5E5E5] mt-8 pt-4 flex justify-between text-xs opacity-80">
              <div className="flex lg:space-x-60 text-xs font-normal justify-between w-full whitespace-nowrap">
                <div className="flex space-x-4 whitespace-nowrap">
                  <p>Privacy Policy</p>
                  <p>Terms of Use</p>
                </div>
                <p>© 2025 dentsu All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
