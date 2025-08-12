import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksPage = <>
    <li className="hover:text-indigo-800 transition-colors duration-200">
      <NavLink to={"/home"}>
        Home
      </NavLink>
    </li>
    <li className="hover:text-indigo-800 transition-colors duration-200">
      <NavLink to={"/about"}>
        About
      </NavLink>
    </li>
    <li className="hover:text-indigo-800  transition-colors duration-200">
      <NavLink to={"/skills"}>
        Skills
      </NavLink>
    </li>
    <li className="hover:text-indigo-800 transition-colors duration-200">
      <NavLink to={"/education"}>
        Education
      </NavLink>
    </li>
    <li className="hover:text-indigo-800 transition-colors duration-200">
      <NavLink to={"/projects"}>
        Projects
      </NavLink>
    </li>
    <li className="hover:text-indigo-800 transition-colors duration-200">
      <NavLink to={"/contact"}>
        Contact
      </NavLink>
    </li>
  </>;

  const resumeBtnClasses =
    "inline-flex items-center px-5 md:px-6 py-2 rounded-lg bg-gradient-to-r from-gray-800 via-blue-900 to-blue-800 text-white text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-gray-50"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-bold text-indigo-600 select-none"
        >
          Bidyut.
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          {linksPage}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <a href="#resume" className={resumeBtnClasses}>
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 space-y-4">
            <ul>
              {linksPage}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
