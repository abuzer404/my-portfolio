
import React, { useRef, useState, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface RadialProgressProps {
  progress: number; // 0-100
}

const RadialProgress: React.FC<RadialProgressProps> = ({ progress }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isVisible = useOnScreen(ref);
  const [currentProgress, setCurrentProgress] = useState(0);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    if (isVisible) {
      const strokeDashoffset = circumference - (progress / 100) * circumference;
      const circle = ref.current?.querySelector('.progress-ring__circle--progress');
      if(circle) {
        circle.setAttribute('style', `stroke-dashoffset: ${strokeDashoffset}; transition: stroke-dashoffset 1.5s ease-out;`);
      }
      
      // Animate text percentage
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progressValue = Math.min(elapsedTime / duration, 1);
        setCurrentProgress(Math.floor(progressValue * progress));
        if (progressValue < 1) {
          requestAnimationFrame(animate);
        } else {
            setCurrentProgress(progress);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, progress, circumference]);
  
  return (
    <div className="relative w-20 h-20">
      <svg
        ref={ref}
        height="100%"
        width="100%"
        viewBox="0 0 120 120"
        className="-rotate-90"
      >
        <circle
          className="text-gray-700"
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius + stroke}
          cy={radius + stroke}
        />
        <circle
          className="progress-ring__circle--progress text-cyan-400"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: circumference }}
          fill="transparent"
          r={normalizedRadius}
          cx={radius + stroke}
          cy={radius + stroke}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
        {currentProgress}%
      </span>
    </div>
  );
};

export default RadialProgress;
