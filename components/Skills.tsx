
import React from 'react';
import Section from './ui/Section';
import RadialProgress from './ui/RadialProgress';
import GlassCard from './ui/GlassCard';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Tools'] as const;

  return (
    <Section id="skills" className="bg-black/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => (
          <GlassCard key={category} className="p-6 !border-magenta-500/30">
            <h3 className="text-2xl font-bold text-center mb-6 text-magenta-400">{category}</h3>
            <div className="space-y-6">
              {SKILLS_DATA.filter(skill => skill.category === category).map((skill: Skill) => (
                 <div key={skill.name} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <RadialProgress progress={skill.level} />
                  </div>
                  <span className="flex-1 min-w-0 break-words text-lg font-semibold text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

export default Skills;