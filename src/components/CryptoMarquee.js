"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import Image from "next/image";

const CryptoMarquee = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,ripple,solana,dogecoin,cardano,polkadot",
              order: "market_cap_desc",
            },
          }
        );
        setCryptoData(res.data);
      } catch (err) {
        console.error("Failed to fetch crypto prices:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 w-full">
      <Marquee speed={50} gradient={false} className="text-white text-sm">
        {cryptoData.map((coin) => (
          <div key={coin.id} className="mx-6 flex items-center space-x-2">
            {coin.image && (
              <Image
                src={coin.image}
                alt={coin.name}
                width={20}
                height={20}
                className="rounded-full"
              />
            )}
            <span className="uppercase">{coin.symbol}:</span>
            <span>${coin.current_price.toLocaleString()}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CryptoMarquee;
