
import React from 'react';
import DataCard from './DataCard';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

const SkillsSection: React.FC = () => {
  // Placeholder skills - replace with your actual skills
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "GraphQL", level: 65 },
        { name: "REST API", level: 90 }
      ]
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Testing", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-black/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Agent Capabilities
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Technical proficiencies and specialized skill sets for mission execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <DataCard 
              key={index}
              title={category.name}
              securityLevel="RESTRICTED"
              className="h-full"
            >
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm text-white">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DataCard>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard
            title="Tools & Technologies"
            securityLevel="CONFIDENTIAL"
          >
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "HTML5", "CSS3", "React", "Vue", "Angular", "Node.js", 
                "Express", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", 
                "GCP", "CI/CD", "Git", "Jest", "Cypress"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 glass rounded-full text-white/80 text-sm hover:text-primary hover:neon-border transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DataCard>
          
          <DataCard
            title="Soft Skills"
            securityLevel="UNCLASSIFIED"
          >
            <div className="grid grid-cols-2 gap-4">
              {["Problem Solving", "Communication", "Teamwork", "Leadership", 
                "Time Management", "Critical Thinking", "Adaptability", 
                "Attention to Detail"].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </DataCard>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
