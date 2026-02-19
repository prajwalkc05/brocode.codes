import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

const Index = () => {
  useSmoothScroll();

  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="mission"><MissionSection /></div>
      <div id="advantages"><AdvantagesSection /></div>
      <div id="process"><ProcessSection /></div>
      <TechStack />
      <div id="portfolio"><PortfolioSection /></div>
      <div id="cta"><ContactForm /></div>
      <Footer />
    </main>
  );
};

export default Index;
