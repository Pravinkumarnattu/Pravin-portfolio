import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative w-10 h-10 rounded-full glass flex items-center justify-center text-ink-muted hover:text-emerald-glow transition-colors ${className}`}
    >
      {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
}
