import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );

      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth / 2;
        animationRef.current = gsap.to(scrollRef.current, {
          x: -scrollWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    if (animationRef.current) {
      if (isPaused) {
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h2 className="tech-title font-display text-5xl md:text-7xl font-bold text-foreground text-center mb-4 opacity-0">
          Tech Stack
        </h2>
        <p className="tech-title text-center text-muted-foreground opacity-0">
          Technologies We Work With
        </p>
        <p className="tech-title text-center text-sm text-muted-foreground mt-2 opacity-0">
          Cutting-edge tools and frameworks to build your perfect solution
        </p>
      </div>

      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={handleToggle}
        onMouseEnter={handleToggle}
        onMouseLeave={() => {
          if (isPaused && animationRef.current) {
            animationRef.current.play();
            setIsPaused(false);
          }
        }}
      >
        <div ref={scrollRef} className="flex gap-8 whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-8 py-4 border border-border bg-card backdrop-blur-sm hover:border-primary/50 transition-colors min-w-fit"
            >
              <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(1)' }} />
              <span className="font-body text-sm tracking-wider uppercase">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
