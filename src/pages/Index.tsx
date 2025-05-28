import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import SecurityStatus from '@/components/SecurityStatus';
import SecurityGate from '@/components/SecurityGate';
import MatrixRain from '@/components/MatrixRain';
import { CLIProvider } from '@/hooks/useCLI';
import { SecurityClearanceProvider } from '@/hooks/useSecurityClearance';

const Index = () => {
  useEffect(() => {
    // Console easter egg
    console.log(
      "%c CLASSIFIED PROJECT: SANAET \n%c UNAUTHORIZED ACCESS HIGHLY ENCOURAGED",
      "color: hsl(263, 90%, 75%); font-size: 20px; font-weight: bold; text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);",
      "color: white; font-size: 12px;"
    );
  }, []);  return (
    <SecurityClearanceProvider>
      <CLIProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">          {/* Matrix Rain Background Effect */}
          <MatrixRain />
          
          {/* Background gradient elements */}
          <div className="fixed inset-0 pointer-events-none z-[-1]">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
          
          {/* Security Status Widget */}
          <SecurityStatus />
          
          {/* Navigation */}
          <Navigation />
            {/* Main content */}
          <main>
            <HeroSection />
            
            <SecurityGate requiredLevel="AUTHORIZED" sectionName="Projects Section">
              <ProjectsSection />
            </SecurityGate>
            
            <SecurityGate requiredLevel="AUTHORIZED" sectionName="Skills Section">
              <SkillsSection />
            </SecurityGate>
            
            <SecurityGate requiredLevel="CONFIDENTIAL" sectionName="Resume Section">
              <ResumeSection />
            </SecurityGate>
            
            <SecurityGate requiredLevel="TOP_SECRET" sectionName="Testimonials Section">
              <TestimonialsSection />
            </SecurityGate>
            
            <SecurityGate requiredLevel="TOP_SECRET" sectionName="Blog Section">
              <BlogSection />
            </SecurityGate>
            
            <SecurityGate requiredLevel="SECRET" sectionName="Contact Section">
              <ContactSection />
            </SecurityGate>
          </main>
          
          <Footer />
        </div>
      </CLIProvider>
    </SecurityClearanceProvider>
  );
};

export default Index;
