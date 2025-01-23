import { client } from "@/sanity/lib/client";
import { unstable_cache } from "next/cache";

export interface Sponsor {
  id: string;
  name: string;
  logo: {
    url : string
  };
  website: string;
}

export const fetchSponsors = unstable_cache(
  async () => {
    return await client.fetch(`*[_type == "sponsor"]{
        ...,
      logo {
        "url": asset->url
      }
        }`);
  },
  ["sponsors"],
  {
    tags: ["sponsors"],
  }
);
