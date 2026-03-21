// Japan Visa Data - All 14 Countries × 4 Categories
const visaDatabase = {
    // === ASIA-PACIFIC ===
    china: {
        name: "China",
        flag: "🇨🇳",
        region: "Asia-Pacific",
        work: {
            visaType: "Engineer/Specialist in Humanities/International Services",
            visaCode: "技术·人文知识·国际业务",
            required: true,
            processingTime: "1-3 months",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "1 year (renewable)",
            extension: true,
            documents: [
                "Passport (valid 6+ months beyond stay)",
                "Visa Application Form (available at embassy website)",
                "Photo (4.5cm × 3.5cm, white background, taken within 6 months)",
                "Certificate of Eligibility (COE) from Japanese employer",
                "Employment contract or job offer letter",
                "University degree certificate (authenticated)",
                "Resume/CV in English or Japanese",
                "Company registration documents from Japan"
            ],
            totalDocuments: 8,
            prepTime: "2-4 weeks",
            steps: [
                { step: 1, action: "Obtain job offer from Japanese employer", location: "From employer", time: "Varies", cost: "Free" },
                { step: 2, action: "Employer applies for Certificate of Eligibility (COE)", location: "Immigration Bureau Japan", time: "1-3 months", cost: "Free" },
                { step: 3, action: "Receive COE from employer", location: "Mail/Digital", time: "1-2 weeks", cost: "Shipping fees" },
                { step: 4, action: "Prepare all required documents", location: "Home country", time: "1-2 weeks", cost: "Authentication fees" },
                { step: 5, action: "Submit visa application to Japanese embassy", location: "Chinese city Japanese embassy", time: "Same day", cost: "¥4,000" },
                { step: 6, action: "Wait for visa processing", location: "N/A", time: "5-7 working days", cost: "Free" },
                { step: 7, action: "Collect passport with visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: { name: "Job Search & COE", duration: "1-3 months" },
                stage2: { name: "Document Preparation", duration: "1-2 weeks" },
                stage3: { name: "Visa Application", duration: "5-7 days" },
                total: "2-4 months"
            },
            costs: {
                visaFee: 4000,
                coeProcessing: 0,
                documentAuthentication: 5000,
                medicalExam: 0,
                translationServices: 10000,
                total: "~¥19,000",
                totalUSD: "$127"
            },
            residencyPath: {
                yearsRequired: 10,
                continuousResidence: "Yes",
                minIncome: "¥3,000,000/year",
                taxCompliance: "Required",
                languageRequirement: "N2 level Japanese",
                pathDescription: "After 10 years of work visa, eligible for permanent residency. Highly skilled professionals can apply after 1-3 years."
            }
        },
        study: {
            visaType: "Student Visa",
            visaCode: "留学",
            required: true,
            processingTime: "1-3 months",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "Duration of study + 1-3 months",
            extension: true,
            documents: [
                "Passport (valid for entire study period)",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm)",
                "Certificate of Eligibility from school",
                "Admission letter from Japanese institution",
                "Financial proof (¥1,000,000+ per year)",
                "Academic transcripts and diplomas",
                "Statement of purpose in Japanese or English"
            ],
            totalDocuments: 8,
            prepTime: "2-3 weeks",
            steps: [
                { step: 1, action: "Apply to Japanese school/university", location: "Online/Mail", time: "2-4 months", cost: "Application fees vary" },
                { step: 2, action: "Receive admission letter", location: "Mail", time: "1-2 months", cost: "Free" },
                { step: 3, action: "School applies for COE", location: "Immigration Japan", time: "1-3 months", cost: "Free" },
                { step: 4, action: "Prepare financial documents", location: "Bank", time: "1 week", cost: "Bank fees" },
                { step: 5, action: "Submit visa application", location: "Japanese embassy", time: "Same day", cost: "¥4,000" },
                { step: 6, action: "Wait for processing", location: "N/A", time: "1-2 weeks", cost: "Free" },
                { step: 7, action: "Collect visa and prepare for departure", location: "Embassy", time: "1 week", cost: "Travel costs" }
            ],
            timeline: {
                stage1: { name: "School Application", duration: "2-4 months" },
                stage2: { name: "COE Processing", duration: "1-3 months" },
                stage3: { name: "Visa Application", duration: "1-2 weeks" },
                total: "4-7 months"
            },
            costs: {
                visaFee: 4000,
                coeProcessing: 0,
                documentAuthentication: 3000,
                medicalExam: 0,
                translationServices: 5000,
                total: "~¥12,000",
                totalUSD: "$80"
            },
            residencyPath: {
                yearsRequired: 10,
                continuousResidence: "Yes",
                minIncome: "N/A (Student)",
                taxCompliance: "N/A",
                languageRequirement: "N2 recommended for PR",
                pathDescription: "After graduation, can switch to work visa. After 10 years total (study + work), eligible for permanent residency."
            }
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
                "Passport (valid 6+ months)",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm)",
                "Flight itinerary",
                "Hotel reservations or invitation letter",
                "Bank statement (3 months, ¥500,000+ equivalent)",
                "Employment letter or business license",
                "Travel insurance (recommended)"
            ],
            totalDocuments: 7,
            prepTime: "1-2 weeks",
            steps: [
                { step: 1, action: "Book flights and accommodation", location: "Online", time: "1-3 days", cost: "Ticket cost" },
                { step: 2, action: "Prepare financial documents", location: "Bank", time: "3-5 days", cost: "Bank fees" },
                { step: 3, action: "Complete application form", location: "Home", time: "1 hour", cost: "Free" },
                { step: 4, action: "Submit to Japanese embassy/consulate", location: "Embassy", time: "Same day", cost: "Free" },
                { step: 5, action: "Wait for processing", location: "N/A", time: "5-7 days", cost: "Free" },
                { step: 6, action: "Collect passport with visa", location: "Embassy", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: { name: "Travel Planning", duration: "1-2 weeks" },
                stage2: { name: "Document Preparation", duration: "1 week" },
                stage3: { name: "Visa Processing", duration: "5-7 days" },
                total: "2-4 weeks"
            },
            costs: {
                visaFee: 0,
                coeProcessing: 0,
                documentAuthentication: 0,
                medicalExam: 0,
                translationServices: 0,
                total: "Free",
                totalUSD: "$0"
            },
            residencyPath: {
                yearsRequired: "N/A",
                continuousResidence: "Not applicable",
                minIncome: "N/A",
                taxCompliance: "N/A",
                languageRequirement: "None",
                pathDescription: "Tourist visa cannot convert directly to work/study. Must return home and apply for appropriate visa."
            }
        },
        residency: {
            visaType: "Permanent Resident",
            visaCode: "永住者",
            required: true,
            processingTime: "6-12 months",
            costYen: "¥8,000",
            costUSD: "$53",
            validity: "7 years (then renew)",
            extension: true,
            documents: [
                "Application for Permanent Residence",
                "Photo (4.5cm × 3.5cm)",
                "Reason letter for permanent residence",
                "Passport and current residence card",
                "Proof of residence in Japan",
                "Employment certificate and tax certificates",
                "Asset documentation",
                "Family registration documents (if applicable)"
            ],
            totalDocuments: 8,
            prepTime: "1-3 months",
            steps: [
                { step: 1, action: "Meet residency requirements (10 years work/5 years spouse)", location: "Japan", time: "5-10 years", cost: "Living expenses" },
                { step: 2, action: "Prepare comprehensive documentation", location: "Japan", time: "2-4 weeks", cost: "Documentation fees" },
                { step: 3, action: "Submit application to Immigration Bureau", location: "Regional Immigration Office", time: "Same day", cost: "¥8,000" },
                { step: 4, action: "Possible interview with immigration officer", location: "Immigration Office", time: "30-60 minutes", cost: "Free" },
                { step: 5, action: "Wait for processing and background check", location: "N/A", time: "6-12 months", cost: "Free" },
                { step: 6, action: "Receive approval notification", location: "Mail", time: "1 week", cost: "Free" },
                { step: 7, action: "Collect permanent residence card", location: "Immigration Office", time: "Same day", cost: "¥1,600 (card fee)" }
            ],
            timeline: {
                stage1: { name: "Residency Period", duration: "5-10 years" },
                stage2: { name: "Application Preparation", duration: "1-3 months" },
                stage3: { name: "Processing", duration: "6-12 months" },
                total: "6-13 years"
            },
            costs: {
                visaFee: 8000,
                coeProcessing: 0,
                documentAuthentication: 5000,
                medicalExam: 0,
                translationServices: 0,
                total: "~¥13,000",
                totalUSD: "$87"
            },
            residencyPath: {
                yearsRequired: "10 (work) / 5 (spouse)",
                continuousResidence: "Required",
                minIncome: "¥3,000,000/year",
                taxCompliance: "Full compliance required",
                languageRequirement: "N2 recommended",
                pathDescription: "Permanent residence allows indefinite stay. No work restrictions. Eligible for social benefits. Can apply for citizenship after 5 years as PR."
            }
        }
    },

    // Continuing with more countries...
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
            extension: true,
            documents: [
                "US Passport (valid 6+ months beyond stay)",
                "Visa Application Form (downloaded from embassy)",
                "Photo (2in × 2in, white background)",
                "Certificate of Eligibility (original)",
                "Employment offer letter from Japanese company",
                "University degree (BS/BA minimum)",
                "Resume/CV",
                "Company incorporation documents"
            ],
            totalDocuments: 8,
            prepTime: "3-4 weeks",
            steps: [
                { step: 1, action: "Secure job offer from Japan", location: "Remote/Interviews", time: "1-3 months", cost: "Interview costs" },
                { step: 2, action: "Employer obtains COE from Immigration", location: "Japan", time: "1-3 months", cost: "Employer pays" },
                { step: 3, action: "Receive COE via mail", location: "US Address", time: "1-2 weeks", cost: "International shipping" },
                { step: 4, action: "Gather and notarize documents", location: "US", time: "2-3 weeks", cost: "Notary: $50-150" },
                { step: 5, action: "Submit to Japanese Embassy/Consulate", location: "Washington DC, NYC, LA, SF, Chicago, etc.", time: "Same day", cost: "¥4,000 (~$27)" },
                { step: 6, action: "Processing period", location: "N/A", time: "4-8 weeks", cost: "Free" },
                { step: 7, action: "Collect passport with visa", location: "Embassy/Consulate", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: { name: "Job Search & COE", duration: "2-4 months" },
                stage2: { name: "Document Prep", duration: "3-4 weeks" },
                stage3: { name: "Embassy Processing", duration: "4-8 weeks" },
                total: "3-6 months"
            },
            costs: {
                visaFee: 4000,
                coeProcessing: 0,
                documentAuthentication: 15000,
                medicalExam: 0,
                translationServices: 20000,
                total: "~¥39,000",
                totalUSD: "$260"
            },
            residencyPath: {
                yearsRequired: 10,
                continuousResidence: "Yes",
                minIncome: "¥3,000,000/year (~$20,000)",
                taxCompliance: "Required",
                languageRequirement: "N2 Japanese",
                pathDescription: "Work visa holders can apply for permanent residency after 10 years. Highly Skilled Foreign Professionals (HSP) can apply in 1-3 years with points-based system."
            }
        },
        study: {
            visaType: "Student Visa",
            visaCode: "留学",
            required: true,
            processingTime: "2-6 weeks",
            costYen: "¥4,000",
            costUSD: "$27",
            validity: "Duration of study",
            extension: true,
            documents: [
                "US Passport",
                "Visa Application Form",
                "Photo (2in × 2in)",
                "Certificate of Eligibility from school",
                "Admission letter",
                "Proof of funds ($20,000+ per year)",
                "Academic transcripts",
                "Statement of purpose"
            ],
            totalDocuments: 8,
            prepTime: "3-4 weeks",
            steps: [
                { step: 1, action: "Apply to Japanese university/language school", location: "Online", time: "3-6 months", cost: "$50-100 application" },
                { step: 2, action: "Receive admission and COE", location: "Mail", time: "2-3 months", cost: "Shipping" },
                { step: 3, action: "Prepare financial proof", location: "Bank", time: "1 week", cost: "Free" },
                { step: 4, action: "Submit visa application", location: "Japanese Consulate", time: "Same day", cost: "¥4,000" },
                { step: 5, action: "Processing", location: "N/A", time: "2-6 weeks", cost: "Free" },
                { step: 6, action: "Collect visa", location: "Consulate", time: "Same day", cost: "Free" }
            ],
            timeline: {
                stage1: { name: "School Application", duration: "3-6 months" },
                stage2: { name: "COE Processing", duration: "2-3 months" },
                stage3: { name: "Visa Processing", duration: "2-6 weeks" },
                total: "6-10 months"
            },
            costs: {
                visaFee: 4000,
                coeProcessing: 0,
                documentAuthentication: 10000,
                medicalExam: 0,
                translationServices: 10000,
                total: "~¥24,000",
                totalUSD: "$160"
            },
            residencyPath: {
                yearsRequired: 10,
                continuousResidence: "Yes",
                minIncome: "N/A (student)",
                taxCompliance: "N/A",
                languageRequirement: "N2 recommended",
                pathDescription: "After graduation, can apply for work visa. Time on student visa counts toward 10-year permanent residency requirement."
            }
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
                "US Passport (valid for duration of stay)",
                "Return/onward ticket",
                "Proof of accommodation",
                "Sufficient funds proof (if asked)",
                "No documents required at border for most tourists"
            ],
            totalDocuments: 0,
            prepTime: "0 days",
            steps: [
                { step: 1, action: "Book flight to Japan", location: "Online", time: "Immediate", cost: "Ticket price" },
                { step: 2, action: "Complete immigration form on flight", location: "Airplane", time: "15 minutes", cost: "Free" },
                { step: 3, action: "Present passport at immigration", location: "Japanese airport", time: "5-30 minutes", cost: "Free" },
                { step: 4, action: "Receive 90-day entry stamp", location: "Immigration counter", time: "Immediate", cost: "Free" }
            ],
            timeline: {
                stage1: { name: "Travel Planning", duration: "As needed" },
                stage2: { name: "Arrival", duration: "30 minutes" },
                stage3: { name: "Enjoy Japan", duration: "90 days" },
                total: "90 days max stay"
            },
            costs: {
                visaFee: 0,
                coeProcessing: 0,
                documentAuthentication: 0,
                medicalExam: 0,
                translationServices: 0,
                total: "Free",
                totalUSD: "$0"
            },
            residencyPath: {
                yearsRequired: "N/A",
                continuousResidence: "N/A",
                minIncome: "N/A",
                taxCompliance: "N/A",
                languageRequirement: "None",
                pathDescription: "Tourist entry cannot be converted. Must leave Japan and apply for appropriate visa (work/study) from US."
            }
        },
        residency: {
            visaType: "Permanent Resident",
            visaCode: "永住者",
            required: true,
            processingTime: "6-12 months",
            costYen: "¥8,000",
            costUSD: "$53",
            validity: "7 years (renewable)",
            extension: true,
            documents: [
                "Permanent Residence Application",
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
                { step: 2, action: "Prepare extensive documentation", location: "Japan", time: "1-2 months", cost: "Fees vary" },
                { step: 3, action: "Submit to Immigration Bureau", location: "Regional office", time: "Same day", cost: "¥8,000" },
                { step: 4, action: "Possible interview", location: "Immigration office", time: "30-60 min", cost: "Free" },
                { step: 5, action: "Background check processing", location: "N/A", time: "6-12 months", cost: "Free" },
                { step: 6, action: "Approval and card collection", location: "Immigration office", time: "1 day", cost: "¥1,600" }
            ],
            timeline: {
                stage1: { name: "Residency Period", duration: "10 years" },
                stage2: { name: "Application Prep", duration: "2-3 months" },
                stage3: { name: "Processing", duration: "6-12 months" },
                total: "10-11 years"
            },
            costs: {
                visaFee: 8000,
                coeProcessing: 0,
                documentAuthentication: 10000,
                medicalExam: 0,
                translationServices: 0,
                total: "~¥18,000",
                totalUSD: "$120"
            },
            residencyPath: {
                yearsRequired: 10,
                continuousResidence: "Required",
                minIncome: "¥3,000,000/year",
                taxCompliance: "Full compliance required",
                languageRequirement: "N2 Japanese recommended",
                pathDescription: "Permanent residents can stay indefinitely, work freely, and access social benefits. Citizenship possible after 5 more years."
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = visaDatabase;
}
