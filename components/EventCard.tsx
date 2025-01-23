"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Event } from "@/data/events";
import { Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

function EventCard({ event }: { event: Event }) {
  const router = useRouter();
  return (
    <div className="grid justify-items-center sm:grid-cols-2 sm:justify-content-center sm:gap-10">
      <motion.div
        onClick={() => router.push(`/events/${event.id}`)}
        className="relative h-[270px] sm:h-[450px] aspect-[3.8/5] rounded overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
          stiffness: 500,
        }}
      >
        <Image src={event.poster} alt={event.title} fill />
      </motion.div>
      <motion.div
        className="pt-5 grid justify-items-center sm:place-content-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.2,
          stiffness: 500,
          delay: 0.2,
        }}
      >
        <h1 className="text-5xl font-ahsing sm:text-[4rem]">{event.title}</h1>

        <div className="flex items-center justify-between gap-10 mt-5">
          <div className="text-sm font-poppinsRegular grid justify-items-center">
            <span className="text-lg sm:text-xl">Prize Pool</span>
            <span className="font-bold text-3xl sm:text-4xl">
              {event.prizePool}
            </span>
          </div>
          <div className="text-sm font-poppinsRegular grid justify-items-center">
            <span className="text-lg sm:text-xl">Entry Fee</span>
            <span className="font-bold text-3xl sm:text-4xl">
              {event.entryFee}
            </span>
          </div>
        </div>

        {/* date time  */}
        <div className="mt-3">
          <div className="flex items-center justify-center text-sm gap-1">
            <Calendar size={18} />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center justify-center text-sm gap-1 mt-2">
            <Clock size={18} />
            <span>{event.time}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EventCard;
