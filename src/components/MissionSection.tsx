import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import missionImg from "@/assets/mission-lab.jpg";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(".mission-title", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(".mission-line", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.5")
        .fromTo(".mission-text", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.3")
        .fromTo(".mission-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });

      gsap.fromTo(
        ".mission-img",
        { x: 80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );

      gsap.to(".mission-img img", {
        yPercent: -10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-0"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mission-title font-display text-5xl md:text-7xl font-bold text-foreground opacity-0">
            Our Mission
          </h2>
          <div className="mission-line h-[2px] bg-muted-foreground/30 w-24 mt-6 mb-8 origin-left" />
          <p className="mission-text font-body text-lg text-muted-foreground leading-relaxed opacity-0">
            At BroCode, our purpose is to empower digital relationships through mobility.
            By designing and developing custom apps and mobile web-apps, we act as a guide — 
            leading our clients through the process of building complex digital products.
          </p>
          <p className="mission-text font-body text-lg text-muted-foreground leading-relaxed mt-4 opacity-0">
            By designing and developing custom apps and mobile web-apps, we act as a guide — 
            leading our clients to success.
          </p>
          <button className="mission-btn mt-8 px-8 py-3 border border-foreground text-foreground font-body text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300 opacity-0 hover:scale-105 active:scale-95">
            Let's Build!
          </button>
        </div>

        <div className="mission-img overflow-hidden rounded-lg opacity-0 hover:shadow-2xl transition-shadow duration-500">
          <img
            src={missionImg}
            alt="Mission lab"
            className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
