// ResumeSection displays work experience, education, and a downloadable resume in a dossier format.

import React, { useState } from 'react';
import DataCard from './DataCard';
import { ArrowDown } from 'lucide-react';
import { useSecurityClearance } from '../hooks/useSecurityClearance';
import GlitchEffect from './GlitchEffect';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const ResumeSection: React.FC = () => {
  const { addSecurityPoints } = useSecurityClearance();
  const [transmitting, setTransmitting] = useState(false);

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
          <GlitchEffect intensity="low" triggerChance={0.06}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
              Agent Dossier
            </h2>
          </GlitchEffect>
          <p className="text-white/70 max-w-xl mx-auto">
            Summarized field operations (work experience), training, and education. Downloadable full resume (PDF).
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
            {/* Modern horizontal scrollable carousel for desktop, vertical stack for mobile */}
            <div className="w-full">
              <div
                className="flex gap-8 overflow-x-auto pb-4 md:pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-black/20"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {/* IBM SkillsBuild Badge: Governance, Risk, Compliance, and Data Privacy */}
                <div className="flex-shrink-0 w-72 md:w-80 bg-black/30 border border-primary/40 rounded-xl shadow-xl p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-neon hover:border-primary/80 snap-center group">
                  <img
                    src="/governance-risk-compliance-and-data-privacy.png"
                    alt="IBM SkillsBuild Governance, Risk, Compliance, and Data Privacy"
                    className="rounded object-contain w-full h-40 mb-3 border border-primary/30 bg-white/5 shadow-md"
                  />
                  <div className="text-center flex flex-col gap-1 flex-1 justify-between">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-white transition-colors">Governance, Risk, Compliance, and Data Privacy</h3>
                    <div className="text-white/70 text-sm mb-1">IBM SkillsBuild</div>
                    <div className="text-xs text-white/50 mb-2">Issued: May 26, 2025</div>
                    <p className="text-white/60 text-xs mb-3">Advanced training in evaluating organizational data security frameworks, risk mitigation, and compliance strategies. Skills include data encryption, privacy regulations, backup planning, and governance implementation.</p>
                    <a href="https://www.credly.com/badges/138973fd-52b3-4f85-8a83-d62c5a4d6c84/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-semibold hover:bg-primary/40 hover:text-white transition-colors border border-primary/30">Verify Badge</a>
                  </div>
                </div>
                {/* IBM SkillsBuild Badge: Cybersecurity Fundamentals */}
                <div className="flex-shrink-0 w-72 md:w-80 bg-black/30 border border-primary/40 rounded-xl shadow-xl p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-neon hover:border-primary/80 snap-center group">
                  <img
                    src="/cybersecurity-fundamentals.png"
                    alt="IBM SkillsBuild Cybersecurity Fundamentals"
                    className="rounded object-contain w-full h-40 mb-3 border border-primary/30 bg-white/5 shadow-md"
                  />
                  <div className="text-center flex flex-col gap-1 flex-1 justify-between">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-white transition-colors">Cybersecurity Fundamentals</h3>
                    <div className="text-white/70 text-sm mb-1">IBM SkillsBuild</div>
                    <div className="text-xs text-white/50 mb-2">Issued: May 24, 2025</div>
                    <p className="text-white/60 text-xs mb-3">Foundational knowledge of cybersecurity principles, threat detection, cryptography, and incident response. Covers attack prevention strategies, social engineering tactics, and vulnerability management.</p>
                    <a href="https://www.credly.com/badges/53fde89d-87ea-4efd-a46c-3013a4ab020f/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-semibold hover:bg-primary/40 hover:text-white transition-colors border border-primary/30">Verify Badge</a>
                  </div>  
                </div>
                {/* AWS Educate Badge: Introduction to Generative AI */}
                <div className="flex-shrink-0 w-72 md:w-80 bg-black/30 border border-primary/40 rounded-xl shadow-xl p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-neon hover:border-primary/80 snap-center group">
                  <img
                    src="/aws-educate-genai-badge.png"
                    alt="AWS Educate Introduction to Generative AI Badge"
                    className="rounded object-contain w-full h-40 mb-3 border border-primary/30 bg-white/5 shadow-md"
                  />
                  <div className="text-center flex flex-col gap-1 flex-1 justify-between">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-white transition-colors">Introduction to Generative AI</h3>
                    <div className="text-white/70 text-sm mb-1">AWS Educate</div>
                    <div className="text-xs text-white/50 mb-2">Issued: May 15, 2025</div>
                    <p className="text-white/60 text-xs mb-3">Completed the AWS Educate Introduction to Generative AI course, covering foundational concepts, ethical considerations, and practical applications of generative AI technologies.</p>
                    <a href="https://www.credly.com/badges/852b5a8e-43b3-4fa9-9901-ad4639ae0fe6/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-semibold hover:bg-primary/40 hover:text-white transition-colors border border-primary/30">Verify Badge</a>
                  </div>
                </div>
                {/* AWS Educate Badge: Machine Learning Foundations */}
                <div className="flex-shrink-0 w-72 md:w-80 bg-black/30 border border-primary/40 rounded-xl shadow-xl p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-neon hover:border-primary/80 snap-center group">
                  <img
                    src="/aws-educate-machine-learning-foundations.png"
                    alt="AWS Educate Machine Learning Foundations Badge"
                    className="rounded object-contain w-full h-40 mb-3 border border-primary/30 bg-white/5 shadow-md"
                  />
                  <div className="text-center flex flex-col gap-1 flex-1 justify-between">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-white transition-colors">Machine Learning Foundations</h3>
                    <div className="text-white/70 text-sm mb-1">AWS Educate</div>
                    <div className="text-xs text-white/50 mb-2">Issued: May 23, 2025</div>
                    <p className="text-white/60 text-xs mb-3">Completed the AWS Educate Machine Learning Foundations training, demonstrating the ability to discuss fundamental concepts of machine learning and apply them using AWS Cloud tools.</p>
                    <a href="https://www.credly.com/badges/01e30a03-cf93-4e3a-b68e-cc3e21413dc3/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-semibold hover:bg-primary/40 hover:text-white transition-colors border border-primary/30">Verify Badge</a>
                  </div>
                </div>
                {/* AWS Educate Badge: Getting Started with Networking */}
                <div className="flex-shrink-0 w-72 md:w-80 bg-black/30 border border-primary/40 rounded-xl shadow-xl p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-neon hover:border-primary/80 snap-center group">
                  <img
                    src="/aws-educate-getting-started-with-networking.png"
                    alt="AWS Educate Getting Started with Networking Badge"
                    className="rounded object-contain w-full h-40 mb-3 border border-primary/30 bg-white/5 shadow-md"
                  />
                  <div className="text-center flex flex-col gap-1 flex-1 justify-between">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-white transition-colors">Getting Started with Networking</h3>
                    <div className="text-white/70 text-sm mb-1">AWS Educate</div>
                    <div className="text-xs text-white/50 mb-2">Issued: May 21, 2025</div>
                    <p className="text-white/60 text-xs mb-3">Completed the AWS Educate Getting Started with Networking training, demonstrating the ability to describe different ways to manage a network and use Amazon VPC.</p>
                    <a href="https://www.credly.com/badges/73fc762a-0485-477f-a7a3-a7221416f4cf/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-semibold hover:bg-primary/40 hover:text-white transition-colors border border-primary/30">Verify Badge</a>
                  </div>
                </div>
              </div>
              {/* Optional: subtle scroll indicator for desktop */}
              <div className="hidden md:block w-full text-center mt-2">
                <span className="text-xs text-primary/60 font-mono">Scroll &rarr; to view more certifications</span>
              </div>
            </div>
          </DataCard>
        </div>
        
        <div className="text-center">          <button
            onClick={() => {
              setTransmitting(true);
              addSecurityPoints({
                type: 'resume_download',
                points: 30,
                description: 'Downloaded resume/CV'
              });
              setTimeout(() => setTransmitting(false), 1800);
            }}
            className="inline-flex items-center glass px-6 py-3 rounded-md hover:neon-border transition-all group relative overflow-hidden resume-download-btn"
            disabled={transmitting}
          >
            {transmitting ? (
              <span className="flex items-center justify-center w-full text-xs md:text-base font-mono text-primary pointer-events-none">
                TRANSMITTING...
              </span>
            ) : (
              <>
                <span className="mr-2">Download RESUME/CV</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                <a
                  href="/GEORGE SANAET SANKUI RESUME.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
                  tabIndex={-1}
                />
              </>
            )}
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
