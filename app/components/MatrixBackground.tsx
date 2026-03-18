'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/\\';
const FONT_SIZE = 14;
const FPS = 22;

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;
    const interval = 1000 / FPS;
    let drops: number[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };

    const draw = (ts: number) => {
      animId = requestAnimationFrame(draw);
      if (ts - lastTime < interval) return;
      lastTime = ts;

      // Fade trail
      ctx.fillStyle = 'rgba(5, 5, 5, 0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      drops.forEach((drop, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drop * FONT_SIZE;

        // Leading char: bright white-cyan
        ctx.fillStyle = '#e0ffff';
        ctx.shadowColor = '#00f5ff';
        ctx.shadowBlur = 10;
        ctx.fillText(char, x, y);

        // Body of column: cyan
        ctx.fillStyle = 'rgba(0, 180, 216, 0.55)';
        ctx.shadowBlur = 0;
        const prev = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(prev, x, y - FONT_SIZE);

        // Reset column randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      });

      ctx.shadowBlur = 0;
    };

    init();
    window.addEventListener('resize', init);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
