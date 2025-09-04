import React, { useState, useEffect } from "react";
import { GitBranch, Heart, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Resume", to: "resume" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        scrolled
          ? "backdrop-blur-xs bg-white/10 border-b border-white/20 shadow-md"
          : "bg-[#1c2529]"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer flex gap-2 text-center text-teal-200">
          R-Code
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icon */}
        <div className="hidden md:block hover:cursor-pointer">
          <GitBranch size={28} className="text-white " />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden flex flex-col items-center gap-6 py-6 ${
            scrolled
              ? "backdrop-blur-xs bg-white/10 border-t border-white/20"
              : "bg-[#1c2529]"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-teal-600"
            >
              {link.name}
            </Link>
          ))}
         
        </div>
        
      )}
    </div>
  );
}

export default Navbar;
