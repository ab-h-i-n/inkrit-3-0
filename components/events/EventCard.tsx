import { Event } from '@/data/events';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="bg-[#161E46] rounded-lg shadow-lg overflow-hidden cursor-pointer"
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
        </div>
      </motion.div>
    </Link>
  );
}