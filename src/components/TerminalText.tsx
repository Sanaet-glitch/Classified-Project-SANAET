
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
}

const TerminalText = ({ 
  text, 
  className, 
  speed = 40, 
  startDelay = 0,
  onComplete
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (startDelay > 0) {
      timeoutId = setTimeout(() => {
        startTyping();
      }, startDelay);
    } else {
      startTyping();
    }
    
    return () => {
      clearTimeout(timeoutId);
    };
    
    function startTyping() {
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, index + 1));
        index++;
        
        if (index === text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }
  }, [text, speed, startDelay, onComplete]);

  return (
    <div className={cn("font-mono", className)}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5"></span>
      )}
    </div>
  );
};

export default TerminalText;
