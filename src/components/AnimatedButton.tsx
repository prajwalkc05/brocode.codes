import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const AnimatedButton = ({ children, onClick, variant = "primary" }: AnimatedButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 sm:px-8 py-3 font-body text-xs sm:text-sm tracking-wider uppercase relative overflow-hidden ${
        variant === "primary"
          ? "bg-foreground text-background"
          : "border border-foreground/50 text-foreground"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="absolute inset-0 bg-primary"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
