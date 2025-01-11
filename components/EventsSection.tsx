import React from "react";
import EventCard from "./EventCard";
import BoxReveal from "./ui/box-reveal";
const EventsSection = () => {
  return (
    <section className=" text-white font-poppinsRegular pt-20 bg-black/70 backdrop-blur-md z-[100] relative">
      <div className="flex justify-center">
        <BoxReveal boxColor="white">
          <h1 className="font-ahsing text-5xl text-center">Events</h1>
        </BoxReveal>
      </div>
      <EventCard />
    </section>
  );
};

export default EventsSection;
