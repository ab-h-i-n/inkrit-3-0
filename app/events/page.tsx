"use client";
import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#161E46] to-[#000108] pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}