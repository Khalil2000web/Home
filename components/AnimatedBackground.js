import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const bgRef = useRef();

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 2000;

      const color1 = Math.floor(0 + Math.sin(progress * Math.PI * 2) * 5);
      const color2 = Math.floor(0 + Math.cos(progress * Math.PI * 2) * 30);
      bgRef.current.style.background = `linear-gradient(120deg, rgb(${color1},${color1},${color1}), rgb(${color2},${color2},${color2}))`;
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