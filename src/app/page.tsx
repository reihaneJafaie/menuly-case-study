import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSnapshot from "@/components/sections/ProjectSnapshot";
import ProjectStory from "@/components/sections/ProjectStory";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0F12] text-[#E2E8F0] overflow-x-clip">
      <Navbar />
      {/* <HeroSection /> */}
      <ProjectSnapshot />
      <ProjectStory />
    </main>
  );
}