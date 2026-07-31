"use client";

import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Wallet } from "lucide-react";

function RevealContent() {
  const searchParams = useSearchParams();
  const isFromPortfolio = searchParams.get("ref") === "portfolio";
  const [showReveal, setShowReveal] = useState(isFromPortfolio);

  useEffect(() => {
    if (showReveal) {
      // Disable scrolling while reveal is happening
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setShowReveal(false);
        document.body.style.overflow = "";
      }, 2500); // Reveal duration
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [showReveal]);

  return (
    <AnimatePresence>
      {showReveal && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a0a]"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2ed99b]/10 mb-6 border border-[#2ed99b]/20">
                <Wallet className="h-8 w-8 text-[#2ed99b]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Welcome from my Portfolio
              </h1>
              <p className="text-[#a1a1aa] text-sm md:text-base">
                Redirecting to Koin...
              </p>
            </motion.div>

            {/* Loading line */}
            <motion.div 
               className="mt-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
               exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                className="h-full w-full bg-[#2ed99b]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioReveal() {
  return (
    <Suspense fallback={null}>
      <RevealContent />
    </Suspense>
  );
}
