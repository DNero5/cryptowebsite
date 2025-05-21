"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GetStarted from "@/components/GetStarted";
import {Testimonial} from "@/components/Testimonial";
import Advance from "@/components/Advance";

export default function Page() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Hero />
      <GetStarted />
      <Services />
      <Advance />
      <Testimonial />
    </main>
  );
}
