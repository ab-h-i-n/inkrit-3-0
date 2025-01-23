import { client } from "@/sanity/lib/client";
import { unstable_cache } from "next/cache";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  entryFee: number;
  prizePool: number;
  eventCoordinators: Coordinator[];
  staffCoordinators: Coordinator[];
  registrationLink: string;
  rules: string[];
  poster: {
    url : string
  };
}

export interface Coordinator {
  name: string;
  phone: string;
}



export const fetchEvents = unstable_cache(
  async () => {
    return await client.fetch(`*[_type == "event"] | order(_createdAt asc) {
      ...,
      poster {
        "url": asset->url
      }
    }`);
  },
  ["events"],
  { tags: ["events"] }
);
