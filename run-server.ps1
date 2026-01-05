$ErrorActionPreference = "Stop"

Write-Host "Checking for virtual environment..."
if (-not (Test-Path "venv")) {
    Write-Host "Creating virtual environment..."
    python -m venv venv
}

Write-Host "Activating virtual environment..."
.\venv\Scripts\Activate.ps1

Write-Host "Installing dependencies..."
pip install -r requirements.txt

Write-Host "Starting server..."
$env:FLASK_DEBUG = "1"
python main.py