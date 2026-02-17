import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero-city.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out", delay: 0.2 }
      );

      // Parallax on scroll
      gsap.to(imgRef.current, {
        yPercent: 20,
        scale: 1.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={imgRef} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Futuristic cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 section-overlay" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] uppercase text-foreground opacity-0"
        >
          BROCODE
        </h1>
        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground mt-6 opacity-0"
        >
          Innovative Solutions
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
