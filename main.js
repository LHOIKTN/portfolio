gsap.registerPlugin(ScrollTrigger);

/* ===== Hero: 글자별 등장 + 배경·글로우 연출 ===== */
function initHero() {
  const nameEl = document.querySelector('.hero-name');
  if (!nameEl) return;

  const text = nameEl.textContent.trim();
  nameEl.innerHTML = '';
  nameEl.setAttribute('aria-label', text);

  const chars = text.split('');
  chars.forEach((ch) => {
    if (ch === ' ') {
      const span = document.createElement('span');
      span.className = 'char-space';
      span.setAttribute('aria-hidden', 'true');
      nameEl.appendChild(span);
      return;
    }
    const wrap = document.createElement('span');
    wrap.className = 'char';
    wrap.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.className = 'char-inner';
    inner.textContent = ch;
    wrap.appendChild(inner);
    nameEl.appendChild(wrap);
  });

  const charInners = nameEl.querySelectorAll('.char-inner');
  const subtitleEl = document.querySelector('[data-hero-subtitle]');
  gsap.set(charInners, { yPercent: 120, opacity: 0 });
  if (subtitleEl) gsap.set(subtitleEl, { opacity: 0, y: 10 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to(charInners, {
    yPercent: 0,
    opacity: 1,
    duration: 0.9,
    stagger: { amount: 0.6, from: 'start' },
    delay: 0.2,
  }).to(
    nameEl,
    {
      textShadow: '0 0 40px rgba(0, 212, 170, 0.4), 0 0 80px rgba(0, 212, 170, 0.2)',
      duration: 1.2,
      ease: 'power2.inOut',
    },
    '-=0.5'
  );
  if (subtitleEl) tl.to(subtitleEl, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  gsap.to('.hero-gradient', {
    scale: 1.15,
    opacity: 0.7,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1,
  });

  gsap.to(nameEl, {
    textShadow: '0 0 30px rgba(0, 212, 170, 0.3), 0 0 60px rgba(0, 212, 170, 0.15)',
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 2,
  });
}

/* ===== Magnetic buttons (subtle follow) ===== */
function initMagnetic() {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

/* ===== Military 섹션: 타이틀 글자별 + 이미지 클립/스케일 연출 ===== */
function initMilitary() {
  const titleEl = document.querySelector('.military-title-inner');
  if (!titleEl) return;

  const text = titleEl.textContent.trim();
  titleEl.innerHTML = '';
  text.split('').forEach((ch) => {
    const span = document.createElement('span');
    span.className = 'military-char';
    span.textContent = ch;
    span.style.display = ch === ' ' ? 'inline' : 'inline-block';
    titleEl.appendChild(span);
  });

  const chars = titleEl.querySelectorAll('.military-char');
  gsap.set(chars, { y: 60, opacity: 0 });

  ScrollTrigger.create({
    trigger: '.military',
    start: 'top 75%',
    onEnter: () => {
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.04,
        ease: 'power3.out',
      });
    },
  });

  const imgWrap = document.querySelector('[data-military-img]');
  const imgFrame = document.querySelector('.military-img-frame');
  if (imgWrap && imgFrame) {
    gsap.set(imgFrame, { scale: 0.85, opacity: 0, filter: 'blur(12px)' });
    ScrollTrigger.create({
      trigger: imgWrap,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(imgFrame, {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
        });
      },
    });

    gsap.to(imgFrame, {
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(0, 212, 170, 0.08)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2,
    });
  }
}

/* ===== Hardwork 섹션: 전역 후 노가다 타이틀 + 이미지 연출 ===== */
function initHardwork() {
  const titleEl = document.querySelector('.hardwork-title-inner');
  if (!titleEl) return;

  const text = titleEl.textContent.trim();
  titleEl.innerHTML = '';
  text.split('').forEach((ch) => {
    const span = document.createElement('span');
    span.className = 'hardwork-char';
    span.textContent = ch;
    span.style.display = ch === ' ' ? 'inline' : 'inline-block';
    titleEl.appendChild(span);
  });

  const chars = titleEl.querySelectorAll('.hardwork-char');
  gsap.set(chars, { y: 60, opacity: 0 });

  ScrollTrigger.create({
    trigger: '.hardwork',
    start: 'top 75%',
    onEnter: () => {
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.04,
        ease: 'power3.out',
      });
    },
  });

  const imgWrap = document.querySelector('[data-hardwork-img]');
  const imgFrame = document.querySelector('.hardwork-img-frame');
  if (imgWrap && imgFrame) {
    gsap.set(imgFrame, { scale: 0.85, opacity: 0, filter: 'blur(12px)' });
    ScrollTrigger.create({
      trigger: imgWrap,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(imgFrame, {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
        });
      },
    });

    gsap.to(imgFrame, {
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(0, 212, 170, 0.08)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2,
    });
  }
}

