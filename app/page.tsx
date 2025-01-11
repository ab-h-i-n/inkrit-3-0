"use client";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import Particles from "@/components/ui/particles";
import AbstractImage from "@/components/AbstractImage";
import React from "react";
import SponsorSection from "@/components/SponsorSection";
import ContactUsSection from "@/components/ContactUsSection";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  const pageRef = React.useRef(null);
  return (
    <main
      ref={pageRef}
      className="min-h-screen w-screen overlfow-x-hidden bg-gradient-to-tr from-black to-[#1d024f] relative"
    >
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
      <AboutUsSection />
      <SponsorSection />
      <ContactUsSection />

      {/* <Menu /> */}
    </main>
  );
}
