// SecurityBadge displays a color-coded badge for a given security clearance level.

import React from 'react';
import { cn } from '@/lib/utils';

type SecurityLevel = 'TOP SECRET' | 'CLASSIFIED' | 'CONFIDENTIAL' | 'RESTRICTED' | 'UNCLASSIFIED';

interface SecurityBadgeProps {
  level: SecurityLevel;
  className?: string;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({ level, className }) => {
  const getBadgeColor = (securityLevel: SecurityLevel) => {
    switch(securityLevel) {
      case 'TOP SECRET':
        return 'border-red-600 text-red-600';
      case 'CLASSIFIED':
        return 'border-orange-500 text-orange-500';
      case 'CONFIDENTIAL':
        return 'border-yellow-500 text-yellow-500';
      case 'RESTRICTED':
        return 'border-blue-500 text-blue-500';
      case 'UNCLASSIFIED':
        return 'border-green-500 text-green-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };

  return (
    <div className={cn(
      "inline-flex items-center justify-center border-2 px-2 py-0.5 rounded font-mono text-xs font-bold tracking-wider animate-pulse-glow",
      getBadgeColor(level),
      className
    )}>
      {level}
    </div>
  );
};

export default SecurityBadge;
