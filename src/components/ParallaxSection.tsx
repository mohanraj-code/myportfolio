import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Parallax speed multiplier (0.1 to 1.0)
  className?: string;
  id?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  id,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const element = document.getElementById(id || '');
      
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        const elementBottom = elementTop + elementHeight;
        const viewportTop = scrollTop;
        const viewportBottom = scrollTop + windowHeight;
        
        // Only apply parallax when element is visible
        if (elementBottom >= viewportTop && elementTop <= viewportBottom) {
          // Calculate parallax offset based on scroll position relative to element
          const relativeScrollTop = scrollTop - elementTop + windowHeight;
          const parallaxOffset = relativeScrollTop * speed;
          setOffsetY(parallaxOffset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, id]);

  return (
    <div
      id={id}
      className={`parallax-bg ${className}`}
      style={{
        transform: `translateY(${-offsetY}px) translateZ(0)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
