import React from 'react';
import GlitchText from './GlitchText';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  
  const footerLinks = [
    { name: "Protocols", href: "#" },
    { name: "Clearance", href: "#" },
    { name: "Security", href: "#" },
    { name: "Directives", href: "#" },
  ];
  
  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 tech-lines opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display text-xl text-gradient font-bold relative group">
              <GlitchText 
                text="PROJECT SANAET" 
                className="glitch-hover" 
                glitchInterval={10000}
                intensity="medium"
              />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="text-xs font-mono text-white/50 mt-1">
              CLASSIFIED // MISSION-CRITICAL DEVELOPER
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => setOpenModal(link.name.toLowerCase())}
                className={cn(
                  "text-sm text-white/60 hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer font-mono",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]",
                  "after:bg-primary/50 after:transform after:scale-x-0 after:origin-bottom-right",
                  "after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
                style={{ outline: 'none' }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Modals for Protocols, Clearance, Security, Directives */}
          <Dialog open={openModal === 'protocols'} onOpenChange={v => setOpenModal(v ? 'protocols' : null)}>
            <DialogContent className="glass neon-border max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-primary font-mono">PROTOCOLS</DialogTitle>
                <DialogDescription className="text-white/80 font-mono">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Code with clarity, security, and maintainability in mind.</li>
                    <li>Follow modern best practices: version control, code reviews, and documentation.</li>
                    <li>Embrace continuous learning and adaptability in all missions.</li>
                    <li>Prioritize user experience and accessibility in every deployment.</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={openModal === 'clearance'} onOpenChange={v => setOpenModal(v ? 'clearance' : null)}>
            <DialogContent className="glass neon-border max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-primary font-mono">CLEARANCE</DialogTitle>
                <DialogDescription className="text-white/80 font-mono">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Security Level: MAXIMUM</li>
                    <li>Full-Stack Developer, ICT Attachee, Community Volunteer</li>
                    <li>Access to advanced web, backend, and security operations</li>
                    <li>Authorized for mission-critical deployments and confidential projects</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={openModal === 'security'} onOpenChange={v => setOpenModal(v ? 'security' : null)}>
            <DialogContent className="glass neon-border max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-primary font-mono">SECURITY</DialogTitle>
                <DialogDescription className="text-white/80 font-mono">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>End-to-end encrypted communications (TLS, EmailJS, secure forms)</li>
                    <li>Best practices in authentication, authorization, and data privacy</li>
                    <li>Experience with secure hospital and enterprise systems</li>
                    <li>Continuous monitoring and rapid incident response</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog open={openModal === 'directives'} onOpenChange={v => setOpenModal(v ? 'directives' : null)}>
            <DialogContent className="glass neon-border max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-primary font-mono">DIRECTIVES</DialogTitle>
                <DialogDescription className="text-white/80 font-mono">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Deliver innovative, secure, and impactful software solutions</li>
                    <li>Collaborate with teams and communities for greater mission success</li>
                    <li>Empower users and clients through technology and education</li>
                    <li>Uphold integrity, confidentiality, and excellence in all operations</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <div className="text-sm text-white/50 font-mono flex flex-col md:flex-row items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              &copy; {currentYear} All operations secured.
            </div>
            <span className="md:ml-2 text-primary">CLASSIFICATION: TOP SECRET</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono">
          <div>
            System Status: <span className="text-green-400">OPERATIONAL</span>
          </div>
          <div className="mt-2 md:mt-0">
            Access Level: <span className="text-primary">AUTHORIZED</span> • Connection: <span className="text-green-400">SECURE</span>
          </div>
        </div>
      </div>
      
      {/* Terminal line effect at the bottom */}
      <div className="w-full h-1 bg-black mt-8 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full animate-[slide_4s_linear_infinite]"></div>
      </div>
    </footer>
  );
};

export default Footer;
