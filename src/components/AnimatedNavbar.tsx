import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Our Story", href: "/#hero" },
  { label: "Mission", href: "/#mission" },
  { label: "Services", href: "/#advantages" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#cta" },
];

const AnimatedNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const sectionId = href.replace('/#', '');
    
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMobileMenuOpen(false);
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
          onClick={() => window.location.href = '/'}
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
          onClick={() => scrollTo(navLinks[navLinks.length - 1].href)}
          className="hidden md:block px-5 py-2 border border-foreground/50 text-foreground font-body text-xs tracking-wider uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default AnimatedNavbar;
