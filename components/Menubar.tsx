"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenubarProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}

function Menubar({ isSheetOpen, setIsSheetOpen }: MenubarProps) {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-[60%]">
          <SheetTitle className="hidden">Menubar</SheetTitle>
          <SheetDescription>
            <ul className="flex flex-col gap-8 font-bold">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-[#5B56A1] ${
                      pathname === item.href
                        ? "font-bold underline text-[#5B56A1]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Menubar;
