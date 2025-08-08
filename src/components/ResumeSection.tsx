// ResumeSection displays work experience, education, and a downloadable resume in a dossier format.

import React, { useState } from 'react';
import DataCard from './DataCard';
import { ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [expandedCerts, setExpandedCerts] = useState<Record<string, boolean>>({});

  const toggleCertExpansion = (certId: string) => {
    setExpandedCerts(prev => ({
      ...prev,
      [certId]: !prev[certId]
    }));
  };

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
            {/* Hybrid: Security Dashboard + Compact Expandable Badges */}
            <div className="w-full space-y-6">
              {/* Header Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-primary">11</div>
                  <div className="text-xs text-white/70 font-mono">ACTIVE BADGES</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-xs text-white/70 font-mono">VERIFIED</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">2</div>
                  <div className="text-xs text-white/70 font-mono">PROVIDERS</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">2025</div>
                  <div className="text-xs text-white/70 font-mono">LATEST</div>
                </div>
              </div>

              {/* Categorized Compact Badges */}
              <div className="space-y-6">
                {/* Security & Compliance Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <h4 className="text-red-400 font-mono text-sm font-bold">SECURITY & COMPLIANCE</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* IBM SkillsBuild Cybersecurity Certificate */}
                    <div key="cybersecurity-cert" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('cybersecurity-cert')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/ibm-skillsbuild-cybersecurity-certificate.png"
                            alt="Cybersecurity Certificate"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">IBM SkillsBuild Cybersecurity Certificate</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['cybersecurity-cert'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['cybersecurity-cert'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: Jul 9, 2025</div>
                            <p className="text-white/70 text-xs">This certificate earner has advanced technical skills in cybersecurity, such as security posture evaluation, vulnerability assessment, network architecture, cloud infrastructure security, security operations, and incident reporting. Through completion of a comprehensive curriculum, application-based assessments, and authentic experiential learning, the earner has developed workplace and career management skills and industry knowledge, and is prepared for a cybersecurity career across industries.</p>
                            <a href="https://www.credly.com/badges/b1e83fff-c350-41a6-9081-ce06eaa34b50/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Governance Badge */}
                    <div key="governance" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('governance')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/governance-risk-compliance-and-data-privacy.png"
                            alt="Governance Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Governance, Risk, Compliance, and Data Privacy</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['governance'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['governance'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 26, 2025</div>
                            <p className="text-white/70 text-xs">Advanced training in evaluating organizational data security frameworks, risk mitigation, and compliance strategies. Skills include data encryption, privacy regulations, backup planning.</p>
                            <a href="https://www.credly.com/badges/138973fd-52b3-4f85-8a83-d62c5a4d6c84/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Cybersecurity Fundamentals */}
                    <div key="cybersecurity-fundamentals" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('cybersecurity-fundamentals')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/cybersecurity-fundamentals.png"
                            alt="Cybersecurity Fundamentals"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Cybersecurity Fundamentals</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['cybersecurity-fundamentals'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['cybersecurity-fundamentals'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 24, 2025</div>
                            <p className="text-white/70 text-xs">Foundational knowledge of cybersecurity principles, threat detection, cryptography, and incident response. Covers attack prevention strategies, social engineering tactics.</p>
                            <a href="https://www.credly.com/badges/53fde89d-87ea-4efd-a46c-3013a4ab020f/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Incident Response and Systems Forensics */}
                    <div key="incident-response" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('incident-response')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/incident-response-and-systems-forensics.png"
                            alt="Incident Response Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Incident Response and Systems Forensics</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['incident-response'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['incident-response'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: Jul 9, 2025</div>
                            <p className="text-white/70 text-xs">Specialized training in cybersecurity incident response procedures, digital forensics, and systems analysis for security breach investigation.</p>
                            <a href="https://www.credly.com/badges/70b565bb-69e9-46a6-a342-ce902b1b9cba/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Security Operations and Management */}
                    <div key="security-operations" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('security-operations')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/security-operations-and-management.png"
                            alt="Security Operations Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Security Operations and Management</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['security-operations'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['security-operations'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: Jul 1, 2025</div>
                            <p className="text-white/70 text-xs">Advanced training in security operations center (SOC) management, threat monitoring, and security incident management processes.</p>
                            <a href="https://www.credly.com/badges/0ab5ce07-8cc4-47b9-871b-d06fcece9bc3/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* System and Network Security */}
                    <div key="network-security" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('network-security')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/system-and-network-security.png"
                            alt="Network Security Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">System and Network Security</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['network-security'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['network-security'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: Jun 10, 2025</div>
                            <p className="text-white/70 text-xs">Comprehensive training in network security architecture, system hardening, and network defense strategies including firewalls and intrusion detection systems.</p>
                            <a href="https://www.credly.com/badges/055d5f49-664c-4a7e-9ed1-f602c35433e5/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Vulnerability Management */}
                    <div key="vulnerability-mgmt" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('vulnerability-mgmt')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/vulnerability-management.png"
                            alt="Vulnerability Management Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Vulnerability Management</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['vulnerability-mgmt'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['vulnerability-mgmt'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 30, 2025</div>
                            <p className="text-white/70 text-xs">Expert training in vulnerability assessment, penetration testing methodologies, and security vulnerability remediation strategies.</p>
                            <a href="https://www.credly.com/badges/7018336d-1c6b-421b-af18-d118985ae1bc/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Cloud Security */}
                    <div key="cloud-security" className="bg-black/40 border border-red-500/40 rounded-lg overflow-hidden hover:border-red-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('cloud-security')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/cloud-security.png"
                            alt="Cloud Security Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Cloud Security</h5>
                            <div className="text-white/60 text-xs">IBM SkillsBuild</div>
                          </div>
                          {expandedCerts['cloud-security'] ? 
                            <ChevronUp className="w-4 h-4 text-red-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['cloud-security'] && (
                        <div className="px-3 pb-3 border-t border-red-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: Jun 20, 2025</div>
                            <p className="text-white/70 text-xs">Specialized training in cloud security architecture, identity and access management, and securing cloud-native applications and infrastructure.</p>
                            <a href="https://www.credly.com/badges/8306ee5b-e4c0-4edb-9fbf-ae9356fc97b7/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cloud & AI Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-blue-400 font-mono text-sm font-bold">CLOUD & ARTIFICIAL INTELLIGENCE</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* GenAI Badge */}
                    <div key="genai" className="bg-black/40 border border-blue-500/40 rounded-lg overflow-hidden hover:border-blue-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('genai')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/aws-educate-genai-badge.png"
                            alt="GenAI Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Introduction to Generative AI</h5>
                            <div className="text-white/60 text-xs">AWS Educate</div>
                          </div>
                          {expandedCerts['genai'] ? 
                            <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['genai'] && (
                        <div className="px-3 pb-3 border-t border-blue-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 15, 2025</div>
                            <p className="text-white/70 text-xs">Completed the AWS Educate Introduction to Generative AI course, covering foundational concepts, ethical considerations, and practical applications of generative AI technologies.</p>
                            <a href="https://www.credly.com/badges/852b5a8e-43b3-4fa9-9901-ad4639ae0fe6/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* ML Badge */}
                    <div key="ml" className="bg-black/40 border border-blue-500/40 rounded-lg overflow-hidden hover:border-blue-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('ml')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/aws-educate-machine-learning-foundations.png"
                            alt="ML Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Machine Learning Foundations</h5>
                            <div className="text-white/60 text-xs">AWS Educate</div>
                          </div>
                          {expandedCerts['ml'] ? 
                            <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['ml'] && (
                        <div className="px-3 pb-3 border-t border-blue-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 23, 2025</div>
                            <p className="text-white/70 text-xs">Completed the AWS Educate Machine Learning Foundations training, demonstrating the ability to discuss fundamental concepts of machine learning and apply them using AWS Cloud tools.</p>
                            <a href="https://www.credly.com/badges/01e30a03-cf93-4e3a-b68e-cc3e21413dc3/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Networking Badge */}
                    <div key="networking" className="bg-black/40 border border-blue-500/40 rounded-lg overflow-hidden hover:border-blue-500/80 transition-all">
                      <button
                        onClick={() => toggleCertExpansion('networking')}
                        className="w-full p-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/aws-educate-getting-started-with-networking.png"
                            alt="Networking Badge"
                            className="w-12 h-12 rounded border border-primary/30 bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">Getting Started with Networking</h5>
                            <div className="text-white/60 text-xs">AWS Educate</div>
                          </div>
                          {expandedCerts['networking'] ? 
                            <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" /> : 
                            <ChevronDown className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          }
                        </div>
                      </button>
                      {expandedCerts['networking'] && (
                        <div className="px-3 pb-3 border-t border-blue-500/20 bg-black/20">
                          <div className="pt-3 space-y-2">
                            <div className="text-xs text-white/50">Issued: May 21, 2025</div>
                            <p className="text-white/70 text-xs">Completed the AWS Educate Getting Started with Networking training, demonstrating the ability to describe different ways to manage a network and use Amazon VPC.</p>
                            <a href="https://www.credly.com/badges/73fc762a-0485-477f-a7a3-a7221416f4cf/public_url" target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors font-mono">VERIFY BADGE</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="border-t border-primary/20 pt-4 mt-6">
                <div className="flex items-center justify-between text-xs text-white/50 font-mono">
                  <span>CLEARANCE STATUS: ACTIVE</span>
                  <span>LAST UPDATED: {new Date().toLocaleDateString()}</span>
                </div>
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
