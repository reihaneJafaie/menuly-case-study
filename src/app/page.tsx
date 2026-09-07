import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeatureStories from "@/components/sections/FeatureStories";
import FrontendArchitecture from "@/components/sections/FrontendArchitecture";
import ProjectSnapshot from "@/components/sections/ProjectSnapshot";
import ProjectStory from "@/components/sections/ProjectStory";
import ProjectOverview from "@/components/sections/ProjectOverview";
import SystemFlow from "@/components/sections/SystemFlow";
import ProductShowcase from "@/components/sections/ProductShowcase";
import DesignSystem from "@/components/sections/DesignSystem";
import ResponsiveEngineering from "@/components/sections/ResponsiveEngineering";
import BusinessLogic from "@/components/sections/BusinessLogic";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0F12] text-[#E2E8F0] overflow-x-clip">
      <Navbar />
      {/* <HeroSection /> */}
      <ProjectSnapshot />
      <ProjectStory />
      <ProjectOverview />
      <SystemFlow />
      <ProductShowcase />
      <FeatureStories />
      <FrontendArchitecture />
      <DesignSystem />
      <ResponsiveEngineering />
    </main>
  );
}