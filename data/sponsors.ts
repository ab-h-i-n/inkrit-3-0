export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export const sponsors: Sponsor[] = [
  {
    id: "tech-corp",
    name: "TechCorp Solutions",
    logo: "/sponsors/techcorp.png",
    description: "Leading provider of enterprise software solutions",
    website: "https://techcorp.example.com",
    tier: "platinum"
  },
  {
    id: "innovate-labs",
    name: "Innovate Labs",
    logo: "/sponsors/innovate.png",
    description: "Research and development company focusing on emerging technologies",
    website: "https://innovatelabs.example.com",
    tier: "gold"
  },
  {
    id: "digital-dynamics",
    name: "Digital Dynamics",
    logo: "/sponsors/digital.png",
    description: "Digital transformation consultancy",
    website: "https://digitaldynamics.example.com",
    tier: "silver"
  }
];