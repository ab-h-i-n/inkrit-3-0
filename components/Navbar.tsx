"use client";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./ui/Hamburger";
import React from "react";

interface NavbarProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSheetOpen, setIsSheetOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-[#161E46]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image
              src={"/assets/inkrit_logo.png"}
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </Link>
          <div className="hidden md:flex space-x-32">
            <Link href="/" className="text-white hover:text-[#5B56A1]">
              Home
            </Link>
            <Link href="/events" className="text-white hover:text-[#5B56A1]">
              Events
            </Link>
            <Link href="/about" className="text-white hover:text-[#5B56A1]">
              About
            </Link>
            <Link href="/sponsors" className="text-white hover:text-[#5B56A1]">
              Sponsors
            </Link>
            <Link href="/contact" className="text-white hover:text-[#5B56A1]">
              Contact
            </Link>
          </div>
          <Hamburger
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
