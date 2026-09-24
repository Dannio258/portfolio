import { NavLink } from "react-router-dom";
import { useState, type Dispatch, type SetStateAction } from "react";
import ModeIcon from "../components/ModeToggle";
import BurgerIcon from "../components/BurgerMenu";
import CloseIcon from "../components/CloseButton";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

function Sidebar({ darkMode, setDarkMode }: NavbarProps) {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "dark:bg-accent bg-blue-700 text-text-dark"
        : "text-text dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800"
    }`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`
    text-xl flex flex-col px-2 py-2
    outline-slate-200
    outline-1
    dark:outline-none 
    
    dark:bg-surface-dark text-text dark:text-text-dark

    ${
      isOpen
        ? "fixed inset-0 w-full h-dvh z-50 rounded-none bg-surface"
        : "w-[90%] mx-auto rounded-xl"
    }
  `}
      >
        <div className="flex justify-between items-center">
          <p className="text-3xl">DK</p>
          <button
            className="size-12"
            onClick={() => setIsOpen((previous) => !previous)}
          >
            {isOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className=" flex flex-col items-center  gap-10">
            <ul className="flex flex-col items-center gap-10">
              <li>
                <NavLink
                  className={navLinkStyle}
                  to={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navLinkStyle}
                  to={"/about"}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navLinkStyle}
                  to={"/projects"}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navLinkStyle}
                  to={"/contact"}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => {
                setDarkMode((prev) => !prev);
                setIsOpen(false);
              }}
            >
              <ModeIcon
                className={`size-12 transition-transform duration-300 ${
                  darkMode ? "text-accent rotate-270" : "text-blue-700 rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Sidebar;
