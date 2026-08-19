"use client";

import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden border-t border-border pt-32 pb-12">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] max-w-[800px] max-h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.02] select-none">
        <span className="text-[25vw] font-black tracking-tighter text-foreground leading-none">KOIN</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Large CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col items-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 text-foreground leading-[1.05]">
            Ready to master <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">your finances?</span>
          </h2>
          
          <a
            href="https://github.com/KlyrhonMiko/koin/releases/download/v1.1.1/koinv1.1.1.apk"
            onClick={() => track('Download', { location: 'Footer' })}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-10 py-5 text-base font-semibold text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(46,217,155,0.3)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Download the App
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </motion.div>

        {/* Footer Bottom Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-border/50"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground text-2xl tracking-tighter font-logo">Koin</span>
          </div>
          
          {/* Copyright */}
          <p className="text-base text-muted font-medium">
            <a 
              href="https://github.com/KlyrhonMiko" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition-colors underline decoration-border hover:decoration-primary underline-offset-4"
            >
              KlyrhonMiko
            </a>
          </p>
          
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/KlyrhonMiko/koin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group glass flex items-center justify-center w-12 h-12 rounded-full text-muted hover:text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
