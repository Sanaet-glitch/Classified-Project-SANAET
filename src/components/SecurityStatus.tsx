import React, { useEffect, useState } from 'react';
import { useSecurityClearance, SecurityLevel } from '../hooks/useSecurityClearance';

interface SecurityStatusProps {
  className?: string;
}

const SecurityStatus: React.FC<SecurityStatusProps> = ({ className = '' }) => {
  const { 
    currentLevel, 
    securityPoints, 
    getLevelColor, 
    getLevelDescription,
    getProgressToNextLevel,
    recentActions
  } = useSecurityClearance();
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [lastLevel, setLastLevel] = useState<SecurityLevel>(currentLevel);

  const progress = getProgressToNextLevel();

  // Show notification when level changes
  useEffect(() => {
    if (currentLevel !== lastLevel && lastLevel !== 'GUEST') {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }
    setLastLevel(currentLevel);
  }, [currentLevel, lastLevel]);

  return (    <>
      {/* Security Status Badge */}
      <div className={`fixed top-16 sm:top-20 right-2 sm:right-4 z-40 transition-all duration-300 ${className}`}>
        <div 
          className="glass rounded-lg p-2 sm:p-3 cursor-pointer hover:scale-105 transition-transform neon-border"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${currentLevel === 'TOP_SECRET' ? 'bg-red-400' : 'bg-primary'}`}></div>
            <span className={`font-mono text-xs ${getLevelColor(currentLevel)}`}>
              {currentLevel.replace('_', ' ')}
            </span>
            <span className="text-white/50 text-xs">
              {securityPoints}pts
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-2 w-20 sm:w-24 h-1 bg-black/50 rounded overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Expanded Panel */}
        {isExpanded && (
          <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 glass rounded-lg p-3 sm:p-4 border border-primary/30 shadow-neon max-h-[80vh] overflow-y-auto">
            <div className="mb-3">
              <h3 className="font-mono text-sm text-primary mb-1">Security Clearance Status</h3>
              <p className="text-xs text-white/70">{getLevelDescription(currentLevel)}</p>
            </div>

            {/* Progress to Next Level */}
            {progress.percentage < 100 && (
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/60 mb-1">
                  <span>Progress to Next Level</span>
                  <span>{Math.round(progress.percentage)}%</span>
                </div>
                <div className="w-full h-2 bg-black/50 rounded overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  {progress.required - progress.current} points needed
                </p>
              </div>
            )}

            {/* Recent Actions */}
            {recentActions.length > 0 && (
              <div>
                <h4 className="font-mono text-xs text-primary mb-2">Recent Activity</h4>
                <div className="space-y-1 max-h-24 overflow-y-auto">
                  {recentActions.slice(0, 3).map((action, index) => (
                    <div key={index} className="flex justify-between text-xs">
                      <span className="text-white/70 truncate flex-1 mr-2">{action.description}</span>
                      <span className="text-green-400 shrink-0">+{action.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(false)}
              className="mt-3 text-xs text-white/50 hover:text-white transition-colors"
            >
              [Click to minimize]
            </button>
          </div>
        )}
      </div>

      {/* Level Up Notification */}
      {showNotification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in p-4">
          <div className="glass rounded-lg p-4 sm:p-6 neon-border shadow-neon max-w-sm">
            <div className="text-center">
              <div className="text-primary font-mono text-sm mb-2">SECURITY CLEARANCE UPGRADED</div>
              <div className={`font-bold text-lg ${getLevelColor(currentLevel)}`}>
                {currentLevel.replace('_', ' ')}
              </div>
              <div className="text-white/70 text-xs mt-2">
                {getLevelDescription(currentLevel)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecurityStatus;
