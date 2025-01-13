"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const AbstractImage = ({ pageRef }: { pageRef: any }) => {
  const { scrollYProgress } = useScroll({
    target: pageRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 4]);

  return (
    <motion.div
      style={{
        scale: scale,
      }}
      className="fixed top-[35%] left-[24%] sm:left-[43%]  aspect-square w-[200px] lg:left-[40%] xl:left-[42%]"
    >
      <Image
        src={"/assets/abstract element.png"}
        fill
        alt="abstract"
        priority
        className="w-auto h-auto object-cover"
      />
    </motion.div>
  );
};

export default AbstractImage;
