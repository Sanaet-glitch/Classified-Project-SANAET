// ContactSection provides a secure contact form and displays contact/social info for collaboration.

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DataCard from './DataCard';
import { useToast } from '@/hooks/use-toast';
import { useSecurityClearance } from '../hooks/useSecurityClearance';
import GlitchEffect from './GlitchEffect';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const { addSecurityPoints } = useSecurityClearance();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  // Handle input changes for the contact form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
    // Handle form submission and send email via EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Award points for form submission attempt
    addSecurityPoints({
      type: 'contact_form',
      points: 25,
      description: 'Submitted contact form'
    });
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set.');
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        publicKey
      );
      
      // Award bonus points for successful submission
      addSecurityPoints({
        type: 'successful_contact',
        points: 50,
        description: 'Successfully sent message'
      });
      
      toast({
        title: 'Message Transmitted',
        description: 'Your communication has been received.',
        variant: 'default', // Show success toast
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Transmission Failed',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive', // Show error toast
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <GlitchEffect intensity="low" triggerChance={0.06}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
              Secure Uplink
            </h2>
          </GlitchEffect>
          <p className="text-white/70 max-w-xl mx-auto">
            Encrypted contact form powered by EmailJS for confidential communication. Social and professional network links.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <DataCard
            title="SECURE UPLINK"
            securityLevel="CONFIDENTIAL"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-mono text-white/70">
                    IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-mono text-white/70">
                    COMM FREQUENCY
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-mono text-white/70">
                  TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-mono text-white/70">
                  MESSAGE PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full glass py-3 px-4 rounded font-mono ${loading ? 'opacity-70' : 'hover:neon-border'} transition-all`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    TRANSMITTING...
                  </span>
                ) : (
                  'TRANSMIT MESSAGE'
                )}
              </button>
            </form>
          </DataCard>
          
          <DataCard
            title="CONTACT COORDINATES"
            securityLevel="RESTRICTED"
          >
            <div className="space-y-6">
              <div className="bg-black/20 p-4 rounded">
                <div className="text-xs font-mono text-white/50 mb-1">
                  ELECTRONIC MAIL
                </div>
                <div className="text-primary">
                  sanaetofficial@gmail.com
                </div>
              </div>
              
              <div className="bg-black/20 p-4 rounded">
                <div className="text-xs font-mono text-white/50 mb-1">
                  SOCIAL NETWORK NODES
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://github.com/Sanaet-glitch" className="flex items-center text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/george-sanaet-670051356/" className="flex items-center text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.46-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="bg-black/20 p-4 rounded">
                <div className="text-xs font-mono text-white/50 mb-1">
                  LOCATION STATUS
                </div>
                <div className="text-white/80">
                  Remote // Available for missions worldwide
                </div>
              </div>
              
              <div className="bg-black/20 p-4 rounded">
                <div className="text-xs font-mono text-white/50 mb-1">
                  ENCRYPTION NOTICE
                </div>
                <div className="text-white/80 text-xs">
                  All communications are end-to-end encrypted and handled with strict confidentiality.
                </div>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
