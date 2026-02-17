import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import processImg from "@/assets/process-sunset.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "We learn about your vision, goals, and users." },
  { num: "02", title: "Design", desc: "Crafting beautiful, intuitive interfaces." },
  { num: "03", title: "Develop", desc: "Building scalable, modern technology." },
  { num: "04", title: "Deploy", desc: "Launch, optimize, and iterate." },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".process-step",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", toggleActions: "play none none reverse" },
        }
      );

      gsap.to(".process-bg img", {
        yPercent: -15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden py-24">
      <div className="process-bg absolute inset-0 z-0">
        <img src={processImg} alt="Process" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="process-title font-display text-5xl md:text-7xl font-bold text-foreground text-center mb-16">
          Our Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step group p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 cursor-pointer"
            >
              <span className="font-display text-4xl font-bold text-gradient">{step.num}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
