import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useThemeContext } from "../lib/ToggleLightDarkMode";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Outlet />
      {children}
    </div>
  );
}
