import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-body">
      <Navbar />
      <HeroSection/>
    </main>
  );
}
