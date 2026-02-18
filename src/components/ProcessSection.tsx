import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import processImg from "@/assets/process-sunset.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discuss Requirements", desc: "Share your project vision and technical requirements" },
  { num: "02", title: "Scope & Confirmation", desc: "Receive detailed proposal with timeline and pricing" },
  { num: "03", title: "Development", desc: "Expert team builds with regular milestone updates" },
  { num: "04", title: "Review & Refine", desc: "Test and provide feedback for revisions" },
  { num: "05", title: "Delivery", desc: "Complete source code and documentation" },
  { num: "06", title: "Post-Delivery Support", desc: "Ongoing support and technical guidance" },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden py-24">
      <div className="process-bg absolute inset-0 z-0">
        <img
          src={processImg}
          alt="Process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.3) 0%, transparent 70%)`,
            transition: 'background 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="process-title font-display text-5xl md:text-7xl font-bold text-foreground text-center mb-16">
          Our Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              className="process-step group p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 opacity-0 cursor-pointer"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-display text-4xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">{step.num}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
