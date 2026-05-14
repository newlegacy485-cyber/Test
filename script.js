/* ===================================================
   LUMINARY — Interactive Script
   =================================================== */

/* ----- Navbar scroll effect ----- */
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ----- Mobile menu ----- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.cssText = 'transform: translateY(7px) rotate(45deg)';
    spans[1].style.cssText = 'opacity: 0; transform: scaleX(0)';
    spans[2].style.cssText = 'transform: translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => (s.style.cssText = ''));
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => (s.style.cssText = ''));
  });
});

/* ----- Theme toggle ----- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-toggle__icon');

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'light' ? '☽' : '☀';
  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});

/* ----- Scroll reveal ----- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
);

const revealTargets = [
  '.about__inner',
  '.service-card',
  '.project-card',
  '.testimonial-card',
  '.contact__info',
  '.contact__form',
  '.section-header',
  '.footer__inner',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});

/* ----- Animated counters ----- */
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat__number').forEach(el => counterObserver.observe(el));

/* ----- Testimonial slider ----- */
const cards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('tDots');
const prevBtn = document.getElementById('tPrev');
const nextBtn = document.getElementById('tNext');
const track = document.getElementById('testimonialTrack');

let current = 0;
const perView = window.innerWidth < 768 ? 1 : 2;
const total = Math.ceil(cards.length / perView);

const buildDots = () => {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.className = 't-dot' + (i === current ? ' active' : '');
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  }
};

const goTo = (index) => {
  current = (index + total) % total;
  const offset = current * (100 / perView) * perView;

  track.style.display = 'flex';
  track.style.gap = '24px';
  track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

  const cardWidth = cards[0].getBoundingClientRect().width || track.offsetWidth / perView;
  const gap = 24;
  track.style.transform = `translateX(calc(-${current} * (${cardWidth}px + ${gap}px) * ${perView}))`;

  dotsContainer.querySelectorAll('.t-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
};

const initSlider = () => {
  track.style.display = 'flex';
  track.style.gap = '24px';
  track.style.width = 'max-content';

  cards.forEach(card => {
    card.style.minWidth = perView === 2
      ? `calc(50% - 12px)`
      : `calc(100% - 0px)`;
    card.style.flex = '0 0 auto';
  });

  buildDots();
};

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

initSlider();

let autoSlide = setInterval(() => goTo(current + 1), 5000);

track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => goTo(current + 1), 5000);
});

/* Touch / swipe support */
let touchStartX = 0;
track.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
});

/* ----- Smooth active nav link highlighting ----- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));

/* ----- Contact form ----- */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const validate = (input) => {
  if (!input.value.trim()) {
    input.classList.add('error');
    return false;
  }
  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.classList.add('error');
    return false;
  }
  input.classList.remove('error');
  return true;
};

form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', () => validate(input));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fields = form.querySelectorAll('input[required], textarea[required]');
  let valid = true;
  fields.forEach(f => { if (!validate(f)) valid = false; });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  const btnText = btn.querySelector('.btn-text');
  btnText.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btnText.textContent = 'Send Message';
    btn.disabled = false;
    form.reset();
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }, 1500);
});

/* ----- Parallax orbs on mouse move ----- */
const hero = document.querySelector('.hero');
if (hero) {
  const orbs = hero.querySelectorAll('.hero__orb');
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { width, height } = hero.getBoundingClientRect();
    const xFactor = (clientX / width - 0.5) * 2;
    const yFactor = (clientY / height - 0.5) * 2;

    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 12;
      orb.style.transform = `translate(${xFactor * depth}px, ${yFactor * depth}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    orbs.forEach(orb => {
      orb.style.transform = '';
    });
  });
}

/* ----- Active link styles (CSS inject) ----- */
const style = document.createElement('style');
style.textContent = `
  .nav__links a.active {
    color: var(--text);
  }
  .nav__links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);
