"use client";
import React, { useEffect, useState } from "react";
import LetterPullup from "./ui/letter-pullup";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref: halfRef, inView } = useInView({
    threshold: 0.5,
  });
  const { ref: endRef, inView: endView } = useInView({
    threshold: 0.5,
  });
  const [firstTitleVisible, setFirstTitleVisible] = useState(true);
  const [title, setTitle] = useState({
    topSub: "",
    title: "",
    sub: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setTitle({
        topSub: "Department Of",
        title: "Computer Applications",
        sub: "Presents",
      });
    }, 2000);
  }, []);

  useEffect(() => {
    if (inView) {
      setFirstTitleVisible(false);
    } else if (!inView && !endView) {
      setFirstTitleVisible(true);
    }
  }, [inView]);

  return (
    <section className="h-[300vh] relative w-screen">
      <div className="sticky top-0 left-0 grid place-items-center h-screen w-screen">
        {/* second  */}
        {firstTitleVisible ? (
          <motion.div
            animate={
              firstTitleVisible
                ? {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }
                : {
                    y: 50,
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                    },
                  }
            }
            className="absolute text-white font-ahsing z-10 grid justify-items-center md:gap-5 -translate-y-5 lg:-translate-y-12"
          >
            <LetterPullup
              className="text-[1rem] md:text-[3rem] text-white "
              words={title.topSub}
              delay={0}
            />
            <LetterPullup
              className="text-[1.8rem] md:text-[5rem] text-white "
              words={title.title}
              delay={0}
            />
            <LetterPullup
              className="text-[1rem] md:text-[2rem] text-white "
              words={title.sub}
              delay={0}
            />
          </motion.div>
        ) : (
          <motion.div className="absolute text-white font-ahsing z-10 grid justify-items-center md:gap-5 -translate-y-5 lg:-translate-y-12">
            <LetterPullup
              key={"inkrit"}
              className="text-[5rem] md:text-[7rem] text-white "
              words={"INKRIT"}
              delay={0}
            />
            <div className="absolute bottom-0 translate-y-2 lg:translate-y-5 xl:translate-y-7">
              <LetterPullup
                className="text-[2rem] md:text-[3rem] text-white "
                words={"3.0"}
                delay={0}
              />
            </div>
          </motion.div>
        )}
      </div>
      {/* half section  */}
      <div className="absolute top-[50%]" ref={halfRef}></div>

      <div className="absolute top-[80%]" ref={endRef}></div>
    </section>
  );
};

export default HeroSection;
