import React from "react";
import EventCard from "./EventCard";
const EventsSection = () => {
  return (
    <section className="min-h-screen text-white font-poppinsRegular pt-20 bg-black/70 backdrop-blur-md z-[100] relative">
      <h1 className="font-ahsing text-5xl text-center">Events</h1>
      <EventCard />
    </section>
  );
};

export default EventsSection;
