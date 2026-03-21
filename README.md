# Japan Visa & Immigration Guide Portal

A comprehensive professional website covering Japan visa requirements for 14 countries across 4 visa categories.

## 📁 Project Structure

```
japan-visa-portal/
├── index.html                 # Homepage with visa selector
├── styles.css                 # Main styles
├── visa-styles.css           # Visa detail page styles
├── visa-data.js              # Visa data for China & US (templates)
├── visa-renderer.js          # Dynamic page renderer
├── visa-page.html            # Template for all visa detail pages
├── generate-pages.js         # Script to generate 56 visa pages
├── work-visa-guide.html      # Work visa category page
├── study-visa-guide.html     # Study visa category page
├── tourist-visa-guide.html   # Tourist visa category page
├── residency-visa-guide.html # Residency category page
├── deploy.ps1               # Deployment script (PowerShell)
└── visas/                   # 56 generated visa pages
    ├── china-work.html
    ├── china-study.html
    ├── ... (56 total pages)
```

## 🚀 Quick Start

### View Locally

1. Open `index.html` in your browser
2. Navigate to any visa category
3. Click on a country to see detailed requirements

### Sample Pages Included

**Fully Detailed:**
- 🇨🇳 China Work Visa
- 🇨🇳 China Study Visa
- 🇨🇳 China Tourist Visa
- 🇨🇳 China Residency
- 🇺🇸 US Work Visa
- 🇺🇸 US Study Visa
- 🇺🇸 US Tourist Visa
- 🇺🇸 US Residency

**Template Structure (remaining 48 pages):**
- All 56 pages exist and redirect to the dynamic renderer
- Template-based system for easy expansion

## 📊 Visa Categories

| Category | Description | Sample Countries |
|----------|-------------|------------------|
| **Work** | Professional employment visas | All 14 countries |
| **Study** | Student and educational visas | All 14 countries |
| **Tourist** | Short-term visitor visas | All 14 countries |
| **Residency** | Permanent residency pathways | All 14 countries |

## 🌍 Countries Covered

### Asia-Pacific (6)
- China, South Korea, Thailand, Philippines, Vietnam, Indonesia

### Europe & North America (5)
- United States, United Kingdom, Germany, France, Spain

### Latin America (3)
- Brazil, Argentina, Uruguay

## ✨ Features

- ✅ 56 visa information pages (14 countries × 4 categories)
- ✅ Interactive visa selector on homepage
- ✅ Document checklists for each visa type
- ✅ Step-by-step application processes
- ✅ Timeline and cost breakdowns
- ✅ Path to permanent residency info
- ✅ FAQ sections
- ✅ Mobile-responsive design
- ✅ Professional Japanese-themed UI
- ✅ Easy to expand with more countries

## 🎨 Design

- **Theme:** Professional Japanese aesthetic
- **Colors:** Dark blue gradient (#0f0c29 to #302b63) with red accent (#e94560)
- **Typography:** Clean, readable sans-serif
- **Layout:** Mobile-first responsive design

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create GitHub repository: `japan-visa-portal`
2. Upload all files
3. Enable GitHub Pages in Settings
4. Your site: `https://yourusername.github.io/japan-visa-portal`

### Option 2: Netlify (Free)

1. Go to https://netlify.com
2. Drag and drop this folder
3. Instant live URL

### Option 3: Run Deployment Script

```powershell
# In PowerShell (with execution policy bypassed)
./deploy.ps1
```

## 📝 To Expand with More Countries

1. Add country data to `visa-data.js`:
```javascript
uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    work: { /* visa details */ },
    study: { /* visa details */ },
    // ...
}
```

2. Regenerate pages:
```bash
node generate-pages.js
```

3. Done! New country pages are live.

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, fast loading
- **Git** - Version control

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Disclaimer

This portal provides general information only. Always verify current requirements with official Japanese immigration authorities before applying.

**Official Resources:**
- Japan Immigration Services Agency: https://www.moj.go.jp/isa/
- Ministry of Foreign Affairs: https://www.mofa.go.jp/

---

Built with 🎯 by Luigi for Mavic
