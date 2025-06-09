import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import gsap from "gsap";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Our Services" },
    { id: "process", label: "Our Process" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animate menu with GSAP
  useEffect(() => {
    if (menuRef.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current.fromTo(
        menuRef.current,
        { y: -20, opacity: 0, display: "none" },
        {
          y: 0,
          opacity: 1,
          display: "block",
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  // Scroll & section detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setScrolledPastHero(currentScrollY > heroHeight - 100);

      const sections = [
        "home",
        "about",
        "services",
        "process",
        "contact",
      ];

      const sectionScrollPosition = currentScrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            sectionScrollPosition >= offsetTop &&
            sectionScrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      if (isOpen && Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest("button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      ref={navbarRef}
      className={`w-full fixed top-0 z-[99999] transition-all duration-300 ${
        scrolledPastHero
          ? "bg-white shadow-sm"
          : "bg-gradient-to-b from-white/60 to-transparent"
      }`}
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.1s ease-out",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-11/12  mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="h-6 sm:h-7 md:h-8 lg:h-12 w-auto drop-shadow-lg"
            />
          </a>
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-blue-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-wrap md:items-center space-x-3 lg:space-x-10 font-bold text-sm md:text-sm lg:text-base">
          {navLinks.map((link) => (
            <HashLink
              smooth
              to={`#${link.id}`}
              key={link.id}
              className={`transition-all ${
                activeSection === link.id
                  ? "text-[#1C4D9B] font-bold"
                  : scrolledPastHero
                  ? "text-zinc-500 hover:text-[#1C4D9B] font-medium"
                  : "text-white hover:text-[#1C4D9B] font-medium"
              }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-none"
            href="#contact"
          >
            <span className="absolute inset-0 border border-[#1C4D9B]"></span>
            <span className="block px-6 md:px-8 lg:px-12 py-2 md:py-2.5 lg:py-3 text-sm md:text-sm lg:text-base transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 bg-[#1C4D9B]">
              Contact Us
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Menu (GSAP-controlled) */}
      <div
        ref={menuRef}
        className="md:hidden bg-white px-5 pt-4 pb-6 shadow-md space-y-4 max-h-[80vh] overflow-y-auto"
        style={{ display: "none" }}
      >
        {navLinks.map((link) => (
          <HashLink
            smooth
            to={`#${link.id}`}
            key={link.id}
            className="block text-gray-800 font-semibold"
            onClick={() => {
              setActiveSection(link.id);
              setIsOpen(false);
            }}
          >
            {link.label}
          </HashLink>
        ))}
        <a
          href="#contact"
          className="block w-full text-center bg-[#1C4D9B] text-white font-semibold py-3 rounded"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
