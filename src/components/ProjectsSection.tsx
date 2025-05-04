import React, { useState } from 'react';
import DataCard from './DataCard';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  // Placeholder projects - replace with your actual projects later
  const projects: Project[] = [
    {
      id: 1,
      title: "SmartCampus: Smart Attendance System",
      description: "A modern, secure, network-based attendance system for educational institutions. Features QR code and network-based verification, real-time monitoring, and anti-fraud measures.",
      technologies: ["Python", "Django", "REST API", "HTML5", "CSS3", "JavaScript", "Security"],
      imageUrl: "/smart-campus.avif",
      link: "https://github.com/Sanaet-glitch/Smart-Campus"
    },
    {
      id: 2,
      title: "Classified Portfolio Project",
      description: "A cyberpunk-themed, production-ready developer portfolio built with React, TypeScript, and Tailwind CSS. Features immersive UI, project archives, resume, skills, testimonials, blog, and a secure contact form.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "EmailJS", "shadcn-ui"],
      imageUrl: "/portfolio-image.avif",
      link: "https://github.com/Sanaet-glitch/Classified-Project-SANAET"
    },
    {
      id: 3,
      title: "Sleeper Guardian Beacon",
      description: "A cross-platform anti-theft tracking solution for laptops that remains dormant until activated. Provides accurate location tracking, remote device management, and evidence gathering for stolen devices.",
      technologies: ["React", "TypeScript", "Vite", "shadcn-ui", "Security"],
      imageUrl: "/beacon-image.avif",
      link: "#UNDER_DEVELOPMENT"
    }
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Mission Archives
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Declassified projects showcasing operational capabilities and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <DataCard 
                title={`PROJECT ID: ${project.id.toString().padStart(3, '0')}`} 
                securityLevel="CONFIDENTIAL"
                className="h-full transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-black/30 rounded text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link === "#UNDER_DEVELOPMENT" ? (
                  <div className="flex flex-col items-start mt-6">
                    <span className="inline-flex items-center text-sm font-mono text-green-400 animate-blink font-bold" style={{animation: 'blinker 1s linear infinite'}}>
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      UNDER DEVELOPMENT
                    </span>
                  </div>
                ) : (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-sm font-mono text-primary hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>View Project Details</span>
                  </a>
                )}
              </DataCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

/* Add this to the file or your global CSS (e.g., App.css or index.css) if not already present */
// @layer utilities {
//   @keyframes blinker {
//     50% { opacity: 0; }
//   }
//   .animate-blink {
//     animation: blinker 1s linear infinite;
//   }
// }
