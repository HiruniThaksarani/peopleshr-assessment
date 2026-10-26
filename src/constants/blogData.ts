import { Post, Category, Author } from "@/sanity/types";

export const BLOG_CATEGORIES: Category[] = [
  {
    _id: "cat-all",
    title: "All Topics",
    slug: { current: "all" },
    description: "All latest insights, guides, and strategic viewpoints",
    color: "#0d5bbd",
  },
  {
    _id: "cat-payroll",
    title: "Payroll & Compliance",
    slug: { current: "payroll-compliance" },
    description: "Statutory tax rules, multi-tier audits, and error-free payroll automation",
    color: "#0284c7",
  },
  {
    _id: "cat-strategy",
    title: "People Strategy",
    slug: { current: "people-strategy" },
    description: "Workforce planning, organizational agility, and employee engagement",
    color: "#7c3aed",
  },
  {
    _id: "cat-ai-tech",
    title: "AI & HR Tech",
    slug: { current: "ai-hr-tech" },
    description: "Generative AI, smart workforce scheduling, and modern HCM systems",
    color: "#059669",
  },
  {
    _id: "cat-talent",
    title: "Talent & Retention",
    slug: { current: "talent-retention" },
    description: "Recruitment pipelines, onboarding velocity, and continuous performance",
    color: "#d97706",
  },
];

export const BLOG_AUTHORS: Record<string, Author> = {
  "eleanor-vance": {
    _id: "auth-eleanor",
    name: "Dr. Eleanor Vance",
    slug: { current: "eleanor-vance" },
    role: "Chief Human Resources Officer & Strategy Advisor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    bio: "20+ years leading enterprise organizational transformation, executive compensation design, and labor law compliance across EMEA and North America.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
    },
  },
  "marcus-chen": {
    _id: "auth-marcus",
    name: "Marcus Chen",
    slug: { current: "marcus-chen" },
    role: "VP of People Operations & Workforce Technology",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    bio: "Specialist in cloud HCM architecture, biometric integration, and building automated operational pipelines for multinational enterprises.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
    },
  },
  "sarah-jenkins": {
    _id: "auth-sarah",
    name: "Sarah Jenkins, SHRM-SCP",
    slug: { current: "sarah-jenkins" },
    role: "Head of People Experience & Performance",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    bio: "Author, speaker, and workforce analytics researcher focusing on eliminating administrative hours leaks and improving continuous employee retention.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
    },
  },
};

