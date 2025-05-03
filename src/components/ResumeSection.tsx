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
  // Updated work experience from CV
  const workExperience: TimelineItem[] = [
    {
      year: "04/2025 – present",
      title: "Attachee, ICT Department",
      organization: "The Nairobi Hospital (TNH)",
      description: `Contributed to the redesign and optimization of the hospital website, developed internal tools, and supported IT operations to enhance healthcare service delivery.`
    },
    {
      year: "05/2023 – 08/2023",
      title: "Attachee",
      organization: "Kenya Ports Authority",
      description: `Developed and maintained software solutions to streamline port operations, modernized legacy systems, and ensured reliability of mission-critical applications.`
    },
    {
      year: "2023 – present",
      title: "Volunteer",
      organization: "Naret Olosho Community-Based Organization (CBO)",
      description: `Engaged in community development, advocacy, and digital outreach to support vulnerable groups and promote social welfare initiatives.`
    }
  ];

  // Updated education from CV
  const education: TimelineItem[] = [
    {
      year: "2021 – 2025 (expected)",
      title: "Bachelor of Science in Software Development",
      organization: "KCA University, Nairobi, Kenya",
      description: "Specialized in software engineering, web technologies, and security. Expected graduation: 28 November 2025."
    },
    {
      year: "2017 – 2020",
      title: "Kenya Certificate of Secondary Education (KCSE)",
      organization: "Koelel Forces Academy, Nakuru, Kenya",
      description: "Completed secondary education with a focus on sciences."
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
