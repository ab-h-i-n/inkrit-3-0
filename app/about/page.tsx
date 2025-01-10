"use client";
import BoxReveal from "@/components/ui/box-reveal";
import { aboutData } from "@/data/about";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-[100vh] overflow-y-scroll pt-20 pb-12 relative bg-black">
      <div className="container mx-auto px-6 space-y-8">
        <div className="font-ahsing text-[2.5rem] font-bold text-white text-center">
          About Us
        </div>
        <div className="divide-y divide-white/70 space-y-4 font-poppinsRegular">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BoxReveal boxColor="white">
              <h2 className="text-3xl text-white font-bold mb-4 font-poppinsBold">
                {aboutData.fest.title}
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="white">
              <p className="text-white/50 mb-4 font-poppinsBold text-justify">
                {aboutData.fest.description}
              </p>
            </BoxReveal>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <BoxReveal boxColor="white">
              <h2 className="text-3xl text-white font-bold my-4">
                {aboutData.college.name}
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="white/50">
              <p className="text-white/50 mb-4 text-justify">
                {aboutData.college.description}
              </p>
            </BoxReveal>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BoxReveal boxColor="white">
              <h2 className="text-3xl text-white font-bold my-4">
                {aboutData.department.name}
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="white">
              <p className="text-white/50 mb-4 text-justify">
                {aboutData.department.description}
              </p>
            </BoxReveal>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
