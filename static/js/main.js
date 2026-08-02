const translations = {
    en: {
        // Navigation
        "nav.about": "About Me",
        "nav.projects": "Projects",
        "nav.brand": "My Brand",
        "nav.certificates": "Certificates",
        "nav.logoManual": "Informatics ZŠ Vitae & Other Info",
        "nav.contact": "Contact",
        "nav.skipToContent": "Skip to main content",

        // Hero
        "hero.subtitle": "Code • Cybersecurity • Electronics",
        "hero.quote": '<i class="fa-solid fa-quote-left quote-icon"></i> Every system has a weakness. My job is to find it first. <i class="fa-solid fa-quote-right quote-icon"></i>',
        "hero.terminal": '<span class="terminal-prompt">$</span> <span class="terminal-text">securing the digital world</span><span class="terminal-cursor">_</span>',
        "hero.cta": 'Informatics ZŠ Vitae & Other Info <i class="fa-solid fa-graduation-cap ms-2"></i>',

        // About
        "about.title": "About Me",
        "about.whoTitle": "Who I Am",
        "about.description": "I am an independent developer focused on cybersecurity, modern web applications, and custom software. I approach every project with emphasis on secure architecture, performance, and clean code. Starting this fall, I’m studying Cybersecurity at SSPŠ – security isn’t just a topic for me, it’s a mindset.",
        "about.interestsTitle": "What I Enjoy",
        "about.interests": '<div class="col-sm-6"><div class="d-flex align-items-center gap-2 p-3" style="background: var(--form-bg); border: 1px solid var(--border-color);"><i class="fa-solid fa-code" style="color: var(--accent-color);"></i><span>Programming & web development</span></div></div><div class="col-sm-6"><div class="d-flex align-items-center gap-2 p-3" style="background: var(--form-bg); border: 1px solid var(--border-color);"><i class="fa-solid fa-microchip" style="color: var(--accent-color);"></i><span>Electronics & hardware</span></div></div><div class="col-sm-6"><div class="d-flex align-items-center gap-2 p-3" style="background: var(--form-bg); border: 1px solid var(--border-color);"><i class="fa-solid fa-shield-halved" style="color: var(--accent-color);"></i><span>Cybersecurity</span></div></div><div class="col-sm-6"><div class="d-flex align-items-center gap-2 p-3" style="background: var(--form-bg); border: 1px solid var(--border-color);"><i class="fa-solid fa-gamepad" style="color: var(--accent-color);"></i><span>Game development in Unity</span></div></div>',
        "about.schoolTitle": "My Plans – High School",
        "about.schoolAccepted": "ACCEPTED",
        "about.schoolField": "Field: Cybersecurity (IT)",
        "about.videoTitle": "Video Introduction",
        "about.videoPlaceholder": "Video coming soon",

        // Projects
        "projects.title": "Projects",
        "projects.politics.title": "Co-organizer of the 'Become a Politician' event (Next Zone, Feb 2, 2026)",
        "projects.politics.description": "As a co-organizer, I participated in preparing a political competition focused on critical thinking and communication, supported by UŠI. In the team, I arranged spaces, logistics, smooth event flow, and created parts of the competition disciplines. This experience gave me practice in teamwork and developing organizational skills.",
        "projects.frydryskova.title": "Website katerinafrydryskova.cz",
        "projects.frydryskova.description": "I collaborated on creating a website for Mgr. Kateřina Frydryšková – a therapist specializing in relationships with food, body, and self.",
        "projects.frydryskova.button": "Visit Website",
        "projects.unity.title": "Racing Simulator in Unity",
        "projects.unity.description": "Racing game created in the Unity game engine.",
        "projects.unity.docsButton": "View Documentation",
        "projects.unity.gameLink": '<i class="fa-solid fa-gamepad me-1"></i> Play Game (itch.io)',

        // Brand
        "brand.title": "My Brand",
        "brand.storyTitle": '<i class="fa-solid fa-book-open me-2" style="color: var(--accent-color);"></i> The Story of My Logo',
        "brand.storyText": "My logo was created as a visual representation of who I am and what I do. The minimalist design reflects my approach to clean code – simplicity, precision, and functionality. The logo's typography expresses a modern technological style and professionalism. The \"Alfons Walker\" brand unifies all my projects – from web development through cybersecurity to organizing tech events.",
        "brand.manualBtn": '<i class="fa-solid fa-palette me-2"></i>View Logo Manual',
        "brand.mockupsTitle": '<i class="fa-solid fa-shirt me-2" style="color: var(--accent-color);"></i> Product Mockups',
        "brand.mockupsNote": '<i class="fa-solid fa-circle-info me-1"></i> Product mockups with my brand – visualization of logo usage on real items.',

        // Certificates
        "certificates.title": "Certificates & Awards",
        "certificates.cambridge.description": "Internationally recognized certificate proving advanced knowledge of the English language, enabling fluent communication with clients.",
        "certificates.elementsai.description": "Professional training focused on the basics of artificial intelligence, machine learning, and their practical applications.",

        // Contact
        "contact.title": "Let's Connect",
        "contact.intro": "Interested in working together, need a consultation, or just want to chat about technology?<br>Feel free to contact me.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.social.title": "Find me on Social Media",

        // Placeholders
        "contact.form.namePlaceholder": "Your Name",
        "contact.form.emailPlaceholder": "Your Email",
        "contact.form.messagePlaceholder": "What should we talk about?",

        // Logo Manual Page Specific
        "logoManual.back": "Back to portfolio",
        "logoManual.aboutMe": "About Me",
        "logoManual.schools": "High Schools",
        "logoManual.accepted": "ACCEPTED",
        "logoManual.acceptedPriority": "ACCEPTED (HIGHER PRIORITY)",
        "logoManual.school1": "Smíchov Secondary Technical School",
        "logoManual.school2": "Smíchov Secondary Technical School",
        "logoManual.school3": "Weilova Secondary Vocational School of Automotive and Informatics",
        "logoManual.field1": "Field: Cybersecurity (IT)",
        "logoManual.field2": "Field: Information Technology (IT)",
        "logoManual.interests": "What I Enjoy",
        "logoManual.interest1": "Programming & web development",
        "logoManual.interest2": "Electronics & hardware",
        "logoManual.interest3": "Cybersecurity",
        "logoManual.interest4": "Game development in Unity",
        "logoManual.videoTitle": "Video Profile",
        "logoManual.brandTitle": "My Brand",
        "logoManual.navAbout": "About Me",
        "logoManual.navBrand": "My Brand",
        "logoManual.slideshowTitle": "Logo Variants",
        "logoManual.galleryTitle": "Design Elements",
        "logoManual.pdfTitle": "Logo Manual – PDF",
        "logoManual.pdfOpen": '<i class="fa-solid fa-up-right-from-square"></i> Open',
        "logoManual.heroTitle": "Informatics ZŠ Vitae & Other Info",
        "logoManual.heroSubtitle": "Visual Identity & School Projects"
    }
};

