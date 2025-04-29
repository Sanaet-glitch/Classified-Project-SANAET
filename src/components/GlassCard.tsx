"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "cyan" | "purple" | "coral";
  animated?: boolean;
}

export default function GlassCard({ 
  children, 
  className = "",
  variant = "default",
  animated = false
}: GlassCardProps) {
  // Determine card styling based on variant
  const variantStyles = {
    default: "bg-theme-card border-white/5 shadow-3d",
    cyan: "bg-theme-card border-theme-cyan/20 shadow-card-glow",
    purple: "bg-theme-card border-theme-purple/20 shadow-card-glow-purple",
    coral: "bg-theme-card border-theme-coral/20 shadow-card-glow-coral",
  };
  
  const baseStyles = `backdrop-blur-lg border rounded-xl p-6 transition-all duration-300 hover:shadow-3d-hover ${variantStyles[variant]} relative overflow-hidden`;
  
  // Use Framer Motion for animated cards
  if (animated) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {/* Glassy overlay and highlight */}
        <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl" />
          <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-white/20 blur-md rounded-full animate-pulse pointer-events-none" />
        </div>
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
  // Regular non-animated card
  return (
    <div className={`${baseStyles} ${className}`}>
      {/* Glassy overlay and highlight */}
      <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl" />
        <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-white/20 blur-md rounded-full animate-pulse pointer-events-none" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
