"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function IntelligentBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - left,
        y: e.clientY - top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-black"
    >
      {/* Dynamic Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute rounded-full opacity-40 blur-[100px]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1.5 }}
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(231,76,60,0.15) 0%, rgba(5,5,5,0) 70%)",
        }}
      />

      {/* Abstract Grid Elements representing data network */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Nodes */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[150px]"
      />
    </div>
  );
}
