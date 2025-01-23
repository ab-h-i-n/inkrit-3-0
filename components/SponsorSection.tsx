import { Sponsor } from "@/data/sponsors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SponsorSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="h-[50vh] pt-20 pb-12 px-6  bg-black/70 backdrop-blur-md">
      <h2 className="text-4xl text-center font-ahsing text-white">Sponsors</h2>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {sponsors.length > 0 ? (
          <div className="grid gap-3 grid-flow-col">
            {sponsors.map((sponsor, index) => (
              <Link href={sponsor.website ?? ""} key={"sponsor" + index}>
                <Image
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  width={100}
                  height={100}
                />
              </Link>
            ))}
          </div>
        ) : (
          <span className="text-white/50">Updating Soon...</span>
        )}
      </div>
    </div>
  );
}

export default SponsorSection;
