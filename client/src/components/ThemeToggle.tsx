import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      // When clicking the Sun button, switch to Dark mode (black background, white text)
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      // When clicking the Moon button, switch to Light mode (white background, black text)
      document.documentElement.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  };
  
  return (
    <motion.button
      className="fixed top-5 right-5 z-50 bg-card p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FaSun className="text-yellow-500 text-xl" />
      ) : (
        <FaMoon className="text-indigo-400 text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;