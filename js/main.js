/**
 * PREMIUM DIGITAL MEDIA - JAVASCRIPT CONTROLLER
 * STRICT TWO-COLOR SYSTEM: #790708 & #FFFFFF
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initStatsCounter();
  initCircularGauges();
  initSmoothScroll();
});

/* -------------------------------------------------------------
   1. MOBILE NAVIGATION DRAWER
   ------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* -------------------------------------------------------------
   2. STICKY HEADER SHADOW ON SCROLL
   ------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
      header.style.backgroundColor = '#790708';
    } else {
      header.style.boxShadow = 'none';
      header.style.backgroundColor = '#790708';
    }
  });
}

/* -------------------------------------------------------------
   3. ANIMATED NUMBER COUNTERS
   ------------------------------------------------------------- */
function initStatsCounter() {
  const statElements = [
    { id: 'counter-exp', target: 11, suffix: '' },
    { id: 'stat-calls', target: 18, suffix: 'K+' },
    { id: 'stat-partners', target: 132, suffix: '+' },
    { id: 'stat-clients', target: 73, suffix: '+' },
    { id: 'stat-years', target: 4, suffix: '' }
  ];

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(item => {
          animateValue(item.id, 0, item.target, 1600, item.suffix);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsBar = document.querySelector('.stats-counter-bar');
  if (statsBar) observer.observe(statsBar);

  const expCard = document.getElementById('exp-card');
  if (expCard) observer.observe(expCard);
}

function animateValue(id, start, end, duration, suffix = '') {
  const obj = document.getElementById(id);
  if (!obj) return;

  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeProgress * (end - start) + start);
    
    if (id.startsWith('stat-')) {
      obj.innerHTML = `<span class="num">${current}</span>${suffix}`;
    } else {
      obj.innerText = `${current}${suffix}`;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      if (id.startsWith('stat-')) {
        obj.innerHTML = `<span class="num">${end}</span>${suffix}`;
      } else {
        obj.innerText = `${end}${suffix}`;
      }
    }
  };
  window.requestAnimationFrame(step);
}

/* -------------------------------------------------------------
   4. CIRCULAR TESTIMONIAL GAUGES ANIMATION
   ------------------------------------------------------------- */
function initCircularGauges() {
  const gaugesSection = document.getElementById('testimonials');
  if (!gaugesSection) return;

  let animated = false;
  const circumference = 2 * Math.PI * 58; // ~364.42

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        
        // 95% Gauge
        const bar1 = document.getElementById('gauge-bar-1');
        const val1 = document.getElementById('gauge-val-1');
        if (bar1 && val1) {
          const offset1 = circumference - (0.95 * circumference);
          bar1.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)';
          bar1.style.strokeDashoffset = offset1;
          animatePercentCounter(val1, 0, 95, 2000);
        }

        // 80% Gauge
        const bar2 = document.getElementById('gauge-bar-2');
        const val2 = document.getElementById('gauge-val-2');
        if (bar2 && val2) {
          const offset2 = circumference - (0.80 * circumference);
          bar2.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)';
          bar2.style.strokeDashoffset = offset2;
          animatePercentCounter(val2, 0, 80, 2000);
        }
      }
    });
  }, { threshold: 0.3 });

  observer.observe(gaugesSection);
}

function animatePercentCounter(el, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeProgress * (end - start) + start);
    el.innerText = `${current}%`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.innerText = `${end}%`;
    }
  };
  window.requestAnimationFrame(step);
}

/* -------------------------------------------------------------
   5. MODAL BOOKING DIALOG HANDLERS
   ------------------------------------------------------------- */
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-name').value;
  const email = document.getElementById('modal-email').value;
  const vertical = document.getElementById('modal-vertical').value;

  closeBookingModal();
  showToast(`Thank you, ${name}! Your strategy session for ${vertical.toUpperCase()} leads has been requested. We will contact you at ${email}.`);
  document.getElementById('strategy-booking-form').reset();
}

function handleHeroSubmit() {
  const emailInput = document.getElementById('hero-email-input');
  if (!emailInput || !emailInput.value) return;

  const email = emailInput.value;
  showToast(`Success! Priority test leads info sent to ${email}. Our account director will reach out shortly.`);
  emailInput.value = '';
}

/* -------------------------------------------------------------
   6. TOAST NOTIFICATION UTILITY
   ------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #ffffff; font-size: 1.2rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* -------------------------------------------------------------
   7. SMOOTH SCROLL FOR ALL INTERNAL LINKS
   ------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#privacy' || targetId === '#terms') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
