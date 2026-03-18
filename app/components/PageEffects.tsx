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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onNavScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