let currentLang = localStorage.getItem('lang') || 'cz';
let currentTheme = localStorage.getItem('theme') || 'dark';

document.addEventListener("DOMContentLoaded", () => {
    // Store original Czech content for all translatable elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.dataset.czText = el.innerHTML.trim();
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.dataset.czPlaceholder = el.getAttribute('placeholder');
    });

    // Apply saved language preference
    if (currentLang === 'en') {
        updateLanguage('en');
    }

    // Apply saved theme preference
    applyTheme(currentTheme);
    updateToggleUI(currentLang);

    // Set dynamic footer year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Language toggle click handler
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = currentLang === 'cz' ? 'en' : 'cz';
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
            updateToggleUI(currentLang);
        });
    }

    // Theme toggle click handler
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            applyTheme(currentTheme);
            updateToggleUI(currentLang);
        });
    }

    // Sidebar toggle logic
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideNav = document.getElementById('sideNav');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    function toggleSidebar() {
        if (!sideNav || !sidebarToggle) return;
        const isCollapsed = sideNav.classList.toggle('collapsed');
        sidebarToggle.classList.toggle('collapsed', isCollapsed);
        sidebarToggle.classList.toggle('nav-open', !isCollapsed);
        body.classList.toggle('sidebar-collapsed', isCollapsed);
        if (sidebarOverlay) sidebarOverlay.classList.toggle('active', !isCollapsed);
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    // Close sidebar on link click (mobile)
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && sideNav && !sideNav.classList.contains('collapsed')) {
                toggleSidebar();
            }
        });
    });

    // Responsive sidebar handling
    let isMobile = window.innerWidth <= 768;

    if (isMobile && sideNav && sidebarToggle) {
        sideNav.classList.add('collapsed');
        sidebarToggle.classList.add('collapsed');
        body.classList.add('sidebar-collapsed');
    }

    window.addEventListener('resize', () => {
        const currentlyMobile = window.innerWidth <= 768;
        if (currentlyMobile !== isMobile) {
            isMobile = currentlyMobile;
            if (!sideNav || !sidebarToggle) return;
            
            if (isMobile) {
                // Transitioning to mobile: collapse sidebar
                sideNav.classList.add('collapsed');
                sidebarToggle.classList.add('collapsed');
                sidebarToggle.classList.remove('nav-open');
                body.classList.add('sidebar-collapsed');
                if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            } else {
                // Transitioning to desktop: open sidebar
                sideNav.classList.remove('collapsed');
                sidebarToggle.classList.remove('collapsed');
                sidebarToggle.classList.remove('nav-open');
                body.classList.remove('sidebar-collapsed');
                if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            }
        }
    });

    // AJAX contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;
            const inputs = contactForm.querySelectorAll('input, textarea, button');

            // Disable form during submission
            inputs.forEach(el => el.disabled = true);
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>' +
                (currentLang === 'en' ? ' Sending...' : ' Odesílám...');

            // Remove any existing status message
            const existingMsg = contactForm.parentElement.querySelector('.form-status-message');
            if (existingMsg) existingMsg.remove();

            try {
                const formData = new FormData(contactForm);
                const urlEncoded = new URLSearchParams(formData).toString();
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: urlEncoded,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                const msgEl = document.createElement('div');
                msgEl.className = 'form-status-message text-center mt-4 p-3';
                msgEl.style.borderRadius = '0';
                msgEl.style.animation = 'fadeIn 0.5s ease forwards';

                if (response.ok) {
                    msgEl.style.background = 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(22,163,74,0.15))';
                    msgEl.style.border = '1px solid rgba(34,197,94,0.3)';
                    msgEl.style.color = 'var(--text-primary)';
                    msgEl.innerHTML = '<i class="fa-solid fa-circle-check me-2" style="color: #22c55e;"></i>' +
                        (currentLang === 'en' ? 'Message sent successfully! I\'ll get back to you soon.' : 'Zpráva byla úspěšně odeslána! Brzy se vám ozvu.');
                    contactForm.reset();
                } else {
                    msgEl.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.15))';
                    msgEl.style.border = '1px solid rgba(239,68,68,0.3)';
                    msgEl.style.color = 'var(--text-primary)';
                    msgEl.innerHTML = '<i class="fa-solid fa-circle-xmark me-2" style="color: #ef4444;"></i>' +
                        (currentLang === 'en' ? 'Something went wrong. Please try again or contact me directly.' : 'Něco se pokazilo. Zkuste to znovu nebo mě kontaktujte přímo.');
                }

                contactForm.parentElement.insertBefore(msgEl, contactForm.nextSibling);

                // Auto-remove after 8 seconds
                setTimeout(() => {
                    if (msgEl.parentElement) {
                        msgEl.style.opacity = '0';
                        msgEl.style.transition = 'opacity 0.5s ease';
                        setTimeout(() => msgEl.remove(), 500);
                    }
                }, 8000);

            } catch (err) {
                const msgEl = document.createElement('div');
                msgEl.className = 'form-status-message text-center mt-4 p-3';
                msgEl.style.borderRadius = '0';
                msgEl.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.15))';
                msgEl.style.border = '1px solid rgba(239,68,68,0.3)';
                msgEl.style.color = 'var(--text-primary)';
                msgEl.style.animation = 'fadeIn 0.5s ease forwards';
                msgEl.innerHTML = '<i class="fa-solid fa-circle-xmark me-2" style="color: #ef4444;"></i>' +
                    (currentLang === 'en' ? 'Network error. Please check your connection and try again.' : 'Chyba sítě. Zkontrolujte připojení a zkuste to znovu.');
                contactForm.parentElement.insertBefore(msgEl, contactForm.nextSibling);
            } finally {
                inputs.forEach(el => el.disabled = false);
                submitBtn.innerHTML = originalBtnHTML;
            }
        });
    }
});

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

