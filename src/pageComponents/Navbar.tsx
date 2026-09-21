import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import ModeToggle from "../components/ModeToggle";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <>
      <nav className="w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex py-3 px-4 items-center outline-amber-50 outline-1 rounded-xl bg-surface dark:bg-surface-dark text-text dark:text-text-dark">
        <p>DK</p>
        <div className="flex items-center ml-auto gap-10">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>Projects</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            <ModeToggle
              className={`size-8 transition-transform duration-300 ${
                darkMode ? "text-accent rotate-270" : "text-slate-500 rotate-0"
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
