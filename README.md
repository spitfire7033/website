# Alfons Walker — personal website

A bilingual Czech/English client-focused portfolio built with Flask and deployed on Google App Engine.

## What is included

- Client-focused services, selected work (with a dedicated slot for in-progress client projects), collaboration process, credentials, and a compact brand/logo variants showcase
- Server-rendered Czech (`/`) and English (`/en`) routes with `hreflang` SEO metadata, `sitemap.xml`, and `robots.txt`
- Persistent dark/light theme and keyboard-accessible responsive side navigation
- Formspree AJAX contact form with spam honeypot
- App Engine static-file cache busting, security headers, and warmup support

## Local development

Requirements: Python 3.11 or newer.

```powershell
.\scripts\run-server.ps1
```

Then open [http://localhost:8080](http://localhost:8080).

The script creates or reuses `venv`, installs `requirements.txt`, and starts the Flask development server.

## Project structure

```text
website/
├── main.py                  # Flask routes, SEO endpoints, and security headers
├── site_data.py             # Structured bilingual content and project entries
├── app.yaml                 # Google App Engine configuration
├── requirements.txt
├── scripts/                 # Local server and deployment helpers
├── templates/
│   └── index.html           # Main portfolio template (CZ & EN)
└── static/
    ├── assets/img/          # Site and brand artwork
    ├── css/                 # Site styles
    └── js/                  # Theme, navigation, and contact form interactions
```

## Deployment

```powershell
.\scripts\deploy.ps1
```

Alternatively, deploy directly with `gcloud app deploy`.
