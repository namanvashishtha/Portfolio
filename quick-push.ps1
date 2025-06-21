# Simple Automated Git Push Script
Write-Host "🚀 PUSHING TO GITHUB..." -ForegroundColor Cyan

# Navigate to project directory
Set-Location "c:/Users/Naman Vishishtha/Desktop/Learning/Projects/PersonalPortfolio"

# Add all changes
Write-Host "📦 Adding changes..." -ForegroundColor Green
git add .

# Commit changes
Write-Host "💬 Committing..." -ForegroundColor Green
git commit -m "Fix: Medium blog posts integration - removed expired API key, added AllOrigins proxy, updated fallback posts with real Medium links, enhanced UI and error handling"

# Check if remote exists
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/namanvashishtha/Portfolio.git
}

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "✅ SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
Write-Host "🔗 https://github.com/namanvashishtha/Portfolio" -ForegroundColor Cyan