"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-text-primary/10 bg-bg-secondary/70 backdrop-blur-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-dancing text-[26px] font-bold leading-9 text-text-primary text-center transition-transform hover:scale-105"
        >
          Yashfa Tasnia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-10 md:flex">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter inline text-[16px] leading-6 text-text-primary transition-colors hover:text-text-primary/70"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-[6px] rounded-md px-6 py-3 font-inter text-[14px] font-medium leading-[22.4px] text-white transition-all hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
            }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="block text-text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[72px] transform overflow-hidden bg-bg-secondary/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-80 border-b border-text-primary/10 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6 font-inter text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary transition-colors hover:text-text-primary/70"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-md py-3 text-white transition-all"
            style={{
              backgroundImage: "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
            }}
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
