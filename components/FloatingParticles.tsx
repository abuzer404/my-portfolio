
import React from 'react';

const PARTICLES = ['💻', '⌨️', '🔌', '⚡️', '🤖', '💾', '🧠', '⚙️'];
const NUM_PARTICLES = 15;

const FloatingParticles: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: NUM_PARTICLES }).map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        >
          {PARTICLES[i % PARTICLES.length]}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 100 - 50}px, -${Math.random() * 100 + 100}px) rotate(${Math.random() * 360}deg); }
          100% { transform: translate(0, -250px) rotate(720deg); opacity: 0; }
        }

        /* Remake animation for each particle to ensure randomness */
        ${Array.from({ length: NUM_PARTICLES }).map((_, i) => `
          div:nth-child(${i + 1}) {
            animation-name: float-${i};
          }
          @keyframes float-${i} {
            0% { transform: translate(0, 0) rotate(0deg); opacity: ${0.1 + Math.random()*0.1}; }
            50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 180}deg); }
            100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg); opacity: ${0.1 + Math.random()*0.1}; }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default FloatingParticles;
