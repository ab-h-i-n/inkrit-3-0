"use client";
import { useParams } from 'next/navigation';
import { events } from '@/data/events';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-100 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#161E46]">Event Not Found</h1>
          <p className="text-[#5B56A1] mt-2">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Event Header */}
          <div className="relative h-64 md:h-96">
            <Image
              src={event.poster}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Event Content */}
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#161E46] mb-4">{event.title}</h1>
              <p className="text-[#5B56A1] text-lg">{event.description}</p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#CFD0EA] p-6 rounded-lg">
              <div>
                <h3 className="text-[#161E46] font-semibold mb-2">Event Details</h3>
                <ul className="space-y-2 text-[#5B56A1]">
                  <li><strong>Start Time:</strong> {new Date(event.startTime).toLocaleString()}</li>
                  <li><strong>End Time:</strong> {new Date(event.endTime).toLocaleString()}</li>
                  <li><strong>Entry Fee:</strong> ₹{event.entryFee}</li>
                  <li><strong>Prize Pool:</strong> ₹{event.prizePool}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#161E46] font-semibold mb-2">Rules</h3>
                <ul className="list-disc list-inside space-y-2 text-[#5B56A1]">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coordinators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Coordinators */}
              <div className="bg-[#161E46] p-6 rounded-lg">
                <h3 className="text-[#CFD0EA] font-semibold mb-4">Event Coordinators</h3>
                <div className="space-y-4">
                  {event.eventCoordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-[#CFD0EA]">{coordinator.name}</span>
                      <Button
                        variant="outline"
                        className="bg-[#5B56A1] text-[#CFD0EA] hover:bg-[#161E46]"
                        onClick={() => window.open(`https://wa.me/${coordinator.phone.replace(/\s+/g, '')}`, '_blank')}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Coordinators */}
              <div className="bg-[#161E46] p-6 rounded-lg">
                <h3 className="text-[#CFD0EA] font-semibold mb-4">Staff Coordinators</h3>
                <div className="space-y-4">
                  {event.staffCoordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-[#CFD0EA]">{coordinator.name}</span>
                      <Button
                        variant="outline"
                        className="bg-[#5B56A1] text-[#CFD0EA] hover:bg-[#161E46]"
                        onClick={() => window.open(`https://wa.me/${coordinator.phone.replace(/\s+/g, '')}`, '_blank')}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="bg-[#5B56A1] text-[#CFD0EA] hover:bg-[#161E46] px-8 py-6 text-lg"
                onClick={() => window.open(event.registrationLink, '_blank')}
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}