"use client";
import React from "react";

interface HamburgerProps {
  setIsSheetOpen: (isOpen: boolean) => void;
  isSheetOpen: boolean;
}

function Hamburger({ setIsSheetOpen, isSheetOpen }: HamburgerProps) {
  const handleClick = () => setIsSheetOpen(!isSheetOpen);

  return (
    <div
      className="relative flex h-12 w-12 flex-col justify-center items-end gap-2 cursor-pointer md:hidden "
      onClick={handleClick}
    >
      <span
        className={`absolute h-1 w-9 rounded-full bg-white transition-all duration-500 ease-in-out ${
          isSheetOpen ? "top-1/2 rotate-45" : "top-1/4"
        }`}
      ></span>
      <span
        className={`absolute top-1/2 h-1 w-6 rounded-full bg-white transition-opacity duration-500 ease-in-out ${
          isSheetOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`absolute h-1 rounded-full bg-white transition-all duration-500 ease-in-out ${
          isSheetOpen ? "top-1/2 w-9 -rotate-45" : "top-3/4 w-3"
        }`}
      ></span>
    </div>
  );
}

export default Hamburger;
