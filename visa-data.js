// Complete Japan Visa Database - All 14 Countries
const visaDatabase = {
    china: { name: "China", flag: "🇨🇳", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "2-4 months", totalCost: "~¥19,000 ($127)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "4-7 months", totalCost: "~¥12,000 ($80)", residency: "10 years total" },
        tourist: { type: "Tourist Visa", code: "短期滞在", required: true, processing: "5-7 days", cost: "Free", validity: "15-90 days", extension: false, docs: 7, prepTime: "1-2 weeks", timeline: "2-4 weeks", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "1-3 months", timeline: "10-11 years", totalCost: "~¥13,000 ($87)", residency: "Obtained" }
    },
    korea: { name: "South Korea", flag: "🇰🇷", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 7, prepTime: "1-2 weeks", timeline: "1-3 months", totalCost: "~¥15,000 ($100)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 7, prepTime: "1-2 weeks", timeline: "2-4 months", totalCost: "~¥10,000 ($67)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "4-8 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 7, prepTime: "1-2 months", timeline: "10-11 years", totalCost: "~¥12,000 ($80)", residency: "Obtained" }
    },
    thailand: { name: "Thailand", flag: "🇹🇭", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-2 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "2-3 months", totalCost: "~¥18,000 ($120)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-2 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "3-5 months", totalCost: "~¥12,000 ($80)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "30 days", extension: true, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "1-3 months", timeline: "10-11 years", totalCost: "~¥13,000 ($87)", residency: "Obtained" }
    },
    philippines: { name: "Philippines", flag: "🇵🇭", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 9, prepTime: "3-4 weeks", timeline: "2-4 months", totalCost: "~¥20,000 ($133)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "4-6 months", totalCost: "~¥13,000 ($87)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "30 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "1-3 months", timeline: "10-11 years", totalCost: "~¥14,000 ($93)", residency: "Obtained" }
    },
    vietnam: { name: "Vietnam", flag: "🇻🇳", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "2-4 months", totalCost: "~¥18,000 ($120)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "4-6 months", totalCost: "~¥12,000 ($80)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "45 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "1-3 months", timeline: "10-11 years", totalCost: "~¥13,000 ($87)", residency: "Obtained" }
    },
    indonesia: { name: "Indonesia", flag: "🇮🇩", region: "Asia-Pacific",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "2-4 months", totalCost: "~¥19,000 ($127)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "4-6 months", totalCost: "~¥12,000 ($80)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "30 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "1-3 months", timeline: "10-11 years", totalCost: "~¥13,000 ($87)", residency: "Obtained" }
    },
    us: { name: "United States", flag: "🇺🇸", region: "North America",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "4-8 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "3-4 weeks", timeline: "3-6 months", totalCost: "~¥39,000 ($260)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-6 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "3-4 weeks", timeline: "6-10 months", totalCost: "~¥24,000 ($160)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥18,000 ($120)", residency: "Obtained" }
    },
    uk: { name: "United Kingdom", flag: "🇬🇧", region: "Europe",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "3-6 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "2-4 months", totalCost: "~¥35,000 ($233)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-3 weeks", timeline: "4-8 months", totalCost: "~¥22,000 ($147)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥17,000 ($113)", residency: "Obtained" }
    },
    germany: { name: "Germany", flag: "🇩🇪", region: "Europe",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "3-5 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "2-4 months", totalCost: "~¥32,000 ($213)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "4-7 months", totalCost: "~¥20,000 ($133)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 7, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥16,000 ($107)", residency: "Obtained" }
    },
    france: { name: "France", flag: "🇫🇷", region: "Europe",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "3-5 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "2-4 months", totalCost: "~¥33,000 ($220)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "4-7 months", totalCost: "~¥21,000 ($140)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 7, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥16,000 ($107)", residency: "Obtained" }
    },
    spain: { name: "Spain", flag: "🇪🇸", region: "Europe",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "3-5 weeks", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "2-4 months", totalCost: "~¥34,000 ($227)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "2-4 weeks", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 7, prepTime: "2-3 weeks", timeline: "4-7 months", totalCost: "~¥21,000 ($140)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 7, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥16,000 ($107)", residency: "Obtained" }
    },
    brazil: { name: "Brazil", flag: "🇧🇷", region: "Latin America",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "3-4 weeks", timeline: "2-4 months", totalCost: "~¥36,000 ($240)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "4-7 months", totalCost: "~¥23,000 ($153)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥17,000 ($113)", residency: "Obtained" }
    },
    argentina: { name: "Argentina", flag: "🇦🇷", region: "Latin America",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "3-4 weeks", timeline: "2-4 months", totalCost: "~¥37,000 ($247)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "4-7 months", totalCost: "~¥23,000 ($153)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥17,000 ($113)", residency: "Obtained" }
    },
    uruguay: { name: "Uruguay", flag: "🇺🇾", region: "Latin America",
        work: { type: "Engineer/Specialist", code: "技術・人文知識・国際業務", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "1-3 years", extension: true, docs: 8, prepTime: "3-4 weeks", timeline: "2-4 months", totalCost: "~¥38,000 ($253)", residency: "10 years → PR" },
        study: { type: "Student Visa", code: "留学", required: true, processing: "1-3 months", cost: "¥4,000 ($27)", validity: "Duration of study", extension: true, docs: 8, prepTime: "2-4 weeks", timeline: "4-7 months", totalCost: "~¥24,000 ($160)", residency: "10 years total" },
        tourist: { type: "Not Required", code: "N/A", required: false, processing: "Immediate", cost: "Free", validity: "90 days", extension: false, docs: 0, prepTime: "0", timeline: "Immediate", totalCost: "Free", residency: "N/A" },
        residency: { type: "Permanent Resident", code: "永住者", required: true, processing: "6-12 months", cost: "¥8,000 ($53)", validity: "7 years", extension: true, docs: 8, prepTime: "2-3 months", timeline: "10-11 years", totalCost: "~¥18,000 ($120)", residency: "Obtained" }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = visaDatabase;
}
