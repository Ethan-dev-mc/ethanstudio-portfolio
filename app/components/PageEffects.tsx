'use client';

import { useEffect } from 'react';

export default function PageEffects() {
  useEffect(() => {

    // ── 1. SCROLL REVEAL con IntersectionObserver ──────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    // ── 2. TILT 3D en tarjetas ─────────────────────────────────
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
        card.style.boxShadow = `${x * -12}px ${y * -12}px 40px rgba(0,180,216,0.1)`;
      };
      const onLeave = () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      // Cleanup per card
      (card as HTMLElement & { _cleanup?: () => void })._cleanup = () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    });

    // ── 3. PARALLAX suave en blobs con scroll ──────────────────
    let rafId: number;
    const blob1 = document.querySelector<HTMLElement>('.blob-cyan');
    const blob2 = document.querySelector<HTMLElement>('.blob-purple');
    const blob3 = document.querySelector<HTMLElement>('.blob-green');

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (blob1) blob1.style.marginTop = `${y * 0.06}px`;
        if (blob2) blob2.style.marginBottom = `${y * -0.04}px`;
        if (blob3) blob3.style.marginTop = `${y * 0.03}px`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      cards.forEach((card) => {
        (card as HTMLElement & { _cleanup?: () => void })._cleanup?.();
      });
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
