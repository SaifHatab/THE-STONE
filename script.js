// ============================================================
// STONE SECURITY — shared site behavior
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  /* ---------- highlight active nav link ---------- */
  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('nav.main-nav a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- ops clock (24hr coverage dial, signature hero element) ---------- */
  const clock = document.querySelector('.ops-clock');
  if (clock) {
    const svg = clock.querySelector('svg');
    const cx = 170, cy = 170, rOuter = 150, rInner = 132;
    const now = new Date();
    const hour = now.getHours() + now.getMinutes() / 60;

    // 24 ticks, one per hour
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
      const x1 = cx + rInner * Math.cos(angle);
      const y1 = cy + rInner * Math.sin(angle);
      const x2 = cx + rOuter * Math.cos(angle);
      const y2 = cy + rOuter * Math.sin(angle);
      const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tick.setAttribute('x1', x1); tick.setAttribute('y1', y1);
      tick.setAttribute('x2', x2); tick.setAttribute('y2', y2);
      tick.classList.add('tick');
      if (i <= Math.floor(hour)) tick.classList.add('lit');
      svg.appendChild(tick);
    }

    // sweep hand showing current hour
    const sweep = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    sweep.setAttribute('x1', cx); sweep.setAttribute('y1', cy);
    sweep.setAttribute('x2', cx); sweep.setAttribute('y2', cy - rInner + 10);
    sweep.classList.add('sweep');
    sweep.setAttribute('transform', `rotate(${(hour / 24) * 360} ${cx} ${cy})`);
    svg.appendChild(sweep);

    const valueEl = clock.querySelector('.core-value');
    if (valueEl) {
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      valueEl.textContent = `${hh}:${mm}`;
      setInterval(() => {
        const n = new Date();
        valueEl.textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
      }, 15000);
    }
  }

  /* ---------- animated ops-bar counters ---------- */
  document.querySelectorAll('.ops-stat .num[data-target]').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const step = Math.max(1, Math.round(target / 60));
    const tick = () => {
      current += step;
      if (current >= target) {
        el.textContent = target + suffix;
      } else {
        el.textContent = current + suffix;
        requestAnimationFrame(tick);
      }
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { tick(); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(el);
  });

  /* ---------- testimonial carousel ---------- */
  const track = document.querySelector('.testi-track');
  if (track) {
    const slides = track.querySelectorAll('.testi-slide');
    const dotsWrap = document.querySelector('.testi-controls');
    let idx = 0;
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', STONE_I18N.t('testimonials.dotLabel', { n: i + 1 }));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('.testi-dot');
    document.addEventListener('stone:langchange', () => {
      dots.forEach((d, i) => d.setAttribute('aria-label', STONE_I18N.t('testimonials.dotLabel', { n: i + 1 })));
    });
    function goTo(i) {
      idx = i;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === idx));
    }
    let auto = setInterval(() => goTo((idx + 1) % slides.length), 6000);
    track.closest('.testi-viewport').addEventListener('mouseenter', () => clearInterval(auto));
    track.closest('.testi-viewport').addEventListener('mouseleave', () => {
      auto = setInterval(() => goTo((idx + 1) % slides.length), 6000);
    });
  }

  /* ---------- gallery lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbIcon = lightbox.querySelector('svg');
    const lbCaption = lightbox.querySelector('.lightbox-caption');
    document.querySelectorAll('.gallery-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const svgHTML = tile.querySelector('svg').outerHTML;
        lbIcon.outerHTML = svgHTML;
        lbCaption.textContent = tile.querySelector('.cap').textContent;
        lightbox.classList.add('open');
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  /* ---------- contact form validation (client-side demo only) ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    const msg = form.querySelector('.form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        msg.textContent = STONE_I18N.t('contact.formFillFields');
        msg.className = 'form-msg show err';
        return;
      }
      if (!emailOk) {
        msg.textContent = STONE_I18N.t('contact.formBadEmail');
        msg.className = 'form-msg show err';
        return;
      }
      msg.textContent = STONE_I18N.t('contact.formSuccess');
      msg.className = 'form-msg show ok';
      form.reset();
    });
  }

  /* ---------- footer year ---------- */
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
