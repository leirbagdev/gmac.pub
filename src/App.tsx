import './App.css';
import { TimelineDemo } from '@/components/timeline-demo';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full min-h-screen bg-background text-foreground">
        <ThemeSwitcher />
        <TimelineDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;