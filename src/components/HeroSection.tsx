import React, { useEffect, useState, useRef } from 'react';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';
import { ArrowDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const beepRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Play beep sound utility
  const playBeep = () => {
    if (!muted && beepRef.current) {
      beepRef.current.currentTime = 0;
      beepRef.current.play();
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Particle animation effect
  useEffect(() => {
    const canvas = document.getElementById('cyberpunk-particles') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      color: [
        'rgba(162,89,255,0.7)', // purple
        'rgba(0,255,231,0.7)',  // cyan
        'rgba(0,255,128,0.7)',  // green
        'rgba(255,255,255,0.5)'
      ][Math.floor(Math.random() * 4)]
    }));
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden code-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
      
      {/* Moving background particles */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Animated Particle Background */}
      <canvas id="cyberpunk-particles" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[1px] bg-primary/30 top-1/2 left-0 right-0 z-10 animate-[scan_4s_linear_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="relative mb-10 mt-6 group">
            <span className="absolute top-2 left-2 z-20 bg-black/70 px-2 py-1 rounded-full text-xs font-mono text-neon-green neon-border shadow-lg animate-pulse select-none pointer-events-none">
              AGENT
            </span>
            <img
              src="/hero-profile.jpeg"
              alt="Agent Profile"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover neon-border shadow-lg mx-auto glitch-effect profile-glow group-hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: '0 0 24px 4px #a259ff, 0 0 40px 8px #00ffe7' }}
            />
            {/* Glitch overlay */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60 animate-glitch z-10"></div>
            {/* Holographic reflection */}
            <div className="absolute top-0 left-0 w-full h-1/3 rounded-t-full bg-gradient-to-b from-white/30 to-transparent opacity-30 pointer-events-none"></div>
          </div>
          <div className={`inline-block mb-4 glass px-3 py-1 rounded-md transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <TerminalText
              text="$ initiating_classified_mission.sh"
              className="text-sm md:text-base text-green-400"
              startDelay={300}
            />
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-glow transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
            <span className="text-gradient">Classified</span>
            <br />
            <GlitchText text="PROJECT SANAET" className="text-white" intensity="high" />
          </h1>
          
          <p className={`text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: '400ms'}}>
            <TerminalText 
              text="Mission-Critical Developer Portfolio. Unauthorized access highly encouraged."
              speed={20}
              className="block"
              startDelay={800}
            />
          </p>
          
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-16'}`} style={{transitionDelay: '600ms'}}>
            <TerminalText
              text="> AGENT PROFILE: Full-Stack Developer // Security Clearance: MAXIMUM"
              className="mb-8 text-primary font-mono"
              speed={10}
              startDelay={1500}
            />
          </div>
          
          <button 
            onClick={() => { playBeep(); scrollToProjects(); }}
            className={`mt-8 glass px-6 py-3 rounded-md flex items-center justify-center group transition-all neon-border relative overflow-hidden glitch-effect-btn ${loaded ? 'opacity-100' : 'opacity-0 translate-y-20'}`}
            style={{transitionDelay: '800ms'}}
          >
            <span className="relative z-10 mr-2">View Mission Files</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </button>

          {/* Easter Egg Command Input */}
          <div className="mt-6 w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="> Enter command..."
              className="bg-black/60 border border-primary/40 rounded px-4 py-2 text-primary font-mono w-64 text-center focus:outline-none focus:ring-2 focus:ring-primary/60 neon-border placeholder:text-white/40"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value.trim().toLowerCase();
                  if (value === 'unlock') {
                    playBeep();
                    document.getElementById('easter-egg-reveal')?.classList.remove('hidden');
                  }
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
            <div id="easter-egg-reveal" className="hidden mt-4 animate-fade-in">
              <span className="px-4 py-2 rounded bg-black/80 neon-border text-neon-green font-mono text-sm shadow-lg">
                🗝️ Access Granted: Welcome, Agent. The real mission is curiosity.
              </span>
            </div>
          </div>

          {/* Animated Security Badge */}
          <div className="mt-6 flex justify-center">
            <div className="relative group">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-black/70 neon-border text-xs font-mono text-yellow-400 animate-pulse cursor-pointer hover:scale-105 transition-transform" tabIndex={0}>
                TOP SECRET
              </span>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/90 text-white text-xs rounded shadow-lg px-4 py-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none z-20">
                Fun Fact: This portfolio is inspired by cyberpunk, espionage, and real-world mission dossiers!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-10 left-10 glass px-3 py-2 rounded-md hidden md:block transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '900ms'}}>
        <p className="text-xs font-mono text-white/60 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-primary animate-pulse">SYS:</span> Secure connection <span className="animate-pulse text-green-400">●</span> <span className="animate-blink">ACTIVE</span>
        </p>
      </div>
      
      <div className={`absolute top-10 right-10 glass px-3 py-2 rounded-md hidden md:block transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '900ms'}}>
        <p className="text-xs font-mono text-white/60 flex items-center gap-2">
          <span className="text-red-500 animate-pulse">REC</span> Session_ID: <span className="text-primary font-mono animate-blink">{Math.random().toString(36).substring(2, 9)}</span>
        </p>
      </div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.03] bg-[url('data:image/png;base64,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')]"></div>
      <audio ref={beepRef} src="/beep.mp3" preload="auto" />
      <button
        onClick={() => setMuted(m => !m)}
        className="fixed top-6 right-6 z-50 glass px-3 py-1 rounded-full neon-border text-xs font-mono text-primary hover:text-white transition-colors focus:outline-none"
        aria-label="Toggle sound"
      >
        {muted ? '🔇 Mute' : '🔊 Sound'}
      </button>
    </section>
  );
};

export default HeroSection;
