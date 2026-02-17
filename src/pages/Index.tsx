import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <MissionSection />
      <AdvantagesSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
};

export default Index;
