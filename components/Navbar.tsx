"use client";

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/theme/Theme-Toggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500 text-black",
        isScrolled
          ? "backdrop-blur-xl bg-white/80  dark:bg-[#0a0a0a]/80 border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-serif text-2xl font-medium tracking-tight text-soft-ink dark:text-white">Yashfa Tasnia</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
        <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};