function updateLanguage(lang) {
    // Translate text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang === 'en' && key && translations.en[key]) {
            el.innerHTML = translations.en[key];
        } else if (lang === 'cz' && el.dataset.czText) {
            el.innerHTML = el.dataset.czText;
        }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (lang === 'en' && key && translations.en[key]) {
            el.setAttribute('placeholder', translations.en[key]);
        } else if (lang === 'cz' && el.dataset.czPlaceholder) {
            el.setAttribute('placeholder', el.dataset.czPlaceholder);
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'cs';
}

function updateToggleUI(lang) {
    const toggleBtn = document.getElementById("langToggle");
    const langText = document.getElementById("langText");
    if (!toggleBtn || !langText) return;

    if (lang === 'cz') {
        langText.innerText = 'English';
        toggleBtn.title = 'Switch to English';
    } else {
        langText.innerText = 'Čeština';
        toggleBtn.title = 'Přepnout do češtiny';
    }

    // Update theme toggle UI
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");
    const themeToggle = document.getElementById("themeToggle");
    if (!themeIcon || !themeText || !themeToggle) return;

    if (currentTheme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeText.innerText = lang === 'cz' ? 'Světlý' : 'Light';
        themeToggle.title = lang === 'cz' ? 'Přepnout na světlý režim' : 'Switch to light mode';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeText.innerText = lang === 'cz' ? 'Tmavý' : 'Dark';
        themeToggle.title = lang === 'cz' ? 'Přepnout na tmavý režim' : 'Switch to dark mode';
    }
}