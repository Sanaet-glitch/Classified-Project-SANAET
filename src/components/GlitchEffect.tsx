import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  triggerChance?: number; // Probability of glitch occurring (0-1)
  duration?: number; // Duration in milliseconds
}

const GlitchEffect: React.FC<GlitchEffectProps> = ({
  children,
  className = '',
  intensity = 'medium',
  triggerChance = 0.02, // much less frequent
  duration = 80 // very brief
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < triggerChance) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), duration);
      }
    }, 3000 + Math.random() * 7000); // Random interval between 3-10 seconds

    return () => clearInterval(interval);
  }, [triggerChance, duration]);

  const getGlitchClass = () => {
    switch (intensity) {
      case 'low':
        return 'glitch-effect-low-soft';
      case 'medium':
        return 'glitch-effect-medium-soft';
      case 'high':
        return 'glitch-effect-high-soft';
      default:
        return 'glitch-effect-medium-soft';
    }
  };

  return (
    <span
      className={cn(
        'inline-block',
        isGlitching && getGlitchClass(),
        'pointer-events-none', // never block interaction
        'will-change: color, text-shadow, opacity', // never transform
        className
      )}
      style={{
        // Extra safety: never allow transform/translate/scale/skew
        transform: 'none',
        WebkitTransform: 'none',
        msTransform: 'none',
        MozTransform: 'none',
        OTransform: 'none',
      }}
    >
      {children}
    </span>
  );
};

export default GlitchEffect;
