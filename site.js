// Inject the shared header + footer, mark active link, render Lucide icons, wire mobile menu.
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'workshops.html', label: 'Workshops' },
    { href: 'founders.html', label: 'Founders' },
    { href: 'contact.html', label: 'Get Involved' },
  ];

  const navItems = links.map(l => `
    <a href="${l.href}" class="nav-link ${l.href === path ? 'active' : ''}"
       style="border-radius:6px;padding:8px 16px;font-size:14px;font-weight:500;color:var(--foreground);opacity:.85;transition:background .2s,color .2s;">
      ${l.label}
    </a>`).join('');

  const navItemsMobile = links.map(l => `
    <a href="${l.href}" class="nav-link ${l.href === path ? 'active' : ''}"
       style="display:block;border-radius:6px;padding:10px 12px;font-size:14px;font-weight:500;color:var(--foreground);">
      ${l.label}
    </a>`).join('');

  const header = `
  <header style="position:sticky;top:0;z-index:50;border-bottom:1px solid var(--border);background:rgba(255,255,255,.85);backdrop-filter:blur(12px);">
    <div class="container" style="display:flex;height:64px;align-items:center;justify-content:space-between;padding:0 16px;max-width:1200px;margin:0 auto;">
      <a href="index.html" style="display:flex;align-items:center;gap:8px;font-weight:700;color:var(--primary);">
        <img src="assets/kfc-logo.png" alt="Khalsa Financial Care logo" style="height:40px;width:40px;object-fit:contain;" />
        <span style="font-size:18px;letter-spacing:-.01em;">Khalsa Financial Care</span>
      </a>
      <nav class="nav-desktop" style="display:none;align-items:center;gap:4px;">
        ${navItems}
      </nav>
      <button id="navToggle" aria-label="Menu" class="nav-toggle"
        style="background:none;border:none;color:var(--foreground);">
        <i data-lucide="menu" style="width:24px;height:24px;"></i>
      </button>
    </div>
    <nav id="navMobile" class="nav-mobile" style="border-top:1px solid var(--border);background:var(--background);">
      <div style="display:flex;flex-direction:column;gap:4px;padding:12px 16px;max-width:1200px;margin:0 auto;">
        ${navItemsMobile}
      </div>
    </nav>
  </header>`;

  const footer = `
  <footer style="border-top:1px solid var(--border);background:var(--primary);color:var(--primary-foreground);">
    <div style="max-width:1200px;margin:0 auto;padding:56px 16px;display:grid;gap:40px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
      <div style="grid-column:span 2;min-width:260px;">
        <div style="display:flex;align-items:center;gap:8px;font-weight:700;">
          <img src="assets/kfc-logo.png" alt="Khalsa Financial Care logo" style="height:40px;width:40px;object-fit:contain;" />
          <span style="font-size:18px;">Khalsa Financial Care</span>
        </div>
        <p style="margin-top:16px;max-width:420px;font-size:14px;color:rgba(255,255,255,.75);">
          A nonprofit empowering new Punjabi immigrants with the financial knowledge and tools they need to thrive in America — through workshops, resources, and one-on-one guidance.
        </p>
      </div>
      <div>
        <h4 style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.6);margin:0;">Organization</h4>
        <ul style="margin:16px 0 0;padding:0;list-style:none;font-size:14px;display:grid;gap:8px;">
          <li><a href="about.html">About</a></li>
          <li><a href="workshops.html">Workshops</a></li>
          <li><a href="founders.html">Founders</a></li>
          <li><a href="contact.html">Get Involved</a></li>
        </ul>
      </div>
      <div>
        <h4 style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.6);margin:0;">Contact</h4>
        <ul style="margin:16px 0 0;padding:0;list-style:none;font-size:14px;display:grid;gap:12px;">
          <li style="display:flex;align-items:center;gap:8px;"><i data-lucide="mail" style="width:16px;height:16px;"></i><a href="mailto:khalsafinancialcare@gmail.com" style="word-break:break-all;">khalsafinancialcare@gmail.com</a></li>
          <li style="display:flex;align-items:center;gap:8px;"><i data-lucide="map-pin" style="width:16px;height:16px;"></i> New Jersey, USA</li>
        </ul>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,.15);">
      <div style="max-width:1200px;margin:0 auto;padding:20px 16px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:rgba(255,255,255,.6);">
        <p style="margin:0;">© ${new Date().getFullYear()} Khalsa Financial Care. All rights reserved.</p>
        <p style="margin:0;">Empowering immigrants through financial literacy.</p>
      </div>
    </div>
  </footer>`;

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = header;
  if (footerEl) footerEl.innerHTML = footer;

  // Responsive nav: show desktop nav at >=768px
  const mq = window.matchMedia('(min-width: 768px)');
  const apply = () => {
    const desk = document.querySelector('.nav-desktop');
    const tog = document.querySelector('.nav-toggle');
    if (desk) desk.style.display = mq.matches ? 'flex' : 'none';
    if (tog) tog.style.display = mq.matches ? 'none' : 'inline-flex';
  };
  mq.addEventListener('change', apply);
  apply();

  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('open');
      const open = mobile.classList.contains('open');
      toggle.innerHTML = open
        ? '<i data-lucide="x" style="width:24px;height:24px;"></i>'
        : '<i data-lucide="menu" style="width:24px;height:24px;"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (window.lucide) window.lucide.createIcons();
})();
