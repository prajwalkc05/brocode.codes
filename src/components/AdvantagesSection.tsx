import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Smartphone, Globe, Cpu, Palette, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive web apps built with cutting-edge frameworks and modern architecture.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailor-made solutions designed to streamline your unique business processes and workflows.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent systems that automate tasks, analyze data, and drive smarter decisions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that turns complex ideas into intuitive, beautiful interfaces.",
  },
  {
    icon: Shield,
    title: "Cloud & DevOps",
    description: "Robust cloud infrastructure and CI/CD pipelines for reliable, scalable deployments.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className="svc-card opacity-0"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative h-full rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? "translateZ(20px)" : "translateZ(0)"}`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `${rotation.y * 0.5}px ${rotation.x * -0.5}px 30px hsl(var(--primary) / 0.15), 0 10px 40px hsl(var(--primary) / 0.1)`
            : "0 2px 10px hsl(var(--foreground) / 0.05)",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.08 : 0,
            background: `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 + rotation.x * 2}%, hsl(var(--primary)), transparent 70%)`,
          }}
        />

        <div
          className="relative z-10"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-5 transition-all duration-500 ${isHovered ? "bg-primary text-primary-foreground scale-110" : "bg-muted text-muted-foreground"}`}>
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
          <p className="font-body text-muted-foreground leading-relaxed text-sm">{service.description}</p>
        </div>

        {/* Floating index */}
        <span
          className="absolute top-4 right-5 font-display text-6xl font-black text-foreground/[0.03] select-none"
          style={{ transform: "translateZ(60px)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".svc-subtitle",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".svc-card",
        { y: 60, opacity: 0, rotateX: 15 },
        {
          y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 75%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="svc-title font-display text-5xl md:text-7xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="svc-subtitle font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions engineered to accelerate your business growth.
          </p>
          <div className="h-[2px] bg-primary/40 w-24 mx-auto mt-6" />
        </div>

        <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
