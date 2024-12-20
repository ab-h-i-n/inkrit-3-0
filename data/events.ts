export interface Event {
  id: string;
  title: string;
  description: string;
  poster: string;
  startTime: string;
  endTime: string;
  entryFee: number;
  prizePool: number;
  eventCoordinators: Coordinator[];
  staffCoordinators: Coordinator[];
  registrationLink: string;
}

interface Coordinator {
  name: string;
  phone: string;
}

export const events: Event[] = [
  {
    id: "coding-marathon",
    title: "Coding Marathon",
    description: "24-hour coding challenge to build innovative solutions",
    poster: "/events/coding-marathon.jpg",
    startTime: "2024-02-15T09:00:00",
    endTime: "2024-02-16T09:00:00",
    entryFee: 500,
    prizePool: 10000,
    eventCoordinators: [
      { name: "John Doe", phone: "+91 9876543210" },
      { name: "Jane Smith", phone: "+91 9876543211" }
    ],
    staffCoordinators: [
      { name: "Dr. Robert Brown", phone: "+91 9876543212" }
    ],
    registrationLink: "https://forms.google.com/coding-marathon"
  },
  {
    id: "hackathon",
    title: "Tech Hackathon",
    description: "Build innovative solutions for real-world problems",
    poster: "/events/hackathon.jpg",
    startTime: "2024-02-16T10:00:00",
    endTime: "2024-02-16T18:00:00",
    entryFee: 300,
    prizePool: 5000,
    eventCoordinators: [
      { name: "Alice Johnson", phone: "+91 9876543213" }
    ],
    staffCoordinators: [
      { name: "Dr. Sarah Wilson", phone: "+91 9876543214" }
    ],
    registrationLink: "https://forms.google.com/hackathon"
  }
];