import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type SecurityLevel = 'GUEST' | 'AUTHORIZED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';

interface SecurityAction {
  type: string;
  points: number;
  description: string;
}

interface SecurityClearanceContextType {
  currentLevel: SecurityLevel;
  securityPoints: number;
  unlockedSections: string[];
  addSecurityPoints: (action: SecurityAction) => void;
  hasAccess: (requiredLevel: SecurityLevel) => boolean;
  getLevelColor: (level: SecurityLevel) => string;
  getLevelDescription: (level: SecurityLevel) => string;
  getProgressToNextLevel: () => { current: number; required: number; percentage: number };
  recentActions: SecurityAction[];
}

const SecurityClearanceContext = createContext<SecurityClearanceContextType | undefined>(undefined);

const SECURITY_LEVELS: Record<SecurityLevel, { points: number; color: string; description: string }> = {
  GUEST: { 
    points: 0, 
    color: 'text-gray-400', 
    description: 'Limited access to public information' 
  },
  AUTHORIZED: { 
    points: 50, 
    color: 'text-blue-400', 
    description: 'Access to basic portfolio sections' 
  },
  CONFIDENTIAL: { 
    points: 150, 
    color: 'text-yellow-400', 
    description: 'Access to project details and resume' 
  },
  SECRET: { 
    points: 300, 
    color: 'text-orange-400', 
    description: 'Access to advanced features and CLI' 
  },
  TOP_SECRET: { 
    points: 500, 
    color: 'text-red-400', 
    description: 'Full access to all classified materials' 
  }
};

export const SecurityClearanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [securityPoints, setSecurityPoints] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<SecurityLevel>('GUEST');
  const [unlockedSections, setUnlockedSections] = useState<string[]>(['hero', 'projects', 'skills', 'resume', 'contact', 'cli', 'testimonials', 'blog', 'easter_eggs']);
  const [recentActions, setRecentActions] = useState<SecurityAction[]>([]);
  // Load saved progress from localStorage and unlock all sections
  useEffect(() => {
    const saved = localStorage.getItem('sanaet_security_clearance');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setSecurityPoints(data.securityPoints || 0);
        setRecentActions(data.recentActions || []);
      } catch (error) {
        console.log('Failed to load security clearance data');
      }
    }
    // Always unlock all sections for accessibility
    const allSections = ['hero', 'projects', 'skills', 'resume', 'contact', 'cli', 'testimonials', 'blog', 'easter_eggs'];
    setUnlockedSections(allSections);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const data = {
      securityPoints,
      unlockedSections,
      recentActions: recentActions.slice(-10) // Keep only last 10 actions
    };
    localStorage.setItem('sanaet_security_clearance', JSON.stringify(data));
  }, [securityPoints, unlockedSections, recentActions]);
  // Update security level based on points (visual progression only)
  useEffect(() => {
    const levels = Object.entries(SECURITY_LEVELS) as [SecurityLevel, typeof SECURITY_LEVELS[SecurityLevel]][];
    const newLevel = levels
      .reverse()
      .find(([_, config]) => securityPoints >= config.points)?.[0] || 'GUEST';
    
    if (newLevel !== currentLevel) {
      setCurrentLevel(newLevel);
      
      // Unlock all sections regardless of level (for thematic consistency)
      const allSections = ['hero', 'projects', 'skills', 'resume', 'contact', 'cli', 'testimonials', 'blog', 'easter_eggs'];
      setUnlockedSections(allSections);
    }
  }, [securityPoints, currentLevel]);

  const addSecurityPoints = useCallback((action: SecurityAction) => {
    setSecurityPoints(prev => prev + action.points);
    setRecentActions(prev => [action, ...prev.slice(0, 9)]);
  }, []);
  const hasAccess = useCallback((requiredLevel: SecurityLevel) => {
    // Always grant access - security levels are now purely visual/thematic
    return true;
  }, [currentLevel]);

  const getLevelColor = useCallback((level: SecurityLevel) => {
    return SECURITY_LEVELS[level].color;
  }, []);

  const getLevelDescription = useCallback((level: SecurityLevel) => {
    return SECURITY_LEVELS[level].description;
  }, []);

  const getProgressToNextLevel = useCallback(() => {
    const levels = Object.entries(SECURITY_LEVELS) as [SecurityLevel, typeof SECURITY_LEVELS[SecurityLevel]][];
    const currentIndex = levels.findIndex(([level]) => level === currentLevel);
    const nextLevel = levels[currentIndex + 1];
    
    if (!nextLevel) {
      return { current: securityPoints, required: SECURITY_LEVELS[currentLevel].points, percentage: 100 };
    }
    
    const currentLevelPoints = SECURITY_LEVELS[currentLevel].points;
    const nextLevelPoints = nextLevel[1].points;
    const progress = securityPoints - currentLevelPoints;
    const required = nextLevelPoints - currentLevelPoints;
    const percentage = Math.min((progress / required) * 100, 100);
    
    return { current: progress, required, percentage };
  }, [currentLevel, securityPoints]);

  return (
    <SecurityClearanceContext.Provider value={{
      currentLevel,
      securityPoints,
      unlockedSections,
      addSecurityPoints,
      hasAccess,
      getLevelColor,
      getLevelDescription,
      getProgressToNextLevel,
      recentActions
    }}>
      {children}
    </SecurityClearanceContext.Provider>
  );
};

export const useSecurityClearance = () => {
  const context = useContext(SecurityClearanceContext);
  if (!context) {
    throw new Error('useSecurityClearance must be used within SecurityClearanceProvider');
  }
  return context;
};
