import { useEffect, useRef } from "react";

const particles = [
  { left: "8%", top: "16%", size: 4, depth: 0.45 },
  { left: "18%", top: "72%", size: 2, depth: 0.75 },
  { left: "31%", top: "38%", size: 3, depth: 0.55 },
  { left: "48%", top: "82%", size: 2, depth: 0.9 },
  { left: "62%", top: "22%", size: 3, depth: 0.7 },
  { left: "76%", top: "63%", size: 4, depth: 0.5 },
  { left: "89%", top: "31%", size: 2, depth: 0.85 },
];

export function AmbientBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        node.style.setProperty("--pointer-x", x.toFixed(3));
        node.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={ref} className="ambient-backdrop" aria-hidden>
      <div className="ambient-aurora ambient-aurora-one" />
      <div className="ambient-aurora ambient-aurora-two" />
      <div className="ambient-grid" />
      <div className="ambient-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              ["--particle-depth" as string]: particle.depth,
              ["--particle-delay" as string]: `${index * -1.7}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}