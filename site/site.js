(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#primary-nav');
  const setMenu = (open) => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  };
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setMenu(false); menuButton.focus(); } });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); }, { passive: true });
  }

  const directions = {
    discovery: { label: "People don't find us.", advice: 'Make one clear route from the question a customer asks to the place they can find you.', offset: '680' },
    attention: { label: 'People see us, then move on.', advice: 'Check whether each post gives an interested person one next step that fits what they need.', offset: '425' },
    consistency: { label: 'Our efforts feel scattered.', advice: 'Choose one repeatable theme that says what makes your business useful, then build from there.', offset: '150' }
  };
  const finder = document.querySelector('[data-direction-finder]');
  if (finder) {
    const choices = [...finder.querySelectorAll('[data-challenge]')];
    const advice = finder.querySelector('[data-finder-copy]');
    const link = finder.querySelector('[data-finder-link]');
    const activeRoute = finder.querySelector('.signal-route__active');
    choices.forEach((button) => button.addEventListener('click', () => {
      const key = button.dataset.challenge;
      const selected = directions[key];
      if (!selected) return;
      choices.forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
      advice.textContent = selected.advice;
      link.href = `contact.html?focus=${encodeURIComponent(key)}`;
      if (activeRoute) activeRoute.style.strokeDashoffset = selected.offset;
    }));
  }
  const challenge = document.querySelector('[name="challenge"]');
  if (challenge) {
    const picked = directions[new URLSearchParams(location.search).get('focus')];
    if (picked) challenge.value = `I chose this starting point in the C20 Direction Finder: “${picked.label}”\n\n`;
  }

  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
  document.querySelectorAll('.client-card__media img').forEach((image) => {
    const showFallback = () => {
      image.hidden = true;
      const figure = image.closest('.client-card__media');
      if (!figure || figure.querySelector('.client-card__fallback')) return;
      figure.classList.add('is-fallback');
      const fallback = document.createElement('span');
      fallback.className = 'client-card__fallback';
      fallback.setAttribute('aria-hidden', 'true');
      fallback.textContent = image.alt.toLowerCase().includes('tea') ? 'TT' : 'SW';
      figure.append(fallback);
    };
    image.addEventListener('error', showFallback, { once: true });
    const fallbackTimer = window.setTimeout(() => {
      if (!image.complete) showFallback();
    }, 3500);
    image.addEventListener('load', () => window.clearTimeout(fallbackTimer), { once: true });
    if (image.complete && !image.naturalWidth) showFallback();
  });

  // Progressive enhancement: no content depends on animation to be visible.
  const gsap = window.gsap;
  if (!gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  const motion = gsap.matchMedia();
  let cleanups = [];
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    cleanups = [];
    const hero = document.querySelector('.hero');
    if (hero) {
      gsap.from(hero.querySelectorAll('.eyebrow, h1 > span, .hero__dek, .hero__actions, .hero__note'), {
        y: 18, opacity: 0, duration: .78, stagger: .09, ease: 'power3.out', delay: .08, clearProps: 'all'
      });
      const art = hero.querySelector('.hero__art');
      if (art) gsap.to(art, { yPercent: -5, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: .8 } });
    }
    const progress = document.querySelector('.scroll-progress');
    if (progress && window.ScrollTrigger) gsap.to(progress, { width: '100%', ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'max', scrub: .25 } });
    const processProgress = document.querySelector('.process-line__progress');
    if (processProgress && window.ScrollTrigger) gsap.to(processProgress, { width: '100%', ease: 'none', scrollTrigger: { trigger: '.process-list', start: 'top 78%', end: 'bottom 55%', scrub: .4 } });
    const magnetic = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (magnetic) document.querySelectorAll('[data-magnetic]').forEach((button) => {
      const strength = Number(button.dataset.magnetic) || .12;
      const move = (event) => {
        const box = button.getBoundingClientRect();
        gsap.to(button, { x: (event.clientX - box.left - box.width / 2) * strength, y: (event.clientY - box.top - box.height / 2) * strength, duration: .3, ease: 'power2.out' });
      };
      const reset = () => gsap.to(button, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.45)' });
      button.addEventListener('pointermove', move);
      button.addEventListener('pointerleave', reset);
      cleanups.push(() => { button.removeEventListener('pointermove', move); button.removeEventListener('pointerleave', reset); gsap.set(button, { clearProps: 'transform' }); });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  });
})();

