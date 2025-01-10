"use client";
import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";
import Menu from "@/components/Menu";

export default function page() {
  return (
    <main className="min-h-screen bg-black pb-12">
      <Menu />
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
