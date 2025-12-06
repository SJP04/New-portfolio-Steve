import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingShape {
  id: number;
  type: "circle" | "ring" | "square" | "triangle" | "cross";
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Generate floating shapes
    const shapeTypes: FloatingShape["type"][] = ["circle", "ring", "square", "triangle", "cross"];
    const newShapes: FloatingShape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    setShapes(newShapes);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "absolute border-primary/30";
    
    switch (shape.type) {
      case "circle":
        return (
          <div
            className={`${baseClasses} rounded-full bg-primary/10`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "ring":
        return (
          <div
            className={`${baseClasses} rounded-full border-2 border-primary/20`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "square":
        return (
          <div
            className={`${baseClasses} border border-primary/20 bg-primary/5`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "triangle":
        return (
          <div
            className="absolute w-0 h-0"
            style={{
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(var(--primary) / 0.1)`,
            }}
          />
        );
      case "cross":
        return (
          <div className="absolute" style={{ width: shape.size, height: shape.size }}>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/20 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-primary/20 -translate-x-1/2" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Mouse-following gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          left: smoothX,
          top: smoothY,
          x: "-30%",
          y: "-70%",
        }}
      />

      {/* Animated moving lines */}
      <motion.div
        className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={{
          x: ["-10vw", "110vw"],
          y: ["20vh", "80vh"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
        animate={{
          x: ["110vw", "-10vw"],
          y: ["60vh", "30vh"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
      <motion.div
        className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          x: ["30vw", "70vw", "30vw"],
          y: ["-10vh", "110vh"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}

      {/* Orbiting circles */}
      <div className="absolute top-1/4 left-1/4">
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-primary/30"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "100px 100px" }}
        />
      </div>
      <div className="absolute top-3/4 right-1/4">
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-secondary/40"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "80px 80px" }}
        />
      </div>

      {/* Static ambient orbs */}
      <div className="absolute top-[10%] left-[10%] w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute top-[60%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[10%] left-[30%] w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(45deg, transparent 40%, hsl(var(--primary) / 0.05) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scroll-reactive gradient line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};
