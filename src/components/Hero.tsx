"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
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
    <section className="relative min-h-[100dvh] pt-20 sm:pt-24 pb-12 flex items-center bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] mix-blend-normal opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] mix-blend-normal opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-8 items-center relative z-10">

        {/* Left Column: Typography */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left pt-10 lg:pt-0 z-20">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-foreground mb-4 sm:mb-6"
          >
            Master your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent inline-block pb-2 pr-4">financial flow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-8 sm:mb-10"
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
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-foreground px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-background transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 w-full sm:w-auto"
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
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-border-hover hover:bg-surface-elevated hover:shadow-lg w-full sm:w-auto"
            >
              Explore Source
              <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Mockup Composition */}
        <div className="col-span-1 lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end scale-95 sm:scale-100 origin-center mt-12 lg:mt-0" style={{ perspective: '1200px' }}>

          {mounted && (
            <div className="relative w-[220px] sm:w-[260px] lg:w-[280px] flex items-center justify-center lg:mr-8 xl:mr-16">

              {/* Floating Card 3: Budgets (Top Right - Behind) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50, rotate: -5 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
                transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 40 }}
                style={{
                  x: smallCardX,
                  y: smallCardY,
                }}
                className="absolute z-0 top-[2%] -right-[40%] sm:-right-[50%] w-[170px] sm:w-[210px] lg:w-[230px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-[3px] sm:border-[4px] border-surface/50 bg-background"
              >
                <Image
                  src={resolvedTheme === "dark" ? "/koin/budgets-dark.png" : "/koin/budgets-light.png"}
                  alt="Budgets"
                  width={1080}
                  height={2400}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* Floating Card 2: Activity (Bottom Left - Front) */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50, rotate: -5 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
                transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 40 }}
                style={{
                  x: transCardX,
                  y: transCardY,
                }}
                className="absolute z-20 bottom-[4%] -left-[40%] sm:-left-[50%] w-[170px] sm:w-[210px] lg:w-[230px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border-[3px] sm:border-[4px] border-surface/50 bg-background"
              >
                <Image
                  src={resolvedTheme === "dark" ? "/koin/activity-dark.png" : "/koin/activity-light.png"}
                  alt="Activity"
                  width={1080}
                  height={2400}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* Main Card: Home (Center) */}
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
                className="relative z-10 w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[4px] sm:border-[6px] border-surface/80 bg-background"
              >
                <Image
                  src={resolvedTheme === "dark" ? "/koin/home-dark.png" : "/koin/home-light.png"}
                  alt="Home"
                  width={1080}
                  height={2400}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
