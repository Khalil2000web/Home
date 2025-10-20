import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const bgRef = useRef();

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 20000; // full cycle 20s

      // Base dark gradient with subtle black-chrome shifts
      const dark1 = Math.floor(0 + Math.sin(progress * Math.PI * 2) * 10);   // near-black
      const dark2 = Math.floor(0 + Math.cos(progress * Math.PI * 2) * 40);   // slightly lighter black/gray

      // Subtle red pulse like factory warning lights
      const redPulse = Math.floor(50 + Math.sin(progress * Math.PI * 4) * 30); // slow strobe

      // Combine RGB for gradient
      const color1 = `rgb(${dark1 + redPulse/5}, ${dark1}, ${dark1})`;
      const color2 = `rgb(${dark2 + redPulse/4}, ${dark2}, ${dark2})`;

      // Add grid overlay effect via repeating-linear-gradient
      const grid = `
        repeating-linear-gradient(
          90deg,
          rgba(255,0,0,0.03),
          rgba(255,0,0,0.03) 1px,
          transparent 1px,
          transparent 20px
        ),
        repeating-linear-gradient(
          0deg,
          rgba(255,0,0,0.03),
          rgba(255,0,0,0.03) 1px,
          transparent 1px,
          transparent 20px
        )
      `;

      // Final background
      bgRef.current.style.background = `${grid}, linear-gradient(120deg, ${color1}, ${color2})`;
      bgRef.current.style.backgroundBlendMode = "overlay";

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      ref={bgRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}