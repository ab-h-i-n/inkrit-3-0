// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LoadingPage from "@/components/LoadingPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inkrit 3.0 - Tech Fest",
  description:
    "Annual Technical Festival of Department of Computer Applications",
  icons: "/assets/abstract element.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overlfow-x-hidden`}>
        <Navbar />
        {children}
        <LoadingPage />
      </body>
    </html>
  );
}
