import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const resetNavigation = () => {
      // This function is handled within the components using the activeSection state
    };

    const highlightNavigation = () => {
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', highlightNavigation);
    // Initial call to set active navigation
    highlightNavigation();
    
    return () => {
      window.removeEventListener('scroll', highlightNavigation);
    };
  }, []);

  return activeSection;
};
