import { NavLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import ModeIcon from "../components/ModeToggle";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "dark:bg-accent bg-blue-700 text-text-dark"
        : "text-text dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800"
    }`;
  return (
    <>
      <nav className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto md:text-lg lg:text-xl xl:text-2xl flex p-4 items-center outline-slate-200 outline-1 rounded-xl dark:bg-surface-dark text-text dark:text-text-dark">
        <p className="text-4xl">DK</p>
        <div className="flex items-center ml-auto gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <NavLink className={navLinkStyle} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyle} to={"/about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyle} to={"/projects"}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyle} to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            <ModeIcon
              className={`size-8 lg:size-10 transition-transform duration-300 ${
                darkMode ? "text-accent rotate-270" : "text-blue-700 rotate-0"
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
