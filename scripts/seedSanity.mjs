import fs from "fs";
import path from "path";
import { createClient } from "next-sanity";

// Automatically parse .env or .env.local
try {
  const envContent = fs.existsSync(".env.local")
    ? fs.readFileSync(".env.local", "utf-8")
    : fs.existsSync(".env")
    ? fs.readFileSync(".env", "utf-8")
    : "";

  envContent.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
} catch (e) {
  // Ignore error
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "flxpbdoy";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("❌ Error: SANITY_API_WRITE_TOKEN is missing in .env");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-03-01",
  useCdn: false,
});

async function uploadImageIfExists(filePath, filename) {
  if (fs.existsSync(filePath)) {
    console.log(`  📸 Uploading asset: ${filename}...`);
    const stream = fs.createReadStream(filePath);
    const asset = await client.assets.upload("image", stream, {
      filename,
    });
    console.log(`  ✓ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  }
  return null;
}

async function seed() {
  console.log(`\n=======================================================`);
  console.log(`🚀 Connecting to Sanity Project: ${projectId} (${dataset})`);
  console.log(`=======================================================\n`);

  // 1. Upload Assets
  console.log("🖼️  Uploading High-Resolution Blog Cover Images...");
  const aiImgRef = await uploadImageIfExists(
    "public/blog/ai-workforce-scheduling.jpg",
    "ai-workforce-scheduling.jpg"
  );
  const onboardingImgRef = await uploadImageIfExists(
    "public/blog/digital-onboarding-team.jpg",
    "digital-onboarding-team.jpg"
  );
  const complianceImgRef = await uploadImageIfExists(
    "public/blog/global-compliance-audit.jpg",
    "global-compliance-audit.jpg"
  );

  // 2. Categories
  console.log("\n📁 Creating & Updating Categories...");
  const categories = [
    {
      _id: "bcde367a-3c6d-4320-9fa2-99d1e2eb3131",
      _type: "category",
      title: "Payroll & Compliance",
      slug: { _type: "slug", current: "payroll-compliance" },
      description: "Statutory tax rules, multi-tier audits, and error-free payroll automation",
      color: "#0284c7",
    },
    {
      _id: "cat-ai-hr-tech",
      _type: "category",
      title: "AI & HR Tech",
      slug: { _type: "slug", current: "ai-hr-tech" },
      description: "Generative AI copilots, smart workforce scheduling, and modern HCM systems",
      color: "#059669",
    },
    {
      _id: "cat-people-strategy",
      _type: "category",
      title: "People Strategy & Leadership",
      slug: { _type: "slug", current: "people-strategy" },
      description: "Workforce planning, organizational agility, executive compensation, and leadership",
      color: "#7c3aed",
    },
    {
      _id: "cat-talent-retention",
      _type: "category",
      title: "Talent & Retention",
      slug: { _type: "slug", current: "talent-retention" },
      description: "Recruitment pipelines, onboarding velocity, performance management, and career journeys",
      color: "#d97706",
    },
    {
      _id: "cat-analytics-productivity",
      _type: "category",
      title: "Workforce Analytics & ROI",
      slug: { _type: "slug", current: "workforce-analytics-roi" },
      description: "Measuring administrative hours saved, headcount productivity, and HCM return on investment",
      color: "#0d5bbd",
    },
    {
      _id: "cat-modern-workplace",
      _type: "category",
      title: "Culture & Modern Workplace",
      slug: { _type: "slug", current: "culture-modern-workplace" },
      description: "Continuous employee engagement, psychological safety, and remote workforce culture",
      color: "#ec4899",
    },
  ];

  for (const cat of categories) {
    await client.createOrReplace(cat);
    console.log(`  ✓ Category: ${cat.title}`);
  }

  // 3. Authors
  console.log("\n👤 Creating & Updating Authors...");
  const authors = [
    {
      _id: "d4c478f3-0ca7-4934-8df9-736e3aa68cf7",
      _type: "author",
      name: "Hiruni Thaksarani",
      slug: { _type: "slug", current: "hiruni-thaksarani" },
      role: "Chief Human Capital Officer & HR Strategy Lead",
      bio: "15+ years leading digital HR transformation, statutory compliance architecture, and AI workforce solutions for high-performance enterprise organizations worldwide.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
      },
    },
    {
      _id: "author-eleanor-vance",
      _type: "author",
      name: "Dr. Eleanor Vance",
      slug: { _type: "slug", current: "eleanor-vance" },
      role: "VP of Compensation & Statutory Governance",
      bio: "Former labor law attorney and executive compensation strategist advising multinational leadership on global statutory compliance across North America and APAC.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
      },
    },
    {
      _id: "author-marcus-chen",
      _type: "author",
      name: "Marcus Chen",
      slug: { _type: "slug", current: "marcus-chen" },
      role: "Head of People Technology & AI Workforce Systems",
      bio: "Specialist in machine learning applications in shift optimization, biometric attendance sync, and scalable enterprise cloud HCM engineering.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
      },
    },
    {
      _id: "author-sarah-jenkins",
      _type: "author",
      name: "Sarah Jenkins, SHRM-SCP",
      slug: { _type: "slug", current: "sarah-jenkins" },
      role: "Director of Employee Experience & Talent Architecture",
      bio: "Keynote speaker, researcher, and author dedicated to eliminating administrative hours leaks, modernizing performance management, and elevating team retention.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
      },
    },
  ];

  for (const auth of authors) {
    await client.createOrReplace(auth);
    console.log(`  ✓ Author: ${auth.name} (${auth.role})`);
  }

  // 4. In-Depth, Long-Form Blog Articles
  console.log("\n📝 Publishing In-Depth, Meaningful Blog Articles with SEO Metadata...");

  const posts = [
    // Post 1: Payroll Leakage
    {
      _id: "5e5b01c1-1ec1-4c86-947c-5012464dec64",
      _type: "post",
      title: "The Enterprise Guide to Eliminating Payroll Leakage: Statutory Audits and Automation in 2026",
      slug: { _type: "slug", current: "enterprise-guide-eliminating-payroll-leakage" },
      excerpt: "Manual recalculations, delayed shift approvals, and statutory mismatches cost enterprises an average of 4.2% of total payroll annually. Here is the operational framework to eliminate leakage and achieve 99.98% statutory accuracy.",
      metaDescription: "Learn how modern cloud HCM systems and automated statutory rules eliminate payroll leakage, overtime errors, and tax penalties for mid-to-enterprise organizations.",
      publishedAt: new Date().toISOString(),
      readTimeMinutes: 8,
      featured: true,
      categories: [
        { _type: "reference", _ref: "bcde367a-3c6d-4320-9fa2-99d1e2eb3131" },
        { _type: "reference", _ref: "cat-analytics-productivity" },
      ],
      author: { _type: "reference", _ref: "d4c478f3-0ca7-4934-8df9-736e3aa68cf7" },
      ...(complianceImgRef
        ? {
            mainImage: {
              _type: "image",
              asset: { _type: "reference", _ref: complianceImgRef },
              alt: "Executive reviewing digital payroll and compliance audit logs on tablet",
              caption: "Manual payroll processes invite hidden errors. Better visibility into payroll data helps enterprises identify discrepancies before money leaves company accounts.",
            },
          }
        : {}),
      keyTakeaways: [
        "Overtime miscalculations and unverified shift allowances represent over 58% of preventable payroll losses.",
        "Direct integration between biometric time-tracking and payroll engines eliminates the 3-day manual reconciliation bottleneck.",
        "Cloud HCM engines with dynamic statutory updates guarantee zero-day compliance across varying tax jurisdictions.",
        "Organizations standardizing automated payroll audits recover an average of 38 administrative hours per pay cycle.",
      ],
      body: [
        {
          _type: "block",
          _key: "p1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "In distributed and high-growth organizations, payroll operations frequently transform into a stressful, high-risk operational battleground. Between varying regional statutory tax codes, complex multi-tier overtime rates, retroactive salary revisions, and disconnected attendance logs, finance and HR teams find themselves trapped in a cycle of repetitive manual reconciliations.",
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
              _key: "s2",
              text: "Payroll leakage is rarely the consequence of a single massive operational catastrophe. Instead, it accumulates through dozens of micro-discrepancies: an unrecorded half-day leave, an erroneous shift differential calculation, duplicate statutory withholdings, or delayed exit settlements. Over a 12-month fiscal period, these cumulative errors siphon away 3% to 5% of total payroll expenditure.",
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
              _key: "s3",
              text: "Where Do The Financial Losses Actually Occur?",
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
              _key: "s4",
              text: "When conducting forensic payroll assessments across enterprise organizations, we repeatedly uncover four primary leakage categories:",
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
              text: "Time & Attendance Misalignments: Manual timesheets and disconnected badge punches allow unapproved overtime, missed clock-outs, and unverified holiday work to slip into the pay run without manager sign-off.",
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
              text: "Statutory & Tax Withholding Outdated Formulas: Tax thresholds, mandatory provident funds, and pension caps change frequently. Relying on manually maintained spreadsheets inevitably causes non-compliance fines and retroactive tax corrections.",
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
              text: "Delayed Termination Settlement Notices: When HR and payroll don't share a single database, departing employees frequently receive extra salary cycles or inaccurate severance payments before accounts are frozen.",
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
              text: "Retroactive Adjustment Drag: Mid-cycle promotions and backdated allowances require complex gross-to-net calculations that consume dozens of hours of manual finance bandwidth.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c1",
          calloutType: "takeaway",
          calloutTitle: "Executive Takeaway",
          calloutContent: "Statutory payroll penalties do not just incur financial fines—they damage executive credibility, trigger mandatory external labor audits, and erode employee trust in compensation reliability.",
        },
        {
          _type: "block",
          _key: "h2_2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "s5",
              text: "The Four Pillars of an Automated Zero-Leakage Architecture",
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
              _key: "s6",
              text: "Leading organizations migrating away from legacy payroll siloes toward unified platforms like PeoplesHR implement four operational safeguards:",
            },
          ],
        },
        {
          _type: "block",
          _key: "h3_1",
          style: "h3",
          children: [
            {
              _type: "span",
              _key: "s7",
              text: "1. Unified Real-Time Master Directory",
            },
          ],
        },
        {
          _type: "block",
          _key: "p5",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s8",
              text: "Every employee status update—whether a salary increase, department change, tax deduction certificate, or leave approval—originates from a single source of truth. The payroll engine draws directly from live employee profiles, eliminating duplicate data entry permanently.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h3_2",
          style: "h3",
          children: [
            {
              _type: "span",
              _key: "s9",
              text: "2. Geofenced & Biometric Time Synchronization",
            },
          ],
        },
        {
          _type: "block",
          _key: "p6",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s10",
              text: "Rather than submitting paper timecards at the end of the month, hours worked are verified daily via biometric scanners and geofenced mobile check-ins. Discrepancies are flagged to line managers within 24 hours, ensuring timesheets are 100% pre-validated prior to cutoff.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h3_3",
          style: "h3",
          children: [
            {
              _type: "span",
              _key: "s11",
              text: "3. Proactive Variance Auditing & Anomaly Detection",
            },
          ],
        },
        {
          _type: "block",
          _key: "p7",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s12",
              text: "Before salary disbursements are authorized, automated variance reports highlight any team member whose earnings deviate by more than 10% compared to their 3-month trailing average. Uncharacteristically high overtime hours or sudden changes in bank coordinates are halted for secondary authorization.",
            },
          ],
        },
        {
          _type: "block",
          _key: "q1",
          style: "blockquote",
          children: [
            {
              _type: "span",
              _key: "sq1",
              text: "Automating payroll isn't simply about reducing processing time from 4 days to 4 hours. It is about restoring absolute organizational confidence in every single payment delivered.",
            },
          ],
          quoteAuthor: "Hiruni Thaksarani",
          quoteTitle: "Chief Human Capital Officer",
        },
        {
          _type: "block",
          _key: "h2_3",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "s13",
              text: "The Implementation Roadmap: Transitioning with Zero Downtime",
            },
          ],
        },
        {
          _type: "block",
          _key: "p8",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s14",
              text: "To ensure payroll continuity during technology upgrades, finance leadership should run parallel payroll runs for a minimum of one pay cycle. This enables side-by-side comparison between existing formulas and automated calculations, ensuring every fringe benefit, tax code, and overtime bracket is validated before cutting over.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c2",
          calloutType: "tip",
          calloutTitle: "Audit Checklist",
          calloutContent: "Review your top 5 payroll expense categories every quarter. Compare total hours paid against project delivery milestones to ensure overtime spending correlates directly with business revenue growth.",
        },
      ],
    },

    // Post 2: AI Workforce Scheduling
    {
      _id: "post-ai-workforce-scheduling-copilot",
      _type: "post",
      title: "How AI Copilots Are Transforming Enterprise Workforce Scheduling in 2026",
      slug: { _type: "slug", current: "ai-copilots-transforming-workforce-scheduling-2026" },
      excerpt: "Predictive scheduling reduces shift absenteeism by 28% and eliminates hours of spreadsheet guesswork. Explore how AI-driven rosters balance staffing demands with employee preferences.",
      metaDescription: "Discover how AI-powered scheduling copilots optimize shift allocation, eliminate overtime leakage, and enhance workforce satisfaction across enterprise operations.",
      publishedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
      readTimeMinutes: 7,
      featured: true,
      categories: [
        { _type: "reference", _ref: "cat-ai-hr-tech" },
        { _type: "reference", _ref: "cat-analytics-productivity" },
      ],
      author: { _type: "reference", _ref: "author-marcus-chen" },
      ...(aiImgRef
        ? {
            mainImage: {
              _type: "image",
              asset: { _type: "reference", _ref: aiImgRef },
              alt: "Workforce optimization transparent analytics dashboard in a modern enterprise office",
              caption: "Real-time AI shift analytics and heatmaps enable managers to deploy optimal headcount seamlessly.",
            },
          }
        : {}),
      keyTakeaways: [
        "Predictive machine learning models anticipate customer demand spikes 3 weeks in advance, optimizing labor spend.",
        "Mobile self-service shift bidding enables frontline employees to swap shifts transparently without management friction.",
        "Automated fatigue guardrails prevent labor regulation violations before shifts are officially scheduled.",
        "Shift schedule distribution lead times improve from 48 hours to 14 days in advance.",
      ],
      body: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "Workforce shift scheduling has long stood as one of the most thankless and friction-laden operational responsibilities in hospitality, retail, manufacturing, logistics, and healthcare. Store managers, plant supervisors, and department heads frequently dedicate 10 to 15 hours each week piecing together shift spreadsheets, only for an unexpected absence or personal emergency to dismantle the entire schedule.",
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
              text: "The Evolution from Reactive Roster Building to Predictive Optimization",
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
              text: "Traditional scheduling relies on gut instinct, historical spreadsheets, and guesswork. In contrast, modern AI workforce copilots synthesize multiple dynamic inputs in real time: foot traffic patterns, order volume forecasts, weather conditions, historical absenteeism rates, and individual employee certifications. The result is an optimal, compliant roster generated in seconds.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c1",
          calloutType: "tip",
          calloutTitle: "Operations Benchmark",
          calloutContent: "Publishing shift schedules at least 14 days in advance with mobile shift swap capabilities reduces voluntary frontline employee turnover by up to 22% within 6 months.",
        },
        {
          _type: "block",
          _key: "h2_2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "s4",
              text: "Empowering Employees Through Mobile Shift Bidding",
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
              text: "Instead of forcing employees into rigid schedules, modern HCM platforms allow team members to specify preferred shift windows, mark recurring unavailable slots, and bid on open shifts directly from their smartphone. When an employee cannot work a shift, they can initiate a peer swap with another certified colleague. The AI engine automatically validates that the swap complies with maximum weekly hours and rest mandates before approving it.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2_3",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "s6",
              text: "Preventing Burnout and Regulatory Penalties",
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
              text: "Statutory labor laws across many regions impose strict limits on consecutive workdays and mandatory rest periods between closing and opening shifts ('clopening'). By configuring these constraints into the PeoplesHR scheduling copilot, compliance violations are flagged and prevented before the schedule is finalized.",
            },
          ],
        },
        {
          _type: "block",
          _key: "q1",
          style: "blockquote",
          children: [
            {
              _type: "span",
              _key: "sq1",
              text: "The future of workforce scheduling is not about replacing human management—it is about removing the friction so leaders can spend their time coaching people rather than wrestling with spreadsheets.",
            },
          ],
          quoteAuthor: "Marcus Chen",
          quoteTitle: "Head of People Technology",
        },
      ],
    },

    // Post 3: Digital Onboarding
    {
      _id: "post-digital-onboarding-excellence",
      _type: "post",
      title: "Accelerating Day-One Velocity: The Modern Enterprise Digital Onboarding Playbook",
      slug: { _type: "slug", current: "accelerating-day-one-velocity-digital-onboarding-playbook" },
      excerpt: "First impressions shape employee retention for years. Learn how automated digital pre-boarding transforms nervous new hires into confident, high-performing contributors within their first week.",
      metaDescription: "Step-by-step enterprise digital onboarding playbook: eliminate first-day paperwork, automate IT provisioning, and elevate 6-month retention by 24%.",
      publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      readTimeMinutes: 6,
      featured: false,
      categories: [
        { _type: "reference", _ref: "cat-talent-retention" },
        { _type: "reference", _ref: "cat-modern-workplace" },
      ],
      author: { _type: "reference", _ref: "author-sarah-jenkins" },
      ...(onboardingImgRef
        ? {
            mainImage: {
              _type: "image",
              asset: { _type: "reference", _ref: onboardingImgRef },
              alt: "Warm enterprise HR team welcoming a new employee with welcome kit and laptop",
              caption: "Automated digital pre-boarding ensures new hires arrive on Day 1 prepared and excited to contribute.",
            },
          }
        : {}),
      keyTakeaways: [
        "Pre-boarding document completion before Day 1 eliminates 90% of administrative anxiety.",
        "Automated buddy pairings and 30-60-90 milestone trackers increase 6-month retention by 24%.",
        "Direct integration between HR and IT provisioning ensures equipment and accounts are ready on arrival.",
      ],
      body: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "Nothing dampens an eager new hire's enthusiasm faster than spending their first day trapped in a conference room filling out paper tax forms, signing employee handbook binders, and waiting for IT to grant email access. In today's competitive talent market, the onboarding experience is an employee's first litmus test of organizational agility.",
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
              text: "The Three Critical Phases of World-Class Onboarding",
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
              text: "High-performing organizations structure employee onboarding into three structured phases that transition smoothly from administration to connection and performance:",
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
              text: "Phase 1: Pre-boarding (Days -14 to 0) — Secure mobile portal where new hires upload ID documents, complete tax profiles, select equipment, and review introductory team videos at their own pace.",
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
              text: "Phase 2: Immersion (Days 1 to 30) — Focus entirely on culture, team integration, and foundational business context. An assigned onboarding buddy provides informal support and psychological safety.",
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
              text: "Phase 3: Autonomy & Alignment (Days 31 to 90) — Clear 30-60-90 day milestone roadmaps where success metrics are agreed upon and tracked through regular agile check-ins.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c1",
          calloutType: "takeaway",
          calloutTitle: "Retention Impact",
          calloutContent: "Employees who undergo a structured digital onboarding process are 58% more likely to remain with the company after three years compared to those experiencing informal onboarding.",
        },
        {
          _type: "block",
          _key: "h2_2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "s4",
              text: "Automating The IT and Facilities Handshake",
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
              text: "A common failure point in enterprise onboarding is the disconnect between HR and IT. When an offer letter is counter-signed in PeoplesHR, automated webhooks can trigger software provisioning tickets, hardware shipments, and building access credentials instantly, ensuring complete Day-One readiness.",
            },
          ],
        },
      ],
    },

    // Post 4: Multi-Jurisdiction Compliance
    {
      _id: "post-global-compliance-audit-readiness",
      _type: "post",
      title: "Navigating Multi-Jurisdiction Labor Compliance: The 2026 Enterprise Risk Checklist",
      slug: { _type: "slug", current: "multi-jurisdiction-labor-compliance-risk-checklist-2026" },
      excerpt: "Expanding across global borders introduces complex statutory frameworks, severance rules, and data residency mandates. Discover how leading enterprises maintain continuous audit readiness.",
      metaDescription: "Essential compliance strategies and regulatory playbooks for multinational organizations managing cross-border workforces in 2026.",
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      readTimeMinutes: 8,
      featured: false,
      categories: [
        { _type: "reference", _ref: "bcde367a-3c6d-4320-9fa2-99d1e2eb3131" },
        { _type: "reference", _ref: "cat-people-strategy" },
      ],
      author: { _type: "reference", _ref: "author-eleanor-vance" },
      ...(complianceImgRef
        ? {
            mainImage: {
              _type: "image",
              asset: { _type: "reference", _ref: complianceImgRef },
              alt: "Executive compliance officer reviewing digital regulatory audit reports on tablet",
              caption: "Centralized cloud HCM ensures single-click compliance reporting across all regional statutory mandates.",
            },
          }
        : {}),
      keyTakeaways: [
        "Regional labor laws, overtime ceilings, and statutory provident funds must be updated dynamically.",
        "Data sovereignty mandates require employee profiles to reside in jurisdiction-compliant storage.",
        "Centralized audit logs provide forensic proof of approval workflows during external audits.",
      ],
      body: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "As businesses expand across international territories, human resources evolves from an internal support department into a crucial defender against corporate legal exposure. A single misinterpretation of regional overtime ceilings, statutory severance formulas, or data sovereignty rules can trigger expensive litigation and reputational harm.",
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
              text: "The Three Critical Compliance Hazards for Multinational Employers",
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
              text: "Managing a workforce across multiple jurisdictions requires vigilance in three primary regulatory arenas:",
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
              text: "Statutory Contributions & Benefit Ceilings: Mandatory provident fund contributions, social security withholdings, and healthcare tiers vary widely between countries and change with each new fiscal budget.",
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
              text: "Data Sovereignty & Employee Privacy: Strict regulations such as GDPR require sensitive employee payroll and biometric data to reside in compliant data centers with strict role-based access logs.",
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
              text: "Severance & Termination Frameworks: Notice period requirements and statutory redundancy formulas differ dramatically. Calculating severance manually invites costly labor tribunal disputes.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c1",
          calloutType: "warning",
          calloutTitle: "Regulatory Alert",
          calloutContent: "Never rely on global templates for local employment contracts. Statutory mandatory clauses must reflect current municipal and federal labor court precedents.",
        },
      ],
    },

    // Post 5: Hours Leak Assessment
    {
      _id: "post-hours-leak-assessment-hidden-drain",
      _type: "post",
      title: "The Hours Leak Assessment: Diagnosing The Hidden Drain in Modern People Operations",
      slug: { _type: "slug", current: "hours-leak-assessment-hidden-drain-people-ops" },
      excerpt: "Are your HR professionals spending 70% of their time on repetitive record management instead of strategic people initiatives? Here is how to measure and recapture lost productive capacity.",
      metaDescription: "Quantify and eliminate hundreds of administrative hours lost to manual paper-pushing, disconnected spreadsheets, and legacy HR tools with modern HCM automation.",
      publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
      readTimeMinutes: 7,
      featured: false,
      categories: [
        { _type: "reference", _ref: "cat-analytics-productivity" },
        { _type: "reference", _ref: "cat-people-strategy" },
      ],
      author: { _type: "reference", _ref: "d4c478f3-0ca7-4934-8df9-736e3aa68cf7" },
      keyTakeaways: [
        "Repetitive employee profile updates and manual letter requests consume up to 22 hours weekly per HR manager.",
        "Self-service mobile requests eliminate 85% of routine administrative ticket volumes.",
        "Reclaiming administrative bandwidth allows HR leadership to focus on retention, succession planning, and executive strategy.",
      ],
      body: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "Every growing company reaches an inflection point where legacy tools—shared spreadsheets, email approval chains, paper leave requests—cease to be merely slow and become an active impediment to business velocity.",
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
              text: "The Anatomy of an Administrative Hours Leak",
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
              text: "When conducting audits with the PeoplesHR Hours Leak Calculator, we consistently identify four key administrative sinks: chasing managers for attendance approvals, manually issuing employment verification letters, re-entering bank details into payroll portals, and manually compiling monthly headcount reports.",
            },
          ],
        },
        {
          _type: "callout",
          _key: "c1",
          calloutType: "info",
          calloutTitle: "Did You Know?",
          calloutContent: "An enterprise with 500 employees spends an estimated 1,840 administrative hours each year solely managing manual leave requests and attendance adjustments.",
        },
      ],
    },

    // Post 6: Continuous Feedback vs Annual Review
    {
      _id: "post-continuous-feedback-vs-annual-reviews",
      _type: "post",
      title: "Continuous Agile Feedback vs. The Annual Review: Building High-Retention Cultures",
      slug: { _type: "slug", current: "continuous-agile-feedback-vs-annual-reviews-high-retention" },
      excerpt: "Annual performance appraisals are often dreaded, backward-looking, and outdated before ink dries. Discover why modern enterprises are adopting quarterly OKRs and continuous pulse check-ins.",
      metaDescription: "Replace outdated annual performance reviews with modern continuous agile feedback, real-time OKRs, and continuous employee development frameworks.",
      publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
      readTimeMinutes: 7,
      featured: false,
      categories: [
        { _type: "reference", _ref: "cat-modern-workplace" },
        { _type: "reference", _ref: "cat-talent-retention" },
      ],
      author: { _type: "reference", _ref: "author-sarah-jenkins" },
      keyTakeaways: [
        "Organizations practicing monthly agile 1-on-1s experience 31% lower voluntary turnover among key performers.",
        "Transparent goal cascades connect individual daily tasks directly to executive business milestones.",
        "360-degree peer recognition builds a culture of psychological safety and shared accountability.",
      ],
      body: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "In the fast-moving modern enterprise, waiting twelve months to tell a team member how they performed in Q1 is an operational failure. By the time the review meeting occurs, projects have shipped, context has faded, and feedback is received with defensiveness rather than motivation.",
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
              text: "The Shift to Continuous Agile Development",
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
              text: "Forward-thinking HR teams leverage PeoplesHR Performance module to establish dynamic, quarterly OKRs. Employees update progress asynchronously, managers provide micro-coaching in real time, and annual appraisals become celebratory summaries rather than anxiety-inducing confrontations.",
            },
          ],
        },
      ],
    },
  ];

  for (const post of posts) {
    await client.createOrReplace(post);
    console.log(`  ✓ Published: "${post.title}" (SEO description & takeaways added)`);
  }

  console.log("\n=======================================================");
  console.log("🎉 SUCCESS! All in-depth articles, authors, categories & images seeded to Sanity!");
  console.log("Check live blog: http://localhost:3000/blog");
  console.log("Check Studio: http://localhost:3000/studio");
  console.log("=======================================================\n");
}

seed().catch((err) => {
  console.error("❌ Seed error:", err);
  process.exit(1);
});
