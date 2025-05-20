"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy } from "lucide-react";

export default function DashboardPage() {
  const [copiedId, setCopiedId] = useState(null);
  const [data, setData] = useState(null);
  const [coinIcons, setCoinIcons] = useState({});
  const router = useRouter();

  const handleCopy = async (wallet) => {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopiedId(wallet.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/signin");
        return;
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/dashboard/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user data");

        const result = await res.json();
        setData(result);

        const uniqueCoins = [...new Set(result.wallets.map(w => w.coin.toLowerCase()))];
        fetchCoinIcons(uniqueCoins);
      } catch (err) {
        console.error("❌ Fetch error:", err.message);
        localStorage.removeItem("token");
        router.push("/signin");
      }
    };

    const fetchCoinIcons = async (coinSymbols) => {
      try {
        let cachedList = JSON.parse(localStorage.getItem("cgCoinList"));
        const now = Date.now();

        // Refresh cache every 24 hours
        if (!cachedList || now - cachedList.timestamp > 24 * 60 * 60 * 1000) {
          const listRes = await fetch("https://api.coingecko.com/api/v3/coins/list");
          const coinList = await listRes.json();
          localStorage.setItem("cgCoinList", JSON.stringify({ data: coinList, timestamp: now }));
          cachedList = { data: coinList };
        }

        const matchedCoins = coinSymbols.map(symbol => {
          return cachedList.data.find(coin => coin.symbol.toLowerCase() === symbol.toLowerCase());
        }).filter(Boolean);

        const icons = {};
        for (let coin of matchedCoins) {
          const cachedIcon = localStorage.getItem(`cgIcon-${coin.symbol}`);
          if (cachedIcon) {
            icons[coin.symbol.toLowerCase()] = cachedIcon;
            continue;
          }

          const coinDataRes = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
          const coinData = await coinDataRes.json();
          const iconUrl = coinData.image?.thumb;
          if (iconUrl) {
            icons[coin.symbol.toLowerCase()] = iconUrl;
            localStorage.setItem(`cgIcon-${coin.symbol}`, iconUrl);
          }
        }

        setCoinIcons(icons);
      } catch (err) {
        console.error("❌ CoinGecko icon fetch error:", err.message);
      }
    };

    fetchUserData();
  }, [router]);

  if (!data) return <p className="text-white">Loading...</p>;

  return (
      <div className="min-h-screen flex flex-col px-4 py-8">
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold">
          Hello, {data.user.first_name} {data.user.last_name}
        </h1>
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <button className="bg-gray-800 px-4 py-2 rounded w-full md:w-auto">Deposit</button>
          <button className="bg-gray-800 px-4 py-2 rounded w-full md:w-auto">Send</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-lg font-semibold">Email</p>
          <div className="flex items-center gap-2">
            <p className="truncate max-w-full">{data.user.email}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(data.user.email);
                setCopiedId("email");
                setTimeout(() => setCopiedId(null), 2000);
              }}
              className="text-gray-400 hover:text-white"
              title="Copy email"
            >
              <Copy size={16} />
            </button>
            {copiedId === "email" && <span className="text-green-400 text-xs">Copied!</span>}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-lg font-semibold">Role</p>
          <p>{data.user.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded">
          <h2 className="text-lg mb-2">💼 Wallet</h2>
          <p className="text-2xl font-semibold">
            $
            {data.wallets.length
              ? data.wallets.reduce((sum, w) => sum + Number(w.balance || 0), 0).toFixed(2)
              : "0.00"}
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <h2 className="text-lg mb-2">🛡️ Vaults</h2>
          <p className="text-gray-400">Vaults coming soon</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Wallets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.wallets.map((wallet) => {
          const symbol = wallet.coin.toLowerCase();
          const coinIcon = coinIcons[symbol];

          return (
            <div
              key={wallet.id}
              className="bg-gray-800 p-4 rounded-lg overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={coinIcon || "/icons/fallback-coin.png"}
                  alt={wallet.coin}
                  className="w-5 h-5"
                  onError={(e) => {
                    e.currentTarget.src = "/icons/fallback-coin.png";
                  }}
                />
                <p className="text-sm">
                  <strong>Coin:</strong> {wallet.coin}
                </p>
              </div>
              <p className="text-sm mb-1">
                <strong>Network:</strong> {wallet.network}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="truncate max-w-[70%] text-sm">
                  <strong>Address:</strong> {wallet.address}
                </p>
                <button
                  onClick={() => handleCopy(wallet)}
                  className="text-gray-400 hover:text-white"
                  title="Copy address"
                >
                  <Copy size={16} />
                </button>
                {copiedId === wallet.id && (
                  <span className="text-green-400 text-xs">Copied!</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Things to try</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded">Make a deposit</div>
          <div className="bg-gray-900 p-4 rounded">Do a swidge</div>
          <div className="bg-gray-900 p-4 rounded">Play Bullrun</div>
        </div>
      </div>
    </div>
    </div>
  );
}
