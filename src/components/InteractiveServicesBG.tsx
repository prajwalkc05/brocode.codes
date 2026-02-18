import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface InteractiveServicesBGProps {
  mousePosition: { x: number; y: number };
  isInView: boolean;
}

const InteractiveServicesBG = ({ mousePosition, isInView }: InteractiveServicesBGProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Reduce particles for performance
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animationId: number;
    let lastTime = 0;
    const fps = 30; // Limit to 30fps
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(25, 95%, 60%, ${particle.opacity})`;
          ctx.fill();
        });

        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => cancelAnimationFrame(animationId);
  }, [isInView]);

  return (
    <>
      {/* Simplified gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsla(25, 95%, 60%, 0.06) 0%, transparent 50%)`,
          willChange: 'transform',
        }}
      />

      {/* Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: isInView ? 0.5 : 0 }}
      />

      {/* Single depth layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          x: isInView ? (mousePosition.x - 50) * 0.015 : 0,
          y: isInView ? (mousePosition.y - 50) * 0.015 : 0,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 30 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsla(25, 95%, 60%, 0.04), transparent 60%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default InteractiveServicesBG;
