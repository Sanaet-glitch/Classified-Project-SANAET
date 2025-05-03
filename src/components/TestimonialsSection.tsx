import React, { useState, useEffect, useCallback } from 'react';
import DataCard from './DataCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  imageUrl?: string;
}

const TestimonialsSection: React.FC = () => {
  // Placeholder testimonials - replace with your actual testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CTO",
      company: "InnoTech Solutions",
      text: "One of the most skilled developers I've worked with. Delivered complex projects on time with exceptional code quality."
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Project Manager",
      company: "WebFuture Inc.",
      text: "Their attention to detail and technical expertise helped us launch our platform ahead of schedule. Highly recommended!"
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Lead Developer",
      company: "DataSoft Systems",
      text: "A true professional who consistently goes above and beyond. Their problem-solving skills are unmatched."
    }
  ];
  
  const [active, setActive] = useState(0);
  
  // Wrap next in useCallback
  const next = useCallback(() => {
    setActive((current) => (current + 1) % testimonials.length);
  }, [testimonials.length]);
  
  const prev = useCallback(() => {
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 relative bg-black/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Field Reports
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Intelligence gathered from previous mission collaborators.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <DataCard
            title="ASSET EVALUATIONS"
            securityLevel="CONFIDENTIAL"
            className="min-h-[300px] flex flex-col"
          >
            <div className="flex-grow">
              <div className="relative overflow-hidden h-full">
                <div className="h-full">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${
                        index === active 
                          ? "opacity-100 translate-x-0" 
                          : index < active 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <blockquote className="mb-6 text-white text-lg italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        {testimonial.imageUrl && (
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                            <img 
                              src={testimonial.imageUrl} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div>
                          <div className="text-primary font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/60">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="text-xs text-white/50 font-mono">
                {active + 1} / {testimonials.length}
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={prev}
                  className="p-2 glass rounded-full hover:neon-border"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={next}
                  className="p-2 glass rounded-full hover:neon-border"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
