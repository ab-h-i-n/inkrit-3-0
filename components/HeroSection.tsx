"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import Particles from "./ui/particles";
import Image from "next/image";
import LetterPullup from "./ui/letter-pullup";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [2, 4]);

  return (
    <section className="h-[300vh] relative w-screen">
      <div className=" sticky top-0 left-0 grid place-items-center h-screen w-screen">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={"#fff"}
          refresh
        />
        <motion.div
          style={{
            scale: scale,
          }}
          className="absolute aspect-square w-[200px] -translate-y-8"
        >
          <Image
            src={"/assets/abstract element.png"}
            fill
            alt="abstract"
            priority
            className="w-auto h-auto object-cover"
          />
        </motion.div>

        <div className="text-white font-ahsing z-10 relative grid justify-items-center gap-5 translate-y-6">
          <LetterPullup
            sleep={2000}
            className="md:text-[7rem] tracking-[0.05em] text-white "
            words={"INKRIT"}
            delay={0}
          />
          <LetterPullup
            sleep={2000}
            className="md:text-[3rem] tracking-[0.05em] text-white "
            words={"0.3"}
            delay={0}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
