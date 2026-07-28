import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia?.('(pointer: fine)').matches;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reduced || !ref.current) return;

    let raf = null;
    const move = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
      });
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-[1] hidden lg:block"
      style={{
        background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.04) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
