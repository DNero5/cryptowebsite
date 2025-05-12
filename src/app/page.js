"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import {Testimonial} from "@/components/Testimonial";
import Advance from "@/components/Advance";

export default function Page() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <GetStarted />
      <Services />
      <Advance />
      <Testimonial />
      <Footer />
    </main>
  );
}
