import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "w-[110px] h-[30px] rounded-lg items-center justify-center flex font-bold shadow-md bg-gradient-to-r from-blue-100 to-blue-200"
            : "w-[110px] h-[30px] rounded-lg items-center justify-center flex font-bold shadow-md bg-white"
        }
      >
        <p className="pink-gradient_text">Pavithra C R</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-pink-400" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-pink-400" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-pink-400" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
