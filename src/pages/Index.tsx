import { lazy, Suspense } from "react";
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

const Dither = lazy(() => import("@/components/Dither"));

const Index = () => {
  useSmoothScroll();

  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />

      {/* Dither intro section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Suspense fallback={<div className="w-full h-full bg-background" />}>
            <Dither
              waveColor={[0.32, 0.15, 1]}
              disableAnimation={false}
              enableMouseInteraction
              mouseRadius={1}
              colorNum={4}
              pixelSize={2}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </Suspense>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] uppercase text-foreground drop-shadow-2xl">
            Welcome
          </h2>
          <p className="font-body text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground mt-6">
            Scroll to explore
          </p>
        </div>
      </section>

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
