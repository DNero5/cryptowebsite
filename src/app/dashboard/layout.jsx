"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); // ✅ useRouter inside the component

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/"); // ✅ Redirect to homepage
  };

  return (
    <div className="flex min-h-screen bg-black text-white flex-col md:flex-row">
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden w-full bg-[#111111] p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={130}
            className="h-[80px] w-[130px] object-contain cursor-pointer"
          />
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-[#111111] p-4 z-40 transform transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed top-0 left-0 h-full w-64 
          md:translate-x-0 md:relative md:flex md:flex-col md:justify-between`}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="h-[130px] w-[130px] object-contain cursor-pointer"
            />
          </Link>

          <nav className="space-y-2 text-sm mt-4">
            <Link
              href="/dashboard"
              className="block p-2 rounded hover:bg-gray-800"
            >
              🏠 Home
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              👛 Wallet
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              🛡️ Vaults
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              🔁 Swidge
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              📊 Activity
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              🎁 Airdrops
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              💰 Earn
            </Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-800">
              🚀 Bullrun
            </Link>
          </nav>
        </div>

        <div className="space-y-2 mt-8">
          <div className="bg-gray-800 text-xs p-3 rounded">
            <strong>What&apos;s New</strong>
            <br />
            Broad Asset Support. Token Explorer. And more.
          </div>
          <button
            onClick={handleLogout}
            className="block p-2 text-left text-sm rounded hover:bg-gray-800 cursor-pointer"
          >
            🚪 Log out
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
