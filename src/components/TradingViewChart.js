"use client";
import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "400", // 👈 Reduced height
      symbol: "BINANCE:BTCUSDT", // 👈 Crypto example
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      withdateranges: true,
      range: "YTD",
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      hotlist: false,
      show_popup_button: false,
      support_host: "https://www.tradingview.com",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto h-[400px] shadow-md rounded-md overflow-hidden">
      <div ref={containerRef} className="tradingview-widget-container w-full h-full" />
    </div>
  );
};

export default TradingViewChart;
