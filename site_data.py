"""Structured bilingual content and project data for alfonswalker.com."""

PROJECTS = {
    "client": [
        {
            "slug": "frydryskova",
            "status": "live",
            "domain": "katerinafrydryskova.cz",
            "url": "https://katerinafrydryskova.cz",
            "image": "assets/img/katerina-frydryskova.jpg",
            "image_width": 1024,
            "image_height": 408,
            "icon": "fa-solid fa-leaf",
            "cs": {
                "status_label": "Dokončeno",
                "title": "Webová stránka katerinafrydryskova.cz",
                "description": (
                    "Spolupráce na návrhu a realizaci profesionálního webu pro Mgr. Kateřinu Frydryškovou – "
                    "terapeutku vztahu k jídlu, tělu a sobě. Web klade důraz na klidný vizuální styl, "
                    "přehlednou prezentaci služeb, rychlé načítání a bezproblémové zobrazení na mobilu."
                ),
                "tags": ["Klientský web", "Responzivní design", "SEO"],
                "cta_label": "Navštívit web",
            },
            "en": {
                "status_label": "Live",
                "title": "Website katerinafrydryskova.cz",
                "description": (
                    "Collaboration on the design and build of a professional website for Mgr. Kateřina Frydryšková – "
                    "a therapist specializing in relationships with food, body, and self. Designed for calm visual clarity, "
                    "trustworthy service presentation, fast loading, and mobile usability."
                ),
                "tags": ["Client Website", "Responsive Design", "SEO"],
                "cta_label": "Visit Website",
            },
        },
        {
            "slug": "upcoming-client",
            "status": "in_progress",
            "domain": "client-project.cz",
            "url": None,
            "icon": "fa-solid fa-code",
            "cs": {
                "status_label": "Právě vzniká",
                "title": "Nový klientský web (Připravujeme)",
                "description": (
                    "Momentálně pracuji na novém webovém projektu na míru. "
                    "Po dokončení a spuštění zde přibude kompletní ukázka včetně popisu řešení a odkazu na živý web."
                ),
                "tags": ["Klientský web", "Web na míru", "V přípravě"],
                "cta_label": "Chci podobný web",
            },
            "en": {
                "status_label": "In Progress",
                "title": "New Client Website (In Development)",
                "description": (
                    "Currently building a new custom website for a client. "
                    "A full showcase with project details and the live link will be published here upon launch."
                ),
                "tags": ["Client Website", "Custom Build", "In Progress"],
                "cta_label": "Request a Similar Site",
            },
        },
    ],
    "other": [
        {
            "slug": "unity-f1",
            "icon": "fa-solid fa-flag-checkered",
            "image": None,
            "cs": {
                "badge": "Unity • C# • 3D Simulace",
                "title": "Závodní simulátor Formule 1 v Unity",
                "description": (
                    "Vlastní 3D závodní hra vytvořená v herním enginu Unity s důrazem na jízdní fyziku, "
                    "telemetrii a návrh herní logiky."
                ),
                "links": [
                    {
                        "label": "Dokumentace",
                        "url": "https://drive.google.com/file/d/1n6aJ8EHBr3lagVISdy7HgCGqKWx5FObn/view?usp=sharing",
                        "icon": "fa-solid fa-file-lines",
                        "primary": True,
                    },
                    {
                        "label": "Hrát hru (itch.io)",
                        "url": "https://spitfire7033.itch.io/simultor-formule-1-v-unity",
                        "icon": "fa-solid fa-gamepad",
                        "primary": False,
                    },
                ],
            },
            "en": {
                "badge": "Unity • C# • 3D Simulation",
                "title": "Formula 1 Racing Simulator in Unity",
                "description": (
                    "Custom 3D racing game built in the Unity engine with a focus on driving physics, "
                    "telemetry, and game systems architecture."
                ),
                "links": [
                    {
                        "label": "Documentation",
                        "url": "https://drive.google.com/file/d/1n6aJ8EHBr3lagVISdy7HgCGqKWx5FObn/view?usp=sharing",
                        "icon": "fa-solid fa-file-lines",
                        "primary": True,
                    },
                    {
                        "label": "Play Game (itch.io)",
                        "url": "https://spitfire7033.itch.io/simultor-formule-1-v-unity",
                        "icon": "fa-solid fa-gamepad",
                        "primary": False,
                    },
                ],
            },
        },
        {
            "slug": "next-zone",
            "icon": "fa-solid fa-users-gear",
            "image": "assets/img/IMG_20260419_215743_241_web.jpg",
            "cs": {
                "badge": "Organizace & Logistika • Next Zone",
                "title": "Spoluorganizace akce „Staň se politikem“",
                "description": (
                    "Příprava a produkce soutěže zaměřené na kritické myšlení a komunikaci v prostoru Next Zone "
                    "(za podpory UŠI) – zajištění prostor, logistiky, hladkého průběhu a návrh soutěžních disciplín."
                ),
                "links": [],
            },
            "en": {
                "badge": "Event Production • Next Zone",
                "title": "Co-organizer of 'Become a Politician'",
                "description": (
                    "Preparation and production of a competition focused on critical thinking and communication at Next Zone "
                    "(supported by UŠI) – managing venue logistics, event flow, and competition tasks."
                ),
                "links": [],
            },
        },
    ],
}


