document.documentElement.classList.add('home-ready');
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
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
    window.addEventListener('resize', () => { if (window.innerWidth > 1050) setMenu(false); }, { passive: true });
  }

  const directions = {
    discovery: { label: "People don't find us.", advice: 'Make one clear route from the question a customer asks to the place they can find you.', service: 'google-profile', offset: '680' },
    attention: { label: 'People see us, then move on.', advice: 'Make your message and visual identity clear, so an interested customer knows what to do next.', service: 'identity', offset: '425' },
    consistency: { label: 'Our efforts feel scattered.', advice: 'Choose one repeatable theme that says what makes your business useful, then build from there.', service: 'starter-kit', offset: '150' }
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
      link.href = `/contact.html?service=${encodeURIComponent(selected.service)}`;
      if (activeRoute) activeRoute.style.strokeDashoffset = selected.offset;
    }));
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });

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
        y: 18, duration: .78, stagger: .09, ease: 'power3.out', delay: .08, clearProps: 'all'
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
