import React from 'react';
import Section from './ui/Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </div>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center group">
          <div className="relative">
            <img src="https://picsum.photos/seed/cs-grad/400/400" alt="Abuzer Nasir Shafi" className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/20 transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 rounded-full border-4 border-magenta-500 animate-spin-slow group-hover:animate-[spin_4s_linear_infinite]"></div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-gray-300 mb-6">
            Hello! I'm Abuzer, a Computer Science and Engineering graduate with a solid foundation in systems administration, web development, and data analysis. My journey in tech is driven by a passion for solving complex problems and a desire to contribute to a dynamic technical team.
          </p>
          <p className="text-lg text-gray-300">
            I am skilled in both Linux and Windows environments, virtualization, and modern web technologies. I'm a lifelong learner, always excited to explore new challenges and apply my knowledge to support IT operations and grow as a professional.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;