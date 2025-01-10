"use client";
import { useParams } from "next/navigation";
import { events } from "@/data/events";
import Menu from "@/components/Menu";

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Menu />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#161E46]">Event Not Found</h1>
          <p className="text-[#5B56A1] mt-2">
            The event you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black divide-y divide-white">
      <div className="w-full h-[300px] text-white flex flex-col justify-center items-center">
        <span className="font-ahsing text-5xl">{event.title}</span>
      </div>
      <div className="px-3 py-4 space-y-4">
        <span className="text-white block">Date : {event.date}</span>
        <span className="text-white block">Time : {event.time}</span>

        <p className="text-white/70 text-left font-poppinsRegular">
          {event.description}
        </p>

        {/* rules */}
        <ul className="text-white list-disc list-inside">
          <h3 className="text-xl font-bold">Rules</h3>
          {event.rules.map((rule, index) => (
            <li key={index} className="font-light text-white/70 ">
              {rule}
            </li>
          ))}
        </ul>

        {/* coordinators */}
        <div className="text-white">
          <div>
            <h4 className="text-xl font-bold">Student Coordinators</h4>
            {event.eventCoordinators.map((coordinator, index) => (
              <div key={index}>
                <span className="text-white/70">
                  {coordinator.name} - {coordinator.phone}
                </span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-bold">Staff Coordinators</h4>
            {event.staffCoordinators.map((coordinator, index) => (
              <div key={index}>
                <span className="text-white/70">
                  {coordinator.name} - {coordinator.phone}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-white">
            Registration Fee : {event.entryFee}
          </span>
        </div>
        <a href={event.registrationLink} className="block">
          <button className="border border-white text-white w-full p-2">
            Register
          </button>
        </a>
      </div>
    </main>
  );
}
