// BlogSection displays a placeholder for future blog posts and technical writings.

import React from 'react';
import DataCard from './DataCard';
import GlitchEffect from './GlitchEffect';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <GlitchEffect intensity="low" triggerChance={0.06}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
              Research Logs
            </h2>
          </GlitchEffect>
          <p className="text-white/70 max-w-xl mx-auto">
            Mission insights and technical documentation from the field.
          </p>
        </div>
        
        <DataCard
          title="UPCOMING TRANSMISSIONS"
          securityLevel="CLASSIFIED"
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-2 border-primary rounded-full border-t-transparent animate-spin mb-6"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Blog Posts Coming Soon</h3>
            
            <p className="text-white/70 text-center max-w-md">
              Technical writings and insights are currently being prepared for declassification.
              Check back later for mission reports and tech explorations.
            </p>
            
            <div className="mt-8 inline-flex font-mono text-xs text-primary border border-primary/30 px-3 py-1 rounded">
              <span className="animate-pulse mr-2">•</span> Status: In Progress
            </div>
          </div>
        </DataCard>
      </div>
    </section>
  );
};

export default BlogSection;
