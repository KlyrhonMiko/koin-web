"use client";

import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

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
      }, 500); // Brief pause before starting reveal
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [showReveal]);

  return (
    <AnimatePresence>
      {showReveal && (
        <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">
          {/* Layer 1: Primary (Bottom layer) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute inset-0 bg-primary"
          />
          
          {/* Layer 2: Surface (Top layer) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            className="absolute inset-0 bg-surface flex items-center justify-center"
          >
             {/* Logo */}
             <motion.span
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-logo)" }}
             >
                &lt;Klyrhon /&gt;
             </motion.span>
          </motion.div>
        </div>
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
