import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const linksPage = (
    <>
      {["home", "about", "skills", "education", "projects", "certificates", "contact"].map(
        (section) => (
          <li
            key={section}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 text-center md:text-left"
          >
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(`#${section}`);
              }}
              className="block py-1.5 px-2.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        )
      )}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bidyut.
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1 lg:space-x-2 text-gray-700 dark:text-gray-300 font-medium text-sm">
          {linksPage}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 relative group"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </motion.button>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1IuKFl0E7xZJ_F2aeEcHWQFpjA32KS8ZJ"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? (
              <X size={22} className="text-indigo-600 dark:text-indigo-400" />
            ) : (
              <Menu size={22} className="text-indigo-600 dark:text-indigo-400" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col max-w-7xl mx-auto px-4 py-4 space-y-1"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <ul className="grid grid-cols-2 gap-2">{linksPage}</ul>
              <div className="pt-3 mt-2 border-t border-gray-200 dark:border-gray-700">
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1IuKFl0E7xZJ_F2aeEcHWQFpjA32KS8ZJ"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg w-full"
                  download
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
