import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  color?: 'cyan' | 'purple' | 'coral';
  className?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color = 'cyan',
  className = ''
}: StatsCardProps) {
  // Color variants
  const colorMap = {
    cyan: {
      bgGradient: 'bg-gradient-to-br from-[#0a192f] to-[#112240]',
      borderColor: 'border-cyan-500/20',
      glowClass: 'shadow-card-glow',
      textGradient: 'text-gradient-cyan'
    },
    purple: {
      bgGradient: 'bg-gradient-to-br from-[#0a192f] to-[#1a1033]',
      borderColor: 'border-purple-500/20',
      glowClass: 'shadow-card-glow-purple',
      textGradient: 'text-gradient-purple'
    },
    coral: {
      bgGradient: 'bg-gradient-to-br from-[#0a192f] to-[#301a1a]',
      borderColor: 'border-red-500/20',
      glowClass: 'shadow-card-glow-coral',
      textGradient: 'text-gradient-coral'
    }
  };
  
  return (
    <motion.div
      className={`relative p-5 rounded-lg border ${colorMap[color].borderColor} ${colorMap[color].bgGradient} ${colorMap[color].glowClass} backdrop-blur-sm shadow-2xl shadow-black/60 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.04,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 #000a',
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
          <p className={`text-2xl font-bold ${colorMap[color].textGradient}`}>
            {value}
          </p>
        </div>
        
        {icon && (
          <div className={`p-2 rounded-full bg-opacity-10 ${colorMap[color].borderColor}`}>
            {icon}
          </div>
        )}
      </div>
      {/* 3D effect using pseudo elements */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {/* Animated light reflection */}
      <motion.div
        className="absolute left-1/4 top-0 w-1/2 h-1/4 rounded-full bg-white/20 blur-md pointer-events-none"
        initial={{ opacity: 0.2, y: -10 }}
        animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  );
}