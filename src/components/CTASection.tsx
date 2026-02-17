import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="cta-content relative z-10 text-center max-w-3xl mx-auto px-6 opacity-0">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
          Ready to Build?
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
          Let's create something extraordinary together. Your vision, our expertise.
        </p>
        <button className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity duration-300 glow-primary">
          Get in Touch
        </button>

        <div className="mt-24 pt-12 border-t border-border">
          <p className="font-body text-sm text-muted-foreground tracking-wider">
            © 2026 BroCode. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
