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
      document.body.classList.add('light');
    } else {
      // Ensure dark theme is properly set by default
      setIsDark(true);
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
    }
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      // Switch to Dark mode (black background, white text)
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      // Switch to Light mode (white background, black text)
      document.documentElement.classList.add('light');
      document.body.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  };
  
  return (
    <motion.button
      className="fixed top-4 right-4 md:top-5 md:right-5 z-40 bg-card p-2 sm:p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Click Sun for Dark Mode" : "Click Moon for Light Mode"}
    >
      {isDark ? (
        <FaSun className="text-yellow-500 text-lg sm:text-xl" />
      ) : (
        <FaMoon className="text-indigo-400 text-lg sm:text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;