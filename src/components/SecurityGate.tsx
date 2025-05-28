import React, { useEffect, useState } from 'react';
import { useSecurityClearance } from '../hooks/useSecurityClearance';

interface SecurityGateProps {
  requiredLevel: 'GUEST' | 'AUTHORIZED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  children: React.ReactNode;
  fallback?: React.ReactNode;
  sectionName?: string;
}

const SecurityGate: React.FC<SecurityGateProps> = ({ 
  requiredLevel, 
  children, 
  fallback,
  sectionName = 'content'
}) => {
  const { addSecurityPoints, getLevelColor } = useSecurityClearance();
  const [showAccessGranted, setShowAccessGranted] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Award points for accessing sections
  useEffect(() => {
    addSecurityPoints({
      type: 'section_access',
      points: 5,
      description: `Accessed ${sectionName}`
    });

    // Show brief "Access Granted" animation for sections requiring higher clearance
    if (requiredLevel !== 'GUEST') {
      setShowAccessGranted(true);
      setTimeout(() => {
        setShowAccessGranted(false);
        setContentVisible(true);
      }, 1500);
    } else {
      setContentVisible(true);
    }
  }, [addSecurityPoints, sectionName, requiredLevel]);

  // Show access granted animation for higher security sections
  if (requiredLevel !== 'GUEST' && showAccessGranted && !contentVisible) {
    return (
      <div className="relative min-h-[200px] flex items-center justify-center">
        <div className="glass rounded-lg p-8 text-center border border-green-500/30">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-green-500 flex items-center justify-center animate-pulse">
              <span className="text-green-500 text-2xl">🔓</span>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-2">ACCESS GRANTED</h3>
            <p className="text-white/70 mb-4">
              Security Clearance Level <span className={`font-mono ${getLevelColor(requiredLevel)}`}>
                {requiredLevel.replace('_', ' ')}
              </span>
            </p>
            <p className="text-sm text-white/50">
              Decrypting {sectionName.toLowerCase()}...
            </p>
          </div>
          
          {/* Loading animation */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{
              width: '100%',
              animation: 'loading-bar 1.5s ease-in-out'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Content is always accessible, just show it
  return <>{children}</>;
};

export default SecurityGate;
