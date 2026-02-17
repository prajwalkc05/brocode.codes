import { motion } from "framer-motion";
import heroImg from "@/assets/hero-city.jpg";
import AnimatedButton from "./AnimatedButton";

const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-[0.2em] uppercase text-foreground"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          BROCODE
        </motion.h1>
        <motion.p
          className="font-body text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Innovative Solutions
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <AnimatedButton>Get Started</AnimatedButton>
          <AnimatedButton variant="secondary">Learn More</AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
