"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { events } from "@/data/events";
import { useRouter } from "next/navigation";

function EventCard() {
  const router = useRouter(); //  the router

  // Ensuring the component is rendered on the client side
  

  return (
    <div className="relative">
      <Carousel  className="w-full flex justify-center items-center px-10">
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem
              key={event.id}
              className="h-[400px] flex flex-col justify-center gap-5 md:basis-1/3"
            >
              <h3 className="font-bold text-xl text-left">{event.title}</h3>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="[&_p]:text-white/80">
                <p>
                  <span>Entry fee : </span>
                  <span className="text-orange-600">{event.entryFee}</span>
                </p>
                <p>
                  <span>Prizes worth : </span>
                  <span className="text-orange-600">{event.prizePool}</span>
                </p>
                <p>
                  <span>Date : </span>
                  <span>{event.date}</span>
                </p>
                <p>
                  <span>Time : </span>
                  <span>{event.time}</span>
                </p>
              </div>
              <div className="w-full h-0.5 bg-white"></div>
              <button
                className="border p-3 border-white"
                onClick={() => router.push(`/events/${event.id}`)} // Trigger navigation on click
              >
                View Details
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white" />
      </Carousel>
    </div>
  );
}

export default EventCard;
