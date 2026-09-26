/**
 * Gusto / Rcs Pasticceria - Main Application Logic
 * 100% Vanilla ES6 JavaScript
 */

(function () {
  'use strict';

  // --- STATE ---
  let currentLang = localStorage.getItem('rcs-lang') || 'it';
  let currentTheme = localStorage.getItem('rcs-theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // --- DOM ELEMENTS ---
  const htmlEl = document.documentElement;
  const siteHeader = document.getElementById('siteHeader');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleBtnMobile = document.getElementById('themeToggleBtnMobile');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langToggleBtnMobile = document.getElementById('langToggleBtnMobile');
  const langIndicator = document.getElementById('langIndicator');
  const langIndicatorMobile = document.getElementById('langIndicatorMobile');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const currentYearEl = document.getElementById('currentYear');

  // --- 1. THEME MANAGEMENT ---
  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      document.querySelectorAll('.sun-icon, .sun-icon-mobile').forEach(el => el.style.display = 'block');
      document.querySelectorAll('.moon-icon, .moon-icon-mobile').forEach(el => el.style.display = 'none');
    } else {
      htmlEl.classList.remove('dark');
      document.querySelectorAll('.sun-icon, .sun-icon-mobile').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.moon-icon, .moon-icon-mobile').forEach(el => el.style.display = 'block');
    }
    localStorage.setItem('rcs-theme', theme);
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // --- 2. REALTIME SCHEDULE & STATUS ---
  function getOpeningStatus() {
    const now = new Date();
    const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, ...
    const scheduleIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    const todaySchedule = SITE_DATA.schedule[scheduleIndex];

    if (!todaySchedule.open || !todaySchedule.close) {
      return { isOpen: false, open: null, close: null, scheduleIndex };
    }

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const [openH, openM] = todaySchedule.open.split(':').map(Number);
    const [closeH, closeM] = todaySchedule.close.split(':').map(Number);
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    return {
      isOpen,
      open: todaySchedule.open,
      close: todaySchedule.close,
      scheduleIndex
    };
  }

  function renderScheduleTable() {
    const tableEl = document.getElementById('scheduleTable');
    if (!tableEl) return;

    const t = SITE_DATA.translations[currentLang].visit;
    const status = getOpeningStatus();

    tableEl.innerHTML = SITE_DATA.schedule.map((day, idx) => {
      const isToday = idx === status.scheduleIndex;
      const dayName = currentLang === 'it' ? day.dayIt : day.dayEn;
      const hoursText = day.open ? `${day.open} – ${day.close}` : t.dayClosed;

      return `
        <div class="schedule-row ${isToday ? 'today' : ''}">
          <span class="schedule-day">${dayName}</span>
          <span class="schedule-hours">${hoursText}</span>
        </div>
      `;
    }).join('');

    // Update Status indicator
    const indicatorEl = document.getElementById('statusIndicator');
    const statusTextEl = document.getElementById('statusText');
    const statusTimeEl = document.getElementById('statusTime');

    if (status.isOpen) {
      indicatorEl.classList.remove('status-closed');
      statusTextEl.textContent = t.openNow;
      statusTimeEl.textContent = `${t.until} ${status.close}`;
      statusTimeEl.style.display = 'inline';
    } else {
      indicatorEl.classList.add('status-closed');
      statusTextEl.textContent = t.closedNow;
      statusTimeEl.style.display = 'none';
    }
  }

  // --- 3. LANGUAGE SWITCH & CONTENT RENDERING ---
  function renderContent() {
    const t = SITE_DATA.translations[currentLang];

    // Language indicators
    const label = currentLang.toUpperCase();
    if (langIndicator) langIndicator.textContent = label;
    if (langIndicatorMobile) langIndicatorMobile.textContent = label;

    // Navbar
    document.getElementById('navTagline').textContent = t.nav.mondo;
    document.getElementById('navLinkExperience').textContent = t.nav.experience;
    document.getElementById('navLinkVetrina').textContent = t.nav.vetrina;
    document.getElementById('navLinkMenu').textContent = t.nav.menu;
    document.getElementById('navLinkVisit').textContent = t.nav.visit;

    document.getElementById('mobileNavExperience').textContent = t.nav.experience;
    document.getElementById('mobileNavVetrina').textContent = t.nav.vetrina;
    document.getElementById('mobileNavMenu').textContent = t.nav.menu;
    document.getElementById('mobileNavVisit').textContent = t.nav.visit;

    // Hero
    document.getElementById('heroTagline').textContent = t.hero.tagline;
    document.getElementById('heroTitle').textContent = t.hero.title;
    document.getElementById('heroSubtitle').textContent = t.hero.subtitle;
    document.getElementById('heroCtaVisitText').textContent = t.hero.ctaVisit;
    document.getElementById('heroCtaMenuText').textContent = t.hero.ctaMenu;

    // Experience
    document.getElementById('expLabel').textContent = t.experience.label;
    document.getElementById('expTitle').textContent = t.experience.title;
    document.getElementById('expIntro').textContent = t.experience.intro;

    t.experience.items.forEach((item, idx) => {
      const kicker = document.getElementById(`expKicker${idx}`);
      const heading = document.getElementById(`expHeading${idx}`);
      const text = document.getElementById(`expText${idx}`);
      if (kicker) kicker.textContent = item.kicker;
      if (heading) heading.textContent = item.title;
      if (text) text.textContent = item.text;
    });

    // Vetrina / Showcase Cards
    document.getElementById('vetrinaLabel').textContent = t.vetrina.label;
    document.getElementById('vetrinaTitle').textContent = t.vetrina.title;
    document.getElementById('vetrinaIntro').textContent = t.vetrina.intro;

    const vetrinaGrid = document.getElementById('vetrinaGrid');
    if (vetrinaGrid) {
      vetrinaGrid.innerHTML = t.vetrina.items.map((item, idx) => `
        <figure class="vetrina-card reveal-item" style="transition-delay: ${(idx % 3) * 0.1}s;">
          <div class="vetrina-img-wrap">
            <img src="${item.image}" alt="${item.name}" class="vetrina-card-img" loading="lazy">
            <div class="vetrina-card-overlay"></div>
            <div class="vetrina-card-content">
              <h3 class="vetrina-card-title">${item.name}</h3>
              <p class="vetrina-card-desc">${item.desc}</p>
            </div>
          </div>
        </figure>
      `).join('');
    }

    // Menu
    document.getElementById('menuLabel').textContent = t.menu.label;
    document.getElementById('menuTitle').textContent = t.menu.title;
    document.getElementById('menuIntro').textContent = t.menu.intro;
    document.getElementById('menuFooterNote').textContent = t.footer.madeWith;

    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
      menuGrid.innerHTML = t.menu.categories.map((cat, idx) => `
        <div class="menu-category-block reveal-item" style="transition-delay: ${(idx % 2) * 0.1}s;">
          <h3 class="menu-category-title">${cat.name}</h3>
          <ul class="menu-items-list">
            ${cat.items.map(item => `
              <li class="menu-item">
                <div class="menu-item-header">
                  <h4 class="menu-item-name">${item.name}</h4>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('');
    }

    // Visit Section
    document.getElementById('visitLabel').textContent = t.visit.label;
    document.getElementById('visitTitle').textContent = t.visit.title;
    document.getElementById('visitSummaryText').textContent = t.visit.summary;
    document.getElementById('visitAddressLabel').textContent = t.visit.addressLabel;
    document.getElementById('visitHoursLabel').textContent = t.visit.hoursLabel;
    document.getElementById('visitContactLabel').textContent = t.visit.contactLabel;
    document.getElementById('visitDirectionsText').textContent = t.visit.directions;

    renderScheduleTable();

    // Footer
    document.getElementById('footerBrandSubtitle').textContent = currentLang === 'it' ? SITE_DATA.info.subtitleIt : SITE_DATA.info.subtitleEn;
    document.getElementById('footerFollowText').textContent = t.footer.follow;
    document.getElementById('footerTagline').textContent = t.footer.tagline;
    document.getElementById('footerCopyright').textContent = `© ${new Date().getFullYear()} Rcs Pasticceria. ${t.footer.rights}`;

    // Re-observe dynamic reveal items
    initScrollReveal();
  }

  function toggleLanguage() {
    const buttons = [langToggleBtn, langToggleBtnMobile];
    buttons.forEach(btn => btn && btn.classList.add('tag-flip'));

    currentLang = currentLang === 'it' ? 'en' : 'it';
    localStorage.setItem('rcs-lang', currentLang);

    setTimeout(() => {
      renderContent();
      buttons.forEach(btn => btn && btn.classList.remove('tag-flip'));
    }, 250);
  }

  // --- 4. STICKY HEADER & SMOOTH SCROLL ---
  function handleScroll() {
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  // --- 5. MOBILE DRAWER TOGGLE ---
  function toggleMobileMenu() {
    const isOpen = mobileDrawer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
  }

  // --- 6. SCROLL REVEAL OBSERVER ---
  let observer;
  function initScrollReveal() {
    if (observer) observer.disconnect();

    const items = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('revealed'));
      return;
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    items.forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });
  }

  // --- 7. INITIALIZATION ---
  function init() {
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    applyTheme(currentTheme);
    renderContent();

    // Event Listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);
    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
    if (langToggleBtnMobile) langToggleBtnMobile.addEventListener('click', toggleLanguage);

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on anchor click
    document.querySelectorAll('.mobile-nav-link, .nav-link, .brand-btn').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    initScrollReveal();

    // Periodically update opening status every minute
    setInterval(renderScheduleTable, 60000);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
