import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Theme {
  name: string;
  icon: string;
}

interface ThemeProviderProps {
  theme?: string;
  children: ReactNode;
  additionalThemes?: Theme[];
  replaceThemes?: Theme[];
}

const IS_SERVER = typeof window === "undefined";

let storedTheme: string | null = IS_SERVER
  ? "light"
  : localStorage.getItem("theme");

let defaultThemes: Theme[] = [
  { name: "Light", icon: "☀️" },
  { name: "Dark", icon: "🌙" },
];

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
  themes: Theme[];
} | null>(null);

const modifyDOM = (theme: string) => {
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

export default function ThemeProvider({
  theme,
  children,
  additionalThemes,
  replaceThemes,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<string>(getPreferredTheme());
  let themes: Theme[] = defaultThemes;
  if (additionalThemes) {
    themes = [...defaultThemes, ...additionalThemes];
  }
  if (replaceThemes) {
    themes = replaceThemes;
  }

  useEffect(() => {
    if (IS_SERVER) return;
    modifyDOM(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getPreferredTheme(): string {
    if (theme) return theme;

    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme: string) {
    modifyDOM(theme);
    localStorage.setItem("theme", theme);
    setMode(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme: mode, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme() was used outside of its Provider");
  }
  return [context.theme, context.setTheme] as const;
};
