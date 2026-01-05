# Copilot Instructions for Alfons Walker Project

## Project Overview
This is a personal website for Alfons Walker, hosted on Google App Engine using Python (Flask).
The design aesthetic is "Dark, Bold, Impactful".

## Tech Stack
- **Backend**: Python 3.11+, Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (Canvas API)
- **Hosting**: Google App Engine (Standard Environment)

## Design Guidelines
- **Colors**: Black background (`#000`), Dark Gray text (`#444` or similar).
- **Typography**: Impact, Arial Black, or heavy sans-serif fonts.
- **Effects**: The main visual feature is a custom pixelation/glitch effect on the title text implemented via HTML5 Canvas.
- **Responsiveness**: The title text must always fill the screen width/height.

## Development Workflow
- Use the `venv` virtual environment.
- Run the local server using `.\run-server.ps1`.
- Static files are in `static/css` and `static/js`.
- Templates are in `templates/`.

## Key Files
- `main.py`: Flask entry point.
- `static/js/script.js`: Handles the text resizing and pixelation animation.
- `app.yaml`: GAE configuration.
