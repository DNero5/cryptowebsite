"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose, IoIosHome } from "react-icons/io";
import {
  FaClipboardQuestion,
  FaPersonChalkboard,
  FaPersonCircleCheck,
} from "react-icons/fa6";
import {
  MdOutlineMarkEmailRead,
  MdPolicy,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { RiFileInfoFill, RiExchangeFundsFill } from "react-icons/ri";
import { GiMining } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";
import { LuClipboardCopy } from "react-icons/lu";
import { AiOutlineStock } from "react-icons/ai";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

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
    { icon: <FaPersonChalkboard />, label: "Sign Up", href: "#signup" },
    { icon: <FaPersonCircleCheck />, label: "Sign In", href: "#signin" },
    { icon: <MdOutlineMarkEmailRead />, label: "Contact", href: "/contact" },
    { icon: <RiFileInfoFill />, label: "About Us", href: "#about" },
    { icon: <RiExchangeFundsFill />, label: "Hedge Funds", href: "#hedge" },
    { icon: <GiMining />, label: "Crypto Mining", href: "#crypto" },
    { icon: <BiTransferAlt />, label: "Forex Trading", href: "#forex" },
    { icon: <LuClipboardCopy />, label: "Copy Trading", href: "#copy" },
    { icon: <MdOutlinePrivacyTip />, label: "Privacy Policy", href: "#privacy" },
    { icon: <AiOutlineStock />, label: "Stocks Trading", href: "#stocks" },
  ];

  return (
    <nav
      className={`flex w-full items-center justify-between ${
        isDarkMode ? "bg-blue-600" : "bg-gray-600"
      } px-6 py-4 relative z-50`}
    >
      {/* Left Section: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <div className="text-white z-50">
          {mobile ? (
            <IoMdClose
              className="text-[30px] cursor-pointer"
              onClick={() => setMobile(false)}
            />
          ) : (
            <HiOutlineMenuAlt1
              className="text-[30px] cursor-pointer"
              onClick={() => setMobile(true)}
            />
          )}
        </div>

        {/* Logo */}
        <Link href="/" className="z-50">
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={50}
            className="h-auto w-[100px] object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Right Section: Login/Register + Toggle */}
      <div className="flex items-center gap-4">
        {/* Login */}
        <Link
          href="/login"
          className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-700 transition duration-300 text-sm"
        >
          Login
        </Link>

        {/* Register */}
        <Link
          href="/register"
          className="bg-blue-600 text-white px-4 py-2 hidden xl:block rounded hover:bg-gray-700 transition duration-300 text-sm"
        >
          Register
        </Link>

        {/* Animated Theme Toggle */}
        <label className="relative inline-flex items-center cursor-pointer ml-2">
          <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </label>
      </div>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full xl:w-1/4 w-2/4 text-white z-40 transform transition-transform duration-300 ${
          mobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-17" />
        <div className="h-[calc(100dvh-5rem)] overflow-y-auto touch-auto">
          <ul
            className={`flex flex-col gap-8 pl-6 pr-4 ${
              isDarkMode ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            {menuItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-black">
                <span className="text-white text-xl">{item.icon}</span>
                <Link href={item.href} onClick={() => setMobile(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="h-10" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
