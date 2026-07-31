"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Download, ChevronRight, ArrowUpRight, ArrowDownLeft, Activity, CreditCard } from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; 
      const y = (e.clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Layer parallax transforms
  const mainCardX = useTransform(smoothX, v => v * -0.5);
  const mainCardY = useTransform(smoothY, v => v * -0.5);
  const mainCardRotateX = useTransform(smoothY, v => v * 0.2);
  const mainCardRotateY = useTransform(smoothX, v => v * -0.2);
  
  const transCardX = useTransform(smoothX, v => v * 0.8);
  const transCardY = useTransform(smoothY, v => v * 0.8);
  
  const smallCardX = useTransform(smoothX, v => v * -1.2);
  const smallCardY = useTransform(smoothY, v => v * -1.2);

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 overflow-hidden flex items-center bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] mix-blend-normal opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] mix-blend-normal opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left pt-10 lg:pt-0 z-20">


          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-foreground mb-6"
          >
            Master your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent inline-block pb-2 pr-4">financial flow.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10"
          >
            Experience a new standard of personal finance tracking. 
            Built with Flutter for unparalleled performance and a design that feels like magic.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://github.com/KlyrhonMiko/koin/releases/download/v1.1.1/koinv1.1.1.apk"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
                Download App
              </span>
            </a>
            <a
              href="https://github.com/KlyrhonMiko/koin"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-border-hover hover:bg-surface-elevated hover:shadow-lg w-full sm:w-auto"
            >
              Explore Source
              <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Mockup Composition */}
        <div className="col-span-1 lg:col-span-6 relative h-[450px] sm:h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1200px' }}>
          
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            style={{ 
              x: mainCardX, 
              y: mainCardY,
              rotateX: mainCardRotateX,
              rotateY: mainCardRotateY
            }}
            className="absolute z-10 w-[90%] sm:w-[360px] rounded-[32px] bg-surface/80 backdrop-blur-xl border border-border shadow-2xl p-6 md:p-8 dark:bg-surface-elevated/40 overflow-hidden"
          >
            {/* Glossy highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 pointer-events-none rounded-[32px]" />
            
            <div className="flex justify-between items-center mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                  <span className="text-primary font-bold text-xl">K</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Total Balance</p>
                  <p className="text-sm font-semibold text-foreground">Personal Wallet</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-border bg-surface/50 flex items-center justify-center shadow-sm">
                <Activity size={16} className="text-muted-foreground" />
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">$24,562.00</h2>
              <div className="flex items-center gap-1.5 mt-3 text-primary bg-primary/10 w-fit px-2.5 py-1 rounded-full">
                <ArrowUpRight size={14} />
                <span className="text-xs font-bold">+2.4% today</span>
              </div>
            </div>

            {/* Sparkline Chart Fake */}
            <div className="w-full h-28 relative z-10 mt-6">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible text-primary" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                  d="M0 35 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 L 100 5 L 100 45 L 0 45 Z" 
                  fill="url(#chartGradient)" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                  d="M0 35 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 L 100 5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="drop-shadow-[0_4px_6px_rgba(46,217,155,0.4)]"
                />
                <motion.circle 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                  cx="100" cy="5" r="3" fill="currentColor" className="animate-pulse drop-shadow-[0_0_8px_rgba(46,217,155,0.8)]" 
                />
              </svg>
            </div>
          </motion.div>

          {/* Floating Card 2: Transaction */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 40 }}
            style={{ 
              x: transCardX, 
              y: transCardY,
            }}
            className="absolute z-20 -bottom-2 -left-2 lg:bottom-4 lg:-left-12 w-[260px] rounded-[24px] bg-surface/90 backdrop-blur-2xl border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] p-5 dark:bg-surface-elevated/80"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Recent Transfer</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                <ArrowDownLeft size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">Apple Store</p>
                <p className="text-xs text-muted font-medium mt-0.5">MacBook Pro</p>
              </div>
              <p className="text-sm font-bold text-foreground">-$1,299</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Quick Action */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 40 }}
            style={{ 
              x: smallCardX, 
              y: smallCardY,
            }}
            className="absolute z-0 -top-6 right-2 lg:-top-2 lg:-right-6 w-[200px] rounded-[20px] bg-primary text-primary-foreground shadow-2xl p-5"
          >
             <div className="flex items-center gap-3 mb-3">
               <div className="bg-white/20 p-2 rounded-xl">
                 <CreditCard size={18} className="text-white" />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Active Card</span>
             </div>
             <p className="text-xl font-bold tracking-widest text-white">•••• 4242</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
