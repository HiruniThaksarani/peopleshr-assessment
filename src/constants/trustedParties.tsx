import React from "react";

export interface TrustedParty {
  id: string;
  name: string;
  category: string;
  stat: string;
  location: string;
  accentColor: string;
  logo: React.ReactNode;
}

export const TRUSTED_PARTIES_CONTENT = {
  eyebrow: "ENTERPRISE PROOF & ECOSYSTEM",
  titlePart1: "Powering People Operations for",
  titleHighlight: "Global Enterprises & Market Leaders",
  subtitle:
    "Over 1,400+ forward-thinking organizations, blue-chip conglomerates, and high-growth businesses trust PeoplesHR to orchestrate automated payroll, real-time attendance, and compliance every day.",
  metrics: [
    { value: "1,400+", label: "Enterprise Deployments" },
    { value: "40+", label: "Countries Active" },
    { value: "250,000+", label: "Monthly Payruns" },
    { value: "99.8%", label: "Client Retention Rate" },
  ],
  securityPills: [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "Multi-Country Statutory Engine",
    "Bank-Grade AES-256 Encryption",
  ],
};

/* =========================================================================
   Row 1: Premier Conglomerates, Industrial Leaders & Banking Institutions
   ========================================================================= */
export const TRUSTED_PARTIES_ROW_1: TrustedParty[] = [
  {
    id: "mas",
    name: "MAS Holdings",
    category: "Apparel & Tech Innovation",
    stat: "95,000+ Staff",
    location: "Global / 16 Countries",
    accentColor: "#0f172a",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="MAS Holdings">
        {/* Hexagonal Tech Emblem */}
        <path
          d="M18 4L30 11V25L18 32L6 25V11L18 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-slate-800 group-hover:text-primary transition-colors"
        />
        <path
          d="M18 11L25 15V23L18 27L11 23V15L18 11Z"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        />
        <path
          d="M18 4V11M30 11L25 15M30 25L25 23M18 32V27M6 25L11 23M6 11L11 15"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-400 group-hover:text-blue-400 transition-colors"
        />
        {/* Typography */}
        <text
          x="38"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17"
          letterSpacing="0.08em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          MAS
        </text>
        <text
          x="82"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="12"
          letterSpacing="0.14em"
          fill="currentColor"
          className="text-slate-500 group-hover:text-slate-800 transition-colors"
        >
          HOLDINGS
        </text>
      </svg>
    ),
  },
  {
    id: "dialog",
    name: "Dialog Axiata",
    category: "Telecommunications & Digital",
    stat: "15M+ Users",
    location: "South Asia",
    accentColor: "#e11d48",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="Dialog Axiata">
        {/* Axiata Prism Star Mark */}
        <path d="M18 3L26 13H10L18 3Z" fill="#e11d48" />
        <path d="M26 13L32 23L22 23L18 13L26 13Z" fill="#f59e0b" />
        <path d="M10 13L18 13L14 23L4 23L10 13Z" fill="#0284c7" />
        <path d="M22 23L18 33L14 23L22 23Z" fill="#10b981" />
        {/* Typography */}
        <text
          x="40"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="18"
          letterSpacing="-0.02em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Dialog
        </text>
        <circle cx="95" cy="11" r="2.5" fill="#e11d48" />
        <text
          x="102"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="11"
          letterSpacing="0.04em"
          fill="currentColor"
          className="text-slate-500 group-hover:text-slate-700 transition-colors"
        >
          axiata
        </text>
      </svg>
    ),
  },
  {
    id: "brandix",
    name: "Brandix Apparel",
    category: "Global Apparel & Supply Chain",
    stat: "60,000+ Staff",
    location: "Global / 5 Nations",
    accentColor: "#dc2626",
    logo: (
      <svg viewBox="0 0 155 36" fill="none" className="h-7 w-auto" aria-label="Brandix">
        {/* Modern ribbon loop emblem */}
        <path
          d="M8 24C4 20 5 13 11 9C17 5 24 10 27 16C30 22 25 28 19 28C14 28 12 25 15 21C18 17 25 19 23 23"
          stroke="#dc2626"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Typography */}
        <text
          x="38"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="19"
          letterSpacing="-0.04em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          brandix
        </text>
      </svg>
    ),
  },
  {
    id: "jkh",
    name: "John Keells Holdings",
    category: "Diversified Conglomerate",
    stat: "22,000+ Staff",
    location: "South Asia",
    accentColor: "#0284c7",
    logo: (
      <svg viewBox="0 0 170 36" fill="none" className="h-7 w-auto" aria-label="John Keells Holdings">
        {/* Classic crest emblem */}
        <rect
          x="4"
          y="6"
          width="24"
          height="24"
          rx="5"
          fill="#0d5bbd"
          className="group-hover:fill-primary transition-colors"
        />
        <text
          x="16"
          y="23"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          fontSize="14"
          fill="#ffffff"
          textAnchor="middle"
        >
          JK
        </text>
        {/* Typography */}
        <text
          x="36"
          y="18"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="13"
          letterSpacing="0.08em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          JOHN KEELLS
        </text>
        <text
          x="36"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="9"
          letterSpacing="0.18em"
          fill="currentColor"
          className="text-slate-500"
        >
          HOLDINGS PLC
        </text>
      </svg>
    ),
  },
  {
    id: "combank",
    name: "Commercial Bank",
    category: "Banking & Financial Services",
    stat: "Leading Bank",
    location: "APAC / MEA",
    accentColor: "#0369a1",
    logo: (
      <svg viewBox="0 0 175 36" fill="none" className="h-7 w-auto" aria-label="Commercial Bank">
        {/* Bank tree / pillars emblem */}
        <circle cx="16" cy="18" r="14" fill="#0284c7" fillOpacity="0.12" />
        <path
          d="M16 7L7 13V15H25V13L16 7Z"
          fill="#0284c7"
          className="group-hover:fill-primary transition-colors"
        />
        <path
          d="M9 16V25M13 16V25M19 16V25M23 16V25M6 26H26V28H6V26Z"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="group-hover:stroke-primary transition-colors"
        />
        {/* Typography */}
        <text
          x="38"
          y="19"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="12.5"
          letterSpacing="0.04em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          COMMERCIAL BANK
        </text>
        <text
          x="38"
          y="29"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="8.5"
          letterSpacing="0.15em"
          fill="currentColor"
          className="text-slate-500"
        >
          BENCHMARK OF EXCELLENCE
        </text>
      </svg>
    ),
  },
  {
    id: "hayleys",
    name: "Hayleys Group",
    category: "Diversified 16 Sectors",
    stat: "35,000+ Staff",
    location: "Global Footprint",
    accentColor: "#059669",
    logo: (
      <svg viewBox="0 0 155 36" fill="none" className="h-7 w-auto" aria-label="Hayleys Group">
        {/* Tri-leaf flourish emblem */}
        <path
          d="M17 7C11 11 10 18 17 28C24 18 23 11 17 7Z"
          fill="#059669"
        />
        <path
          d="M11 14C7 19 8 24 14 27C12 21 11 17 11 14Z"
          fill="#10b981"
        />
        <path
          d="M23 14C27 19 26 24 20 27C22 21 23 17 23 14Z"
          fill="#34d399"
        />
        {/* Typography */}
        <text
          x="36"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="18"
          letterSpacing="-0.03em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Hayleys
        </text>
      </svg>
    ),
  },
  {
    id: "sampath",
    name: "Sampath Bank",
    category: "Premier Commercial Bank",
    stat: "Tech Pioneer",
    location: "Regional Banking",
    accentColor: "#ea580c",
    logo: (
      <svg viewBox="0 0 165 36" fill="none" className="h-7 w-auto" aria-label="Sampath Bank">
        {/* Stylized Lotus Diamond Crest */}
        <path
          d="M16 6L24 18L16 30L8 18L16 6Z"
          fill="#ea580c"
          className="group-hover:fill-amber-600 transition-colors"
        />
        <path
          d="M16 11L20 18L16 25L12 18L16 11Z"
          fill="#ffffff"
        />
        {/* Typography */}
        <text
          x="34"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16"
          letterSpacing="-0.02em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Sampath<tspan className="font-semibold text-slate-600 group-hover:text-primary">Bank</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "lion",
    name: "Lion Brewery",
    category: "Beverages & FMCG",
    stat: "Market Leader",
    location: "International Exports",
    accentColor: "#b45309",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="Lion Brewery">
        {/* Heraldic Lion Silhouette */}
        <circle cx="16" cy="18" r="14" fill="#fef3c7" />
        <path
          d="M12 24C12 24 13 20 15 19C14 18 13 16 14 14C15 12 17 11 19 12C20 11 22 13 21 15C22 16 22 18 20 19C21 21 21 24 21 24M16 15C16 15 17 14 18 15M14 24H21"
          stroke="#b45309"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Typography */}
        <text
          x="38"
          y="20"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          fontSize="14"
          letterSpacing="0.1em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          LION
        </text>
        <text
          x="38"
          y="29"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="8"
          letterSpacing="0.22em"
          fill="currentColor"
          className="text-amber-700"
        >
          BREWERY
        </text>
      </svg>
    ),
  },
];

