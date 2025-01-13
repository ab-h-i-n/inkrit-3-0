import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-black min-h-screen pt-[80px] px-[7.5%] pb-20">
        
        <h1 className="font-ahsing text-4xl text-white text-center mb-10 sm:text-6xl">Events</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-x-10 sm:gap-y-14">
        {events.map((event, index) => (
          <Link href={`/events/${event.id}`} key={index} className="grid gap-4">
            <div className="flex justify-center items-center relative w-full aspect-[4/5]">
              <Image
                src={event.poster}
                alt={event.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-lg sm:text-2xl font-ahsing">{event.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
