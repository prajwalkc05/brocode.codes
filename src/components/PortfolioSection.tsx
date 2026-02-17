import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p4 from "@/assets/portfolio-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { img: p1, title: "FinTrack", category: "Fintech", desc: "Mobile banking dashboard with real-time analytics.", type: "image" },
  { video: "/richclub.mp4", title: "RichClub", category: "E-Commerce", desc: "Next-gen product marketplace with AI recommendations.", type: "video", link: "https://richclub.com" },
  { video: "/futuresense.mp4", title: "FutureSense", category: "Android App", desc: "AI-powered mobile application for future predictions.", type: "video" },
  { img: p4, title: "ChatNova", category: "AI Platform", desc: "Conversational AI interface for enterprise teams.", type: "image" },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".port-title",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".port-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (previewVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [previewVideo]);

  return (
    <>
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="port-title font-display text-5xl md:text-7xl font-bold text-foreground text-center mb-16 opacity-0">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="port-card group relative rounded-lg overflow-hidden cursor-pointer opacity-0 hover:shadow-2xl transition-shadow duration-500"
              onClick={() => project.type === "video" && setPreviewVideo(project.video!)}
            >
              <div className={`relative overflow-hidden ${
                project.category === "Android App" 
                  ? "h-[500px] md:h-[600px] flex items-center justify-center bg-background/20" 
                  : "h-[350px] md:h-[420px]"
              }`}>
                {project.type === "video" ? (
                  <video
                    src={project.video}
                    className={project.category === "Android App" 
                      ? "h-full w-auto max-w-[280px] md:max-w-[320px] object-contain" 
                      : "w-full h-full object-cover"
                    }
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {previewVideo && (
      <div 
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
        onClick={() => setPreviewVideo(null)}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        <button
          className="absolute top-4 right-4 p-2 bg-card border border-border hover:bg-muted transition-colors"
          onClick={() => setPreviewVideo(null)}
        >
          <X className="w-6 h-6" />
        </button>
        <video
          src={previewVideo}
          className="max-w-full max-h-[90vh] w-auto h-auto"
          autoPlay
          loop
          controls
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
};

export default PortfolioSection;
