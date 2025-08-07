import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;

    // Responsive font size for mobile/desktop
    const getFontSize = () => {
      if (window.innerWidth < 640) return 10; // small font for mobile
      if (window.innerWidth < 1024) return 12; // medium font for tablets
      return 14; // default for desktop
    };

    let fontSize = getFontSize();
    const resizeCanvas = () => {
      // Use a consistent height that doesn't change with mobile browser bars
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw;
      canvas.height = Math.max(vh, document.documentElement.clientHeight);
      fontSize = getFontSize();
    };
    resizeCanvas();

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const charArray = chars.split('');
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = i % 3 === 0 ? '#00ff88' : '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      // Only resize if there's a significant change to prevent constant resizing on mobile scroll
      const newWidth = window.innerWidth;
      const newHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
      
      if (Math.abs(canvas.width - newWidth) > 10 || Math.abs(canvas.height - newHeight) > 100) {
        resizeCanvas();
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ 
        mixBlendMode: 'screen', 
        width: '100vw', 
        height: '100vh', 
        maxWidth: '100vw', 
        maxHeight: '100vh',
        transform: 'translateZ(0)' // Force hardware acceleration for smoother scrolling
      }}
    />
  );
};

export default MatrixRain;
