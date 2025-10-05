import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const storageKey = "swiftfix-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function hasStoredPreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  const stored = window.localStorage.getItem(storageKey);
  return stored === "light" || stored === "dark";
}

function applyDocumentTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.remove(theme === "dark" ? "light" : "dark");
  document.documentElement.classList.add(theme);
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => getPreferredTheme());
  const [manual, setManual] = useState<boolean>(() => hasStoredPreference());

  useEffect(() => {
    applyDocumentTheme(theme);
    if (typeof window === "undefined") {
      return;
    }
    if (manual) {
      window.localStorage.setItem(storageKey, theme);
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }, [manual, theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event: MediaQueryListEvent) => {
      if (!manual) {
        setThemeState(event.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [manual]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setManual(true);
        setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
      },
      setTheme: (nextTheme: Theme) => {
        setManual(true);
        setThemeState(nextTheme);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
