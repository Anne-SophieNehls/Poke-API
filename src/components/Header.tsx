import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <header>
      <section className="p-menu1">
        <nav id="navbar" className="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label className="hamburger1" htmlFor="toggle1">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>
          <nav className="menu1">
            <NavLink className="link1" to="/">
              Home
            </NavLink>
            <NavLink className="link1" to="/type">
              Types
            </NavLink>
            <NavLink className="link1" to="/about-us">
              About us
            </NavLink>
          </nav>
        </nav>
      </section>
      <form>
        <input type="text" placeholder="Search Pokemon" ref={searchRef} />
      </form>
      <ThemeSwitcher />
    </header>
  );
}
