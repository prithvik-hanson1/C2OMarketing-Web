(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#primary-nav');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
  }

  const directions = {
    discovery: {
      label: "People don't find us.",
      advice: 'Make one clear route from the question a customer asks to the place they can find you.'
    },
    attention: {
      label: 'People see us, then move on.',
      advice: 'Check whether each post gives an interested person one next step that fits what they need.'
    },
    consistency: {
      label: 'Our efforts feel scattered.',
      advice: 'Choose one repeatable theme that says what makes your business useful, then build from there.'
    }
  };

  const finder = document.querySelector('[data-direction-finder]');
  if (finder) {
    const choices = Array.from(finder.querySelectorAll('[data-challenge]'));
    const advice = finder.querySelector('[data-finder-copy]');
    const link = finder.querySelector('[data-finder-link]');
    choices.forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.challenge;
        const selected = directions[key];
        if (!selected) return;
        choices.forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
        advice.textContent = selected.advice;
        link.href = `contact.html?focus=${encodeURIComponent(key)}`;
      });
    });
  }

  const challenge = document.querySelector('[name="challenge"]');
  if (challenge) {
    const focus = new URLSearchParams(window.location.search).get('focus');
    const picked = directions[focus];
    if (picked) challenge.value = `I chose this starting point in the C20 Direction Finder: “${picked.label}”\n\n`;
  }
})();

