// Visa Page Renderer - Dynamically loads visa data

// All visa data (simplified - would import from visa-data.js)
const visaData = {
    // ASIA-PACIFIC
    china: {
        name: "China",
        flag: "🇨🇳",
        region: "Asia-Pacific",
        work: {
            visaType: "Engineer/Specialist in Humanities/International Services",
            visaCode: "技術・人文知識・国際業務",
            required: true,
            processingTime: "1-3 months",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "1 year (renewable)",
            extension: "Yes",
            documents: [
                "Passport (valid 6+ months beyond stay)",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm, white background, within 6 months)",
                "Certificate of Eligibility (COE) from employer",
                "Employment contract",
                "University degree (authenticated)",
                "Resume/CV",
                "Company registration documents"
            ],
            totalDocuments: 8,
            prepTime: "2-4 weeks",
            steps: [
                { step: 1, action: "Secure job offer from Japanese company", location: "Remote/Interviews", time: "Varies", cost: "Free" },
                { step: 2, action: "Employer applies for COE", location: "Immigration Japan", time: "1-3 months", cost: "Free" },
                { step: 3, action: "Receive COE", location: "Mail", time: "1-2 weeks", cost: "Shipping" },
                { step: 4, action: "Prepare documents (authentication)", location: "China", time: "1-2 weeks", cost: "¥5,000" },
                { step: 5, action: "Submit visa application", location: "Japanese Embassy", time: "Same day", cost: "¥4,000" },
                { step: 6, action: "Processing", location: "N/A", time: "5-7 days", cost: "Free" },
                { step: 7, action: "Collect visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: "Job Search & COE: 1-3 months",
                stage2: "Document Prep: 1-2 weeks", 
                stage3: "Visa Processing: 5-7 days",
                total: "2-4 months"
            },
            costs: {
                visaFee: 4000,
                authentication: 5000,
                translation: 10000,
                total: "~¥19,000",
                totalUSD: "$127"
            },
            residency: {
                years: "10 years",
                income: "¥3,000,000/year",
                language: "N2 Japanese",
                path: "After 10 years on work visa, eligible for permanent residency. Highly skilled professionals: 1-3 years."
            },
            faq: [
                { q: "Can I change jobs while on this visa?", a: "Yes, but new employer must notify immigration within 15 days. New job must be in same visa category." },
                { q: "Do I need to speak Japanese?", a: "Not required for visa, but most jobs require business-level Japanese (N2-N3)." },
                { q: "Can I bring family?", a: "Yes, spouse and children can apply for Dependent visas after you establish residence." }
            ]
        },
        study: {
            visaType: "Student Visa",
            visaCode: "留学",
            required: true,
            processingTime: "1-3 months",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "Duration of study + 1-3 months",
            extension: "Yes",
            documents: [
                "Passport",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm)",
                "COE from school",
                "Admission letter",
                "Financial proof (¥1,000,000+/year)",
                "Academic transcripts",
                "Statement of purpose"
            ],
            totalDocuments: 8,
            prepTime: "2-3 weeks",
            steps: [
                { step: 1, action: "Apply to Japanese school", location: "Online", time: "2-4 months", cost: "Application fees" },
                { step: 2, action: "Receive admission & COE", location: "Mail", time: "2-3 months", cost: "Free" },
                { step: 3, action: "Prepare financial documents", location: "Bank", time: "1 week", cost: "Free" },
                { step: 4, action: "Submit visa application", location: "Embassy", time: "Same day", cost: "¥4,000" },
                { step: 5, action: "Processing", location: "N/A", time: "1-2 weeks", cost: "Free" },
                { step: 6, action: "Collect visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: "School Application: 2-4 months",
                stage2: "COE Processing: 2-3 months",
                stage3: "Visa Processing: 1-2 weeks",
                total: "4-7 months"
            },
            costs: {
                visaFee: 4000,
                authentication: 3000,
                translation: 5000,
                total: "~¥12,000",
                totalUSD: "$80"
            },
            residency: {
                years: "10 years total",
                income: "N/A (student)",
                language: "N2 recommended",
                path: "After graduation, switch to work visa. Time as student counts toward PR."
            },
            faq: [
                { q: "Can I work part-time?", a: "Yes, up to 28 hours/week during term, 40 hours/week during breaks." },
                { q: "Can I stay after graduation?", a: "Yes, can apply for work visa if you find employment related to your studies." },
                { q: "Do I need health insurance?", a: "Yes, mandatory enrollment in National Health Insurance after arrival." }
            ]
        },
        tourist: {
            visaType: "Tourist Visa",
            visaCode: "短期滞在",
            required: true,
            processingTime: "5-7 working days",
            costYen: "¥0",
            costUSD: "$0",
            validity: "15-90 days",
            extension: false,
            documents: [
                "Passport (6+ months validity)",
                "Visa Application Form",
                "Photo",
                "Flight itinerary",
                "Hotel reservations",
                "Bank statement (¥500,000+)",
                "Employment letter"
            ],
            totalDocuments: 7,
            prepTime: "1-2 weeks",
            steps: [
                { step: 1, action: "Book flights and hotel", location: "Online", time: "1-3 days", cost: "Ticket cost" },
                { step: 2, action: "Prepare financial documents", location: "Bank", time: "3-5 days", cost: "Free" },
                { step: 3, action: "Complete application", location: "Home", time: "1 hour", cost: "Free" },
                { step: 4, action: "Submit to embassy", location: "Embassy", time: "Same day", cost: "Free" },
                { step: 5, action: "Processing", location: "N/A", time: "5-7 days", cost: "Free" },
                { step: 6, action: "Collect passport", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: "Travel Planning: 1-2 weeks",
                stage2: "Doc Prep: 1 week",
                stage3: "Visa Processing: 5-7 days",
                total: "2-4 weeks"
            },
            costs: {
                visaFee: 0,
                authentication: 0,
                translation: 0,
                total: "Free",
                totalUSD: "$0"
            },
            residency: {
                years: "N/A",
                income: "N/A",
                language: "None",
                path: "Cannot convert. Must leave and apply for work/study visa from China."
            },
            faq: [
                { q: "Can I extend my stay?", a: "Extensions are rarely granted for tourist visas. Must leave and reapply." },
                { q: "Can I work remotely?", a: "Legally unclear. Tourist visa is for tourism, not remote work." },
                { q: "Can I visit multiple times?", a: "Yes, but immigration may question frequent visits." }
            ]
        },
        residency: {
            visaType: "Permanent Resident",
            visaCode: "永住者",
            required: true,
            processingTime: "6-12 months",
            costYen: "¥8,000",
            costUSD: "$53",
            validity: "7 years",
            extension: true,
            documents: [
                "Permanent Residence Application",
                "Photo",
                "Reason letter",
                "Passport and residence card",
                "Residence proof",
                "Employment and tax certificates (5 years)",
                "Asset documentation",
                "Family documents"
            ],
            totalDocuments: 8,
            prepTime: "1-3 months",
            steps: [
                { step: 1, action: "Meet residency requirements", location: "Japan", time: "10 years", cost: "Living costs" },
                { step: 2, action: "Prepare documentation", location: "Japan", time: "2-4 weeks", cost: "Fees vary" },
                { step: 3, action: "Submit to Immigration Bureau", location: "Regional office", time: "Same day", cost: "¥8,000" },
                { step: 4, action: "Possible interview", location: "Immigration Office", time: "30-60 min", cost: "Free" },
                { step: 5, action: "Background check", location: "N/A", time: "6-12 months", cost: "Free" },
                { step: 6, action: "Approval and card collection", location: "Immigration Office", time: "1 day", cost: "¥1,600" }
            ],
            timeline: {
                stage1: "Residency Period: 10 years",
                stage2: "Application Prep: 1-3 months",
                stage3: "Processing: 6-12 months",
                total: "10-11 years"
            },
            costs: {
                visaFee: 8000,
                authentication: 5000,
                translation: 0,
                total: "~¥13,000",
                totalUSD: "$87"
            },
            residency: {
                years: "Obtained",
                income: "No minimum",
                language: "N2 recommended",
                path: "Permanent residency achieved! Can apply for citizenship after 5 years."
            },
            faq: [
                { q: "Can I lose permanent residency?", a: "Yes, if you leave Japan for >1 year without re-entry permit, or commit serious crimes." },
                { q: "Do I need to renew?", a: "Residence card expires every 7 years, but PR status is permanent." },
                { q: "Can family get PR too?", a: "Spouse can apply after 1 year of marriage + residence. Children included." }
            ]
        }
    },

    // UNITED STATES
    us: {
        name: "United States",
        flag: "🇺🇸",
        region: "North America",
        work: {
            visaType: "Engineer/Specialist in Humanities/International Services",
            visaCode: "技術・人文知識・国際業務",
            required: true,
            processingTime: "4-8 weeks (after COE)",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "1-3 years",
            extension: "Yes",
            documents: [
                "US Passport (6+ months validity)",
                "Visa Application Form",
                "Photo (2in × 2in)",
                "Certificate of Eligibility",
                "Employment offer letter",
                "University degree (BS/BA minimum)",
                "Resume/CV",
                "Company documents"
            ],
            totalDocuments: 8,
            prepTime: "3-4 weeks",
            steps: [
                { step: 1, action: "Secure job offer from Japan", location: "Remote", time: "1-3 months", cost: "Interview costs" },
                { step: 2, action: "Employer obtains COE", location: "Japan", time: "1-3 months", cost: "Free" },
                { step: 3, action: "Receive COE", location: "US Mail", time: "1-2 weeks", cost: "Shipping" },
                { step: 4, action: "Notarize documents", location: "US Notary", time: "2-3 weeks", cost: "$50-150" },
                { step: 5, action: "Submit to Japanese Embassy/Consulate", location: "DC, NYC, LA, SF, Chicago", time: "Same day", cost: "¥4,000" },
                { step: 6, action: "Processing", location: "N/A", time: "4-8 weeks", cost: "Free" },
                { step: 7, action: "Collect passport with visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: "Job Search & COE: 2-4 months",
                stage2: "Document Prep: 3-4 weeks",
                stage3: "Embassy Processing: 4-8 weeks",
                total: "3-6 months"
            },
            costs: {
                visaFee: 4000,
                authentication: 15000,
                translation: 20000,
                total: "~¥39,000",
                totalUSD: "$260"
            },
            residency: {
                years: "10 years",
                income: "¥3,000,000/year (~$20,000)",
                language: "N2 Japanese",
                path: "Work visa holders apply for PR after 10 years. Highly Skilled Professionals: 1-3 years via points."
            },
            faq: [
                { q: "Do I need to know Japanese for the visa?", a: "No, but most jobs require business Japanese. IT roles may accept English." },
                { q: "Can I change employers?", a: "Yes, new employer must be in same visa category. Notify immigration within 15 days." },
                { q: "Can I work remotely for US company?", a: "No, work visa requires employment with Japanese entity." }
            ]
        },
        study: {
            visaType: "Student Visa",
            visaCode: "留学",
            required: true,
            processingTime: "2-6 weeks",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "Duration of study",
            extension: "Yes",
            documents: [
                "US Passport",
                "Visa Application Form",
                "Photo (2in × 2in)",
                "COE from school",
                "Admission letter",
                "Proof of funds ($20,000+/year)",
                "Academic transcripts",
                "Statement of purpose"
            ],
            totalDocuments: 8,
            prepTime: "3-4 weeks",
            steps: [
                { step: 1, action: "Apply to Japanese school", location: "Online", time: "3-6 months", cost: "$50-100" },
                { step: 2, action: "Receive admission and COE", location: "Mail", time: "2-3 months", cost: "Shipping" },
                { step: 3, action: "Prepare financial proof", location: "Bank", time: "1 week", cost: "Free" },
                { step: 4, action: "Submit visa application", location: "Japanese Consulate", time: "Same day", cost: "¥4,000" },
                { step: 5, action: "Processing", location: "N/A", time: "2-6 weeks", cost: "Free" },
                { step: 6, action: "Collect visa", location: "Consulate", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: "School Application: 3-6 months",
                stage2: "COE Processing: 2-3 months",
                stage3: "Visa Processing: 2-6 weeks",
                total: "6-10 months"
            },
            costs: {
                visaFee: 4000,
                authentication: 10000,
                translation: 10000,
                total: "~¥24,000",
                totalUSD: "$160"
            },
            residency: {
                years: "10 years total",
                income: "N/A",
                language: "N2 recommended",
                path: "After graduation, apply for work visa. Student time counts toward PR."
            },
            faq: [
                { q: "How many hours can I work?", a: "28 hours/week during term, 40 hours during breaks." },
                { q: "Do I need Japanese language school first?", a: "Only if attending Japanese-taught program. Many universities offer English degrees." },
                { q: "What about healthcare?", a: "Mandatory National Health Insurance. ~$100-150/month." }
            ]
        },
        tourist: {
            visaType: "Not Required (Visa Waiver)",
            visaCode: "N/A",
            required: false,
            processingTime: "N/A",
            costYen: "¥0",
            costUSD: "$0",
            validity: "90 days",
            extension: false,
            documents: [
                "US Passport (valid for stay)",
                "Return/onward ticket",
                "Proof of accommodation",
                "Sufficient funds (if asked)"
            ],
            totalDocuments: 0,
            prepTime: "0 days",
            steps: [
                { step: 1, action: "Book flight to Japan", location: "Online", time: "Immediate", cost: "Ticket" },
                { step: 2, action: "Complete immigration form on flight", location: "Airplane", time: "15 min", cost: "Free" },
                { step: 3, action: "Present passport at immigration", location: "Airport", time: "5-30 min", cost: "Free" },
                { step: 4, action: "Receive 90-day entry stamp", location: "Immigration", time: "Immediate", cost: "Free" }
            ],
            timeline: {
                stage1: "Travel Planning: As needed",
                stage2: "Arrival: 30 minutes",
                stage3: "Enjoy Japan: 90 days",
                total: "90 days max"
            },
            costs: {
                visaFee: 0,
                authentication: 0,
                translation: 0,
                total: "Free",
                totalUSD: "$0"
            },
            residency: {
                years: "N/A",
                income: "N/A",
                language: "None",
                path: "Cannot convert. Must leave Japan and apply for work/study visa from US."
            },
            faq: [
                { q: "Can I extend beyond 90 days?", a: "No extensions for visa waiver. Must leave and re-enter (not guaranteed)." },
                { q: "Can I work remotely?", a: "Gray area. Technically tourist visa is for tourism only." },
                { q: "What if I want to stay longer?", a: "Must leave Japan and apply for appropriate visa from US. Cannot change status while in Japan." }
            ]
        },
        residency: {
            visaType: "Permanent Resident",
            visaCode: "永住者",
            required: true,
            processingTime: "6-12 months",
            costYen: "¥8,000",
            costUSD: "$53",
            validity: "7 years",
            extension: true,
            documents: [
                "Application for Permanent Residence",
                "Photo (2in × 2in)",
                "Reason letter",
                "Passport and residence card",
                "Residence proof",
                "Employment and tax certificates (5 years)",
                "Asset documentation",
                "Family documents"
            ],
            totalDocuments: 8,
            prepTime: "2-3 months",
            steps: [
                { step: 1, action: "Meet 10-year residency requirement", location: "Japan", time: "10 years", cost: "Living costs" },
                { step: 2, action: "Prepare documentation", location: "Japan", time: "1-2 months", cost: "Fees vary" },
                { step: 3, action: "Submit to Immigration Bureau", location: "Regional office", time: "Same day", cost: "¥8,000" },
                { step: 4, action: "Possible interview", location: "Immigration office", time: "30-60 min", cost: "Free" },
                { step: 5, action: "Background check processing", location: "N/A", time: "6-12 months", cost: "Free" },
                { step: 6, action: "Approval and card collection", location: "Immigration office", time: "1 day", cost: "¥1,600" }
            ],
            timeline: {
                stage1: "Residency Period: 10 years",
                stage2: "Application Prep: 2-3 months",
                stage3: "Processing: 6-12 months",
                total: "10-11 years"
            },
            costs: {
                visaFee: 8000,
                authentication: 10000,
                translation: 0,
                total: "~¥18,000",
                totalUSD: "$120"
            },
            residency: {
                years: "Obtained",
                income: "No minimum",
                language: "N2 recommended",
                path: "Permanent residency achieved! Eligible for citizenship after 5 more years as PR."
            },
            faq: [
                { q: "Can I vote with PR?", a: "No, voting rights require Japanese citizenship." },
                { q: "Do I pay US taxes too?", a: "Yes, US citizens must file taxes worldwide. Japan-US tax treaty prevents double taxation." },
                { q: "Can I keep my US citizenship?", a: "Yes, permanent residency doesn't affect US citizenship. Japan doesn't allow dual citizenship." }
            ]
        }
    }
};

// Render page based on URL parameters
function renderVisaPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const countryCode = urlParams.get('country') || 'us';
    const visaType = urlParams.get('type') || 'work';
    
    const data = visaData[countryCode];
    if (!data) {
        document.body.innerHTML = '<h1>Country not found</h1>';
        return;
    }
    
    const visa = data[visaType];
    if (!visa) {
        document.body.innerHTML = '<h1>Visa type not found</h1>';
        return;
    }

    // Update page title
    document.title = `${data.name} to Japan ${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa | Japan Visa Guide`;
    
    // Update header
    document.getElementById('country-name').textContent = data.name;
    document.getElementById('header-country').textContent = data.name;
    document.getElementById('header-visa').textContent = visaType.charAt(0).toUpperCase() + visaType.slice(1);
    document.getElementById('country-flag').textContent = data.flag;
    
    const categoryLink = document.getElementById('category-link');
    categoryLink.textContent = `${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa`;
    categoryLink.href = `${visaType}-visa-guide.html`;
    
    // Update badge
    const badge = document.getElementById('visa-badge');
    if (visa.required) {
        badge.textContent = 'Visa Required';
        badge.className = 'badge badge-warning';
    } else {
        badge.textContent = 'Visa Not Required';
        badge.className = 'badge badge-success';
    }
    
    document.getElementById('processing-time').textContent = `⏱️ Processing: ${visa.processingTime}`;
    
    // Update quick summary
    document.getElementById('summary-visa-type').textContent = visa.visaType;
    document.getElementById('summary-cost').textContent = visa.costYen;
    document.getElementById('summary-validity').textContent = visa.validity;
    document.getElementById('summary-processing').textContent = visa.processingTime;
    document.getElementById('summary-extension').textContent = visa.extension ? 'Yes' : 'No';
    document.getElementById('summary-documents').textContent = visa.totalDocuments;
    
    // Update requirements tab
    const visaRequiredBox = document.getElementById('visa-required-box');
    if (visa.required) {
        visaRequiredBox.innerHTML = `
            <div class="req-status">
                <span class="status-icon">⚠️</span>
                <div class="req-text">
                    <h3>Visa Required</h3>
                    <p>Citizens of ${data.name} must obtain a visa before entering Japan for ${visaType} purposes.</p>
                </div>
            </div>
        `;
    } else {
        visaRequiredBox.innerHTML = `
            <div class="req-status">
                <span class="status-icon">✅</span>
                <div class="req-text">
                    <h3>Visa Not Required</h3>
                    <p>${data.name} citizens can enter Japan visa-free for ${visa.validity}.</p>
                </div>
            </div>
        `;
        visaRequiredBox.classList.add('not-required');
    }
    
    document.getElementById('req-visa-type').textContent = visa.visaType;
    document.getElementById('req-visa-code').textContent = visa.visaCode;
    document.getElementById('req-processing').textContent = visa.processingTime;
    document.getElementById('req-fee').textContent = `${visa.costYen} (${visa.costUSD})`;
    document.getElementById('req-validity').textContent = visa.validity;
    document.getElementById('req-extension').textContent = visa.extension ? 'Yes' : 'No';
    
    // Update documents tab
    const docList = document.getElementById('document-list');
    docList.innerHTML = visa.documents.map((doc, i) => `
        <div class="doc-item">
            <div class="doc-checkbox" onclick="this.classList.toggle('checked')"></div>
            <div class="doc-text">
                <strong>${i + 1}. ${doc}</strong>
            </div>
        </div>
    `).join('');
    
    document.getElementById('doc-count').textContent = visa.totalDocuments;
    document.getElementById('prep-time').textContent = visa.prepTime;
    
    // Update process tab
    const processList = document.getElementById('process-list');
    processList.innerHTML = visa.steps.map(step => `
        <div class="process-step">
            <div class="step-number">${step.step}</div>
            <div class="step-content">
                <h3>${step.action}</h3>
                <div class="step-meta">
                    <span class="step-location">📍 ${step.location}</span>
                    <span class="step-time">⏱️ ${step.time}</span>
                    <span class="step-cost">💴 ${step.cost}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update timeline tab
    document.getElementById('timeline-total').textContent = visa.timeline.total;
    
    const costTable = document.getElementById('cost-table');
    costTable.innerHTML = `
        <tr><th>Item</th><th>Cost</th></tr>
        <tr><td>Visa Application Fee</td><td>¥${visa.costs.visaFee.toLocaleString()}</td></tr>
        <tr><td>Document Authentication</td><td>¥${visa.costs.authentication.toLocaleString()}</td></tr>
        <tr><td>Translation Services</td><td>¥${visa.costs.translation.toLocaleString()}</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>${visa.costs.total}</strong></td></tr>
    `;
    
    document.getElementById('total-cost-yen').textContent = visa.costs.total;
    document.getElementById('total-cost-usd').textContent = visa.costs.totalUSD;
    
    // Update residency tab
    document.getElementById('residency-content').innerHTML = `
        <div class="residency-path">
            <h3>Path to Permanent Residency</h3>
            <div class="residency-grid">
                <div class="residency-item">
                    <div class="value">${visa.residency.years}</div>
                    <div class="label">Required Residency</div>
                </div>
                <div class="residency-item">
                    <div class="value">${visa.residency.income}</div>
                    <div class="label">Minimum Income</div>
                </div>
                <div class="residency-item">
                    <div class="value">${visa.residency.language}</div>
                    <div class="label">Language Requirement</div>
                </div>
            </div>
            <div class="residency-description">
                <h4>Pathway Description</h4>
                <p>${visa.residency.path}</p>
            </div>
        </div>
    `;
    
    // Update FAQ tab
    document.getElementById('faq-content').innerHTML = visa.faq.map((item, i) => `
        <div class="faq-item" onclick="this.classList.toggle('active')">
            <div class="faq-question">${item.q}</div>
            <div class="faq-answer">${item.a}</div>
        </div>
    `).join('');
    
    // Update related countries
    const relatedCountries = Object.keys(visaData).filter(c => c !== countryCode);
    document.getElementById('related-countries').innerHTML = relatedCountries.map(c => `
        <a href="visa-page.html?country=${c}&type=${visaType}" class="related-link">
            <span>${visaData[c].flag}</span>
            <span>${visaData[c].name} ${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa</span>
        </a>
    `).join('');
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderVisaPage);
} else {
    renderVisaPage();
}
