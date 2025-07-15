
import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    class Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
    
      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = color;
      }
    
      update() {
        this.x += this.vx;
        this.y += this.vy;
    
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    const points = [
      new Point(width * 0.2, height * 0.3, 'rgba(0, 255, 255, 0.3)'), // Cyan
      new Point(width * 0.8, height * 0.7, 'rgba(255, 0, 255, 0.3)'), // Magenta
      new Point(width * 0.5, height * 0.5, 'rgba(128, 0, 128, 0.2)')  // Purple
    ];


    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2 + Math.sin(time) * 100, 
        height / 2 + Math.cos(time) * 100, 
        100,
        width / 2, 
        height / 2, 
        Math.max(width, height) / 1.5
      );
      gradient.addColorStop(0, 'rgba(20, 2, 30, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      points.forEach(p => p.update());

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const p1 = points[i];
            const p2 = points[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < width / 2) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / (width / 2) * 0.1})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      }

      points.forEach(p => {
        const pointGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, width/4);
        pointGradient.addColorStop(0, p.color);
        pointGradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = pointGradient;
        ctx.fillRect(0,0,width, height);
      })
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;
