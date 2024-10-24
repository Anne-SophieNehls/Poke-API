import { useThemeContext } from "../lib/ToggleLightDarkMode";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    /*  <button onClick={toggleTheme}>{theme === "light" ? "⚫️" : "⚪️"}</button> */
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <img
          src="../../public/Pokeball-dark.svg"
          alt="darkmode"
          className="L-D-Mode"
        />
      ) : (
        <img
          src="../../public/Pokeball-light.svg"
          alt="lightmode"
          className="L-D-Mode"
        />
      )}
    </button>
  );
}
