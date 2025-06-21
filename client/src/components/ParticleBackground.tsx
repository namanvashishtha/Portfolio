import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isLightMode = document.documentElement.classList.contains('light');
      setIsDark(!isLightMode);
    };
    
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // This loads the particles module
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Container loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        background: {
          color: {
            value: isDark ? "#0a0a0a" : "#ffffff", // Dynamic background based on theme
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            connect: {
              distance: 120, // Maximum distance to connect particles
              links: {
                opacity: 0.3,
              },
              radius: 100, // Connection radius
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff1493", // Pink particles to match primary color
          },
          links: {
            color: isDark ? "#ff1493" : "#ff1493", // Keep pink links for both themes
            distance: 150,
            enable: true,
            opacity: isDark ? 0.2 : 0.3, // Slightly more visible in light mode
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // More particles
          },
          opacity: {
            value: isDark ? 0.7 : 0.5, // Adjust opacity for better visibility in light mode
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;