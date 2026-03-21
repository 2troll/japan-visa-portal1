// Generate all 56 visa pages (14 countries × 4 visa types)

const countries = [
    { code: 'china', name: 'China', flag: '🇨🇳' },
    { code: 'korea', name: 'South Korea', flag: '🇰🇷' },
    { code: 'thailand', name: 'Thailand', flag: '🇹🇭' },
    { code: 'philippines', name: 'Philippines', flag: '🇵🇭' },
    { code: 'vietnam', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'indonesia', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'us', name: 'United States', flag: '🇺🇸' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'germany', name: 'Germany', flag: '🇩🇪' },
    { code: 'france', name: 'France', flag: '🇫🇷' },
    { code: 'spain', name: 'Spain', flag: '🇪🇸' },
    { code: 'brazil', name: 'Brazil', flag: '🇧🇷' },
    { code: 'argentina', name: 'Argentina', flag: '🇦🇷' },
    { code: 'uruguay', name: 'Uruguay', flag: '🇺🇾' }
];

const visaTypes = ['work', 'study', 'tourist', 'residency'];

// Generate redirect pages
const fs = require('fs');
const path = require('path');

const visaDir = path.join(__dirname, 'visas');

// Create visas directory if not exists
if (!fs.existsSync(visaDir)) {
    fs.mkdirSync(visaDir, { recursive: true });
}

// Generate pages for each country + visa type combination
countries.forEach(country => {
    visaTypes.forEach(visaType => {
        const filename = `${country.code}-${visaType}.html`;
        const filepath = path.join(visaDir, filename);
        
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=../visa-page.html?country=${country.code}&type=${visaType}">
    <title>${country.name} to Japan ${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa</title>
</head>
<body>
    <p>Redirecting to ${country.name} ${visaType} visa information...</p>
    <p>If not redirected, <a href="../visa-page.html?country=${country.code}&type=${visaType}">click here</a>.</p>
</body>
</html>`;
        
        fs.writeFileSync(filepath, html);
        console.log(`Created: visas/${filename}`);
    });
});

console.log(`\n✅ Generated ${countries.length * visaTypes.length} visa pages successfully!`);
console.log('\nTo view a specific visa page:');
console.log('  - Open: visas/[country]-[visa-type].html');
console.log('  - Example: visas/us-work.html');
