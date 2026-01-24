import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-light-border-secondary dark:hover:bg-dark-border-secondary transition-all duration-200 border border-light-border-primary dark:border-dark-border-primary"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-light-text-primary" />
      ) : (
        <Sun size={18} className="text-dark-text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
