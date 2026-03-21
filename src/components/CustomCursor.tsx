import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], input, textarea, select")) {
        cursor.classList.add("expanded");
      }
    };

    const onOut = () => {
      cursor.classList.remove("expanded");
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;
