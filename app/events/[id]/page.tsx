"use client";
import { useParams } from "next/navigation";
import { events } from "@/data/events";
import Menu from "@/components/Menu";
import Link from "next/link";
import { Box, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BoxReveal from "@/components/ui/box-reveal";

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const router = useRouter();

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Menu />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#161E46]">Event Not Found</h1>
          <p className="text-[#5B56A1] mt-2">
            The event you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black divide-y divide-white font-poppinsRegular relative">
      <div className="w-full h-[300px]  text-white flex justify-center items-center">
        <span
          onClick={() => router.replace("/")}
          className="font-ahsing text-5xl relative"
        >
          <BoxReveal boxColor="white">
            <span>{event.title}</span>
          </BoxReveal>
          <ChevronLeft className="w-16 h-16 text-white absolute left-0 -translate-x-14 sm:-translate-x-20 top-1/2 -translate-y-1/2" />
        </span>
      </div>
      <div className="px-[7.5%] py-10 space-y-4">
        <BoxReveal boxColor="white">
          <span className="text-white block font-bold font-poppinsBold">
            Date : {event.date}
          </span>
        </BoxReveal>
        <BoxReveal boxColor="white">
          <span className="text-white block font-bold font-poppinsBold">
            Time : {event.time}
          </span>
        </BoxReveal>
        <BoxReveal boxColor="white">
          <span className="text-white block font-bold font-poppinsBold">
            Registration Fee : ₹{event.entryFee}
          </span>
        </BoxReveal>

        <BoxReveal boxColor="white">
          <p className="text-white/70 text-left font-poppinsRegular">
            {event.description}
          </p>
        </BoxReveal>

        {/* rules */}
        <ul className="text-white list-disc list-inside pt-10">
          <h3 className="text-xl font-bold">Rules</h3>
          {event.rules.map((rule, index) => (
            <li key={index} className="font-light text-white/70 ">
              {rule}
            </li>
          ))}
        </ul>

        {/* coordinators */}
        <div className="text-white py-8 pt-10">
          <BoxReveal boxColor="white">
            <div>
              <h4 className="text-xl font-bold">Student Coordinators</h4>
              {event.eventCoordinators.map((coordinator) => (
                <Link
                  href={`tel:${coordinator.phone}`}
                  key={coordinator.phone}
                  className="block text-white/70"
                >
                  {coordinator.name} - {coordinator.phone}
                </Link>
              ))}
            </div>
          </BoxReveal>
          <div>
            <BoxReveal boxColor="white">
              <>
                <h4 className="text-xl font-bold pt-10">Staff Coordinators</h4>
                {event.staffCoordinators.map((coordinator, index) => (
                  <Link
                    href={`tel:${coordinator.phone}`}
                    key={coordinator.phone}
                    className="block text-white/70"
                  >
                    {coordinator.name} - {coordinator.phone}
                  </Link>
                ))}
              </>
            </BoxReveal>
          </div>
        </div>
        <Link
          href={event.registrationLink}
          className="border border-white text-white w-full p-3  flex justify-center"
        >
          Register Now {event.entryFee ? `(₹${event.entryFee})` : ""}
        </Link>
      </div>
    </main>
  );
}
