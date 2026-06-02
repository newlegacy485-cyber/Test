const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = [...document.querySelectorAll('.nav__links a, .nav__cta')];

const setScrolledNav = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 12);
};

window.addEventListener('scroll', setScrolledNav, { passive: true });
setScrolledNav();

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
);

document
  .querySelectorAll('.positioning-card, .split, .service-card, .work-card, .transformation, .drops__panel, .timeline article, .testimonials, .faq-grid article, .cinematic-cta, .waitlist')
  .forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);
      const startedAt = performance.now();
      const duration = 1300;

      const tick = now => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter));

const sections = [...document.querySelectorAll('main section[id]')];
const primaryLinks = [...document.querySelectorAll('.nav__links a')];

const activeSectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      primaryLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
);

sections.forEach(section => activeSectionObserver.observe(section));

const quoteCards = [...document.querySelectorAll('.quote-card')];
const quotePrev = document.getElementById('quotePrev');
const quoteNext = document.getElementById('quoteNext');
let quoteIndex = 0;

const showQuote = index => {
  quoteIndex = (index + quoteCards.length) % quoteCards.length;
  quoteCards.forEach((card, cardIndex) => {
    card.classList.toggle('is-active', cardIndex === quoteIndex);
  });
};

quotePrev.addEventListener('click', () => showQuote(quoteIndex - 1));
quoteNext.addEventListener('click', () => showQuote(quoteIndex + 1));

let quoteTimer = setInterval(() => showQuote(quoteIndex + 1), 6000);
document.getElementById('quoteSlider').addEventListener('mouseenter', () => clearInterval(quoteTimer));
document.getElementById('quoteSlider').addEventListener('mouseleave', () => {
  quoteTimer = setInterval(() => showQuote(quoteIndex + 1), 6000);
});

const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

const validateField = field => {
  const value = field.value.trim();
  const isEmail = field.type === 'email';
  const isValid = Boolean(value) && (!isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  field.classList.toggle('field-error', !isValid);
  field.setAttribute('aria-invalid', String(!isValid));
  field.closest('label')?.classList.toggle('has-error', !isValid);
  return isValid;
};

bookingForm.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('input', () => validateField(field));
  field.addEventListener('change', () => validateField(field));
});

bookingForm.addEventListener('submit', event => {
  event.preventDefault();

  const fields = [...bookingForm.querySelectorAll('input, select, textarea')];
  const isValid = fields.map(validateField).every(Boolean);

  if (!isValid) {
    formNote.textContent = 'Please complete every field with a valid email so Parker has enough context.';
    formNote.classList.remove('is-success');
    formNote.classList.add('is-error');
    return;
  }

  const submitButton = bookingForm.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button__text');
  submitButton.disabled = true;
  buttonText.textContent = 'Adding you to the list...';

  setTimeout(() => {
    bookingForm.reset();
    submitButton.disabled = false;
    buttonText.textContent = 'Submit waitlist request';
    formNote.textContent = 'You are on the list. Parker can now review the project lane, story, and budget context.';
    formNote.classList.remove('is-error');
    formNote.classList.add('is-success');
  }, 800);
});
