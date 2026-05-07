/* ============================================================
   KLICKRAUSCH — Script
   ============================================================ */

/* ─── LOADER ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('out');
    document.body.classList.remove('loading');
    initReveal();
    initCounters();
  }, 1400);
});

/* ─── NAV SCROLL ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ─── MOBILE BURGER ─── */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});

document.querySelectorAll('.mlink').forEach(l =>
  l.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
  })
);

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const d = parseInt(e.target.dataset.delay) || 0;
      setTimeout(() => e.target.classList.add('in'), d);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
}

/* ─── COUNTERS ─── */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCount(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count').forEach(el => io.observe(el));
}

function animateCount(el) {
  const target = +el.dataset.target;
  const dur    = 1600;
  const start  = performance.now();
  const tick   = now => {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

/* ─── FAQ ACCORDION ─── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer   = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    // close all others
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // toggle clicked
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});

/* ─── SMOOTH ANCHOR SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 72,
      behavior: 'smooth'
    });
  });
});

/* ─── CONTACT FORM ─── */
const kForm    = document.getElementById('kForm');
const kSuccess = document.getElementById('kSuccess');

if (kForm) {
  kForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = kForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Wird gesendet …';
    setTimeout(() => {
      kForm.style.display = 'none';
      kSuccess.classList.add('show');
    }, 1000);
  });
}
