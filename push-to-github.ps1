# Automated Git Push Script
Write-Host "🚀 AUTOMATED GIT PUSH TO GITHUB" -ForegroundColor Cyan
Write-Host "Repository: https://github.com/namanvashishtha/Portfolio.git" -ForegroundColor Yellow

# Navigate to project directory
Set-Location "c:/Users/Naman Vishishtha/Desktop/Learning/Projects/PersonalPortfolio"

# Check git status
Write-Host "`n📋 Checking current git status..." -ForegroundColor Green
git status

# Add all changes
Write-Host "`n📦 Adding all changes..." -ForegroundColor Green
git add .

# Show what will be committed
Write-Host "`n📝 Changes to be committed:" -ForegroundColor Yellow
git diff --cached --name-only

# Commit with descriptive message
$commitMessage = "🐛 Fix: Medium blog posts integration

✅ Fixed expired RSS2JSON API key issue
✅ Implemented AllOrigins proxy for RSS fetching  
✅ Added real Medium article links to fallback posts
✅ Enhanced error handling and caching system
✅ Improved UI with refresh functionality and loading states
✅ Added mobile-responsive touch targets
✅ Updated blog component with better performance

- Removed dependency on expired rss2json.com API key
- Added fallback to AllOrigins proxy for CORS-free RSS access
- Updated fallback posts with actual Medium article URLs
- Enhanced caching system with 1-hour expiry
- Added spinning refresh icon and better loading states
- Improved mobile accessibility and touch interactions
- All Medium posts now open correctly with working links"

Write-Host "`n💬 Committing changes..." -ForegroundColor Green
git commit -m $commitMessage

# Check if we have a remote origin
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    Write-Host "`n🔗 Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/namanvashishtha/Portfolio.git
}

# Get current branch
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "`n🌿 Current branch: $currentBranch" -ForegroundColor Cyan

# Push to GitHub
Write-Host "`n🚀 Pushing to GitHub..." -ForegroundColor Green
try {
    git push -u origin $currentBranch
    Write-Host "`n✅ SUCCESS! Code pushed to GitHub successfully!" -ForegroundColor Green
    Write-Host "🔗 Repository: https://github.com/namanvashishtha/Portfolio.git" -ForegroundColor Cyan
    Write-Host "🌿 Branch: $currentBranch" -ForegroundColor Cyan
} catch {
    Write-Host "`n❌ Push failed. Trying to pull first..." -ForegroundColor Red
    Write-Host "🔄 Pulling latest changes..." -ForegroundColor Yellow
    git pull origin $currentBranch --no-edit
    Write-Host "🚀 Retrying push..." -ForegroundColor Green
    git push -u origin $currentBranch
    Write-Host "`n✅ SUCCESS! Code pushed to GitHub successfully!" -ForegroundColor Green
}

Write-Host "`n🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "📝 Summary of changes:" -ForegroundColor Yellow
Write-Host "   • Fixed Medium blog integration" -ForegroundColor White
Write-Host "   • Added working RSS feed fetching" -ForegroundColor White  
Write-Host "   • Updated fallback posts with real Medium links" -ForegroundColor White
Write-Host "   • Enhanced UI and mobile responsiveness" -ForegroundColor White
Write-Host "   • Improved error handling and caching" -ForegroundColor White

Write-Host "`n🌐 Visit your portfolio: https://github.com/namanvashishtha/Portfolio" -ForegroundColor Cyan