"use client";
import React from "react";
import LetterPullup from "./ui/letter-pullup";

const HeroSection = () => {
  return (
    <section className="h-[300vh] relative w-screen">
      <div className="sticky top-0 left-0 grid place-items-center h-screen w-screen">
        <div className="absolute text-white font-ahsing z-10 grid justify-items-center md:gap-5 -translate-y-5">
          <LetterPullup
            sleep={2000}
            className="text-[5rem] md:text-[7rem] text-white "
            words={"INKRIT"}
            delay={0}
          />
          <div className="absolute bottom-0 translate-y-2 lg:translate-y-7">
            <LetterPullup
              sleep={2000}
              className="text-[2rem] md:text-[3rem] text-white "
              words={"3.0"}
              delay={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
