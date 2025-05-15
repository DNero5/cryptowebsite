"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import {
  FaClipboardQuestion,
  FaPersonChalkboard,
  FaPersonCircleCheck,
} from "react-icons/fa6";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobile) setMobile(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobile]);

  const menuItems = [
    { icon: <IoIosHome />, label: "Home", href: "/" },
    { icon: <FaClipboardQuestion />, label: "Trade", href: "/trade" },
    { icon: <FaPersonChalkboard />, label: "Plans", href: "/plans" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4">
      <div className="flex w-full items-center justify-between  rounded-xl px-4 py-3">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center gap-6 ">
          <Link href="/" className="z-50">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={50}
              className="h-auto w-[100px] object-contain cursor-pointer"
            />
          </Link>

          {/* Inline Menu for Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-white">
            {menuItems.map((item, i) => (
              <li key={i} className="hover:text-blue-300 transition">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-700 transition text-sm"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 hidden xl:block rounded hover:bg-gray-700 transition text-sm"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Toggle */}

          <div className="z-50 md:hidden text-3xl">
            {mobile ? (
              <button onClick={() => setMobile(false)} className="text-white">
                ✖
              </button>
            ) : (
              <button onClick={() => setMobile(true)} className="text-white">
                ☰
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/4 text-white z-40 transform transition-transform duration-300 bg-gray-700 ${
          mobile ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="h-20" />
        <ul className="flex flex-col gap-6 pl-6 pr-4">
          {menuItems.map((item, i) => (
            <li key={i} className="flex items-center gap-2 hover:text-blue-300">
              <span className="text-xl">{item.icon}</span>
              <Link href={item.href} onClick={() => setMobile(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
