$ErrorActionPreference = "Stop"

Set-Location -Path "$PSScriptRoot\.."

Write-Host "Deploying to Google App Engine (Project: alfons-walker)..."

# Ensure gcloud is installed
if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Error "Google Cloud SDK (gcloud) is not installed or not in PATH."
    exit 1
}

# Deploy
gcloud app deploy app.yaml --project alfons-walker --quiet

Write-Host "Deployment complete!"
Write-Host "Visit your site at: https://alfons-walker.uc.r.appspot.com"
