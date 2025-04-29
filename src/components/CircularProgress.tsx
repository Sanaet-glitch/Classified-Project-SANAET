import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  value: number; // 0-100
  size?: number; // Size in pixels
  thickness?: number; // Thickness of the progress ring
  color?: 'cyan' | 'purple' | 'coral';
  label?: string;
  animated?: boolean;
  showValue?: boolean;
  className?: string;
}

export default function CircularProgress({
  value,
  size = 120,
  thickness = 8,
  color = 'cyan',
  label,
  animated = true,
  showValue = true,
  className = ''
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  
  // Calculate circle properties
  const radius = size / 2 - thickness;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Colors mapping
  const colorVariants = {
    cyan: {
      stroke: 'var(--theme-cyan)',
      textGradient: 'text-gradient-cyan',
      glowClass: 'shadow-card-glow'
    },
    purple: {
      stroke: 'var(--theme-purple)',
      textGradient: 'text-gradient-purple',
      glowClass: 'shadow-card-glow-purple'
    },
    coral: {
      stroke: 'var(--theme-coral)',
      textGradient: 'text-gradient-coral',
      glowClass: 'shadow-card-glow-coral'
    }
  };
  
  // Animation effect
  useEffect(() => {
    if (animated) {
      // Reset progress when value changes
      setProgress(0);
      
      // Start animation
      const timer = setTimeout(() => {
        setProgress(value);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animated]);
  
  return (
    <div className={`relative ${className} z-0`}>
      {/* 3D shadow layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 rounded-full blur-[6px] opacity-60" style={{boxShadow: `0 6px 32px 0 ${colorVariants[color].stroke}, 0 1.5px 8px 0 #000a`}} />
        <div className="absolute inset-2 rounded-full blur-[2px] opacity-30" style={{boxShadow: `inset 0 2px 8px 0 #fff2`}} />
      </div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`transform -rotate-90 z-10 ${animated ? 'filter drop-shadow-md' : ''}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={thickness}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorVariants[color].stroke}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: animated ? 1.5 : 0, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${colorVariants[color].stroke})` }}
        />
        {/* Animated light sweep */}
        {animated && (
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#sweep-gradient)"
            strokeWidth={thickness * 0.7}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.7}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{ transformOrigin: '50% 50%' }}
          />
        )}
        <defs>
          <linearGradient id="sweep-gradient" x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {showValue && (
          <motion.span 
            className={`text-2xl font-bold ${colorVariants[color].textGradient}`}
            initial={animated ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {animated ? `${Math.round(progress)}%` : `${value}%`}
          </motion.span>
        )}
        
        {label && (
          <motion.span 
            className="text-sm text-gray-300 mt-1"
            initial={animated ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {label}
          </motion.span>
        )}
      </div>
    </div>
  );
}