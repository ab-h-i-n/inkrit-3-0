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
      className="min-h-screen w-screen overlfow-x-hidden magicpattern relative"
    >
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
