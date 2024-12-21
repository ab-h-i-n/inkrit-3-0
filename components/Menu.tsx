import React from "react";
import { DockIcon, Dock } from "./ui/dock";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  return (
    <Dock className="fixed bottom-3 left-1/2 -translate-x-1/2 border border-white/30">
      <DockIcon>
        <Link href={"/"}>
          <Image src={"/assets/home.svg"} alt="Home" width={30} height={30} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={"/about"}>
          <Image
            src={"/assets/aboutus.svg"}
            alt="About US"
            width={30}
            height={30}
          />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={"/events"}>
          <Image
            src={"/assets/events.svg"}
            alt="Events"
            width={30}
            height={30}
          />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={"/sponsors"}>
          <Image
            src={"/assets/sponsor.svg"}
            alt="Sponsors"
            width={30}
            height={30}
          />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={"/contact"}>
          <Image
            src={"/assets/contact.svg"}
            alt="Contact US"
            width={30}
            height={30}
          />
        </Link>
      </DockIcon>
    </Dock>
  );
}

export default Menu;
