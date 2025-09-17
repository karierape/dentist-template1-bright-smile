import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp'
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const animationClasses = {
    fadeInUp: 'transform transition-all duration-1000 ease-out',
    fadeInLeft: 'transform transition-all duration-1000 ease-out',
    fadeInRight: 'transform transition-all duration-1000 ease-out',
    fadeIn: 'transition-all duration-1000 ease-out'
  };

  const initialState = {
    fadeInUp: 'translate-y-10 opacity-0',
    fadeInLeft: '-translate-x-10 opacity-0',
    fadeInRight: 'translate-x-10 opacity-0',
    fadeIn: 'opacity-0'
  };

  const animatedState = {
    fadeInUp: 'translate-y-0 opacity-100',
    fadeInLeft: 'translate-x-0 opacity-100',
    fadeInRight: 'translate-x-0 opacity-100',
    fadeIn: 'opacity-100'
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${
        isIntersecting ? animatedState[animation] : initialState[animation]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;