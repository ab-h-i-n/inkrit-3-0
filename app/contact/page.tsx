"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const organizers = [
  {
    name: "John Doe",
    role: "Event Head",
    image: "/organizers/john.jpg",
    phone: "+91 9876543210",
  },
  {
    name: "Jane Smith",
    role: "Technical Head",
    image: "/organizers/jane.jpg",
    phone: "+91 9876543211",
  },
  {
    name: "Dr. Robert Brown",
    role: "Faculty Coordinator",
    image: "/organizers/robert.jpg",
    phone: "+91 9876543212",
  },
];

export default function ContactPage() {
  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\s+/g, "")}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#161E46] to-[#000108] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{organizer.name}</h3>
                <p className="text-gray-600 mb-4">{organizer.role}</p>
                <Button
                  onClick={() => handleWhatsAppClick(organizer.phone)}
                  className="w-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact on WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
