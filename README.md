# Alfons Walker's Personal Website

A bold, impactful personal website built with **Flask** and **Google App Engine**.
The site showcases my projects, skills, certificates, and journey in the world of coding and electronics.

## Features

*   **Dual UI Design:** The website features two distinct designs that can be toggled via a floating button:
    *   **Default UI:** A dark, modern theme with blue accents and glassmorphism effects.
    *   **Minimal UI:** A clean, white, Swiss-style minimalist design with bold typography.
*   **Interactive Timeline:** A chronological overview of my education, courses, and activities.
*   **Games:** Three playable browser games:
    *   **Flappy Bird Clone**
    *   **Pong**
    *   **Snake**
*   **Certificates:** A gallery of earned certificates with modal previews.
*   **Responsive:** Fully optimized for desktop and mobile devices.

## Project Structure (App Engine)

```
website/
├── main.py             # Flask application entry point
├── app.yaml            # App Engine configuration
├── templates/          # HTML Templates
│   ├── index.html      # Default design
│   ├── minimal.html    # Minimalist design
│   └── games/          # Game HTML files
├── static/             # Static Assets
│   ├── css/            # Global Styles
│   ├── js/             # Global Scripts
│   ├── assets/         # Images, Certificates, Icons
│   └── games/          # Game specific assets (css/js)
└── old website/        # (Migrated and removed)
```

## Local Development

1.  **Prerequisites**: Python 3.11+ installed.
2.  **Run the server**:
    ```powershell
    .\run-server.ps1
    ```
    This script will automatically:
    - Create a virtual environment (`venv`) if it doesn't exist.
    - Activate it.
    - Install dependencies from `requirements.txt`.
    - Start the Flask development server.

3.  Open [http://localhost:8080](http://localhost:8080).

## Deployment

Deploy to Google App Engine:

```bash
gcloud app deploy
```
