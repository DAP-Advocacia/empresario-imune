/**
 * EMPRESÁRIO IMUNE - MAIN JAVASCRIPT
 * Interactions, animations, counters, and FAQ toggle
 */

(function () {
  'use strict';

  const root = document.getElementById('ei-page') || document.body;
  if (!root || root.__eiInit) return;
  root.__eiInit = true;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Reveal Elements on Scroll
  const revealElements = Array.from(root.querySelectorAll('[data-reveal]'));
  const release = (el) => {
    el.classList.add('ei-go');
    el.classList.remove('ei-armed');
  };
  const unarmAll = () => {
    revealElements.forEach((el) => el.classList.remove('ei-armed'));
  };

  if (!reduceMotion && 'IntersectionObserver' in window && document.visibilityState === 'visible') {
    const vh = window.innerHeight || 800;
    const armed = revealElements.filter((el) => el.getBoundingClientRect().top > vh * 0.9);
    armed.forEach((el) => el.classList.add('ei-armed'));

    let fired = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        fired = true;
        release(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    armed.forEach((el) => io.observe(el));

    // Fallbacks if observer doesn't fire
    setTimeout(() => { if (!fired) armed.forEach(release); }, 1500);
    setTimeout(() => { revealElements.forEach(release); }, 6000);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'visible') unarmAll();
    });
  } else {
    unarmAll();
  }

  // 2. Numerical Counters
  const counters = Array.from(root.querySelectorAll('[data-count]'));
  const runCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-count')) || 0;
    const sfx = el.getAttribute('data-suffix') || '';
    if (reduceMotion) {
      el.textContent = target + sfx;
      return;
    }
    const t0 = performance.now();
    const duration = 1400;

    function tick(now) {
      const progress = Math.min((now - t0) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * easeOut) + sfx;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);
        runCounter(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach((el) => counterObserver.observe(el));
    setTimeout(() => {
      counters.forEach((el) => {
        if (parseFloat(el.textContent) === 0) runCounter(el);
      });
    }, 5000);
  } else {
    counters.forEach(runCounter);
  }

  // 3. Scroll Progress Bar & Parallax
  const progressBar = root.querySelector('[data-progress]');
  const parallaxElements = Array.from(root.querySelectorAll('[data-parallax]'));
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const doc = document.scrollingElement || document.documentElement;
      const top = window.scrollY || doc.scrollTop || 0;
      const height = Math.max(doc.scrollHeight, document.body.scrollHeight) - (doc.clientHeight || window.innerHeight);

      if (progressBar) {
        progressBar.style.opacity = height > 40 ? '1' : '0';
        progressBar.style.width = (height > 0 ? Math.min(100, (top / height) * 100) : 0) + '%';
      }

      if (!reduceMotion && parallaxElements.length > 0) {
        parallaxElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - (window.innerHeight / 2)) * parseFloat(el.getAttribute('data-parallax') || '0.05');
          el.style.transform = `translateY(${(-offset).toFixed(1)}px)`;
        });
      }

      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // 4. Countdown Timer (Ends at midnight daily)
  const pad = (v) => String(v).padStart(2, '0');
  const updateCountdown = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(24, 0, 0, 0);
    let secondsRemaining = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
    const hours = Math.floor(secondsRemaining / 3600);
    secondsRemaining -= hours * 3600;
    const minutes = Math.floor(secondsRemaining / 60);
    secondsRemaining -= minutes * 60;

    [['h', hours], ['m', minutes], ['s', secondsRemaining]].forEach(([unit, val]) => {
      const el = root.querySelector(`[data-cd="${unit}"]`);
      if (el) el.textContent = pad(val);
    });
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 5. Accessible FAQ Accordion Toggle
  const faqDetails = Array.from(root.querySelectorAll('.faq-accordion details'));
  faqDetails.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      const icon = detail.querySelector('.faq-toggle-icon');
      if (icon) {
        icon.textContent = detail.open ? '−' : '+';
      }
    });
  });
})();
