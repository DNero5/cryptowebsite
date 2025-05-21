"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const SignInPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log("🔐 Login response:", data);

      if (!res.ok) {
        setError(data.detail || "Login failed. Please try again.");
        return;
      }

      const accessToken = data?.data?.access;

      if (!accessToken) {
        setError("No access token received.");
        return;
      }

      // ✅ Store the access token
      localStorage.setItem("token", accessToken);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gray-700 flex items-center justify-center">
        <div className="max-w-md w-full px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2" />
            Access Your Trading Hub
          </h2>

          <form onSubmit={handleSignIn} className="space-y-5">
            {error && <p className="text-red-400">{error}</p>}

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-8 right-3 text-sm text-orange-400 hover:text-orange-200 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white">Remember me</span>
              </label>
              <a
                href="#"
                className="text-orange-500 hover:underline font-medium"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Sign In
            </button>

            <div className="text-center text-sm mt-4 text-white">
              <p>Don&apos;t have an account?</p>
              <a
                href="/signup"
                className="text-orange-500 font-semibold hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-blue-700 relative text-white">
        <Image
          src="/signup.png"
          alt="Trading"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-10 h-full w-full">
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={130}
            className="h-[130px] w-[130px] object-contain cursor-pointer"
          />
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Step Into the World of <br /> Smart Trading
          </h2>
          <p className="max-w-sm text-sm opacity-90">
            Enter the realm of BitWealth, where cutting-edge blockchain
            technology meets seamless trading experiences. Stay ahead with our
            secure, intuitive platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
