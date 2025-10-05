import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-sm transition hover:border-primary/60 hover:text-primary"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
    </button>
  );
}
