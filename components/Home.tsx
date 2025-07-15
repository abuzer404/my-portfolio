import React, { useRef, useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import Section from './ui/Section';

const Home: React.FC = () => {
  const { x, y } = useMousePosition();
  const [glowStyle, setGlowStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Eye pupil state
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    // Limit the pupil movement
    const maxDist = 18;
    const dist = Math.min(Math.sqrt(dx*dx + dy*dy), maxDist);
    const angle = Math.atan2(dy, dx);
    setPupil({
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
    });
  }, [x, y]);

  useEffect(() => {
    setGlowStyle({
      background: `radial-gradient(600px at ${x}px ${y}px, rgba(45, 212, 191, 0.15), transparent 80%)`
    });
  }, [x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    
    containerRef.current.style.setProperty('--rotateX', `${-mouseY * 15}deg`);
    containerRef.current.style.setProperty('--rotateY', `${mouseX * 15}deg`);
  };

  return (
    <div style={glowStyle} className="transition-all duration-300">
      <Section id="home" className="min-h-screen flex items-center justify-center text-center">
        <div 
          className="w-full flex flex-col items-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            if (!containerRef.current) return;
            containerRef.current.style.setProperty('--rotateX', '0deg');
            containerRef.current.style.setProperty('--rotateY', '0deg');
          }}
        >
          <div 
            ref={containerRef}
            className="relative w-48 h-48 md:w-64 md:h-64 mb-8 transition-transform duration-200"
            style={{ 
              transform: 'perspective(1000px) rotateX(var(--rotateX, 0)) rotateY(var(--rotateY, 0))',
              transformStyle: 'preserve-3d',
              boxShadow: '0 12px 32px 0 rgba(0,0,0,0.45), 0 2px 8px 0 rgba(0,255,255,0.15)',
              borderRadius: '32px',
              background: 'linear-gradient(145deg, #0a1a22 60%, #1a3a4a 100%)',
              border: '4px solid #00eaff',
              overflow: 'visible',
            }}
          >
            {/* Glossy highlight */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '24px',
                width: '60%',
                height: '20%',
                background: 'linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,255,255,0))',
                borderRadius: '50%',
                filter: 'blur(2px)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
            {/* Blush/cheeks */}
            <div
              style={{
                position: 'absolute',
                left: '32px',
                bottom: '56px',
                width: '24px',
                height: '12px',
                background: 'rgba(255, 99, 132, 0.18)',
                borderRadius: '50%',
                filter: 'blur(0.5px)',
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '32px',
                bottom: '56px',
                width: '24px',
                height: '12px',
                background: 'rgba(255, 99, 132, 0.18)',
                borderRadius: '50%',
                filter: 'blur(0.5px)',
                zIndex: 2,
              }}
            />
            {/* Eyes */}
            <div 
              className="absolute top-1/2 left-1/2 w-32 h-16 md:w-40 md:h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ transform: 'translateZ(40px) translateX(-50%) translateY(-50%)' }}
            >
              <svg width="100%" height="100%" viewBox="0 0 160 80">
                {/* Left Eye */}
                <ellipse cx="48" cy="40" rx="32" ry="32" fill="#e0f7fa" stroke="#00bcd4" strokeWidth="3"/>
                <circle
                  cx={48 + pupil.x}
                  cy={40 + pupil.y}
                  r="10"
                  fill="#222"
                />
                <circle
                  cx={48 + pupil.x + 3}
                  cy={40 + pupil.y - 3}
                  r="3"
                  fill="#fff"
                  opacity="0.7"
                />
                {/* Right Eye */}
                <ellipse cx="112" cy="40" rx="32" ry="32" fill="#e0f7fa" stroke="#00bcd4" strokeWidth="3"/>
                <circle
                  cx={112 + pupil.x}
                  cy={40 + pupil.y}
                  r="10"
                  fill="#222"
                />
                <circle
                  cx={112 + pupil.x + 3}
                  cy={40 + pupil.y - 3}
                  r="3"
                  fill="#fff"
                  opacity="0.7"
                />
              </svg>
            </div>
            {/* Mouth */}
            <svg
              className="absolute left-1/2 bottom-6 md:bottom-10 w-20 h-8 -translate-x-1/2"
              viewBox="0 0 80 32"
              style={{ zIndex: 3 }}
            >
              <path
                d="M16 8 Q40 32 64 8"
                stroke="#ffb6b6"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-magenta-500">
              Abuzer Nasir Shafi
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 mb-8">
            Motivated Computer Science and Engineering graduate with solid knowledge in systems administration, web development, and data analysis. Skilled in Linux/Windows environments, Eager to support IT operations and grow within a dynamic tech team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-magenta-500 text-magenta-500 font-semibold rounded-lg hover:bg-magenta-500 hover:text-cyan-400 transition-all transform hover:scale-105">
              View Work
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;