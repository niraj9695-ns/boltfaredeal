import { useEffect, useRef } from "react";

export const CursorSpotlight = () => {
  const overlayRef = useRef(null);
  const spotlightRef = useRef(null);
  const dotRef = useRef(null);
  const rippleRef = useRef(null);
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const spotlight = spotlightRef.current;
    const dot = dotRef.current;

    if (!overlay || !spotlight || !dot) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!pointerQuery.matches || reducedMotionQuery.matches) {
      overlay.style.display = "none";
      return undefined;
    }

    const updateTarget = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    const spawnParticle = (x, y) => {
      const particle = document.createElement("span");
      particle.className = "cursor-particle";
      const size = 3 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty("--particle-x", `${(Math.random() - 0.5) * 40}px`);
      particle.style.setProperty("--particle-y", `${(Math.random() - 0.5) * 40}px`);
      overlay.appendChild(particle);

      window.setTimeout(() => particle.remove(), 520);
    };

    const handlePointerDown = (event) => {
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      ripple.style.setProperty("--ripple-x", `${event.clientX}px`);
      ripple.style.setProperty("--ripple-y", `${event.clientY}px`);
      overlay.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 500);

      for (let i = 0; i < 8; i += 1) {
        spawnParticle(event.clientX, event.clientY);
      }
    };

    const animate = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;

      currentRef.current.x += dx * 0.12;
      currentRef.current.y += dy * 0.12;

      spotlight.style.setProperty("--cursor-x", `${currentRef.current.x}px`);
      spotlight.style.setProperty("--cursor-y", `${currentRef.current.y}px`);
      dot.style.setProperty("--dot-x", `${currentRef.current.x}px`);
      dot.style.setProperty("--dot-y", `${currentRef.current.y}px`);

      if (Math.abs(dx) + Math.abs(dy) > 5) {
        spawnParticle(currentRef.current.x, currentRef.current.y);
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    spotlight.style.setProperty("--cursor-x", `${currentRef.current.x}px`);
    spotlight.style.setProperty("--cursor-y", `${currentRef.current.y}px`);
    dot.style.setProperty("--dot-x", `${currentRef.current.x}px`);
    dot.style.setProperty("--dot-y", `${currentRef.current.y}px`);

    window.addEventListener("pointermove", updateTarget, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", updateTarget);
      window.removeEventListener("pointerdown", handlePointerDown);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={overlayRef} className="cursor-overlay" aria-hidden="true">
      <div ref={spotlightRef} className="cursor-spotlight" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
};
