// â”€â”€ Civic Shift â€” Premium Site JS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function initWebsite() {
    // â”€â”€ Scroll-reveal (IntersectionObserver) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => io.observe(el));

    // Legacy .animate-on-scroll support
    const legacyObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                legacyObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        legacyObs.observe(el);
    });

    // â”€â”€ Nav scroll-state toggle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const nav = document.querySelector('.site-nav');
    if (nav) {
        const onScroll = () => {
            if (window.scrollY > 60) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load
    }

    // â”€â”€ Estimator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    initEstimator();
}

function initEstimator() {
    function calculateEstimate() {
        const serviceRadio = document.querySelector('input[name="service"]:checked');
        if (!serviceRadio) return;
        const service  = serviceRadio.value;
        const duration = parseInt(document.getElementById('duration')?.value) || 6;

        const rates = {
            interim:          { min: 850, max: 1000 },
            prog_mgmt:        { min: 750, max: 900 },
            recovery:         { min: 800, max: 950 },
            crm:              { min: 700, max: 850 },
            service_redesign: { min: 650, max: 800 },
            infrastructure:   { min: 700, max: 850 },
            integration:      { min: 700, max: 850 }
        };
        const rate = rates[service] || rates.interim;
        const daysPerMonth = 20;
        const minTotal = rate.min * daysPerMonth * duration;
        const maxTotal = rate.max * daysPerMonth * duration;

        const el = (id) => document.getElementById(id);
        if (el('minPrice')) el('minPrice').textContent = (minTotal / 1000).toFixed(0);
        if (el('maxPrice')) el('maxPrice').textContent = (maxTotal / 1000).toFixed(0);

        const resultArea = el('resultArea');
        if (resultArea) {
            resultArea.style.display = 'block';
            setTimeout(() => { resultArea.style.opacity = '1'; }, 50);
        }
    }

    const durationInput = document.getElementById('duration');
    if (durationInput) durationInput.addEventListener('input', calculateEstimate);

    document.querySelectorAll('input[name="service"]').forEach(r =>
        r.addEventListener('change', calculateEstimate)
    );

    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) calculateBtn.addEventListener('click', (e) => { e.preventDefault(); calculateEstimate(); });
}

// â”€â”€ DOM Ready â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite();
}

// â”€â”€ Mobile Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener('DOMContentLoaded', () => {
    const toggle   = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !expanded);
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
            document.body.classList.toggle('nav-open', navLinks.classList.contains('active'));
        });
    }

    // â”€â”€ FAQ Accordion â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const list = btn.closest('.faq-list');
            list?.querySelectorAll('.faq-question').forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling?.classList.remove('open');
            });
            if (!isExpanded) {
                btn.setAttribute('aria-expanded', 'true');
                btn.nextElementSibling?.classList.add('open');
            }
        });
    });
});



// ── Dark Mode Toggle ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const iconMoon = themeToggle.querySelector('.icon-moon');
        const iconSun = themeToggle.querySelector('.icon-sun');

        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if(iconMoon && iconSun) {
                iconMoon.style.display = 'none';
                iconSun.style.display = 'block';
            }
        }
        
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if(iconMoon && iconSun) {
                    iconMoon.style.display = 'block';
                    iconSun.style.display = 'none';
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if(iconMoon && iconSun) {
                    iconMoon.style.display = 'none';
                    iconSun.style.display = 'block';
                }
            }
        });
    }
});
