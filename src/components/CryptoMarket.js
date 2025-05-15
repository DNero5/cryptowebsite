"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);

  // Keen slider for top gainers
  const [sliderRefGainers] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.5,
          spacing: 8,
        },
      },
    },
  });

  // Keen slider for top losers
  const [sliderRefLosers] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.5,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/coins");
        setCoins(res.data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
  }, []);

  // Top gainers and losers
  const topGainers = [...coins]
    .filter((c) => c.price_change_percentage_24h !== null)
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 10);

  const topLosers = [...coins]
    .filter((c) => c.price_change_percentage_24h !== null)
    .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    .slice(0, 10);

  return (
    <section className="w-full px-6 md:px-16 py-12 bg-gray-900 text-white">
      {/* Top Gainers Slider */}
      <h2 className="text-3xl font-bold mb-6">Top Gainers (24h)</h2>
      <div ref={sliderRefGainers} className="keen-slider mb-10">
        {topGainers.map((coin) => (
          <div
            key={coin.id}
            className="keen-slider__slide bg-gray-800 p-4 rounded-xl shadow flex flex-col items-center"
            style={{ minWidth: "180px" }}
          >
            <Image src={coin.image} alt={coin.name} width={48} height={48} />
            <span className="font-bold mt-2">{coin.symbol.toUpperCase()}</span>
            <p className="text-sm">{coin.name}</p>
            <p className="mt-1 font-bold">${coin.current_price.toLocaleString()}</p>
            <p className="text-green-400 font-semibold">
              +{coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      {/* Top Losers Slider */}
      <h2 className="text-3xl font-bold mb-6">Top Losers (24h)</h2>
      <div ref={sliderRefLosers} className="keen-slider mb-10">
        {topLosers.map((coin) => (
          <div
            key={coin.id}
            className="keen-slider__slide bg-gray-800 p-4 rounded-xl shadow flex flex-col items-center"
            style={{ minWidth: "180px" }}
          >
            <Image src={coin.image} alt={coin.name} width={48} height={48} />
            <span className="font-bold mt-2">{coin.symbol.toUpperCase()}</span>
            <p className="text-sm">{coin.name}</p>
            <p className="mt-1 font-bold">${coin.current_price.toLocaleString()}</p>
            <p className="text-red-400 font-semibold">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      {/* Full Market Table */}
      <h2 className="text-3xl font-bold mb-4">Crypto Market</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3">#</th>
              <th className="p-3">Coin</th>
              <th className="p-3">Price</th>
              <th className="p-3">24h %</th>
              <th className="p-3">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-2">
                  <Image src={coin.image} alt={coin.name} width={20} height={20} />
                  {coin.name}
                </td>
                <td className="p-3">${coin.current_price.toLocaleString()}</td>
                <td
                  className={`p-3 ${
                    coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td className="p-3">${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CryptoMarket;
