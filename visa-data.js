// Japan Visa Database - Complete with Official Links for All 14 Countries
const visaDatabase = {
    china: {
        name: "China",
        flag: "🇨🇳",
        region: "Asia-Pacific",
        embassy: "https://www.china-embassy.or.jp/eng/",
        japanEmbassy: "http://www.cn.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist in Humanities",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: [
                "Passport (6+ months validity)",
                "Visa Application Form",
                "Photo (4.5cm × 3.5cm)",
                "Certificate of Eligibility (COE)",
                "Employment contract",
                "University degree (authenticated by MOE + MFA)",
                "Resume/CV",
                "Company registration documents"
            ],
            steps: [
                { step: 1, action: "Secure job offer", location: "Remote", time: "1-3 months" },
                { step: 2, action: "Employer applies for COE", location: "Japan Immigration", time: "1-3 months" },
                { step: 3, action: "Authenticate degree", location: "Chinese authorities", time: "1-2 weeks" },
                { step: 4, action: "Submit visa application", location: "Japanese Embassy", time: "Same day" },
                { step: 5, action: "Processing", location: "N/A", time: "5-7 days" },
                { step: 6, action: "Collect visa", location: "Embassy", time: "Same day" }
            ],
            timeline: "2-4 months",
            totalCost: "~¥19,000 ($127)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "http://www.cn.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof (¥1M+/year)", "Academic transcripts", "Statement of purpose"],
            timeline: "4-7 months",
            totalCost: "~¥12,000 ($80)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "http://www.cn.emb-japan.go.jp/",
                studentVisa: "https://www.moj.go.jp/isa/content/001317148.pdf"
            }
        },
        tourist: {
            type: "Tourist Visa",
            code: "短期滞在",
            required: true,
            processing: "5-7 days",
            cost: "Free",
            validity: "15-90 days",
            extension: false,
            documents: ["Passport", "Visa Application Form", "Photo", "Flight itinerary", "Hotel bookings", "Bank statement", "Employment letter"],
            timeline: "2-4 weeks",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "http://www.cn.emb-japan.go.jp/",
                touristVisa: "https://www.mofa.go.jp/j_info/visit/visa/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs", "Family documents"],
            timeline: "10-11 years",
            totalCost: "~¥13,000 ($87)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    korea: {
        name: "South Korea",
        flag: "🇰🇷",
        region: "Asia-Pacific",
        embassy: "https://overseas.mofa.go.kr/jp-ko/main.do",
        japanEmbassy: "https://www.kr.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE", "Employment contract", "University degree", "Resume", "Company docs"],
            steps: [
                { step: 1, action: "Secure job offer", location: "Remote", time: "1-2 months" },
                { step: 2, action: "Employer applies for COE", location: "Japan", time: "1-2 months" },
                { step: 3, action: "Submit visa application", location: "Japanese Embassy (Seoul)", time: "Same day" },
                { step: 4, action: "Processing", location: "N/A", time: "2-4 weeks" },
                { step: 5, action: "Collect visa", location: "Embassy", time: "Same day" }
            ],
            timeline: "1-3 months",
            totalCost: "~₩150,000 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.kr.emb-japan.go.jp/",
                coeInfo: "https://www.mofa.go.kr/jp-ko/wp/one/mofa2014/ma/ps/mob/index.do"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof", "Transcripts"],
            timeline: "2-4 months",
            totalCost: "~₩100,000 ($67)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.kr.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "4-8 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~₩120,000 ($80)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    thailand: {
        name: "Thailand",
        flag: "🇹🇭",
        region: "Asia-Pacific",
        embassy: "https://thaiembassy.jp/",
        japanEmbassy: "https://www.th.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-2 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE", "Employment contract", "University degree", "Resume", "Company docs"],
            timeline: "2-3 months",
            totalCost: "~฿3,500 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.th.emb-japan.go.jp/",
                coeInfo: "https://www.mofa.go.th/jp/en/"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-2 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof", "Transcripts"],
            timeline: "3-5 months",
            totalCost: "~฿2,500 ($70)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.th.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "30 days",
            extension: true,
            documents: ["Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~฿3,000 ($85)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    philippines: {
        name: "Philippines",
        flag: "🇵🇭",
        region: "Asia-Pacific",
        embassy: "https://philembassy.net/",
        japanEmbassy: "https://www.ph.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE", "Employment contract", "University degree (authenticated)", "Resume", "NBI Clearance", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~₱5,500 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.ph.emb-japan.go.jp/",
                dfa: "https://www.dfa.gov.ph/"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof", "Transcripts"],
            timeline: "4-6 months",
            totalCost: "~₱3,500 ($63)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.ph.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "30 days",
            extension: false,
            documents: ["Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~₱6,000 ($107)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    vietnam: {
        name: "Vietnam",
        flag: "🇻🇳",
        region: "Asia-Pacific",
        embassy: "https://vnembassy-jp.net/",
        japanEmbassy: "https://www.vn.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE", "Employment contract", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~₫2,300,000 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.vn.emb-japan.go.jp/",
                coeInfo: "https://www.mofa.go.jp/j_info/visit/visa/index.html"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof", "Transcripts"],
            timeline: "4-6 months",
            totalCost: "~₫1,800,000 ($77)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.vn.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "45 days",
            extension: false,
            documents: ["Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~₫2,500,000 ($107)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    indonesia: {
        name: "Indonesia",
        flag: "🇮🇩",
        region: "Asia-Pacific",
        embassy: "https://kemlu.go.id/tokyo/en",
        japanEmbassy: "https://www.id.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE", "Employment contract", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~Rp1,400,000 ($93)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.id.emb-japan.go.jp/",
                coeInfo: "https://www.mofa.go.jp/j_info/visit/visa/index.html"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Financial proof", "Transcripts"],
            timeline: "4-6 months",
            totalCost: "~Rp1,200,000 ($80)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.id.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "30 days",
            extension: false,
            documents: ["Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~Rp1,600,000 ($107)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    }
};

    us: {
        name: "United States",
        flag: "🇺🇸",
        region: "North America",
        embassy: "https://jp.usembassy.gov/",
        japanEmbassy: "https://www.us.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "4-8 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["US Passport", "Visa Application Form", "Photo (2in×2in)", "COE", "Employment offer", "University degree", "Resume", "Company docs"],
            timeline: "3-6 months",
            totalCost: "~$260",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.us.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-6 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["US Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds ($20K+/year)", "Transcripts"],
            timeline: "6-10 months",
            totalCost: "~$160",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.us.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["US Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs (5 years)", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~$120",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    uk: {
        name: "United Kingdom",
        flag: "🇬🇧",
        region: "Europe",
        embassy: "https://www.gov.uk/world/organisations/british-embassy-tokyo",
        japanEmbassy: "https://www.uk.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "3-6 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["UK Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~£180 ($233)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.uk.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["UK Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-8 months",
            totalCost: "~£140 ($180)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.uk.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["UK Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~£130 ($167)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    germany: {
        name: "Germany",
        flag: "🇩🇪",
        region: "Europe",
        embassy: "https://www.auswaertiges-amt.de/en/aussenpolitik/laender/japan-node",
        japanEmbassy: "https://www.de.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "3-5 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["German Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume"],
            timeline: "2-4 months",
            totalCost: "~€180 ($200)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.de.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["German Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~€140 ($155)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.de.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["German Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~€130 ($145)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    france: {
        name: "France",
        flag: "🇫🇷",
        region: "Europe",
        embassy: "https://jp.ambafrance.org/",
        japanEmbassy: "https://www.fr.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "3-5 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["French Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume"],
            timeline: "2-4 months",
            totalCost: "~€185 ($205)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.fr.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["French Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~€145 ($160)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.fr.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["French Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~€135 ($150)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    spain: {
        name: "Spain",
        flag: "🇪🇸",
        region: "Europe",
        embassy: "https://www.exteriores.gob.es/Embajadas/tokio",
        japanEmbassy: "https://www.es.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "3-5 weeks",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Spanish Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume"],
            timeline: "2-4 months",
            totalCost: "~€190 ($210)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.es.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "2-4 weeks",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Spanish Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~€145 ($160)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.es.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["Spanish Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~€135 ($150)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    brazil: {
        name: "Brazil",
        flag: "🇧🇷",
        region: "Latin America",
        embassy: "https://tokyo.itamaraty.gov.br/",
        japanEmbassy: "https://www.br.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Brazilian Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~R$500 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.br.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Brazilian Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~R$380 ($75)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.br.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["Brazilian Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~R$550 ($110)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    argentina: {
        name: "Argentina",
        flag: "🇦🇷",
        region: "Latin America",
        embassy: "https://japon.cancilleria.gob.ar/",
        japanEmbassy: "https://www.ar.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Argentine Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~$10,000 ARS ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.ar.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Argentine Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~$8,000 ARS ($80)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.ar.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["Argentine Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~$11,000 ARS ($110)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    },

    uruguay: {
        name: "Uruguay",
        flag: "🇺🇾",
        region: "Latin America",
        embassy: "https://www.gub.uy/embajada-uruguay-japon",
        japanEmbassy: "https://www.uy.emb-japan.go.jp/",
        work: {
            type: "Engineer/Specialist",
            code: "技術・人文知識・国際業務",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "1-3 years",
            extension: true,
            documents: ["Uruguayan Passport", "Visa Application Form", "Photo", "COE", "Employment offer", "University degree", "Resume", "Company docs"],
            timeline: "2-4 months",
            totalCost: "~UYU 4,000 ($100)",
            residency: "10 years → PR",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.uy.emb-japan.go.jp/",
                coeInfo: "https://www.moj.go.jp/isa/content/001317147.pdf"
            }
        },
        study: {
            type: "Student Visa",
            code: "留学",
            required: true,
            processing: "1-3 months",
            cost: "¥4,000 ($27)",
            validity: "Duration of study",
            extension: true,
            documents: ["Uruguayan Passport", "Visa Application Form", "Photo", "COE from school", "Admission letter", "Proof of funds", "Transcripts"],
            timeline: "4-7 months",
            totalCost: "~UYU 3,200 ($80)",
            residency: "10 years total",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                embassy: "https://www.uy.emb-japan.go.jp/",
                studentVisa: "https://www.studyinjapan.go.jp/en/"
            }
        },
        tourist: {
            type: "Not Required",
            code: "N/A",
            required: false,
            processing: "Immediate",
            cost: "Free",
            validity: "90 days",
            extension: false,
            documents: ["Uruguayan Passport", "Return ticket"],
            timeline: "Immediate",
            totalCost: "Free",
            residency: "N/A",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                visaWaiver: "https://www.mofa.go.jp/j_info/visit/visa/exemption/index.html"
            }
        },
        residency: {
            type: "Permanent Resident",
            code: "永住者",
            required: true,
            processing: "6-12 months",
            cost: "¥8,000 ($53)",
            validity: "7 years",
            extension: true,
            documents: ["Application", "Photo", "Reason letter", "Passport & residence card", "Residence proof", "Employment & tax certs", "Asset docs"],
            timeline: "10-11 years",
            totalCost: "~UYU 4,500 ($110)",
            residency: "Obtained",
            officialLinks: {
                japanImmigration: "https://www.moj.go.jp/isa/",
                prInfo: "https://www.moj.go.jp/isa/content/001317150.pdf"
            }
        }
    }
};

// ALL 14 COUNTRIES COMPLETE!
// Asia-Pacific: China, Korea, Thailand, Philippines, Vietnam, Indonesia
// Europe/NA: US, UK, Germany, France, Spain
// Latin America: Brazil, Argentina, Uruguay

if (typeof module !== 'undefined' && module.exports) {
    module.exports = visaDatabase;
}
