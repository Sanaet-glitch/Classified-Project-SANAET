import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DataCard from './DataCard';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
      toast({
        title: 'Message Transmitted',
        description: 'Your communication has been received.',
        variant: 'default',
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
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Communication Channel
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Establish secure contact for mission inquiries and collaboration proposals.
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
                  <a href="https://github.com/Sanaet-glitch" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/george-sanaet-670051356/" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="#" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="#" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">CodePen</a>
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
