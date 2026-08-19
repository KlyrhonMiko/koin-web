"use client";

import Link from 'next/link';
import { Github, Download } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { track } from '@vercel/analytics';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 lg:pt-6 pointer-events-none"
    >
      <div 
        className={`flex items-center justify-between w-full max-w-4xl rounded-full border pointer-events-auto transition-all duration-500 ease-out ${
          scrolled 
            ? "bg-surface/80 backdrop-blur-xl border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 px-6 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]" 
            : "bg-surface/10 backdrop-blur-sm border-transparent py-4 px-6 shadow-none"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter text-foreground font-logo">Koin</span>
        </div>
        
        {/* Right Side Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Main Links */}
          <Link href="#features" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors hidden sm:block mr-2">
            Features
          </Link>
          
          {/* Desktop Utilities Pill */}
          <div className="hidden sm:flex items-center rounded-full p-1 border border-border/60 dark:border-white/[0.08] bg-surface-elevated/30">
            <a href="https://github.com/KlyrhonMiko/koin" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-surface dark:hover:bg-white/10 transition-colors duration-200">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <div className="w-[1px] h-4 bg-border/80 dark:bg-white/10 mx-1"></div>
            <ThemeToggle className="group relative flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-foreground transition-colors hover:bg-surface dark:hover:bg-white/10 focus:outline-none active:scale-95 cursor-pointer" />
          </div>

          {/* Mobile Theme Toggle */}
          <div className="sm:hidden flex">
            <ThemeToggle className="group relative flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-foreground transition-colors focus:outline-none active:scale-95 cursor-pointer bg-surface-elevated/50 border border-border/60" />
          </div>

          {/* CTA */}
          <a 
            href="https://github.com/KlyrhonMiko/koin/releases/download/v1.1.1/koinv1.1.1.apk" 
            onClick={() => track('Download', { location: 'Navbar' })}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold text-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <Download size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">App</span>
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
