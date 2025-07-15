import React from 'react';
import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5;
    const mouseY = (e.clientY - top) / height - 0.5;
    
    cardRef.current.style.setProperty('--rotateX', `${-mouseY * 8}deg`);
    cardRef.current.style.setProperty('--rotateY', `${mouseX * 8}deg`);
    cardRef.current.style.setProperty('--glowX', `${mouseX * 100}%`);
    cardRef.current.style.setProperty('--glowY', `${mouseY * 100}%`);
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotateX', '0deg');
    cardRef.current.style.setProperty('--rotateY', '0deg');
  };

  return (
    <div
      className="group"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="transition-transform duration-300 w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(var(--rotateX, 0)) rotateY(var(--rotateY, 0))'
        }}
      >
        <GlassCard className="!p-0 overflow-hidden h-full relative flex flex-col">
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
          </div>
          <div className="px-6 py-4 bg-black/30">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-semibold rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub repository">Repo</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white font-bold transition-colors" aria-label="Live demo">Live</a>}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/abuzernasir"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          aria-label="See more projects on GitHub"
        >
          See More
        </a>
      </div>
    </Section>
  );
};

export default Projects;