/* =========================================================================
   Row 2: Fast-Growing Tech, Healthcare, Cloud Enterprises & Logistics Giants
   ========================================================================= */
export const TRUSTED_PARTIES_ROW_2: TrustedParty[] = [
  {
    id: "finscale",
    name: "FinScale Technologies",
    category: "Fintech & Banking Systems",
    stat: "92% Faster Payroll",
    location: "North America & APAC",
    accentColor: "#0284c7",
    logo: (
      <svg viewBox="0 0 165 36" fill="none" className="h-7 w-auto" aria-label="FinScale Technologies">
        {/* Geometric Hexagonal Prism */}
        <path d="M7 18L16 6L25 18L16 30L7 18Z" stroke="#0284c7" strokeWidth="2.5" />
        <path d="M16 6V30M7 18H25" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="16" cy="18" r="3.5" fill="#0284c7" />
        {/* Typography */}
        <text
          x="36"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="-0.03em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Fin<tspan className="text-primary font-bold">Scale</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "apex",
    name: "Apex Logistics Global",
    category: "Supply Chain & Fulfillment",
    stat: "420+ Admin Hrs Saved",
    location: "Global Logistics",
    accentColor: "#059669",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="Apex Logistics">
        {/* Aerodynamic Dual Chevrons */}
        <path
          d="M8 26L16 10L24 26L16 21L8 26Z"
          fill="#059669"
          className="group-hover:fill-emerald-500 transition-colors"
        />
        <path
          d="M11 28L16 19L21 28L16 25L11 28Z"
          fill="#34d399"
        />
        {/* Typography */}
        <text
          x="34"
          y="19"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="14"
          letterSpacing="0.08em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          APEX
        </text>
        <text
          x="34"
          y="29"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="8.5"
          letterSpacing="0.2em"
          fill="currentColor"
          className="text-slate-500"
        >
          GLOBAL LOGISTICS
        </text>
      </svg>
    ),
  },
  {
    id: "cloudcore",
    name: "CloudCore Media",
    category: "Digital Media & Tech",
    stat: "98% Staff Adoption",
    location: "EMEA / US",
    accentColor: "#6366f1",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="CloudCore Media">
        {/* Interconnected Cloud Polygon */}
        <path
          d="M10 24C8 24 6 22 6 20C6 18 7.5 16.5 9.5 16.2C10.5 12.5 13.5 10 17 10C21.5 10 25 13.5 25 18C26.5 18.5 27.5 20 27.5 21.5C27.5 23 26 24 24.5 24H10Z"
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="#e0e7ff"
        />
        {/* Typography */}
        <text
          x="36"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16.5"
          letterSpacing="-0.03em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Cloud<tspan className="text-indigo-600 font-bold">Core</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "hemas",
    name: "Hemas Holdings",
    category: "Healthcare & FMCG",
    stat: "10,000+ Employees",
    location: "South Asia",
    accentColor: "#f97316",
    logo: (
      <svg viewBox="0 0 155 36" fill="none" className="h-7 w-auto" aria-label="Hemas Holdings">
        {/* Radiant flower / sunburst petals */}
        <circle cx="16" cy="18" r="4.5" fill="#f97316" />
        <circle cx="16" cy="9" r="2.8" fill="#fb923c" />
        <circle cx="16" cy="27" r="2.8" fill="#fb923c" />
        <circle cx="7" cy="18" r="2.8" fill="#fb923c" />
        <circle cx="25" cy="18" r="2.8" fill="#fb923c" />
        {/* Typography */}
        <text
          x="36"
          y="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.04em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          hemas
        </text>
      </svg>
    ),
  },
  {
    id: "biohealth",
    name: "BioHealth Innovations",
    category: "Healthcare & Life Sciences",
    stat: "Scaled 3.5x Headcount",
    location: "International",
    accentColor: "#0d9488",
    logo: (
      <svg viewBox="0 0 165 36" fill="none" className="h-7 w-auto" aria-label="BioHealth">
        {/* DNA Cross Motif */}
        <rect x="13.5" y="7" width="5" height="22" rx="2.5" fill="#0d9488" />
        <rect x="5" y="15.5" width="22" height="5" rx="2.5" fill="#14b8a6" />
        <circle cx="16" cy="18" r="2" fill="#ffffff" />
        {/* Typography */}
        <text
          x="36"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16.5"
          letterSpacing="-0.03em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          Bio<tspan className="text-teal-600 font-bold">Health</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "aitken",
    name: "Aitken Spence",
    category: "Logistics, Maritime & Hotels",
    stat: "Blue-Chip Giant",
    location: "Global Network",
    accentColor: "#1e3a8a",
    logo: (
      <svg viewBox="0 0 170 36" fill="none" className="h-7 w-auto" aria-label="Aitken Spence">
        {/* Compass Star / Maritime Crest */}
        <circle cx="16" cy="18" r="13" stroke="#1e3a8a" strokeWidth="2" />
        <polygon points="16,7 19,16 28,16 20,20 23,29 16,23 9,29 12,20 4,16 13,16" fill="#1e3a8a" />
        {/* Typography */}
        <text
          x="36"
          y="18"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="12.5"
          letterSpacing="0.06em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          AITKEN SPENCE
        </text>
        <text
          x="36"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="8.5"
          letterSpacing="0.14em"
          fill="currentColor"
          className="text-slate-500"
        >
          GLOBAL CONGLOMERATE
        </text>
      </svg>
    ),
  },
  {
    id: "dfcc",
    name: "DFCC Bank",
    category: "Commercial & Development",
    stat: "Pioneer Bank",
    location: "Regional Footprint",
    accentColor: "#be123c",
    logo: (
      <svg viewBox="0 0 160 36" fill="none" className="h-7 w-auto" aria-label="DFCC Bank">
        {/* Isometric Vault Cube */}
        <path d="M16 6L26 12V24L16 30L6 24V12L16 6Z" fill="#be123c" />
        <path d="M16 6L26 12L16 18L6 12L16 6Z" fill="#fb7185" />
        <path d="M16 18V30L26 24V12L16 18Z" fill="#e11d48" />
        {/* Typography */}
        <text
          x="34"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17"
          letterSpacing="0.04em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          DFCC <tspan className="font-semibold text-slate-600 group-hover:text-primary">BANK</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "nexus",
    name: "Nexus Cloud Systems",
    category: "Cloud Systems & SSO",
    stat: "Zero Compliance Issues",
    location: "Enterprise Cloud",
    accentColor: "#7c3aed",
    logo: (
      <svg viewBox="0 0 165 36" fill="none" className="h-7 w-auto" aria-label="Nexus Cloud">
        {/* Interlocking Hex Network */}
        <path
          d="M16 6L25 11V23L16 28L7 23V11L16 6Z"
          stroke="#7c3aed"
          strokeWidth="2.2"
        />
        <circle cx="16" cy="11" r="2.2" fill="#7c3aed" />
        <circle cx="21" cy="20" r="2.2" fill="#7c3aed" />
        <circle cx="11" cy="20" r="2.2" fill="#7c3aed" />
        <line x1="16" y1="11" x2="21" y2="20" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="21" y1="20" x2="11" y2="20" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="11" y1="20" x2="16" y2="11" stroke="#7c3aed" strokeWidth="1.5" />
        {/* Typography */}
        <text
          x="35"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16.5"
          letterSpacing="-0.02em"
          fill="currentColor"
          className="text-slate-900 group-hover:text-primary transition-colors"
        >
          NEXUS<tspan className="text-violet-600 font-bold">CLOUD</tspan>
        </text>
      </svg>
    ),
  },
];
