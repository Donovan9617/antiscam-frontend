import { Button } from "react-bootstrap";
import { useTheme } from "./themeprovider";

const DarkModeButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
};

export const DarkModeButton = () => {
  const [currentTheme, setTheme] = useTheme();

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button onClick={toggleTheme} style={DarkModeButtonStyle}>
      {currentTheme === "light" ? "☀️" : "🌙"}
    </Button>
  );
};
