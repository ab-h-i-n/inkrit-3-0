import { Event } from '@/data/events';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#161E46] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={event.poster}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#CFD0EA]">{event.title}</h3>
        <p className="text-[#5B56A1] mb-4">{event.description}</p>
        
        <div className="space-y-2 mb-4 text-[#CFD0EA]">
          <p><strong>Time:</strong> {new Date(event.startTime).toLocaleString()}</p>
          <p><strong>Entry Fee:</strong> ₹{event.entryFee}</p>
          <p><strong>Prize Pool:</strong> ₹{event.prizePool}</p>
        </div>

        <div className="space-y-4 text-[#CFD0EA]">
          <div>
            <h4 className="font-semibold">Event Coordinators:</h4>
            {event.eventCoordinators.map((coord, index) => (
              <p key={index}>{coord.name} - {coord.phone}</p>
            ))}
          </div>
          
          <div>
            <h4 className="font-semibold">Staff Coordinators:</h4>
            {event.staffCoordinators.map((coord, index) => (
              <p key={index}>{coord.name} - {coord.phone}</p>
            ))}
          </div>
        </div>

        <Button 
          className="w-full mt-6 bg-[#5B56A1] text-[#CFD0EA] hover:bg-[#161E46]"
          onClick={() => window.open(event.registrationLink, '_blank')}
        >
          Register Now
        </Button>
      </div>
    </motion.div>
  );
}