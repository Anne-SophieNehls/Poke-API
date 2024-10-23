import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);

  function ToggelDarkMode() {}

  return (
    <header>
      <div>
        <img src="" alt="Logo-Pokemon" />
      </div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/type">Types</NavLink>
          <NavLink to="/type">About us</NavLink>
        </nav>
        <form>
          <input type="text" placeholder="search Pokemon" ref={searchRef} />
        </form>
        <button onClick={ToggelDarkMode}>Light-Dark-Mode</button>
      </div>
    </header>
  );
}
