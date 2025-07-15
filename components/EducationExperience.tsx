import React from 'react';
import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, EXPERIENCE_DATA } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const TimelineItem: React.FC<{ event: (typeof EXPERIENCE_DATA)[0], index: number }> = ({ event, index }) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <li
      ref={ref}
      className={`mb-10 ms-8 transition-all duration-700 delay-${index*100} ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 -translate-x-10`}`}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-900 rounded-full -start-3 ring-8 ring-gray-900">
        <svg className="w-2.5 h-2.5 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
          <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </span>
      <GlassCard className="p-4 !border-cyan-400/30">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          {event.title}
          {index === 0 && <span className="bg-cyan-400 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Latest</span>}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{event.year} - {event.institution}</time>
        <p className="text-base font-normal text-gray-300">{event.description}</p>
      </GlassCard>
    </li>
  );
};


const EducationExperience: React.FC = () => {
  return (
    <Section id="education-experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Education & <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </div>
      
      {/* Education */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-left mb-8 text-magenta-400">Education</h3>
        <GlassCard className="p-6 !border-magenta-500/30">
          <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-x-4 gap-y-1 mb-2">
            <h4 className="text-xl font-bold text-white flex-shrink-0">{EDUCATION_DATA.title}</h4>
            <p className="text-magenta-300 md:text-right md:whitespace-nowrap">{EDUCATION_DATA.institution} | {EDUCATION_DATA.year}</p>
          </div>
          <p className="text-gray-300">{EDUCATION_DATA.description}</p>
        </GlassCard>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-left mb-8 text-magenta-400">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <GlassCard key={index} className="p-6 !border-magenta-500/30 flex flex-col">
              <h4 className="text-xl font-bold text-white">{cert.name}</h4>
              <p className="text-magenta-300 mb-2">{cert.issuer}</p>
              {cert.items && (
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                  {cert.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
      
      {/* Experience */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-left mb-12 text-magenta-400">Experience</h3>
        <ol className="relative border-s border-gray-700">                  
          {EXPERIENCE_DATA.map((event, index) => (
            <TimelineItem key={index} event={event} index={index}/>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default EducationExperience;