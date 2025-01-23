import { Sponsor } from '@/data/sponsors';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorCardProps {
  sponsor: Sponsor;
  onClick: () => void;
}

export default function SponsorCard({ sponsor, onClick }: SponsorCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-32 mb-4">
        <Image
          src={sponsor.logo.url}
          alt={sponsor.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-center">{sponsor.name}</h3>
    </motion.div>
  );
}