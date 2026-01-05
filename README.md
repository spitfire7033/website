# Alfons Walker Website

A bold, impactful personal website built with Flask and Google App Engine.

## Features
- Full-screen responsive typography.
- Custom JavaScript canvas-based pixelation/glitch animation.
- Minimalist dark theme.

## Local Development

1. **Prerequisites**: Python 3.11+ installed.
2. **Run the server**:
   ```powershell
   .\run-server.ps1
   ```
   This script will automatically:
   - Create a virtual environment (`venv`) if it doesn't exist.
   - Activate it.
   - Install dependencies from `requirements.txt`.
   - Start the Flask development server.

3. Open [http://localhost:5000](http://localhost:5000).

## Deployment

Deploy to Google App Engine:

```bash
gcloud app deploy
```
