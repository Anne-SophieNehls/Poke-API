import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);

  function ToggelDarkMode() {}

  return (
    <header>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo-Pokemon" />
      </div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/type">Types</NavLink>
          <NavLink to="/about-us">About us</NavLink>
        </nav>
        <form>
          <input type="text" placeholder="Search Pokemon" ref={searchRef} />
        </form>
        <button onClick={ToggelDarkMode}>Light-Dark-Mode</button>
      </div>
    </header>
  );
}
