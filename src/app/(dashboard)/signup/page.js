"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const SignUpPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // OTP Modal states
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setMessage(data.message);
        setRegisteredEmail(form.email);
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
        setShowOtpModal(true);
      }
    } catch (err) {
      setError("Failed to connect to server.");
    }
  };

  const handleVerifyOtp = async () => {
    setOtpError("");
    setOtpMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/otp/verify/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setOtpError(data.error || "Invalid OTP.");
      } else {
        alert("Email verified successfully!");
        setShowOtpModal(false);
        router.push("/signin");
      }
    } catch (err) {
      setOtpError("Verification failed. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    setOtpError("");
    setOtpMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/otp/new/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: registeredEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message?.includes("email is correct and has not been verified")) {
          setOtpError("This email is already verified or invalid. Please sign in instead.");
        } else {
          setOtpError(data.error || "Failed to resend OTP.");
        }
      } else {
        setOtpMessage("OTP resent successfully. Please check your email.");
      }
    } catch (err) {
      setOtpError("Failed to resend OTP. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowOtpModal(false);
    setOtp("");
    setOtpError("");
    setOtpMessage("");
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/signup.png"
          alt="Signup banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10" />
        <div className="relative z-20 p-10 flex flex-col justify-center max-w-xl mx-auto text-center text-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-32 mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Join Today &amp; Receive up to <br />
            <span className="text-orange-400">100 USDT Bonus</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Embark on a journey with BitWealth...
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-700">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Sign Up Your Account
          </h2>

          {message && <div className="mb-4 text-green-400 text-sm font-medium">{message}</div>}
          {error && <div className="mb-4 text-red-400 text-sm font-medium">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-12 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-12 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-white"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-white text-center">
            Already registered?{" "}
            <a href="/signin" className="font-semibold text-white underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Enter Verification Code
            </h3>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              placeholder="Enter OTP"
            />
            {otpError && <p className="text-red-500 text-sm mb-2">{otpError}</p>}
            {otpMessage && <p className="text-green-500 text-sm mb-2">{otpMessage}</p>}
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-600 hover:bg-orange-600 text-white font-semibold py-2 rounded-md mb-2"
            >
              Verify
            </button>
            <button
              onClick={handleResendOtp}
              className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 rounded-md mb-2"
            >
              Resend OTP
            </button>
            <button
              onClick={handleCloseModal}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
