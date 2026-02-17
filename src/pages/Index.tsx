import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="mission"><MissionSection /></div>
      <div id="advantages"><AdvantagesSection /></div>
      <div id="process"><ProcessSection /></div>
      <div id="cta"><CTASection /></div>
      <MissionSection />
      <AdvantagesSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
};

export default Index;
