"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import BoxReveal from "./ui/box-reveal";
import { Event, events } from "@/data/events";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const EventsSection = () => {
  const [activeEvent, setActiveEvent] = useState<Event | null>(events[0]);
  const [eventsCompleted, setEventsCompleted] = useState(false);
  const { inView: firstInView, ref: firstRef } = useInView();
  const { inView: secondInView, ref: secondtRef } = useInView();
  const { inView: thirdInView, ref: thirdRef } = useInView();

  useEffect(() => {
    if (firstInView) {
      setActiveEvent(events[1]);
      setEventsCompleted(false);
    } else if (secondInView) {
      setActiveEvent(events[2]);
      setEventsCompleted(false);
    } else if (thirdInView) {
      setEventsCompleted(true);
      setActiveEvent(null);
    } else {
      setEventsCompleted(false);
      setActiveEvent(events[0]);
    }
  }, [firstInView, secondInView]);

  useEffect(() => {
    console.log(activeEvent);
  }, [activeEvent, firstInView, secondInView, thirdInView]);

  return (
    <section
      style={{
        backgroundImage: `url(${
          activeEvent?.poster ?? "/assets/allEvents-bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pb-[5%] h-[380dvh] text-white font-poppinsRegular pt-20 bg-black/70 backdrop-blur-md z-[50] relative"
    >
      <div className="absolute z-[0] w-screen h-full top-0 left-0 bg-black/80 backdrop-blur-md" />
      <div className="sticky top-[60px] left-0 h-screen sm:grid sm:grid-rows-[min-content,1fr]">
        <div className="flex justify-center">
          <BoxReveal boxColor="white">
            <h1 className="font-ahsing text-5xl text-center">Events</h1>
          </BoxReveal>
        </div>

        {/* events  */}
        <div
          className={`mt-5 sm:-mt-10 sm:grid sm:place-content-center ${
            eventsCompleted && !activeEvent && "h-[60%]"
          }`}
        >
          {!eventsCompleted && activeEvent ? (
            <EventCard key={activeEvent.title} event={activeEvent} />
          ) : (
            <motion.div
              
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ amount: 0.5 }}
              exit={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              transition={{
                duration: 0.5,
                stiffness: 500,
                damping: 20,
                type: "spring",
              }}
              className="grid place-content-center h-full sm:pt-40"
            >
              <div className="relative w-[300px] sm:w-[500px] aspect-square rounded overflow-visible">
                <Image
                  src="/assets/allEvents.png"
                  fill
                  className="w-auto h-auto object-cover"
                  alt="viewmore"
                />
              </div>

              <Link
                href="/events"
                className="font-bold text-black bg-white rounded-full px-3 py-2 text-center"
              >
                View All Events {"->"}
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* indicator 1  */}
      <div className="absolute top-[40%]" ref={firstRef}></div>

      {/* indicator 2  */}
      <div className="absolute top-[60%] text-white" ref={secondtRef}></div>

      {/* indicator 3  */}
      <div className="absolute top-[80%] text-white" ref={thirdRef}></div>
    </section>
  );
};

export default EventsSection;
