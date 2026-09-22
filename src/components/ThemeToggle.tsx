import { SunIcon, MoonIcon } from './Icons';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className={`p-2 rounded-xl transition-all duration-200 border flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/60 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 shadow-sm ${className}`}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45 duration-300" />
      ) : (
        <MoonIcon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