/* ===== Study 섹션: 수능공부 타이틀 + 이미지 연출 ===== */
function initStudy() {
  const titleEl = document.querySelector('.study-title-inner');
  if (!titleEl) return;

  const text = titleEl.textContent.trim();
  titleEl.innerHTML = '';
  text.split('').forEach((ch) => {
    const span = document.createElement('span');
    span.className = 'study-char';
    span.textContent = ch;
    span.style.display = ch === ' ' ? 'inline' : 'inline-block';
    titleEl.appendChild(span);
  });

  const chars = titleEl.querySelectorAll('.study-char');
  gsap.set(chars, { y: 60, opacity: 0 });

  ScrollTrigger.create({
    trigger: '.study',
    start: 'top 75%',
    onEnter: () => {
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.04,
        ease: 'power3.out',
      });
    },
  });

  const imgWrap = document.querySelector('[data-study-img]');
  const imgFrame = document.querySelector('.study-img-frame');
  if (imgWrap && imgFrame) {
    gsap.set(imgFrame, { scale: 0.85, opacity: 0, filter: 'blur(12px)' });
    ScrollTrigger.create({
      trigger: imgWrap,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(imgFrame, {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
        });
      },
    });

    gsap.to(imgFrame, {
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(0, 212, 170, 0.08)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2,
    });
  }
}

/* ===== Tech Edu 섹션: 중앙 기술교육 + 주변 5개 기술 배치 연출 ===== */
function initTechEdu() {
  const center = document.querySelector('[data-tech-center]');
  const items = document.querySelectorAll('[data-tech-item]');
  if (!center || !items.length) return;

  gsap.set(center, { scale: 0.3, opacity: 0 });
  gsap.set(items, { scale: 0, opacity: 0 });

  ScrollTrigger.create({
    trigger: '.zoom-sequence-wrap',
    start: 'top 75%',
    onEnter: () => {
      gsap.to(center, {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'back.out(1.2)',
      });
      gsap.to(items, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: 'back.out(1.4)',
      });
    },
  });
}

/* ===== 5번: 줌인만 — 기술교육 → 통신기술 → C언어,컴퓨터개론 → 컴퓨터교육 ===== */
function initZoomSequence() {
  const wrap = document.querySelector('.zoom-sequence-wrap');
  const step1 = document.querySelector('[data-zoom-step="1"]');
  const step2 = document.querySelector('[data-zoom-step="2"]');
  const step3 = document.querySelector('[data-zoom-step="3"]');
  const step4 = document.querySelector('[data-zoom-step="4"]');

  if (!wrap || !step1) return;

  gsap.set(step1, { opacity: 1, scale: 0.7 });
  gsap.set([step2, step3, step4], { opacity: 0, scale: 0.7 });

  ScrollTrigger.create({
    trigger: wrap,
    start: 'top top',
    end: '+=300%',
    pin: true,
  });

  ScrollTrigger.create({
    trigger: wrap,
    start: 'top top',
    end: '+=300%',
    onUpdate: (self) => {
      const p = self.progress;
      const q = (i) => Math.max(0, Math.min(1, (p - i * 0.25) / 0.25)); // 0~1 within segment i
      // 각 구간에서 해당 스텝만 0.7 → 1 줌인
      if (p <= 0.25) {
        gsap.set(step1, { opacity: 1, scale: 0.7 + 0.3 * q(0) });
        gsap.set([step2, step3, step4], { opacity: 0, scale: 0.7 });
      } else if (p <= 0.5) {
        gsap.set(step1, { opacity: 0 });
        gsap.set(step2, { opacity: 1, scale: 0.7 + 0.3 * q(1) });
        gsap.set([step3, step4], { opacity: 0, scale: 0.7 });
      } else if (p <= 0.75) {
        gsap.set([step1, step2], { opacity: 0 });
        gsap.set(step3, { opacity: 1, scale: 0.7 + 0.3 * q(2) });
        gsap.set(step4, { opacity: 0, scale: 0.7 });
      } else {
        gsap.set([step1, step2, step3], { opacity: 0 });
        gsap.set(step4, { opacity: 1, scale: 0.7 + 0.3 * q(3) });
      }
    },
  });
}

