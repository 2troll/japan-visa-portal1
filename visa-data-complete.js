// Japan Visa Data - Complete Database for All 14 Countries × 4 Categories
const visaDatabase = {
    // === ASIA-PACIFIC ===
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
            validity: "1-3 years",
            extension: "Yes",
            documents: [
                "Passport (valid 6+ months beyond stay)",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm, white background)",
                "Certificate of Eligibility (COE) from employer",
                "Employment contract",
                "University degree (authenticated by Chinese government)",
                "Resume/CV",
                "Company registration documents"
            ],
            totalDocuments: 8,
            prepTime: "2-4 weeks",
            steps: [
                { step: 1, action: "Secure job offer from Japanese company", location: "Remote", time: "1-3 months", cost: "Free" },
                { step: 2, action: "Employer applies for COE", location: "Japan Immigration", time: "1-3 months", cost: "Free" },
                { step: 3, action: "Authenticate degree at Chinese authorities", location: "China", time: "1-2 weeks", cost: "¥500-1000" },
                { step: 4, action: "Submit visa application", location: "Japanese Embassy (Beijing/Shanghai/Guangzhou)", time: "Same day", cost: "¥4,000" },
                { step: 5, action: "Processing", location: "N/A", time: "5-7 days", cost: "Free" },
                { step: 6, action: "Collect visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: { stage1: "Job & COE: 1-3 months", stage2: "Docs: 2-4 weeks", stage3: "Visa: 5-7 days", total: "2-4 months" },
            costs: { visaFee: 4000, authentication: 5000, translation: 10000, total: "~¥19,000", totalUSD: "$127" },
            residency: { years: "10 years", income: "¥3,000,000/year", language: "N2 Japanese", path: "Work visa → 10 years → PR. Highly skilled: 1-3 years." },
            faq: [
                { q: "Do I need HSK Chinese certificate?", a: "No, but Japanese language ability (N2) is highly recommended for jobs." },
                { q: "Can I change employers?", a: "Yes, but new job must be in same visa category. Notify immigration within 15 days." },
                { q: "Is degree authentication mandatory?", a: "Yes, Chinese degrees must be authenticated by MOE and Ministry of Foreign Affairs." }
            ]
        },
        study: {
            visaType: "Student Visa",
            visaCode: "留学",
            required: true,
            processingTime: "1-3 months",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "Duration of study",
            extension: "Yes",
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof (¥1,000,000+/year)", "Academic transcripts", "Statement of purpose"],
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
            timeline: { stage1: "School App: 2-4 months", stage2: "COE: 2-3 months", stage3: "Visa: 1-2 weeks", total: "4-7 months" },
            costs: { visaFee: 4000, authentication: 3000, translation: 5000, total: "~¥12,000", totalUSD: "$80" },
            residency: { years: "10 years total", income: "N/A", language: "N2 recommended", path: "Student → Work visa → 10 years → PR" },
            faq: [
                { q: "Can I work part-time?", a: "Yes, 28 hours/week during term, 40 hours during breaks." },
                { q: "Do I need Japanese for university?", a: "Depends on program. Many offer English-taught degrees." },
                { q: "Can I stay after graduation?", a: "Yes, can apply for work visa if you find employment." }
            ]
        },
        tourist: {
            visaType: "Tourist Visa (Required)",
            visaCode: "短期滞在",
            required: true,
            processingTime: "5-7 days",
            costYen: "¥0",
            costUSD: "$0",
            validity: "15-90 days",
            extension: false,
            documents: ["Passport (6+ months)", "Visa Application Form", "Photo", "Flight itinerary", "Hotel bookings", "Bank statement (¥500,000+)", "Employment letter"],
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
            timeline: { stage1: "Planning: 1-2 weeks", stage2: "Docs: 1 week", stage3: "Processing: 5-7 days", total: "2-4 weeks" },
            costs: { visaFee: 0, authentication: 0, translation: 0, total: "Free", totalUSD: "$0" },
            residency: { years: "N/A", income: "N/A", language: "None", path: "Cannot convert. Must return to China and apply for work/study visa." },
            faq: [
                { q: "Can I extend tourist visa?", a: "Extensions rarely granted. Must leave and reapply." },
                { q: "Can I work remotely?", a: "Tourist visa is for tourism only. Remote work is legally unclear." },
                { q: "Multiple entry allowed?", a: "Usually single entry. Apply for multiple entry if needed." }
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
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs (5 years)", "Asset docs", "Family documents"],
            totalDocuments: 8,
            prepTime: "1-3 months",
            steps: [
                { step: 1, action: "Meet 10-year requirement", location: "Japan", time: "10 years", cost: "Living costs" },
                { step: 2, action: "Prepare documentation", location: "Japan", time: "1-2 months", cost: "Fees vary" },
                { step: 3, action: "Submit to Immigration", location: "Regional office", time: "Same day", cost: "¥8,000" },
                { step: 4, action: "Interview (if needed)", location: "Immigration", time: "30-60 min", cost: "Free" },
                { step: 5, action: "Background check", location: "N/A", time: "6-12 months", cost: "Free" },
                { step: 6, action: "Collect PR card", location: "Immigration", time: "1 day", cost: "¥1,600" }
            ],
            timeline: { stage1: "Residency: 10 years", stage2: "Prep: 1-3 months", stage3: "Processing: 6-12 months", total: "10-11 years" },
            costs: { visaFee: 8000, authentication: 5000, translation: 0, total: "~¥13,000", totalUSD: "$87" },
            residency: { years: "Obtained", income: "No minimum", language: "N2 recommended", path: "Permanent residency achieved! Can apply for citizenship after 5 years." },
            faq: [
                { q: "Can I lose PR status?", a: "Yes, if absent >1 year without re-entry permit or commit serious crimes." },
                { q: "Do I need to renew?", a: "Residence card expires every 7 years, but PR status is permanent." },
                { q: "Can family get PR?", a: "Spouse can apply after 1 year of marriage + residence." }
            ]
        }
    },

    // More countries will be added in subsequent writes...
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = visaDatabase;
}
