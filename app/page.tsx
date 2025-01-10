"use client";
import HeroSection from "@/components/HeroSection";
import AboutPage from "./about/page";
import EventsSection from "@/components/EventsSection";
import Particles from "@/components/ui/particles";
import AbstractImage from "@/components/AbstractImage";
import React from "react";

export default function Home() {
  const pageRef = React.useRef(null);
  return (
    <main ref={pageRef} className="min-h-screen w-screen overlfow-x-hidden bg-gradient-to-tr from-black to-[#1d024f] relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <AbstractImage pageRef={pageRef} />
      <HeroSection />
      <EventsSection />
      <AboutPage />

      {/* <Menu /> */}
    </main>
  );
}
