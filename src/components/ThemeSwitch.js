"use client";

import React from "react";

const ThemeSwitch = ({ isDarkMode, toggleTheme }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer w-14 h-7">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      {/* Background Track */}
      <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors" />
      
      {/* Toggle Thumb */}
      <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform transform peer-checked:translate-x-7" />
    </label>
  );
};

export default ThemeSwitch;
