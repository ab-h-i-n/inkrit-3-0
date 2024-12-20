"use client";
import { sponsors } from "@/data/sponsors";
import SponsorCard from "@/components/sponsors/SponsorCard";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SponsorsPage() {
  const [selectedSponsor, setSelectedSponsor] = useState(sponsors[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#161E46] to-[#000108] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              onClick={() => {
                setSelectedSponsor(sponsor);
                setIsDialogOpen(true);
              }}
            />
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedSponsor.name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-gray-600 mb-4">
                {selectedSponsor.description}
              </p>
              <p>
                <a
                  href={selectedSponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit Website
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Sponsorship Tier:{" "}
                {selectedSponsor.tier.charAt(0).toUpperCase() +
                  selectedSponsor.tier.slice(1)}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
