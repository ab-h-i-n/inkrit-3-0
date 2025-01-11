"use client";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children } : { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ 
        lerp: 0.038, 
        syncTouch : true,
        syncTouchLerp : 0.03,
        smoothWheel : true,
        autoResize : true
    }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;