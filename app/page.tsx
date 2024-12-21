"use client";
import Menu from "@/components/Menu";
import RetroGrid from "@/components/ui/retro-grid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100dvh] bg-[#1d024f] flex flex-col justify-center items-center z0">
      <RetroGrid
        lightLineColor="white"
        darkLineColor="black"
        className="w-full h-full "
      />

      <Image
        src={"/assets/abstract element.png"}
        width={3000}
        height={3000}
        alt="abstract"
        className="absolute top-1/2 -translate-y-1/2 z-0"
      />

      <motion.div className="text-white font-ahsing text-[7rem] leading-[80px] z-10">
        INKRIT
      </motion.div>
      <motion.div className="text-white font-ahsing text-[3rem] leading-[30px] z-10">
        3.0
      </motion.div>
      <Menu />
    </main>
  );
}
