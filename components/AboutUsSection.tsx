"use client";
import BoxReveal from "@/components/ui/box-reveal";
import { aboutData } from "@/data/about";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <main className="min-h-[100vh] overflow-y-scroll pt-20 pb-12 relative bg-black">
      <div className="container mx-auto px-6 space-y-8">
        <div className="font-ahsing text-[2.5rem] font-bold text-white flex justify-center">
          <BoxReveal boxColor="white">
            <>About Us</>
          </BoxReveal>
        </div>

        <div className="divide-y divide-white/70 space-y-4 font-poppinsRegular">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-white font-bold mb-4">
              {aboutData.fest.title}
            </h2>
            <p className="text-white/50 mb-4 font-poppinsBold text-justify">
              {aboutData.fest.description}
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h2 className="text-3xl text-white font-bold my-4">
              {aboutData.college.name}
            </h2>
            <p className="text-white/50 mb-4 text-justify">
              {aboutData.college.description}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-white font-bold my-4">
              {aboutData.department.name}
            </h2>
            <p className="text-white/50 mb-4 text-justify">
              {aboutData.department.description}
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
