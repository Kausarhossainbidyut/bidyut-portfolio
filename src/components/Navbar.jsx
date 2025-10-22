import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";


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

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const linksPage = <>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#home");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Home
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#about");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        About
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#skills"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#skills");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Skills
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#education"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#education");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Education
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#projects");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Projects
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#certificates"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#certificates");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Certificates
      </a>
    </li>
    <li className="hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-center md:text-left">
      <a 
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#contact");
        }}
        className="block py-2 px-3 rounded-lg hover:bg-indigo-50 font-medium cursor-pointer"
      >
        Contact
      </a>
    </li>
  </>;

  const resumeBtnClasses =
    "inline-flex items-center px-4 md:px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white/60 backdrop-blur-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bidyut.
        </motion.a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4 text-gray-700 font-medium">
          {linksPage}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1IuKFl0E7xZJ_F2aeEcHWQFpjA32KS8ZJ"
            className={resumeBtnClasses}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline">Download</span> Resume
          </motion.a>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={24} className="text-indigo-600" /> : <Menu size={24} className="text-indigo-600" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200 shadow-sm overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="flex flex-col max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <ul className="space-y-1">
                {linksPage}
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1IuKFl0E7xZJ_F2aeEcHWQFpjA32KS8ZJ"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg w-full"
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
