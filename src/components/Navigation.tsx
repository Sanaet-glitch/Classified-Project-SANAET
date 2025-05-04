import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  // Wrap navItems in useMemo so it's stable for useEffect
  const navItems = useMemo(() => [
    { id: 'hero', label: 'MISSION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'resume', label: 'DOSSIER' },
    { id: 'testimonials', label: 'INTEL' },
    { id: 'blog', label: 'LOGS' },
    { id: 'contact', label: 'COMMS' }
  ], []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top when scrolled down
      setShowScrollToTop(window.scrollY > 300);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
        <button
          onClick={() => {
            document.documentElement.classList.toggle('theme-stealth');
            document.documentElement.classList.toggle('theme-alert');
          }}
          className="glass px-3 py-1 rounded-full neon-border text-xs font-mono text-primary hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle theme"
        >
          <span className="hidden md:inline">{document.documentElement.classList.contains('theme-stealth') ? 'STEALTH MODE' : 'ALERT MODE'}</span>
          <span className="md:hidden">🌓</span>
        </button>
      </div>

      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeSection === item.id 
                  ? "bg-primary neon-border w-4 h-4" 
                  : "bg-white/30 hover:bg-white/70"
              )}
              aria-label={`Navigate to ${item.label}`}
              data-tooltip={item.label}
            >
              <span className="absolute right-full mr-4 text-xs font-mono opacity-0 transition-opacity duration-200 whitespace-nowrap group-hover:opacity-100">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
      
      <div className="fixed bottom-6 right-6 z-50">
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="bg-black/50 backdrop-blur-sm text-white rounded-full p-2 neon-border"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 glass">
        <div className="flex justify-around py-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "px-2 py-1 text-xs font-mono rounded transition-all duration-300",
                activeSection === item.id 
                  ? "text-primary neon-border" 
                  : "text-white/70"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
