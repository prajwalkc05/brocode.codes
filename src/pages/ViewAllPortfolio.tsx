import { motion } from "framer-motion";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import allProjectsBg from "@/assets/allprojects.png";

const categories = [
  { 
    id: "website", 
    title: "Website", 
    projects: [
      { video: "/petwebsite.mp4", title: "Pet Website", desc: "Modern pet care platform with booking and services.", link: "https://petwebsite.com" },
      { video: "/richclub.mp4", title: "RichClub", desc: "Next-gen product marketplace with AI recommendations.", link: "https://richclub.com" },
    ]
  },
  { 
    id: "portfolio", 
    title: "Portfolio", 
    projects: [
      { video: "/portflio.mp4", title: "Portfolio 1", desc: "Professional portfolio showcase with modern design.", link: "https://portfolio1.com" },
      { video: "/portfolio2.mp4", title: "Portfolio 2", desc: "Creative portfolio with interactive elements.", link: "https://portfolio2.com" },
    ]
  },
  { 
    id: "mobile-apps", 
    title: "Mobile Apps", 
    projects: [
      { video: "/futuresense.mp4", title: "FutureSense", desc: "AI-powered mobile application for future predictions." },
      { video: "/weather.mp4", title: "Weather App", desc: "Real-time weather forecasting mobile application." },
    ]
  },
  { 
    id: "product-design", 
    title: "Product Design", 
    projects: [
      { video: "/ui:uxdesign.mp4", title: "UI/UX Design", desc: "Creative design showcase with modern interfaces." },
    ]
  },
  { id: "ai-ml", title: "AI / ML", projects: [] },
];

const ViewAllPortfolio = () => {
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (previewVideo) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [previewVideo]);

  return (
    <div className="bg-background relative">
      <div className="fixed inset-0 z-0">
        <img src={allProjectsBg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      <div className="relative z-10">
      <AnimatedNavbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            All Projects
          </motion.h1>

          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              id={category.id}
              className="mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-4xl font-bold mb-8 border-b border-border pb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.projects.length > 0 ? (
                  category.projects.map((project) => (
                    <div
                      key={project.title}
                      className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-500"
                      onClick={() => setPreviewVideo(project.video)}
                    >
                      <div className={`relative overflow-hidden ${
                        category.id === "mobile-apps" 
                          ? "h-[500px] flex items-center justify-center bg-background/20" 
                          : "h-[350px]"
                      }`}>
                        <video
                          src={project.video}
                          className={category.id === "mobile-apps" 
                            ? "h-full w-auto max-w-[280px] object-contain" 
                            : "w-full h-full object-cover"
                          }
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/70 transition-opacity" />
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.desc}
                        </p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Live
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 border border-border bg-card/50 text-center text-muted-foreground">
                    Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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

      <Footer />
      </div>
    </div>
  );
};

export default ViewAllPortfolio;