LOGO_VARIANTS = [
    {
        "file": "assets/img/brand/logo-horizontal.png",
        "width": 1645,
        "height": 612,
        "cs_label": "Horizontální logo",
        "en_label": "Horizontal Logo",
    },
    {
        "file": "assets/img/brand/logo-stacked.png",
        "width": 839,
        "height": 902,
        "cs_label": "Vertikální logo",
        "en_label": "Stacked Logo",
    },
    {
        "file": "assets/img/brand/logo-mark.png",
        "width": 792,
        "height": 886,
        "cs_label": "Monogram",
        "en_label": "Monogram Mark",
    },
]


PAGES = {
    "cs": {
        "lang": "cs",
        "locale": "cs_CZ",
        "canonical_url": "https://alfonswalker.com/",
        "alt_url": "/en",
        "alt_lang": "en",
        "switch_label": "English",
        "switch_title": "Switch to English",
        "switch_aria": "Přepnout do angličtiny",
        "theme_dark_label": "Tmavý",
        "theme_light_label": "Světlý",
        "theme_to_dark_aria": "Přepnout na tmavý režim",
        "theme_to_light_aria": "Přepnout na světlý režim",
        "meta": {
            "title": "Alfons Walker – Tvorba webových stránek a aplikací na míru",
            "description": (
                "Alfons Walker – nezávislý vývojář. Tvořím moderní, rychlé a bezpečné webové stránky "
                "a webové aplikace na míru pro firmy i jednotlivce."
            ),
            "og_title": "Alfons Walker – Weby a aplikace na míru",
            "og_description": (
                "Moderní webové stránky, software na míru a důraz na kybernetickou bezpečnost. "
                "Prohlédněte si vybrané projekty a ozvěte se pro nezávaznou konzultaci."
            ),
            "og_image_alt": "Alfons Walker - Independent Web Developer (Python, Flask, Cybersecurity)",
        },
        "nav": {
            "skip": "Přeskočit na hlavní obsah",
            "aria_label": "Hlavní navigace",
            "hide_nav": "Skrýt navigaci",
            "show_nav": "Zobrazit navigaci",
            "services": "Služby",
            "projects": "Projekty",
            "process": "Spolupráce",
            "about": "O mně",
            "contact": "Kontakt",
        },
        "hero": {
            "subtitle": "Weby na míru • Webové aplikace • Kybernetická bezpečnost",
            "lead": (
                "Navrhuji a vyvíjím moderní, rychlé a bezpečné webové stránky "
                "pro podnikatele, firmy i ambiciózní projekty."
            ),
            "cta_primary": "Nezávazná poptávka",
            "cta_secondary": "Ukázky práce",
        },
        "services": {
            "title": "Co pro vás mohu vytvořit",
            "cards": [
                {
                    "icon": "fa-solid fa-laptop-code",
                    "title": "Firemní a osobní weby",
                    "description": (
                        "Reprezentativní weby pro firmy, živnostníky i osobní značky, které skvěle vypadají "
                        "na mobilu i počítači a přivádějí nové zákazníky."
                    ),
                    "points": [
                        "Design na míru pro mobil i počítač",
                        "Rychlé načítání a dobrá dohledatelnost",
                        "Přehledná prezentace vašich služeb",
                    ],
                },
                {
                    "icon": "fa-solid fa-gears",
                    "title": "Webové aplikace & chytré funkce",
                    "description": (
                        "Interaktivní weby a nástroje na míru – od poptávkových formulářů a rezervací "
                        "až po automatizaci, která vám ušetří práci."
                    ),
                    "points": [
                        "Formuláře, kalkulačky a interaktivní prvky",
                        "Vícejazyčné weby (čeština, angličtina i další)",
                        "Automatizace a napojení na vaše nástroje",
                    ],
                },
                {
                    "icon": "fa-solid fa-shield-halved",
                    "title": "Spuštění, zabezpečení & péče o web",
                    "description": (
                        "Postarám se o vše od zprovoznění na vlastní doméně až po spolehlivé zabezpečení "
                        "a průběžné úpravy obsahu."
                    ),
                    "points": [
                        "Nastavení domény a spolehlivý provoz",
                        "Důkladné zabezpečení a ochrana proti spamu",
                        "Dlouhodobá správa a úpravy podle potřeby",
                    ],
                },
            ],
        },
        "projects": {
            "title": "Vybrané projekty",
            "client_subtitle": "Klientské weby a realizace",
            "other_subtitle": "Další technické a organizační projekty",
        },
        "process": {
            "title": "Jak probíhá spolupráce",
            "steps": [
                {
                    "num": "01",
                    "title": "Konzultace & zadání",
                    "description": "Probereme vaše cíle, cílovou skupinu a představu o webu. Vše srozumitelně a bez závazků.",
                },
                {
                    "num": "02",
                    "title": "Návrh & struktura",
                    "description": "Připravím rozvržení obsahu, vizuální směr a jasný plán realizace.",
                },
                {
                    "num": "03",
                    "title": "Vývoj & ladění",
                    "description": "Web nakóduji s důrazem na rychlost, responzivitu a bezpečnost. Průběžně vidíte postup.",
                },
                {
                    "num": "04",
                    "title": "Spuštění & podpora",
                    "description": "Nasadím web na vaši doménu, nastavím měření i zabezpečení a postarám se o další chod.",
                },
            ],
        },
        "about": {
            "title": "O mně",
            "description": (
                "Jsem nezávislý vývojář se zaměřením na moderní webové stránky, zakázkový software "
                "a kybernetickou bezpečnost. Ke každému projektu přistupuji s důrazem na bezpečnou architekturu, "
                "vysoký výkon a čistý kód. Studuji obor Kybernetická bezpečnost na Smíchovské střední průmyslové škole (SSPŠ) – "
                "spolehlivost a bezpečnost pro mě nejsou jen doplněk, ale základ každého webu, který pro klienty stavím."
            ),
            "credentials_title": "Certifikáty & odbornost",
            "credentials": [
                {
                    "icon": "fa-solid fa-language",
                    "title": "Cambridge English (B2)",
                    "text": "Mezinárodní certifikát prokazující pokročilou angličtinu a plynulou komunikaci se zahraničními klienty.",
                },
                {
                    "icon": "fa-solid fa-robot",
                    "title": "Elements of AI",
                    "text": "Odborný certifikát zaměřený na principy umělé inteligence, strojového učení a jejich praktické využití.",
                },
                {
                    "icon": "fa-solid fa-shield-halved",
                    "title": "Kybernetická bezpečnost (SSPŠ)",
                    "text": "Studium se zaměřením na bezpečný vývoj aplikací, síťovou bezpečnost a ochranu systémů.",
                },
            ],
            "brand_title": "Vizuální identita & variace loga",
            "brand_text": (
                "Minimalistické logo značky Alfons Walker odráží můj přístup k vývoji – "
                "jednoduchost, přesnost a funkčnost napříč světlým i tmavým režimem."
            ),
        },
        "contact": {
            "title": "Spojme se",
            "intro": (
                "Potřebujete nový web, chcete vylepšit ten stávající, nebo se jen nezávazně poradit?<br>"
                "Napište mi pár vět o vašem projektu a brzy se vám ozvu."
            ),
            "name": "Jméno",
            "name_placeholder": "Vaše jméno",
            "email": "Email",
            "email_placeholder": "Váš email",
            "message": "Zpráva",
            "message_placeholder": "S čím vám mohu pomoci?",
            "submit": "Odeslat zprávu",
            "sending": "Odesílám…",
            "success": "Zpráva byla úspěšně odeslána! Brzy se vám ozvu.",
            "error": "Něco se pokazilo. Zkuste to prosím znovu.",
            "network_error": "Chyba sítě. Zkontrolujte připojení a zkuste to znovu.",
            "social_title": "Najdete mě také na",
        },
    },
    "en": {
        "lang": "en",
        "locale": "en_US",
        "canonical_url": "https://alfonswalker.com/en",
        "alt_url": "/",
        "alt_lang": "cs",
        "switch_label": "Čeština",
        "switch_title": "Přepnout do češtiny",
        "switch_aria": "Switch to Czech",
        "theme_dark_label": "Dark",
        "theme_light_label": "Light",
        "theme_to_dark_aria": "Switch to dark mode",
        "theme_to_light_aria": "Switch to light mode",
        "meta": {
            "title": "Alfons Walker – Custom Websites & Web Development",
            "description": (
                "Alfons Walker – independent web developer. I build modern, fast, and secure custom websites "
                "and web applications for businesses and professionals."
            ),
            "og_title": "Alfons Walker – Custom Websites & Software",
            "og_description": (
                "Modern websites, custom software, and security-first engineering. "
                "Explore selected client work and get in touch for a consultation."
            ),
            "og_image_alt": "Alfons Walker - Independent Web Developer (Python, Flask, Cybersecurity)",
        },
        "nav": {
            "skip": "Skip to main content",
            "aria_label": "Main navigation",
            "hide_nav": "Hide navigation",
            "show_nav": "Show navigation",
            "services": "Services",
            "projects": "Projects",
            "process": "Process",
            "about": "About",
            "contact": "Contact",
        },
        "hero": {
            "subtitle": "Custom Websites • Web Applications • Cybersecurity",
            "lead": (
                "I design and build modern, fast, and secure websites "
                "for businesses, independent professionals, and ambitious projects."
            ),
            "cta_primary": "Start a Project",
            "cta_secondary": "Selected Work",
        },
        "services": {
            "title": "What I Can Build for You",
            "cards": [
                {
                    "icon": "fa-solid fa-laptop-code",
                    "title": "Business & Personal Websites",
                    "description": (
                        "Polished websites for businesses, freelancers, and personal brands that look great "
                        "on phones and desktops and help win new clients."
                    ),
                    "points": [
                        "Custom design for mobile and desktop",
                        "Fast loading and search-friendly structure",
                        "Clear presentation of your services",
                    ],
                },
                {
                    "icon": "fa-solid fa-gears",
                    "title": "Web Apps & Custom Features",
                    "description": (
                        "Interactive websites and custom tools – from inquiry forms and booking flows "
                        "to automation that saves you time."
                    ),
                    "points": [
                        "Custom forms, calculators, and interactive tools",
                        "Multilingual websites (Czech, English & more)",
                        "Automation and integration with your workflow",
                    ],
                },
                {
                    "icon": "fa-solid fa-shield-halved",
                    "title": "Launch, Security & Ongoing Care",
                    "description": (
                        "I handle everything from launching on your own domain to keeping your website "
                        "secure and updated over time."
                    ),
                    "points": [
                        "Domain setup and reliable hosting",
                        "Strong security and spam protection",
                        "Ongoing maintenance and content updates",
                    ],
                },
            ],
        },
        "projects": {
            "title": "Selected Work",
            "client_subtitle": "Client Websites & Case Studies",
            "other_subtitle": "Other Technical & Event Projects",
        },
        "process": {
            "title": "How We Work Together",
            "steps": [
                {
                    "num": "01",
                    "title": "Discovery & Consultation",
                    "description": "We discuss your goals, audience, and vision for the project — clearly and with no obligation.",
                },
                {
                    "num": "02",
                    "title": "Structure & Design",
                    "description": "I prepare the content layout, visual direction, and a clear implementation plan.",
                },
                {
                    "num": "03",
                    "title": "Build & Refinement",
                    "description": "I code a fast, responsive, and secure website while sharing progress with you along the way.",
                },
                {
                    "num": "04",
                    "title": "Launch & Support",
                    "description": "I deploy the site to your domain, configure security and SEO, and stay available for ongoing updates.",
                },
            ],
        },
        "about": {
            "title": "About Me",
            "description": (
                "I am an independent developer focused on modern websites, custom web applications, "
                "and cybersecurity. I approach every project with an emphasis on secure architecture, "
                "high performance, and clean code. I study Cybersecurity at Smíchov Secondary Technical School (SSPŠ) – "
                "reliability and security aren't an afterthought for me, they are the foundation of every site I build for clients."
            ),
            "credentials_title": "Certificates & Background",
            "credentials": [
                {
                    "icon": "fa-solid fa-language",
                    "title": "Cambridge English (B2)",
                    "text": "Internationally recognized certificate proving advanced English proficiency and fluent client communication.",
                },
                {
                    "icon": "fa-solid fa-robot",
                    "title": "Elements of AI",
                    "text": "Certified training focused on artificial intelligence fundamentals, machine learning, and practical applications.",
                },
                {
                    "icon": "fa-solid fa-shield-halved",
                    "title": "Cybersecurity (SSPŠ)",
                    "text": "Specialized studies focused on secure application development, network security, and system defense.",
                },
            ],
            "brand_title": "Visual Identity & Logo Variants",
            "brand_text": (
                "The minimalist Alfons Walker brand mark reflects my engineering philosophy – "
                "clarity, precision, and functionality across both light and dark themes."
            ),
        },
        "contact": {
            "title": "Let's Connect",
            "intro": (
                "Need a new website, want to upgrade an existing one, or looking for a consultation?<br>"
                "Send me a short note about your project and I'll get back to you soon."
            ),
            "name": "Name",
            "name_placeholder": "Your Name",
            "email": "Email",
            "email_placeholder": "Your Email",
            "message": "Message",
            "message_placeholder": "How can I help with your project?",
            "submit": "Send Message",
            "sending": "Sending…",
            "success": "Message sent successfully! I'll get back to you soon.",
            "error": "Something went wrong. Please try again.",
            "network_error": "Network error. Please check your connection and try again.",
            "social_title": "Also find me on",
        },
    },
}
