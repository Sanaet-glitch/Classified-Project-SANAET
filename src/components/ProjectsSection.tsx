
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
      title: "Project Alpha",
      description: "Secure communication system with end-to-end encryption. Designed for mission-critical operations.",
      technologies: ["React", "Node.js", "WebSockets", "Encryption"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Operation Sentinel",
      description: "Real-time monitoring dashboard with predictive analytics and anomaly detection.",
      technologies: ["Vue.js", "D3.js", "Python", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Project Nexus",
      description: "Distributed system for parallel processing of large datasets with fault tolerance.",
      technologies: ["Kubernetes", "Go", "Apache Kafka", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "#"
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
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-mono text-primary hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>View Project Details</span>
                </a>
              </DataCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
