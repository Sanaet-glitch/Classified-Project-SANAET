
import React from 'react';
import DataCard from './DataCard';
import { ArrowDown } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const ResumeSection: React.FC = () => {
  // Placeholder timeline items - replace with your actual experience
  const workExperience: TimelineItem[] = [
    {
      year: "2021 - Present",
      title: "Senior Frontend Developer",
      organization: "TechCorp Industries",
      description: "Led development of mission-critical web applications using React and Next.js. Implemented secure authentication systems and optimized performance."
    },
    {
      year: "2019 - 2021",
      title: "Full-Stack Developer",
      organization: "InnovateTech Solutions",
      description: "Developed and maintained full-stack applications using Node.js and React. Collaborated with cross-functional teams to deliver projects on schedule."
    },
    {
      year: "2017 - 2019",
      title: "Junior Developer",
      organization: "DevLabs Inc.",
      description: "Assisted in building responsive web applications. Learned and implemented modern development practices and technologies."
    }
  ];
  
  const education: TimelineItem[] = [
    {
      year: "2013 - 2017",
      title: "B.S. Computer Science",
      organization: "Tech University",
      description: "Specialized in software engineering with focus on web technologies and security. Graduated with honors."
    },
    {
      year: "2017 - 2018",
      title: "Advanced Web Development Certification",
      organization: "Code Academy",
      description: "Intensive program covering modern web development technologies and practices."
    }
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Agent Dossier
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Operational history and training records of field agent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <DataCard
            title="FIELD OPERATIONS"
            securityLevel="TOP SECRET"
          >
            <div className="space-y-8">
              {workExperience.map((item, index) => (
                <div key={index} className="relative pl-6 border-l border-primary/30">
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary"></div>
                  <div className="font-mono text-xs text-primary mb-1">{item.year}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-white/70 text-sm mb-2">{item.organization}</div>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </DataCard>
          
          <DataCard
            title="TRAINING & QUALIFICATIONS"
            securityLevel="RESTRICTED"
          >
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-6 border-l border-primary/30">
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary"></div>
                  <div className="font-mono text-xs text-primary mb-1">{item.year}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-white/70 text-sm mb-2">{item.organization}</div>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </DataCard>
        </div>
        
        <div className="text-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center glass px-6 py-3 rounded-md hover:neon-border transition-all group"
          >
            <span className="mr-2">Download Full Dossier</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <p className="mt-2 text-xs text-white/50 font-mono">
            [PDF FORMAT // ENCRYPTION: NONE]
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
