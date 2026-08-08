# Alfons Walker — personal website

A bilingual Czech/English portfolio built with Flask and deployed on Google App Engine.

## What is included

- Responsive portfolio with projects, certificates, contact details, and a Formspree contact form
- Persistent dark/light theme and Czech/English language controls
- Keyboard-accessible responsive navigation
- A second page covering school information, brand assets, a logo slideshow, gallery lightbox, and PDF manual
- App Engine static-file caching and warmup support

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
├── main.py                  # Flask routes and response headers
├── app.yaml                 # Google App Engine configuration
├── requirements.txt
├── scripts/                 # Local server and deployment helpers
├── templates/
│   ├── index.html           # Main portfolio
│   └── logo-manual.html     # School and brand page
└── static/
    ├── assets/img/          # Local site and brand artwork
    ├── css/                 # Shared and page-specific styles
    └── js/                  # Shared and page-specific interactions
```

## Deployment

```powershell
.\scripts\deploy.ps1
```

Alternatively, deploy directly with `gcloud app deploy`.
