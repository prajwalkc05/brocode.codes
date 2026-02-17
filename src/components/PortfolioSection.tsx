import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { img: p1, title: "FinTrack", category: "Fintech", desc: "Mobile banking dashboard with real-time analytics." },
  { img: p2, title: "ShopWave", category: "E-Commerce", desc: "Next-gen product marketplace with AI recommendations." },
  { img: p3, title: "FitPulse", category: "Health & Fitness", desc: "Workout tracking app with personalized coaching." },
  { img: p4, title: "ChatNova", category: "AI Platform", desc: "Conversational AI interface for enterprise teams." },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".port-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".port-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="port-title font-display text-5xl md:text-7xl font-bold text-foreground text-center mb-16 opacity-0">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="port-card group relative rounded-lg overflow-hidden cursor-pointer opacity-0"
            >
              <div className="relative h-[350px] md:h-[420px] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:bg-background/70" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
