import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');
  
  return (
    <section 
      id={id} 
      ref={ref}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;