# Japan Visa & Immigration Portal - Deployment Script

Write-Host "Japan Visa Portal Deployment" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Git found: $gitVersion" -ForegroundColor Green
    } else {
        throw "Git not found"
    }
} catch {
    Write-Host "ERROR: Git not found!" -ForegroundColor Red
    Write-Host "Please install Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Set-Location "C:\Users\Luigi\.openclaw\workspace\japan-visa-portal"

Write-Host ""
Write-Host "STEP 1: Create GitHub repository" -ForegroundColor Yellow
Write-Host "    a) Go to: https://github.com/new" -ForegroundColor White
Write-Host "    b) Repository name: japan-visa-portal" -ForegroundColor White
Write-Host "    c) Click 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "    Then paste the repository URL below:"
Write-Host "    (Example: https://github.com/YOURUSERNAME/japan-visa-portal.git)"
$repoUrl = Read-Host "Repository URL"

if ($repoUrl) {
    git remote add origin $repoUrl
    Write-Host "Remote added successfully" -ForegroundColor Green
} else {
    Write-Host "ERROR: No URL provided. Exiting." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "STEP 2: Pushing to GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Japan Visa Portal - Complete" 2>$null
git branch -M main
$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "Code pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "Push may need authentication. Check your browser." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "STEP 3: Enable GitHub Pages" -ForegroundColor Yellow
Write-Host "    a) Go to your repository on GitHub" -ForegroundColor White
Write-Host "    b) Click 'Settings' tab" -ForegroundColor White
Write-Host "    c) Click 'Pages' in left sidebar" -ForegroundColor White
Write-Host "    d) Select 'main' branch and '/ (root)' folder" -ForegroundColor White
Write-Host "    e) Click 'Save'" -ForegroundColor White
Write-Host ""

# Open GitHub Pages settings
if ($repoUrl -match "github\.com[:/](.+?)\.git") {
    $usernameRepo = $matches[1]
    $pagesUrl = "https://github.com/$usernameRepo/settings/pages"
    Write-Host "Opening GitHub Pages settings..." -ForegroundColor Cyan
    Start-Process $pagesUrl
    
    $username = $usernameRepo.Split('/')[0]
    $liveUrl = "https://$username.github.io/japan-visa-portal"
    Write-Host ""
    Write-Host "Your website will be live at:" -ForegroundColor Green
    Write-Host "    $liveUrl" -ForegroundColor White
}

Write-Host ""
Write-Host "Note: GitHub Pages may take 1-2 minutes to deploy." -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to exit"
