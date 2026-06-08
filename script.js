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
  .querySelectorAll('.trust-strip article, .service-card, .split, .estimate__panel, .timeline article, .reviews, .faq-grid article, .quote')
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
      const isDecimal = !Number.isInteger(target);
      const startedAt = performance.now();
      const duration = 1300;

      const tick = now => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        counter.textContent = isDecimal ? value.toFixed(1) : Math.round(value);

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

const reviewCards = [...document.querySelectorAll('.review-card')];
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
let reviewIndex = 0;

const showReview = index => {
  reviewIndex = (index + reviewCards.length) % reviewCards.length;
  reviewCards.forEach((card, cardIndex) => {
    card.classList.toggle('is-active', cardIndex === reviewIndex);
  });
};

reviewPrev.addEventListener('click', () => showReview(reviewIndex - 1));
reviewNext.addEventListener('click', () => showReview(reviewIndex + 1));

let reviewTimer = setInterval(() => showReview(reviewIndex + 1), 6500);
document.getElementById('reviewSlider').addEventListener('mouseenter', () => clearInterval(reviewTimer));
document.getElementById('reviewSlider').addEventListener('mouseleave', () => {
  reviewTimer = setInterval(() => showReview(reviewIndex + 1), 6500);
});

const estimateCopy = {
  home: {
    small: {
      title: 'Book a walkthrough for a routine home refresh.',
      body: 'Share rooms, bathrooms, pets, and priority areas so Roman\'s can confirm timing and price.',
    },
    medium: {
      title: 'Plan a recurring clean with a clear room-by-room scope.',
      body: 'A walkthrough helps align kitchens, baths, floors, and high-touch surfaces before the first visit.',
    },
    large: {
      title: 'Start with a detailed walkthrough before choosing a schedule.',
      body: 'Larger homes benefit from priority zones, timing expectations, and a maintenance rhythm.',
    },
  },
  deep: {
    small: {
      title: 'Use a deep clean to reset bathrooms, kitchen, and floors.',
      body: 'Mention any built-up grime, move-in timing, or exact areas that need extra attention.',
    },
    medium: {
      title: 'Request an initial deep clean before recurring upkeep.',
      body: 'Roman\'s can confirm where detail work matters most and what should be maintained later.',
    },
    large: {
      title: 'Schedule a walkthrough to prioritize deep-clean zones.',
      body: 'For larger spaces, list must-do areas first so the team can shape the best service plan.',
    },
  },
  business: {
    small: {
      title: 'Discuss commercial cleaning for client-facing rooms.',
      body: 'Share hours, restrooms, floors, and areas that need to stay polished between visits.',
    },
    medium: {
      title: 'Map out a business cleaning rhythm that fits traffic.',
      body: 'After-hours or recurring care can keep workspaces ready without interrupting daily operations.',
    },
    large: {
      title: 'Request a commercial walkthrough for a custom scope.',
      body: 'Larger locations need room lists, access details, supply expectations, and preferred timing.',
    },
  },
};

let selectedService = 'home';
let selectedSize = 'small';
const estimateResult = document.getElementById('estimateResult');

const updateEstimate = () => {
  const copy = estimateCopy[selectedService][selectedSize];
  estimateResult.querySelector('strong').textContent = copy.title;
  estimateResult.querySelector('p').textContent = copy.body;
};

document.querySelectorAll('[data-estimate-service]').forEach(button => {
  button.addEventListener('click', () => {
    selectedService = button.dataset.estimateService;
    document.querySelectorAll('[data-estimate-service]').forEach(chip => {
      chip.classList.toggle('is-active', chip === button);
    });
    updateEstimate();
  });
});

document.querySelectorAll('[data-estimate-size]').forEach(button => {
  button.addEventListener('click', () => {
    selectedSize = button.dataset.estimateSize;
    document.querySelectorAll('[data-estimate-size]').forEach(chip => {
      chip.classList.toggle('is-active', chip === button);
    });
    updateEstimate();
  });
});

const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

const validateField = field => {
  const value = field.value.trim();
  const isContact = field.name === 'contact';
  const hasReachableContact = !isContact || /(^[^\s@]+@[^\s@]+\.[^\s@]+$)|(\d[\d\s().-]{6,}\d)/.test(value);
  const isValid = Boolean(value) && hasReachableContact;
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
    formNote.textContent = 'Please complete every field and include a valid phone number or email.';
    formNote.classList.remove('is-success');
    formNote.classList.add('is-error');
    return;
  }

  const submitButton = bookingForm.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button__text');
  submitButton.disabled = true;
  buttonText.textContent = 'Sending request...';

  setTimeout(() => {
    bookingForm.reset();
    submitButton.disabled = false;
    buttonText.textContent = 'Send quote request';
    formNote.textContent = 'Request received. Roman\'s Cleaning Service has the details needed to follow up.';
    formNote.classList.remove('is-error');
    formNote.classList.add('is-success');
  }, 800);
});
