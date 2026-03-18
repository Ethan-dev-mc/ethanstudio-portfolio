'use client';

import { useEffect } from 'react';

export default function PageEffects() {
  useEffect(() => {

    // ── 1. NAVBAR scroll class (sin re-render de React) ────────
    const nav = document.getElementById('main-nav');
    const onNavScroll = () => {
      if (window.scrollY > 50) {
        nav?.classList.add('nav-scrolled');
      } else {
        nav?.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', onNavScroll, { passive: true });

    // ── 2. SCROLL REVEAL (IntersectionObserver) ─────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    // ── 3. CARD TILT (con RAF para no bloquear) ─────────────────
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
    let rafTilt: number;

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        cancelAnimationFrame(rafTilt);
        rafTilt = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(rafTilt);
        card.style.transform = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      (card as any)._cleanup = () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => {
      window.removeEventListener('scroll', onNavScroll);
      observer.disconnect();
      cancelAnimationFrame(rafTilt);
      cards.forEach((card) => (card as any)._cleanup?.());
    };
  }, []);

  return null;
}
