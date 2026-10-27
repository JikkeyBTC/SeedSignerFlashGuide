// JikKey SeedSigner Guide — step rail, copy, version, lightbox
(() => {
  const DEFAULT_VERSION = '0.8.7';
  const STORE_KEY = 'jikkey-guide-version';

  /* ---------- Version-aware file names & commands ---------- */
  const readVersion = () => {
    try { return localStorage.getItem(STORE_KEY) || DEFAULT_VERSION; } catch { return DEFAULT_VERSION; }
  };
  const saveVersion = (v) => {
    try { localStorage.setItem(STORE_KEY, v); } catch { /* storage unavailable */ }
  };
  const applyVersion = (v) => {
    const version = (v || '').trim() || DEFAULT_VERSION;
    document.querySelectorAll('[data-version-text]').forEach((el) => {
      el.textContent = el.dataset.versionText.replaceAll('{v}', version);
    });
  };

  const input = document.getElementById('version');
  const initial = readVersion();
  if (input) {
    input.value = initial;
    input.addEventListener('input', () => {
      const v = input.value.replace(/[^0-9.]/g, '');
      if (v !== input.value) input.value = v;
      applyVersion(v);
      if (/^\d+\.\d+\.\d+$/.test(v)) saveVersion(v);
    });
  }
  applyVersion(initial);

  /* ---------- Copy buttons ---------- */
  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    if (!ok) throw new Error('copy failed');
  };

  document.querySelectorAll('[data-copy]').forEach((button) => {
    const label = button.textContent;
    button.addEventListener('click', async () => {
      const host = button.closest('.terminal, .copy-row');
      const code = host && host.querySelector('code');
      if (!code) return;
      try {
        await copyText(code.textContent.trim());
        button.textContent = '복사됨';
        button.classList.add('copied');
      } catch {
        button.textContent = '복사 실패';
      }
      setTimeout(() => { button.textContent = label; button.classList.remove('copied'); }, 1800);
    });
  });

  /* ---------- Step rail scrollspy ---------- */
  const links = Array.from(document.querySelectorAll('.step-rail a[data-target]'));
  const sections = links.map((a) => document.getElementById(a.dataset.target)).filter(Boolean);
  const setActive = (id) => {
    links.forEach((link) => {
      const on = link.dataset.target === id;
      link.classList.toggle('active', on);
      if (on) {
        link.setAttribute('aria-current', 'step');
        const rail = link.closest('ol');
        if (rail && rail.scrollWidth > rail.clientWidth) {
          rail.scrollTo({ left: link.offsetLeft - 20, behavior: 'smooth' });
        }
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  if (sections.length) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.3;
      let current = sections[0].id;
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top - line <= 0) current = sec.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = sections[sections.length - 1].id;
      const firstTop = sections[0].getBoundingClientRect().top;
      if (firstTop - line > 0) {
        links.forEach((l) => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
        return;
      }
      setActive(current);
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Lightbox ---------- */
  const box = document.querySelector('.lightbox');
  if (box && typeof box.showModal === 'function') {
    const big = box.querySelector('img');
    document.querySelectorAll('.shot img, .gallery img').forEach((img) => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `${img.alt} — 크게 보기`);
      const open = () => {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        box.showModal();
      };
      img.addEventListener('click', open);
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });
    box.addEventListener('click', () => box.close());
  }
})();
