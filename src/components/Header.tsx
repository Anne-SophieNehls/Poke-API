import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <header>
      <div>
        <img src="" alt="Logo-Pokemon" />
      </div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/type">Types</NavLink>
          <NavLink to="/about-us">About us</NavLink>
        </nav>
        <form>
          <input type="text" placeholder="search Pokemon" ref={searchRef} />
        </form>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