/* ===== Section reveals (ScrollTrigger) ===== */
function initSectionReveals() {
  const sections = [
    { num: '[data-military-num]' },
    { num: '[data-hardwork-num]' },
    { num: '[data-study-num]' },
    { num: '[data-tech-edu-num]' },
    { quote: '[data-quote-text]' },
    { num: '[data-first-job-num]', title: '[data-first-job-title]', tags: '[data-first-job-tags]', logos: '[data-first-job-logos]' },
    { num: '[data-second-job-num]', title: '[data-second-job-title]', text: '[data-second-job-subtitle]', tags: '[data-second-job-tags]', logos: '[data-second-job-logos]' },
    { num: '[data-third-job-num]', title: '[data-third-job-title]', text: '[data-third-job-subtitle]', tags: '[data-third-job-tags]' },
    { num: '[data-school-num]', title: '[data-school-title]', text: '[data-school-desc]' },
    { num: '[data-idea-num]', title: '[data-idea-title]', text: '[data-idea-desc]' },
    { num: '[data-data-num]', title: '[data-data-title]', text: '[data-data-desc]' },
    { num: '[data-middle-school-num]', title: '[data-middle-school-title]' },
  ];

  sections.forEach((section) => {
    if (section.quote) {
      gsap.from(section.quote, {
        scrollTrigger: { trigger: '.section-quote', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      return;
    }
    const selectors = [section.num, section.title].filter(Boolean);
    if (!selectors.length) return;
    gsap.from(selectors, {
      scrollTrigger: {
        trigger: selectors[0],
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });

    if (section.text) {
      gsap.from(section.text, {
        scrollTrigger: { trigger: section.text, start: 'top 88%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
      });
    }
    if (section.skills) {
      gsap.from(section.skills + ' span', {
        scrollTrigger: { trigger: section.skills, start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        delay: 0.3,
        ease: 'power2.out',
      });
    }
    if (section.tags) {
      gsap.from(section.tags + ' span, ' + section.tags + ' .first-job-tag-link, ' + section.tags + ' .second-job-tag-link', {
        scrollTrigger: { trigger: section.tags, start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out',
      });
    }
    if (section.logos) {
      gsap.from(section.logos, {
        scrollTrigger: { trigger: section.logos, start: 'top 88%' },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.35,
        ease: 'power2.out',
      });
    }
    if (section.items) {
      gsap.from(section.items, {
        scrollTrigger: { trigger: section.items, start: 'top 88%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
    if (section.links) {
      gsap.from(section.links + ' a', {
        scrollTrigger: { trigger: section.links, start: 'top 88%' },
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out',
      });
    }
  });
}

/* ===== Parallax hero background ===== */
function initParallax() {
  gsap.to('.hero-gradient', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
    y: -100,
    opacity: 0.3,
  });

  gsap.to('.hero-grid', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
    y: -50,
    opacity: 0.5,
  });
}

/* ===== Smooth header on scroll ===== */
function initHeader() {
  gsap.to('.header', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: '200px top',
      scrub: true,
    },
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  });
}

/* ===== Work items hover scale (GSAP) ===== */
function initWorkHover() {
  document.querySelectorAll('.work-link').forEach((link) => {
    const img = link.querySelector('.work-img');
    link.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.out' });
    });
  });
}

/* ===== 11번: 창의아이디어 대회 이미지 슬라이더 ===== */
function initIdeaSlider() {
  const wrap = document.querySelector('[data-idea-slider]');
  const track = document.querySelector('.idea-slider-track');
  const dotsEl = document.querySelector('[data-idea-dots]');
  const slides = document.querySelectorAll('.idea-slide');
  if (!wrap || !track || !slides.length) return;

  const total = slides.length;
  let current = 0;

  slides.forEach((el, i) => {
    el.style.position = 'absolute';
    el.style.left = '0';
    el.style.top = '0';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.objectFit = 'contain';
    gsap.set(el, { opacity: i === 0 ? 1 : 0 });
  });

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}번 슬라이드`);
    dot.className = 'idea-dot' + (i === 0 ? ' is-active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  }

  function goTo(index) {
    const prev = current;
    current = (index + total) % total;
    gsap.to(slides[prev], { opacity: 0, duration: 0.4, ease: 'power2.out' });
    gsap.to(slides[current], { opacity: 1, duration: 0.4, ease: 'power2.out' });
    dotsEl.querySelectorAll('.idea-dot').forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  let interval = setInterval(() => goTo(current + 1), 4000);

  wrap.addEventListener('mouseenter', () => clearInterval(interval));
  wrap.addEventListener('mouseleave', () => { interval = setInterval(() => goTo(current + 1), 4000); });
}

/* ===== 12번: 데이터 경진대회 이미지 슬라이더 ===== */
function initDataSlider() {
  const wrap = document.querySelector('[data-data-slider]');
  const dotsEl = document.querySelector('[data-data-dots]');
  const slides = document.querySelectorAll('.data-slide');
  if (!wrap || !slides.length) return;

  const total = slides.length;
  let current = 0;

  slides.forEach((el, i) => {
    el.style.position = 'absolute';
    el.style.left = '0';
    el.style.top = '0';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.objectFit = 'contain';
    gsap.set(el, { opacity: i === 0 ? 1 : 0 });
  });

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}번 슬라이드`);
    dot.className = 'data-dot' + (i === 0 ? ' is-active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  }

  function goTo(index) {
    const prev = current;
    current = (index + total) % total;
    gsap.to(slides[prev], { opacity: 0, duration: 0.4, ease: 'power2.out' });
    gsap.to(slides[current], { opacity: 1, duration: 0.4, ease: 'power2.out' });
    dotsEl.querySelectorAll('.data-dot').forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  let interval = setInterval(() => goTo(current + 1), 4000);
  wrap.addEventListener('mouseenter', () => clearInterval(interval));
  wrap.addEventListener('mouseleave', () => { interval = setInterval(() => goTo(current + 1), 4000); });
}

/* ===== Init ===== */
function init() {
  initHero();
  initMagnetic();
  initMilitary();
  initHardwork();
  initStudy();
  initTechEdu();
  initZoomSequence();
  initSectionReveals();
  initIdeaSlider();
  initDataSlider();
  initParallax();
  initHeader();
  initWorkHover();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
