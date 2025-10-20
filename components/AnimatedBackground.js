import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const bgRef = useRef();

  useEffect(() => {
    let frame;
    const gradientColors = [
      "#000000",
      "#0a0a0a",
      "#111111",
      "#080808",
      "#000000",
    ];
    let step = 0;

    const animate = () => {
      const nextStep = (step + 1) % gradientColors.length;
      bgRef.current.style.background = `linear-gradient(120deg, ${gradientColors[step]}, ${gradientColors[nextStep]})`;
      step = nextStep;
      frame = requestAnimationFrame(() => setTimeout(animate, 2000));
    };

    animate();
    return () => cancelAnimationFrame(frame);
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