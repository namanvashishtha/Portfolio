import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isMobileScreen);
    };

    // Check theme
    const checkTheme = () => {
      const isLightMode = document.documentElement.classList.contains('light');
      setIsDark(!isLightMode);
    };

    checkMobile();
    checkTheme();
    window.addEventListener('resize', checkMobile);
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const updateCursorPosition = (e: MouseEvent) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (!isMobile) {
        // Check if hovering over interactive elements
        const target = e.target as HTMLElement;
        const isInteractive = 
          target.tagName.toLowerCase() === "a" || 
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "input" ||
          target.tagName.toLowerCase() === "textarea" ||
          target.tagName.toLowerCase() === "select" ||
          target.getAttribute("role") === "button";
        
        setIsHovering(isInteractive);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateCursorPosition);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? "link-hovered" : ""} ${isDark ? "" : "light-cursor"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default CustomCursor;