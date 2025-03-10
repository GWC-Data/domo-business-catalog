import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiAnimation: React.FC = () => {
    useEffect(() => {
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
      const randomInRange = (min: number, max: number): number => {
        return Math.random() * (max - min) + min;
      };
  
      const interval = setInterval(() => {
        const particleCount = 50;
  
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    return "";
  };

export default ConfettiAnimation;