import BoxReveal from "@/components/ui/box-reveal";
import { Event, fetchEvents } from "@/data/events";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async() => {
  const events = await fetchEvents();
  return (
    <div className="bg-black min-h-screen pt-[80px] px-[7.5%] pb-20">
      <Link href={"/"} className=" flex justify-center">
          <span className="font-ahsing text-5xl relative text-center">
            <BoxReveal boxColor="white">
              <span className="text-white">Events</span>
            </BoxReveal>
            <ChevronLeft className="w-16 h-16 text-white absolute left-0 -translate-x-14 sm:-translate-x-20 top-1/2 -translate-y-1/2" />
          </span>
        </Link>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-x-10 sm:gap-y-14 mt-10">
        {events.map((event : Event, index : number) => (
          <Link href={`/events/${event.id}`} key={index} className="grid gap-4">
            <div className="flex justify-center items-center relative w-full aspect-[4/5]">
              <Image
                src={event.poster.url}
                alt={event.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-bold text-lg sm:text-2xl font-poppinsRegular">
                {event.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
