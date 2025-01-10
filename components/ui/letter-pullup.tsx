"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import React from "react";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
  sleep? : number;
}

export default function LetterPullup({
  className,
  words,
  delay,
  sleep,
}: LetterPullupProps) {
  const [letters, setLetters] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLetters(words.split(""));
    }, sleep || 0);

    return () => clearTimeout(timer);
  }, [words, sleep]);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
        
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          custom={i}
          className={cn(
            "font-display text-center text-4xl font-bold tracking-[0.05em] text-black drop-shadow-sm dark:text-white md:text-4xl ",
            className,
          )}
        >
          {letter === "" ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
