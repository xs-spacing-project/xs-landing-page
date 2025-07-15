import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Logo } from "./icons/Logo";
import { useTheme } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "./icons/ThemeIcons";
import { navLinks } from "../constants";

const Header = (): React.ReactNode => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const mobileMenuVariants: Variants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-light-bg/80 dark:bg-main-bg/80 backdrop-blur-lg border-b border-light-card-bg/50 dark:border-card-bg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/#" aria-label="Xs Home">
            <Logo className="h-8 w-auto text-light-text-heading dark:text-all-white" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, href: link }) => (
              <a
                key={link}
                href={`${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-light-text-body dark:text-text-body hover:text-light-text-heading dark:hover:text-all-white transition-colors duration-300"
              >
                {name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-light-text-body dark:text-text-body hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <a
              href="#cta"
              className="hidden md:inline-block bg-blue-accent text-all-white font-semibold px-5 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              Download App
            </a>
            <button
              className="md:hidden text-light-text-heading dark:text-all-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-light-bg dark:bg-main-bg z-40 md:hidden"
          >
            <div className="h-full flex flex-col justify-center items-center">
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map(({ name, href: link }) => (
                  <a
                    key={link}
                    href={`${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-2xl font-semibold text-light-text-heading dark:text-text-heading hover:text-blue-accent dark:hover:text-blue-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </a>
                ))}
                <a
                  href="#cta"
                  className="mt-8 inline-block bg-blue-accent text-all-white font-semibold px-8 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download App
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
