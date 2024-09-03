import Navbar from "@/components/Navbar";
import Image from "next/image";
import Info from "@/components/Info";
import HeroSection from "@/components/HeroSection";
import MyWorks from "@/components/MyWorks";
import SignOff from "@/components/SignOff";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-body">
      <Navbar />
      <HeroSection />
      <Info />
      <MyWorks />
      <Testimonials />
      <SignOff />
    </main>
  );
}
