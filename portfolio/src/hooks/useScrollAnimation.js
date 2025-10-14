import { useState, useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const element = document.getElementById('scroll-target');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  return isVisible;
};

export const useScrollAnimationWithRef = (threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold, delay]);

  return [setRef, isVisible];
};
