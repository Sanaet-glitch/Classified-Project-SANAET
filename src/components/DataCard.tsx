// DataCard is a reusable glassmorphic card with a security badge and neon border for section content.

import React from 'react';
import { cn } from '@/lib/utils';
import SecurityBadge from './SecurityBadge';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
  securityLevel?: 'TOP SECRET' | 'CLASSIFIED' | 'CONFIDENTIAL' | 'RESTRICTED' | 'UNCLASSIFIED';
  className?: string;
  glowColor?: string;
}

const DataCard: React.FC<DataCardProps> = ({ 
  title, 
  children, 
  securityLevel = 'CLASSIFIED',
  className,
  glowColor = 'primary'
}) => {
  return (
    <div className={cn(
      "glass rounded-md overflow-hidden neon-border relative",
      `hover:shadow-[0_0_15px_rgba(var(--${glowColor})/30)]`,
      "transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="absolute inset-0 border border-white/5 rounded-md pointer-events-none"></div>
      
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/50">
        <h3 className="font-mono text-primary text-sm flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          {title}
        </h3>
        <SecurityBadge level={securityLevel} />
      </div>
      
      <div className="p-4 relative z-10">
        <div className="before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:pointer-events-none before:-z-10"></div>
        {children}
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </div>
  );
};

export default DataCard;