export const FALLBACK_POSTS: Post[] = [
  {
    _id: "post-1",
    title: "The Enterprise Guide to Eliminating Payroll Leakage: Statutory Audits and Automation in 2026",
    slug: { current: "enterprise-guide-eliminating-payroll-leakage" },
    excerpt: "Manual recalculations and disjointed attendance logs cost enterprises an average of 4.2% of total payroll annually. Here is the operational blueprint to achieve 99.98% statutory accuracy.",
    mainImage: {
      alt: "Enterprise financial and payroll analysis dashboard",
    },
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-03-24T09:00:00Z",
    readTimeMinutes: 7,
    featured: true,
    categories: [BLOG_CATEGORIES[1], BLOG_CATEGORIES[3]],
    author: BLOG_AUTHORS["eleanor-vance"],
    keyTakeaways: [
      "Overtime miscalculations and retrospective tax adjustments represent over 60% of avoidable payroll penalties.",
      "Direct integration between biometric time-tracking and payroll engines eliminates the 3-day verification lag.",
      "Cloud HCM systems with automated statutory updates guarantee zero-day regulatory compliance across multiple jurisdictions.",
      "Organizations modernizing payroll reclaim an average of 38 administrative hours per pay cycle.",
    ],
    metaDescription: "Learn how modern cloud HCM systems and automated statutory rules eliminate payroll leakage and tax penalties for mid-to-enterprise organizations.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "In high-growth and distributed enterprises, payroll operations frequently evolve into a high-friction battleground. Between varying regional tax codes, complex overtime shifts, retroactive salary adjustments, and manual timecard reconciliations, even seasoned finance teams find themselves burdened by avoidable administrative drag.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The True Cost of The 'Manual Re-Entry' Trap",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "According to recent human capital benchmarks, an enterprise with 500+ employees loses an average of $84,000 annually due to inaccurate overtime rounding, uncoordinated leave approvals, and delayed statutory filings. When time tracking, employee profiles, and payroll engines exist in disconnected silos, every pay cycle requires manual data transfers that inevitably invite human error.",
          },
        ],
      },
      {
        _type: "callout",
        _key: "callout_1",
        calloutType: "takeaway",
        calloutTitle: "Executive Takeaway",
        calloutContent: "Statutory penalties aren't just financial fines—they trigger mandatory forensic audits and damage employer brand credibility with your top-tier talent.",
      },
      {
        _type: "block",
        _key: "h2_2",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s4",
            text: "Four Pillars of a Modern Automated Payroll Architecture",
          },
        ],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Modern organizations transitioning from legacy spreadsheets to unified cloud HCM platforms like PeoplesHR focus on four foundational capabilities:",
          },
        ],
      },
      {
        _type: "block",
        _key: "li1",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "sli1",
            text: "Unified Source of Truth: Centralized directory where leaves, salary revisions, and tax exemption certificates are updated in real-time.",
          },
        ],
      },
      {
        _type: "block",
        _key: "li2",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "sli2",
            text: "Real-time Biometric & Geofenced Sync: Direct synchronization between physical clock-ins, mobile employee apps, and the timesheet reconciliation engine.",
          },
        ],
      },
      {
        _type: "block",
        _key: "li3",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "sli3",
            text: "Proactive Exception Flagging: AI-driven anomaly detectors that alert payroll managers to uncharacteristic hours anomalies before the salary run is finalized.",
          },
        ],
      },
      {
        _type: "block",
        _key: "li4",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "sli4",
            text: "Self-Service Payslip & Tax Portals: Empowering employees to access digital tax receipts and breakdown summaries directly from their smartphone.",
          },
        ],
      },
      {
        _type: "block",
        _key: "quote_1",
        style: "blockquote",
        children: [
          {
            _type: "span",
            _key: "q1",
            text: "Automating payroll isn't merely about cutting calculation time from 4 days to 4 hours. It's about restoring complete organizational trust in every paycheck delivered.",
          },
        ],
        quoteAuthor: "Dr. Eleanor Vance",
        quoteTitle: "Chief Human Resources Officer",
      },
      {
        _type: "block",
        _key: "h2_3",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "Step-by-Step Implementation Strategy",
          },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Rather than attempting a disruptive 'big bang' migration, leaders recommend running parallel dry-runs for one pay period. This allows the automated engine to validate statutory tax deduction formulas against historical numbers, ensuring total peace of mind for both leadership and the board.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-2",
    title: "How AI Copilots are Reshaping Workforce Scheduling and Shift Optimization",
    slug: { current: "ai-copilot-workforce-scheduling-shift-optimization" },
    excerpt: "Predictive scheduling reduces absenteeism by up to 28% while improving employee shift satisfaction. Discover how intelligent algorithms balance staffing requirements with personal preferences.",
    mainImage: {
      alt: "AI workforce analytics and modern scheduling interface",
    },
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-03-20T11:30:00Z",
    readTimeMinutes: 5,
    featured: true,
    categories: [BLOG_CATEGORIES[3], BLOG_CATEGORIES[2]],
    author: BLOG_AUTHORS["marcus-chen"],
    keyTakeaways: [
      "Dynamic shift bidding allows frontline teams to swap shifts transparently within compliance parameters.",
      "Predictive machine learning models anticipate seasonal rush spikes and adjust headcount demands 3 weeks in advance.",
      "Algorithmic fatigue protection prevents overtime burnout before it compromises work quality or safety.",
    ],
    metaDescription: "Discover how AI-powered scheduling copilots optimize shift allocation, reduce turnover, and maintain labor compliance effortlessly.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Shift scheduling has historically been one of the most thankless administrative duties in retail, healthcare, logistics, and manufacturing. Managers spend hours piecing together spreadsheets, only for an unexpected sick day or personal request to derail the entire roster.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The Shift from Reactive to Predictive Roster Planning",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "With modern AI copilots integrated into the PeoplesHR platform, scheduling changes from a manual puzzle into an automated optimization engine. Historical foot traffic, order volumes, seasonal peaks, and employee availability preferences are synthesized in seconds.",
          },
        ],
      },
      {
        _type: "callout",
        _key: "callout_1",
        calloutType: "tip",
        calloutTitle: "Pro Tip for Operations Managers",
        calloutContent: "Allowing employees to set recurring blackout dates and preferred shift windows directly in the mobile ESS app reduces voluntary turnover by up to 18%.",
      },
    ],
  },
  {
    _id: "post-3",
    title: "The Hours Leak Assessment: Diagnosing The Hidden Drain in Modern People Operations",
    slug: { current: "hours-leak-assessment-hidden-drain-people-ops" },
    excerpt: "Are your HR professionals spending 70% of their time on repetitive record management instead of strategic people initiatives? Here is how to measure and recapture lost productive capacity.",
    mainImage: {
      alt: "Productivity, time management and strategic workplace charts",
    },
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-03-15T14:15:00Z",
    readTimeMinutes: 6,
    categories: [BLOG_CATEGORIES[2], BLOG_CATEGORIES[1]],
    author: BLOG_AUTHORS["sarah-jenkins"],
    keyTakeaways: [
      "Paper-based onboarding workflows consume up to 14 hours per new hire across HR, IT, and department managers.",
      "Self-service document requests (letters, salary confirmations, visa verification) free up over 20 hours per week for HR teams.",
      "Automated approval workflows reduce cycle time from 5 business days to under 4 hours.",
    ],
    metaDescription: "Learn how to quantify and reclaim hundreds of administrative hours lost to manual paper-pushing, disconnected systems, and legacy HR tools.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Every growing organization reaches a tipping point where traditional tools—shared spreadsheets, email chains, paper leave slips—cease to be merely slow and become an existential drag on team momentum.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Where Do The Hours Actually Disappear?",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "When we audit companies using our interactive Hours Leak Calculator, the primary leak culprits are strikingly consistent: repetitive employee address updates, chasing managers for performance sign-offs, and compiling manual monthly attendance spreadsheets.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-4",
    title: "Continuous Feedback vs Annual Reviews: Building a High-Performance Culture",
    slug: { current: "continuous-feedback-vs-annual-reviews-high-performance" },
    excerpt: "Annual performance reviews are often dreaded, backward-looking, and out of date before ink dries. Discover why modern enterprises are adopting agile check-ins and real-time OKR tracking.",
    mainImage: {
      alt: "Colleagues collaborating on performance goals and career growth",
    },
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-03-10T08:45:00Z",
    readTimeMinutes: 8,
    categories: [BLOG_CATEGORIES[4], BLOG_CATEGORIES[2]],
    author: BLOG_AUTHORS["sarah-jenkins"],
    keyTakeaways: [
      "Organizations practicing monthly agile 1-on-1s experience 31% lower voluntary turnover among key performers.",
      "Transparent goal cascades connect individual daily tasks directly to executive business milestones.",
      "360-degree peer recognition builds a culture of psychological safety and shared accountability.",
    ],
    metaDescription: "Replace cumbersome annual performance cycles with modern, agile pulse reviews and continuous development plans.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "In the modern workplace, waiting 12 months to tell a team member how they performed in Q1 is an operational failure. By the time the review happens, projects have shipped, context has eroded, and feedback is often received with frustration rather than motivation.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The Anatomy of High-Velocity OKR Alignment",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Forward-thinking teams leverage PeoplesHR Performance module to establish fluid, quarterly objectives. Employees update progress asynchronously, managers provide micro-coaching in real-time, and year-end appraisals become celebratory recaps rather than surprise interrogations.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-5",
    title: "Navigating Multi-Country Labor Regulations: Compliance Playbook for 2026",
    slug: { current: "navigating-multi-country-labor-regulations-compliance-playbook" },
    excerpt: "Expanding into international jurisdictions introduces complex statutory frameworks, severance rules, and data residency mandates. Here is your enterprise risk mitigation checklist.",
    mainImage: {
      alt: "International enterprise compliance and global operations",
    },
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-03-02T10:00:00Z",
    readTimeMinutes: 9,
    categories: [BLOG_CATEGORIES[1], BLOG_CATEGORIES[2]],
    author: BLOG_AUTHORS["eleanor-vance"],
    keyTakeaways: [
      "Strict data sovereignty mandates require HR databases to adhere to local storage laws (e.g. GDPR, local statutory vaults).",
      "Statutory notice periods, severance calculations, and mandatory provident fund contributions vary widely across regions.",
      "Centralized cloud HCM ensures single-click compliance reporting for international audits and ISO certifications.",
    ],
    metaDescription: "Essential compliance strategies and regulatory playbooks for multinational organizations managing cross-border workforces.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "As businesses expand across borders, human resources evolves from an internal support department to a primary vanguard against legal risk. A single misinterpretation of regional overtime ceilings or termination severance formulas can lead to costly public litigation.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Automating Multi-Jurisdictional Statutory Rules",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "PeoplesHR provides localized regulatory calculation templates built into the core payroll engine, updated whenever regional legislation shifts. Whether computing provident funds, health contributions, or withholding taxes, your global teams remain audit-ready 365 days a year.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-6",
    title: "Accelerating New Hire Time-to-Productivity: Modern Digital Onboarding",
    slug: { current: "accelerating-new-hire-time-to-productivity-digital-onboarding" },
    excerpt: "First impressions shape employee retention for years. Learn how automated pre-boarding journeys turn nervous day-one hires into energized, productive contributors in under a week.",
    mainImage: {
      alt: "New employee welcome package, laptop, and onboarding session",
    },
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80",
    publishedAt: "2026-02-22T13:20:00Z",
    readTimeMinutes: 6,
    categories: [BLOG_CATEGORIES[4], BLOG_CATEGORIES[3]],
    author: BLOG_AUTHORS["marcus-chen"],
    keyTakeaways: [
      "Pre-boarding document completion before Day 1 eliminates 90% of paperwork anxiety.",
      "Automated buddy assignments and 30-60-90 day milestone trackers elevate 6-month retention by 24%.",
      "Integrated asset and software provisioning reduces IT onboarding delays from 4 days to 30 minutes.",
    ],
    metaDescription: "Best practices for building an automated digital onboarding pipeline that boosts engagement and shortens ramp-up time.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Nothing dampens a talented new hire's enthusiasm faster than spending their first day trapped in a conference room filling out paper tax declarations and waiting for IT accounts to be created.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2_1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The Digital Pre-Boarding Revolution",
          },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "With PeoplesHR Onboarding, new hires complete their documentation, e-signatures, bank details, and emergency contacts via mobile before their official start date. On Day 1, they walk into a fully provisioned setup, ready to meet their team and make an impact immediately.",
          },
        ],
      },
    ],
  },
];
