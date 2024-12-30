import React, { useEffect, useRef } from 'react';
import { useInView } from './useInView';

interface RotatingWeaponProps {
  children: React.ReactNode;
}

const RotatingWeapon: React.FC<RotatingWeaponProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!ref.current || !isInView) return;
    
    const element = ref.current;
    let rotation = 0;
    let requestId: number;

    const animate = () => {
      rotation += 0.5;
      element.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [isInView]);

  return (
    <div 
      ref={ref}
      className="transition-transform duration-700 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default RotatingWeapon;