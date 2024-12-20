"use client";
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#161E46] to-[#000108]">
      <section className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-[#CFD0EA] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Inkrit 3.0
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[#5B56A1] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Annual Technical Festival of Department of Computer Applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-[#5B56A1] text-[#CFD0EA] hover:bg-[#161E46]"
            >
              Explore Events
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}