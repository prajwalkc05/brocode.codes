import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Our Story", href: "#hero" },
  { label: "Mission", href: "#mission" },
  { label: "Advantages", href: "#advantages" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#cta" },
];

const AnimatedNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo("#hero")}
          className="font-display text-xl font-bold tracking-[0.15em] uppercase text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BroCode
        </motion.button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.slice(0, -1).map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => scrollTo("#cta")}
          className="hidden md:block px-5 py-2 border border-foreground/50 text-foreground font-body text-xs tracking-wider uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default AnimatedNavbar;
