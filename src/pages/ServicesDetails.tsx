import { motion } from "framer-motion";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import Footer from "@/components/Footer";
import { Code, Globe, Cpu, Smartphone, Palette, Shield, Check } from "lucide-react";
import { useState } from "react";
import advantagesBg from "@/assets/advantages-machine.jpg";

const servicesDetails = [
  {
    icon: Code,
    title: "Mini & Major Projects",
    description: "Complete academic projects with documentation, source code, and presentation support.",
    features: [
      "Full source code with comments",
      "Detailed documentation (SRS, DFD, ER diagrams)",
      "PowerPoint presentations",
      "Project report in IEEE format",
      "Viva preparation support",
      "Free revisions"
    ],
    technologies: ["Python", "Java", "C++", "PHP", "Node.js"],
    deliveryTime: "7-14 days"
  },
  {
    icon: Globe,
    title: "Full Stack Projects",
    description: "End-to-end web applications with modern frameworks, databases, and deployment.",
    features: [
      "Responsive frontend design",
      "RESTful API development",
      "Database design & implementation",
      "User authentication & authorization",
      "Cloud deployment (AWS/Heroku)",
      "Admin panel included"
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Express"],
    deliveryTime: "14-21 days"
  },
  {
    icon: Cpu,
    title: "Data Analytics Projects",
    description: "Data visualization, machine learning models, and statistical analysis solutions.",
    features: [
      "Data cleaning & preprocessing",
      "Exploratory data analysis",
      "Interactive visualizations",
      "Statistical modeling",
      "Jupyter notebooks included",
      "Detailed insights report"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    deliveryTime: "10-15 days"
  },
  {
    icon: Smartphone,
    title: "AI & ML Projects",
    description: "Machine learning models, AI applications, and intelligent systems with deployment.",
    features: [
      "Custom ML model development",
      "Model training & optimization",
      "API integration",
      "Web interface for predictions",
      "Model performance reports",
      "Deployment ready code"
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
    deliveryTime: "15-25 days"
  },
  {
    icon: Palette,
    title: "College Fest Websites",
    description: "Event management platforms with registration, scheduling, and live updates.",
    features: [
      "Event registration system",
      "Payment gateway integration",
      "Live event updates",
      "Photo gallery",
      "Admin dashboard",
      "Mobile responsive design"
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    deliveryTime: "10-14 days"
  },
  {
    icon: Shield,
    title: "Reports & Viva Support",
    description: "Professional documentation, technical reports, and presentation preparation.",
    features: [
      "IEEE format reports",
      "Technical documentation",
      "Presentation slides",
      "Viva Q&A preparation",
      "Plagiarism-free content",
      "Multiple revisions"
    ],
    technologies: ["LaTeX", "MS Word", "PowerPoint", "Overleaf"],
    deliveryTime: "3-7 days"
  }
];

const ServicesDetails = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="bg-background relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img src={advantagesBg} alt="Background" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10">
        <AnimatedNavbar />

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Services</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive solutions tailored for your academic and professional needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Service List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 space-y-3"
              >
                {servicesDetails.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                        selectedService === index
                          ? "bg-primary text-primary-foreground border-primary shadow-lg"
                          : "bg-card/50 border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-semibold text-sm">{service.title}</span>
                      </div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Service Details */}
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-2 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  {(() => {
                    const Icon = servicesDetails[selectedService].icon;
                    return <Icon className="w-12 h-12 text-primary flex-shrink-0" />;
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {servicesDetails[selectedService].title}
                    </h2>
                    <p className="text-muted-foreground">
                      {servicesDetails[selectedService].description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {servicesDetails[selectedService].features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {servicesDetails[selectedService].technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => window.location.href = "/#cta"}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServicesDetails;
