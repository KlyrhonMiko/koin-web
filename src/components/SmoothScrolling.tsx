"use client";
import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Just to ensure lenis classes are added if needed, though ReactLenis handles most of it.
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
