// ResumeSection displays work experience, education, and a downloadable resume in a dossier format.

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
            title="FEATURED EXPERIENCE"
            securityLevel="CLASSIFIED"
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2">
                <img 
                  src="/patient-experience-week.jpeg" 
                  alt="Patient Experience Week at The Nairobi Hospital" 
                  className="rounded shadow-lg object-cover w-full h-48 md:h-40" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-primary mb-2">Patient Experience Week – The Nairobi Hospital</h3>
                <p className="text-white/70 text-sm mb-2">
                  Participated as a representative of the ICT Department in the 2025 Patient Experience Week, supporting digital operations and teamwork to enhance patient care. Engaged in event activities, technical support, and cross-departmental collaboration.
                </p>
                <a 
                  href="https://www.linkedin.com/posts/thenairobihospital_patientexperienceweek-thenairobihospital-activity-7324399456475328512-lAnt?utm_source=share&utm_medium=member_ios&rcm=ACoAAFijv3QBpgTwdMr3RR7tL1tK7BrYmsrH2WU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-white font-mono text-xs mt-2 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.46-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
                  View Event on LinkedIn
                </a>
              </div>
            </div>
          </DataCard>
          
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

          <DataCard
            title="CERTIFICATIONS"
            securityLevel="CONFIDENTIAL"
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src="/edureka-certificate.jpg"
                alt="Edureka Full Stack Development Internship Certificate"
                className="rounded shadow-lg object-contain w-full max-w-xs border border-primary/30"
              />
              <div className="text-center">
                <h3 className="text-base font-bold text-primary mb-1">Full Stack Development Internship Program</h3>
                <div className="text-white/70 text-sm mb-1">Edureka</div>
                <div className="text-xs text-white/50 mb-2">May 2025</div>
                <p className="text-white/60 text-xs mb-2"> Gained foundational exposure to core full‐stack technologies—HTML5, CSS3, JavaScript, Node.js, Express.js and React—by attending Edureka & Vranda Enterprise’s Full Stack Development Internship Program demo session.</p>
                <a href="/edureka-certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-xs underline hover:text-white transition-colors">View Certificate PDF</a>
              </div>
            </div>
          </DataCard>
        </div>
        
        <div className="text-center">
          <button
            onClick={e => {
              const btn = e.currentTarget;
              btn.classList.add('transmitting');
              setTimeout(() => btn.classList.remove('transmitting'), 1800);
            }}
            className="inline-flex items-center glass px-6 py-3 rounded-md hover:neon-border transition-all group relative overflow-hidden resume-download-btn"
          >
            <span className="mr-2">Download Full Dossier</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            <a
              href="/GEORGE SANAET SANKUI RESUME.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
              tabIndex={-1}
            />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-mono text-primary pointer-events-none transmitting-indicator hidden">TRANSMITTING...</span>
          </button>
          <p className="mt-2 text-xs text-white/50 font-mono">
            [PDF FORMAT // ENCRYPTION: NONE]
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
