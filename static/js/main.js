function readPreference(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (_) {
        return fallback;
    }
}

function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (_) {}
}

let currentTheme = readPreference('theme', 'light') === 'dark' ? 'dark' : 'light';

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    updateThemeToggleUI();

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Preserve section hash when switching between / and /en
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (window.location.hash) {
                const baseHref = langToggle.getAttribute('href').split('#')[0];
                langToggle.setAttribute('href', `${baseHref}${window.location.hash}`);
            }
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            savePreference('theme', currentTheme);
            applyTheme(currentTheme);
            updateThemeToggleUI();
        });
    }

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideNav = document.getElementById('sideNav');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    function updateSidebarLabel(isExpanded) {
        if (!sidebarToggle) return;
        const hideLabel = sidebarToggle.dataset.hideLabel || 'Hide navigation';
        const showLabel = sidebarToggle.dataset.showLabel || 'Show navigation';
        const label = isExpanded ? hideLabel : showLabel;
        sidebarToggle.setAttribute('aria-label', label);
        sidebarToggle.title = label;
    }

    function setSidebar(collapsed, moveFocus = false) {
        if (!sideNav || !sidebarToggle) return;
        const isExpanded = !collapsed;
        const isMobile = mobileQuery.matches;

        sideNav.classList.toggle('collapsed', collapsed);
        sideNav.setAttribute('aria-hidden', String(collapsed));
        sideNav.inert = collapsed;
        sidebarToggle.classList.toggle('collapsed', collapsed);
        sidebarToggle.classList.toggle('nav-open', isMobile && isExpanded);
        sidebarToggle.setAttribute('aria-expanded', String(isExpanded));
        document.body.classList.toggle('sidebar-collapsed', collapsed);
        document.body.classList.toggle('nav-open', isMobile && isExpanded);
        if (sidebarOverlay) sidebarOverlay.classList.toggle('active', isMobile && isExpanded);
        updateSidebarLabel(isExpanded);

        if (moveFocus) {
            if (isExpanded) {
                window.requestAnimationFrame(() => sideNav.querySelector('a')?.focus());
            } else {
                sidebarToggle.focus();
            }
        }
    }

    if (sideNav && sidebarToggle) {
        setSidebar(mobileQuery.matches);
        document.documentElement.classList.remove('mobile-nav-preload');

        sidebarToggle.addEventListener('click', () => {
            setSidebar(!sideNav.classList.contains('collapsed'), true);
        });

        sidebarOverlay?.addEventListener('click', () => setSidebar(true, true));

        sideNav.querySelectorAll('.side-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileQuery.matches) setSidebar(true);
            });
        });

        const sectionLinks = Array.from(sideNav.querySelectorAll('.side-nav-link[href^="#"]'));
        const trackedSections = sectionLinks
            .map(link => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);
        let scrollSpyFrame;

        function updateActiveSection() {
            scrollSpyFrame = undefined;
            if (!trackedSections.length) return;

            const marker = Math.min(window.innerHeight * 0.34, 260);
            let activeSection = null;

            trackedSections.forEach(section => {
                if (section.getBoundingClientRect().top <= marker) activeSection = section;
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
                activeSection = trackedSections[trackedSections.length - 1];
            }

            sectionLinks.forEach(link => {
                const isActive = activeSection && link.getAttribute('href') === `#${activeSection.id}`;
                link.classList.toggle('active', Boolean(isActive));
                if (isActive) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        function requestScrollSpyUpdate() {
            if (scrollSpyFrame) return;
            scrollSpyFrame = window.requestAnimationFrame(updateActiveSection);
        }

        updateActiveSection();
        window.addEventListener('scroll', requestScrollSpyUpdate, { passive: true });
        window.addEventListener('resize', requestScrollSpyUpdate);

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && mobileQuery.matches && !sideNav.classList.contains('collapsed')) {
                setSidebar(true, true);
            }
        });

        const handleBreakpointChange = event => setSidebar(event.matches);
        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener('change', handleBreakpointChange);
        } else {
            mobileQuery.addListener(handleBreakpointChange);
        }
    } else {
        document.documentElement.classList.remove('mobile-nav-preload');
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async event => {
            event.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;

            const originalBtnHTML = submitBtn.innerHTML;
            const controls = contactForm.querySelectorAll('input, textarea, button');
            contactForm.parentElement.querySelector('.form-status-message')?.remove();
            controls.forEach(el => { el.disabled = true; });
            const sendingText = contactForm.dataset.sending || 'Sending…';
            submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>${sendingText}`;

            function showStatus(kind, text) {
                const message = document.createElement('div');
                message.className = `form-status-message form-status-message--${kind} text-center mt-4 p-3`;
                message.setAttribute('role', kind === 'success' ? 'status' : 'alert');
                message.setAttribute('aria-live', kind === 'success' ? 'polite' : 'assertive');

                const icon = document.createElement('i');
                icon.className = `fa-solid ${kind === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'} me-2`;
                icon.style.color = kind === 'success' ? '#22c55e' : '#ef4444';
                icon.setAttribute('aria-hidden', 'true');
                message.append(icon, document.createTextNode(text));
                contactForm.insertAdjacentElement('afterend', message);
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new URLSearchParams(new FormData(contactForm)),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                if (response.ok) {
                    showStatus('success', contactForm.dataset.success || 'Message sent!');
                    contactForm.reset();
                } else {
                    showStatus('error', contactForm.dataset.error || 'Something went wrong.');
                }
            } catch (_) {
                showStatus('error', contactForm.dataset.networkError || 'Network error.');
            } finally {
                controls.forEach(el => { el.disabled = false; });
                submitBtn.innerHTML = originalBtnHTML;
            }
        });
    }
});

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-mode', isLight);
    document.documentElement.classList.remove('light-preload');
    document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isLight ? '#f0f4f8' : '#0b0f19';
}

function updateThemeToggleUI() {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const themeToggle = document.getElementById('themeToggle');
    if (!themeIcon || !themeText || !themeToggle) return;

    if (currentTheme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeIcon.setAttribute('aria-hidden', 'true');
        themeText.innerText = themeToggle.dataset.lightLabel || 'Light';
        const aria = themeToggle.dataset.toLightAria || 'Switch to light mode';
        themeToggle.title = aria;
        themeToggle.setAttribute('aria-label', aria);
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeIcon.setAttribute('aria-hidden', 'true');
        themeText.innerText = themeToggle.dataset.darkLabel || 'Dark';
        const aria = themeToggle.dataset.toDarkAria || 'Switch to dark mode';
        themeToggle.title = aria;
        themeToggle.setAttribute('aria-label', aria);
    }
}
