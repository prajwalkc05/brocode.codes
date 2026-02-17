import { useState } from "react";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedCard from "@/components/AnimatedCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import PageTransition from "@/components/PageTransition";
import AnimatedButton from "@/components/AnimatedButton";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const AnimatedDemo = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <PageTransition>
      <main className="bg-background overflow-x-hidden">
        <AnimatedNavbar />
        
        <div id="hero">
          <AnimatedHero />
        </div>

        <section id="mission" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 sm:mb-16">Animated Cards</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimatedCard delay={0}>
              <h3 className="text-2xl font-bold mb-4">Card One</h3>
              <p className="text-muted-foreground">Hover to see lift effect. Scroll reveals with fade-in animation.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">Card Two</h3>
              <p className="text-muted-foreground">Each card animates in sequence with staggered delays.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <h3 className="text-2xl font-bold mb-4">Card Three</h3>
              <p className="text-muted-foreground">Smooth transitions and hover interactions included.</p>
            </AnimatedCard>
          </div>
        </section>

        <section id="advantages" className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Interactive Buttons</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <AnimatedButton>Primary Button</AnimatedButton>
              <AnimatedButton variant="secondary">Secondary Button</AnimatedButton>
              <AnimatedButton onClick={handleLoadingDemo}>Show Loading</AnimatedButton>
            </div>
          </div>
        </section>

        <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 sm:mb-16">More Animated Cards</h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatedCard>
              <h3 className="text-2xl font-bold mb-4">Feature One</h3>
              <p className="text-muted-foreground">All animations are smooth and performant using Framer Motion.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
              <p className="text-muted-foreground">Responsive design works perfectly on all screen sizes.</p>
            </AnimatedCard>
          </div>
        </section>

        <section id="portfolio" className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Page Transitions</h2>
            <p className="text-muted-foreground mb-8">This entire page uses PageTransition wrapper for smooth entry/exit animations.</p>
          </div>
        </section>

        <div id="cta">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default AnimatedDemo;
