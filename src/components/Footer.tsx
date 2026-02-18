import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative py-12 px-6 border-t border-border/50 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">BroCode</h3>
            <p className="text-muted-foreground text-sm">Innovative Solutions</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#mission" className="block hover:text-foreground hover:translate-x-1 transition-all duration-300">Mission</a>
              <a href="#advantages" className="block hover:text-foreground hover:translate-x-1 transition-all duration-300">Services</a>
              <a href="#portfolio" className="block hover:text-foreground hover:translate-x-1 transition-all duration-300">Portfolio</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:contact@brocode.com" className="block hover:text-foreground transition-colors">contact@brocode.com</a>
              <a href="tel:+918310605144" className="block hover:text-foreground transition-colors">+91 8310605144</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          © 2026 BroCode. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
