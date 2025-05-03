import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  glitchInterval = 5000,
  glitchDuration = 500,
  intensity = 'medium'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}:"<>?|';

  const generateGlitchText = useCallback(() => {
    const glitchProbability = intensity === 'high' ? 0.5 : (intensity === 'medium' ? 0.3 : 0.2);
    
    return text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (Math.random() < glitchProbability) {
          return characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return char;
      })
      .join('');
  }, [intensity, text, characters]);

  const startGlitch = useCallback(() => {
    setIsGlitching(true);
    
    // Multiple rapid changes during glitch duration
    const changes = intensity === 'high' ? 8 : (intensity === 'medium' ? 5 : 3);
    const interval = glitchDuration / changes;
    
    let count = 0;
    const glitcherId = setInterval(() => {
      setGlitchText(generateGlitchText());
      count++;
      
      if (count >= changes) {
        clearInterval(glitcherId);
        setGlitchText(text);
        setIsGlitching(false);
      }
    }, interval);
  }, [glitchDuration, intensity, text, generateGlitchText]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      startGlitch();
    }, glitchInterval);
    
    return () => clearInterval(intervalId);
  }, [glitchInterval, startGlitch]);
  
  return (
    <span 
      className={cn(
        "relative inline-block", 
        isGlitching && "animate-glitch",
        className
      )}
      data-text={text}
    >
      {isGlitching && (
        <>
          <span className="absolute top-0 left-[2px] text-accent opacity-70 clip-glitch" aria-hidden="true">
            {glitchText}
          </span>
          <span className="absolute top-0 left-[-2px] text-primary opacity-70 clip-glitch-2" aria-hidden="true">
            {glitchText}
          </span>
        </>
      )}
      {glitchText}
    </span>
  );
};

export default GlitchText;
