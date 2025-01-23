"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={pathname.includes('/studio') ? 'hidden' : 'fixed top-0 w-full  backdrop-blur-sm z-[100]'}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image
              src={"/assets/inkrit_logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
