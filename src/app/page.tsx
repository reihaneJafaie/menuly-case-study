import Navbar from "@/components/layout/Navbar";
import AboutReihane from "@/components/sections/AboutReihane";
import ContactCTA from "@/components/sections/ContactCTA";
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
import TechnicalChallenges from "@/components/sections/TechnicalChallenges";
import LessonsLearned from "@/components/sections/LessonsLearned";
import ProductionDeployment from "@/components/sections/ProductionDeployment";
import WhatIWouldImprove from "@/components/sections/WhatIWouldImprove";
import FinalOutcome from "@/components/sections/FinalOutcome";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0F12] text-[#E2E8F0] overflow-x-clip">
      <Navbar />
      <HeroSection />
      <ProjectSnapshot />
      <ProjectStory />
      <ProjectOverview />
      <SystemFlow />
      <ProductShowcase />
      <FeatureStories />
      <FrontendArchitecture />
      <DesignSystem />
      <ResponsiveEngineering />
      <TechnicalChallenges />
      <ProductionDeployment />
      <LessonsLearned />
      <WhatIWouldImprove />
      <FinalOutcome />
      <AboutReihane />
      <ContactCTA />
    </main>
  );
}