const translations = {
    en: {
        // Navigation
        "nav.about": "About Me",
        "nav.projects": "Projects",
        "nav.certificates": "Certificates",
        "nav.contact": "Contact",

        // Hero
        "hero.subtitle": "Code • Technology • Electronics",

        // About
        "about.title": "About Me",
        "about.description": "I am an independent developer specializing in creating modern web applications and custom software. I approach every client and project individually with maximum emphasis on performance, great user experience, and clean code. I embrace new challenges and turn your ideas into functional digital products.",

        // Projects
        "projects.title": "Projects",
        "projects.politics.title": "Organization of event 'Become a Politician' (Next Zone, Feb 2, 2026)",
        "projects.politics.description": "As a co-organizer, I participated in preparing a political competition focused on critical thinking and communication, supported by UŠI. In the team, I arranged spaces, logistics, smooth event flow, and created parts of the competition disciplines. This experience gave me practice in teamwork and developing organizational skills.",
        "projects.frydryskova.title": "Website katerinafrydryskova.cz",
        "projects.frydryskova.description": "I collaborated on creating a website for Mgr. Kateřina Frydryšková – therapist for relationships with food, body, and self.",
        "projects.frydryskova.button": "Visit Website",
        "projects.unity.title": "Racing Simulator in Unity",
        "projects.unity.description": "Racing game created in the Unity game engine.",
        "projects.unity.docsButton": "View Documentation",
        "projects.unity.gameLink": "<i class=\"fa-solid fa-gamepad me-1\"></i> Play Game (itch.io)",

        // Certificates
        "certificates.title": "Certificates & Awards",
        "certificates.cambridge.description": "Internationally recognized certificate proving advanced knowledge of the English language and fluent client communication.",
        "certificates.elementsai.description": "Professional training focused on the basics of artificial intelligence, machine learning, and their practical application.",

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
        "contact.form.messagePlaceholder": "What should we talk about?"
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