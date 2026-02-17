import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import advantagesImg from "@/assets/advantages-machine.jpg";

gsap.registerPlugin(ScrollTrigger);

const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".adv-img",
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        ".adv-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );

      gsap.fromTo(
        ".adv-block",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.25, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        }
      );

      gsap.to(".adv-img img", {
        yPercent: -8,
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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-0"
    >
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="adv-img overflow-hidden rounded-lg order-2 lg:order-1">
          <img
            src={advantagesImg}
            alt="Industrial advantages"
            className="w-full h-[500px] lg:h-[600px] object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="adv-title font-display text-5xl md:text-7xl font-bold text-foreground">
            Our Advantages
          </h2>
          <div className="h-[2px] bg-muted-foreground/30 w-24 mt-6 mb-10" />

          <div className="space-y-8">
            <div className="adv-block opacity-0">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">We've Been There.</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                In just over four years we've founded our own start-up, built over 100 app projects
                for our clients, and created proprietary software to make our own business more efficient.
              </p>
            </div>

            <div className="adv-block opacity-0">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Boldly Transparent.</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We know how easy it is for complex projects like custom applications to go overbudget.
                At BroCode, we've crafted our development processes for maximum efficiency and transparency,
                helping you manage your costs and keeping you up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
