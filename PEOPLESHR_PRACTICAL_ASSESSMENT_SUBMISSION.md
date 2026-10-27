# PeoplesHR Web Experience Engineer Practical Assessment
## Submission Documentation: Interactive B2B Digital Experience & Discovery Suite

**Role:** Web Experience Engineer  
**Company:** PeoplesHR (Enterprise B2B Cloud HCM & Payroll Platform)  
**Selected Challenges Submitted:**  
1. **Challenge 01:** Visitors cannot quantify the cost of inefficient work (*Interactive ROI & Hours Leak Engine*)
2. **Challenge 02:** Buyers struggle to identify the right software option (*Interactive HR Stack Builder & Diagnostic Wizard*)  
   *(Architecturally incorporates **Challenge 03:** Visitors are unsure where to begin improving operations)*
3. **Challenge 05:** Useful content does not lead visitors toward solutions (*SEO/GEO-Ready Editorial Hub & Content-to-Solution Pathway*)  
   *(Integrated with **Challenge 04:** Value-First Lead Conversion & Executive Board Dossier Generation)*

---

## 1. Executive Summary & Strategic Approach

Modern B2B enterprise software evaluation has shifted from passive brochure consumption to active **self-serve exploration and proof of value**. Prospective buyers—spanning HR Operations Directors, Chief People Officers, and CFOs—arrive with varying levels of digital maturity, unique operational bottlenecks, and an urgent mandate to justify technology investments internally before speaking with sales.

To transform PeoplesHR’s web presence into an active **Value Realization Engine**, this solution replaces ordinary landing pages with three discoverable, highly interactive, and interconnected web applications:

1. **The Hours Leak & HR ROI Modeling Engine (Solving Challenge 01)**: Translates invisible operational drag (manual payroll calculations, leave reconciliations, attendance disputes, statutory error reruns) into board-level financial metrics, showing exact annual cash drag, reclaimed FTE hours, and 3-year ROI curves.
2. **The Guided HR Stack Builder & Diagnostic Wizard (Solving Challenge 02 & Challenge 03)**: Eliminates feature fatigue through a consultative 4-stage diagnostic wizard that audits operational bottlenecks, prioritizes modular capabilities ("Must", "Nice", "Not Now"), and programmatically matches buyers to their ideal solution tier (Foundation, Growth, Enterprise) with transparent "Why this fits" vs. "Why not the others" gap analyses.
3. **The SEO/GEO Content-to-Solution Discovery Hub (Solving Challenge 05)**: Bridges the critical gap between top-of-funnel search discovery and commercial product solutions. Articles feature structured Schema.org JSON-LD for AI search engines (GEO), sticky reading progress tracking, inline key takeaways, and context-aware conversion widgets that seamlessly move visitors from informational questions into interactive problem-solving tools.

Across all three solutions, a **Value-First Lead Generation Architecture (Challenge 04)** is embedded, enabling buyers to receive instant email dispatches of their customized setup and export CFO-ready printable PDF business cases.

---

## 2. Solution Architectures & Deep Dives

```
+----------------------------------------------------------------------------------------------------------------------+
|                                             PEOPLESHR VISITOR JOURNEY ARCHITECTURE                                   |
+----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                      |
|  [ TOP-OF-FUNNEL DISCOVERY ]         [ PROBLEM QUANTIFICATION ]          [ SOLUTION CONFIGURATION ]                  |
|                                                                                                                      |
|   CHALLENGE 05:                       CHALLENGE 01:                       CHALLENGE 02 + 03:                         |
|   Content-to-Solution Hub             Hours Leak & ROI Engine             HR Stack Builder & Diagnostic              |
|                                                                                                                      |
|   * Search / AI-GEO discovery         * Homepage interactive teaser       * Step 1: Headcount & Multi-country scale  |
|   * Structured Article JSON-LD        * Full interactive modeling suite   * Step 2: Operational Bottleneck Audit     |
|   * Sticky Table of Contents & Read % * 5 administrative sink categories  * Step 3: Module Prioritization (Must/Nice)|
|   * Contextual Solution Bridges       * Net annual savings calculation    * Step 4: Current Setup & Horizon          |
|     └──> Links to Stack Builder & ROI * 3-Year ROI curve & payback time   * Dynamic Weighted Match Algorithm (0-100%)|
|                                                                           * "Why This Fits" vs "Why Not Others"      |
|                                                                           * Side-by-side comparison matrix modal     |
|                                                                                                                      |
|                                         [ VALUE-FIRST CONVERSION ]                                                   |
|                                         (Challenge 04 Integration)                                                   |
|                                                                                                                      |
|   * Instant Email Dispatch Modal (`RecommendationEmailDialog.tsx`) with live parameters pill                         |
|   * Native `@media print` CFO-Ready Executive PDF Business Case (`RecommendationDocument.tsx`)                      |
|   * Pre-populated Architectural Audit Booking (`ScheduleAuditDialog.tsx`)                                            |
|                                                                                                                      |
+----------------------------------------------------------------------------------------------------------------------+
```

---

### Challenge 01: Visitors Cannot Quantify the Cost of Inefficient Work

#### The Problem & Strategic Opportunity
HR leaders intuitively recognize that disjointed spreadsheets, attendance disputes, and manual payroll calculations drain company resources. However, when seeking budget approvals, they struggle to quantify this overhead in financial terms. Without tangible business impact metrics, purchase requests stall in procurement committees.

#### Concept & Implementation Architecture
We engineered a dual-tier quantification experience:

1. **Homepage Engagement Teaser (`/` - `HoursLeakCalculatorSection.tsx` & `HoursLeakCalculator/index.tsx`)**:
   - **Zero-Friction Interaction**: Team-size tier selector (`50–100`, `100–250`, `250–500`, `500+`) providing instant estimates without tedious form typing.
   - **Key Metrics Display**:
     - *Hours Saved Per Year* (e.g., 3,000 hrs = 1.4 FTE equivalent).
     - *Potential Financial Value* (e.g., $144,000/yr).
     - *Projected 3-Year ROI* (e.g., 410%).
   - **5 Administrative Sink Categories**: Animated progress bars showing where hours are leaking:
     - Payroll Preparation & Payslip Checks (32%)
     - Leave Approvals & Attendance Auditing (24%)
     - Onboarding Forms & Manual Provisioning (18%)
     - Expense Claims Verification & Disbursement (14%)
     - Statutory Reporting & Audit Compliance (12%)
   - **Rich Visual Aesthetic**: Custom 3D isometric dashboard graphic and Framer Motion staggered reveals.

2. **Full-Scale Dedicated Financial Modeling Application (`/calculator` - `Calculator/index.tsx`)**:
   - **Interactive Workforce Parameters Card (`WorkforceParametersCard.tsx`)**:
     - Headcount slider & numeric input (10 to 10,000+ employees).
     - Average fully loaded hourly compensation ($/hr).
     - Payroll processing frequency (Monthly vs. Semi-Monthly, dynamically applying a 1.45x manual touchpoint multiplier).
     - New hires per month (modeling onboarding friction).
     - Cross-system data sync hours per month.
     - Payroll error rate percentage (capturing penalty risk, off-cycle pay runs, and dispute resolution).
   - **Industry Benchmark Presets**:
     - *High-Growth Tech* (120 headcount, $38/hr, 6 hires/mo)
     - *Multi-Unit Retail* (280 headcount, $24/hr, 18 hires/mo, semi-monthly)
     - *Healthcare & Logistics* (450 headcount, $32/hr, 22 hires/mo, 2.5% error rate)
     - *Professional Services* (85 headcount, $46/hr, 4 hires/mo)
   - **Impact Visualization Tabs (`ImpactAnalysisCard.tsx`)**:
     - **Summary Dashboard**: Annual Cost of Drag, Direct Labor Waste, Reclaimed Hours, and Net Annual Savings after software costs.
     - **Cost Sinks Breakdown**: Granular dollar breakdown per administrative sinkhole with interactive category pills.
     - **3-Year ROI & Payback Timeline**: Demonstrates payback breakeven (typically 2.4 to 4.2 months) and 3-year net ROI (300%–550%).

#### Algorithmic Formulation
$$\text{Total Wasted Hours} = \text{Payroll Hours} + \text{Sync Hours} + \text{Onboarding Hours} + \text{Error Correction Hours}$$
$$\text{Annual Cost of Drag} = (\text{Total Wasted Hours} \times \text{Hourly Rate}) + \text{Payroll Error Penalties}$$
$$\text{Hours Reclaimed} = \text{Total Wasted Hours} \times 72.8\% \text{ (PeoplesHR Automation Factor)}$$
$$\text{Net Annual Savings} = (\text{Cost of Drag} \times 76\%) - \text{Estimated Software Subscription}$$
$$\text{Payback Period (Months)} = \frac{\text{Annual Software Cost}}{\text{Net Annual Savings} / 12}$$

---

### Challenge 02: Buyers Struggle to Identify the Right Software Option  
*(Simultaneously Solving **Challenge 03: Visitors are unsure where to begin improving operations**)*

#### The Problem & Strategic Opportunity
- **Challenge 02 Friction**: Enterprise HR software is cluttered with complex jargon, feature checklists, and opaque tier packages. Buyers don't know whether they need Foundation, Growth, Professional, or Enterprise.
- **Challenge 03 Friction**: Prospective buyers know their operational processes are broken, but they lack digital maturity and cannot determine which operational vulnerability (manual attendance, compliance exposure, or fragmented onboarding) to tackle first.

#### Concept & Implementation Architecture
We designed and built the **Interactive HR Stack Builder (`/packages/stack-builder`)**, a consultative 4-stage decision wizard that guides visitors from operational diagnosis to customized software architecture:

1. **Step 1: Your Business Profile (`StepBusiness.tsx`)**:
   - Company scale (`1-50`, `51-200`, `201-1,000`, `1,000+` employees).
   - Industry sector (Technology, Banking, Manufacturing, Retail, Healthcare, etc.).
   - Geographic distribution (`1 country`, `2 countries`, `3–5 countries`, `6+ countries`) and operational locations.
   - Currency selection (LKR, USD, EUR, GBP, SGD, AED, AUD, CAD).

2. **Step 2: Operational Bottleneck Audit (`StepChallenges.tsx`) — *Directly Solves Challenge 03***:
   - Diagnoses the visitor's core operational pain points before discussing software features:
     - *"Manual HR administration & paper forms"*
     - *"Payroll calculation takes too long & requires rework"*
     - *"Employee data is scattered across disconnected drives"*
     - *"Leave requests & overtime approvals are chaotic"*
     - *"Attendance reconciliation creates constant disputes"*
     - *"Hiring is too manual & onboarding takes too long"*
     - *"Limited visibility into workforce analytics and turnover"*
     - *"Employees rely on HR for every basic request"*
   - Identifies critical operational vulnerabilities and maps them to priority technology remedies.

3. **Step 3: Modular Capability Prioritization (`StepModules.tsx`)**:
   - 10 functional modules: *Core HR, Payroll, Time & Attendance, Leave & Absence, Recruitment & ATS, Performance Management, Employee Self-Service, People Analytics, Multi-Country Global HCM, and Enterprise Integrations/APIs*.
   - Three-tier prioritization controls: **"Must Have"** (Critical), **"Nice to Have"** (Phase 2), or **"Not Now"** (Out of Scope).

4. **Step 4: Current Setup & Migration Horizon (`StepSetup.tsx`)**:
   - Current baseline: *Spreadsheets & email, Separate disjointed point tools, Existing legacy HR software, or Mostly paper-based*.
   - Target deployment timeline: *ASAP, Within 3 months, 3–6 months, or Exploratory*.

5. **Diagnostic Recommendation & Fit Scoring Engine (`StackBuilderResults.tsx`)**:
   - **Weighted Match Scoring Algorithm (`calculateStackRecommendation`)**: Calculates compatibility percentages (0–100%) against PeoplesHR tiers (`Foundation`, `Growth`, `Enterprise`).
   - **Transparent "Why This Fits" Card**: Correlates the winning package directly with the buyer's headcount, multi-country footprint, and required modules.
   - **"Why Not The Others?" Gap Analysis**:
     - Evaluates alternative packages side-by-side.
     - Flags **Missing Critical Capabilities** (e.g., *"Foundation lacks Multi-Country Payroll & Recruitment"*).
     - Flags **Excess Unnecessary Scope** (e.g., *"Enterprise contains Custom REST APIs and Global Tax engines beyond your single-country 80-person scope"*).
     - Displays required priority coverage percentages (e.g., *"Covered 6 of 8 required capabilities (75%)"*).
   - **Side-by-Side Comparison Matrix Modal (`PackageComparisonModal.tsx`)**: Allows on-demand feature audits across all tiers without leaving the page.

---

### Challenge 05: Useful Content Does Not Lead Visitors Toward Solutions

#### The Problem & Strategic Opportunity
Prospective buyers frequently enter a B2B SaaS website via organic search (Google, LinkedIn) or generative AI search engines (Perplexity, ChatGPT, Gemini) seeking answers to operational challenges (e.g., *"how to eliminate payroll errors"*, *"statutory compliance checklist"*). However, standard blog posts act as dead ends—readers consume the text, find no intuitive bridge to software solutions, and leave without engaging further.

#### Concept & Implementation Architecture
We engineered an **SEO/GEO-Ready Editorial Hub & Content-to-Solution Pathway (`/blog` and `/blog/[slug]`)**:

1. **Context-Aware Solution Bridging Widgets (`BlogPostDetailView.tsx`)**:
   - In the sticky reading sidebar and article body, dedicated **Solution Bridges** actively connect the subject matter to PeoplesHR interactive tools:
     - **Stack Builder Solution Card**: *"Build Your Tailored HR Tech Stack — Eliminate software bloat and optimize payroll, attendance, and ESS in 4 simple steps."* Links directly to `/packages/stack-builder`.
     - **ROI Calculator Solution Card**: *"Calculate Hours Saved — Find out how many hours your team loses each week to manual recalculations."* Links directly to `/calculator`.
   - In-article executive key takeaway callout boxes (*"At A Glance"*) summarizing actionable takeaways before deep-diving into methodology.

2. **Reader Engagement & Navigation Utility**:
   - **Interactive Reading Progress Bar (`ReadingProgressBar.tsx`)**: Sleek primary-blue progress bar tracking reading completion based on the target article element.
   - **Sticky Table of Contents (`TableOfContents.tsx`)**: Automatically scans article headings (H2, H3), highlighting the active section with smooth scroll navigation on desktop and mobile.
   - **Author Authority & E-E-A-T Cards (`AuthorBioCard.tsx`)**: Displays author credentials, verified research badges, and social profiles, satisfying Google's search quality evaluator guidelines.
   - **Topic Clustering & Tag Search**: Readers can click related topic tags to discover playbooks and guides within the same domain.

3. **Technical SEO & Generative Engine Optimization (GEO)**:
   - **Dynamic JSON-LD Article Schema (`CustomArticleJsonLd`)**: Injects Schema.org metadata containing `headline`, `author`, `publisher`, `datePublished`, `dateModified`, `keywords`, and `wordCount` to maximize inclusion in AI Overviews and rich snippets.
   - **Breadcrumb Structured Data (`CustomBreadcrumbJsonLd`)**: Semantic hierarchy (`Home > HR Insights > Article Name`) ensuring clear search engine indexing.
   - **Next.js 16 Partial Prerendering (PPR) & Incremental Static Regeneration (ISR)**: Pre-renders published articles statically at build time while seamlessly revalidating fresh content from Sanity CMS via webhooks and background regeneration.

---

### Challenge 04 Integration: Value-First Conversion & Lead Architecture

To support and convert visitors across all three challenges, a **Value-First Lead Generation Architecture** was built:

1. **Instant Recommendation Email Dispatch Modal (`RecommendationEmailDialog.tsx`)**:
   - When finishing the Stack Builder diagnostic, visitors are invited to receive their custom architecture summary.
   - Displays a live context pill (`120 employees · Technology · 1 country`).
   - Captures work email with validation, tactile loading feedback, and Sonner toast confirmations (*"Recommendation sent to alex@company.com"*).
2. **CFO-Ready Executive PDF & Print Media Engine (`RecommendationDocument.tsx` & `CalculatorDocument.tsx`)**:
   - Both the ROI Calculator and Stack Builder include a **"Download Recommendation (PDF)"** and **"Preview Detailed Report"** feature.
   - Uses native CSS print stylesheets (`@media print`, `print:block`, `print:hidden`).
   - Automatically hides navigation menus and buttons, formatting a clean, multi-page executive dossier complete with PeoplesHR branding, cost savings breakdown, recommended stack, and rollout timeline.
   - Enables internal champions to bring an objective business case directly to executive stakeholders.
3. **Pre-Populated Diagnostic Audit Dialog (`ScheduleAuditDialog.tsx`)**:
   - Embeds company headcount, calculated hours saved, and cost drag directly into a consultation request.
   - Positions the interaction as an expert architectural review rather than a cold sales pitch.

---

## 3. Technology Stack & Architectural Decisions

```
+-----------------------------------------------------------------------------------------------+
|                                    TECHNOLOGY STACK ARCHITECTURE                              |
+-----------------------------------------------------------------------------------------------+
| Layer             Technology                     Rationale & Value Realization                |
+-----------------------------------------------------------------------------------------------+
| Web Framework     Next.js 16 (App Router, Turbopack) Lightning-fast First Contentful Paint,    |
|                                                  Partial Prerendering, dynamic OG metadata    |
| Component Runtime React 19                       Action hooks, Suspense streaming boundaries  |
| Type Safety       TypeScript 5 (Strict Mode)     Full type safety across mathematical models  |
| Design System     Tailwind CSS v4                Custom tokens, fluid responsive typography   |
| Motion System     Framer Motion 14               Physics-based spring animations, tab shifts  |
| Accessible UI     Radix UI Dialog Primitive      WCAG 2.1 AA accessible focus trapping        |
| Content Engine    Sanity CMS & PortableText      Headless editorial management & real-time API|
| Structured Data   Schema.org JSON-LD             AI/GEO search engine discovery               |
| Document Engine   Native CSS @media print        Zero-dependency executive PDF generation     |
+-----------------------------------------------------------------------------------------------+
```

---

## 4. Project Directory Structure

```
peopleshr-assessment/
├── src/
│   ├── app/
│   │   ├── page.tsx                         # Homepage with Hours Leak Calculator Teaser (Challenge 01)
│   │   ├── calculator/page.tsx              # Full HR ROI & Drag Calculator Application (Challenge 01)
│   │   ├── packages/page.tsx                # Turnkey Solutions & Pricing Overview
│   │   ├── packages/stack-builder/page.tsx  # Interactive HR Stack Builder Application (Challenge 02 + 03)
│   │   ├── blog/page.tsx                    # Discoverable Editorial Hub (Challenge 05)
│   │   ├── blog/[slug]/page.tsx             # Solution-Bridging Article View with ISR & JSON-LD (Challenge 05)
│   │   ├── contact/page.tsx                 # Enterprise Consultation & Inquiries
│   │   ├── layout.tsx                       # Root Layout, Global Navigation & Providers
│   │   ├── sitemap.ts & robots.ts           # Dynamic XML Sitemap & Search Engine Crawler Rules
│   │   └── manifest.ts                      # Web App Manifest
│   ├── components/
│   │   ├── Calculator/                      # Dedicated ROI Engine, Inputs, Sinks & PDF Dossier
│   │   ├── HoursLeakCalculator/             # Homepage Teaser & 3D Isometric Visual
│   │   ├── StackBuilder/                    # Consultative Wizard, Live Sidebar & Match Results
│   │   │   └── Steps/                       # Business, Challenges (03), Modules, Setup Sub-steps
│   │   ├── Blog/                            # Content Hub, TableOfContents, ReadingProgress & Solution Bridges
│   │   ├── Packages/                        # Tier Visual Cards (Foundation, Growth, Enterprise)
│   │   ├── Contact/                         # Consultation & Direct Inquiry Forms
│   │   ├── ui/                              # Radix UI Primitives, Lucide Icons & Custom Badges
│   │   └── framer-motion/                   # GPU-Accelerated Micro-interaction Wrappers
│   ├── constants/
│   │   ├── calculator.ts                    # Economic formulas, baseline sink ratios & presets
│   │   ├── stackBuilder.ts                  # Module weightings, match logic & tier definitions
│   │   └── navigation.ts                    # Global navigation items and featured tools
│   ├── sanity/                              # Sanity Studio & Client Configuration
│   │   ├── schemaTypes/                     # Post, Category, Author Schemas
│   │   └── lib/                             # GROQ Queries, Client Fetchers & Image Builders
│   └── lib/
│       ├── json-ld.tsx                      # Structured Data Schemas (Article, Product, SoftwareApp, Breadcrumb)
│       ├── seo.ts                           # Canonical metadata & OpenGraph generators
│       └── utils.ts                         # Tailwind CSS merging utilities
```

---

## 5. Local Setup & Verification Instructions

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation & Run

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Verify the Interactive Experiences in your browser:**
   - **Challenge 01 (Homepage Teaser):** [http://localhost:3000](http://localhost:3000)
   - **Challenge 01 (Dedicated ROI Calculator):** [http://localhost:3000/calculator](http://localhost:3000/calculator)
   - **Challenge 02 & 03 (Interactive HR Stack Builder):** [http://localhost:3000/packages/stack-builder](http://localhost:3000/packages/stack-builder)
   - **Challenge 05 (Content-to-Solution Discovery Hub):** [http://localhost:3000/blog](http://localhost:3000/blog)
   - **Challenge 05 (Article with Solution Bridges & TOC):** [http://localhost:3000/blog/enterprise-guide-eliminating-payroll-leakage](http://localhost:3000/blog/enterprise-guide-eliminating-payroll-leakage)

4. **Verify Production Build:**
   ```bash
   pnpm build
   pnpm start
   ```

---

## 6. Conclusion

By building **purpose-driven, value-first web applications**, this solution resolves the core buying hurdles of enterprise HR leaders:
- **Challenge 01**: Visitors quantify their invisible operational drag into hard numbers and payback timelines.
- **Challenge 02 + 03**: Visitors audit their operational bottlenecks and configure a tailored software stack without feature fatigue.
- **Challenge 05**: Visitors discovering articles via search or AI engines are actively guided toward relevant resources and software solutions via contextual bridges.
- **Challenge 04**: High-utility PDF dossiers and email dispatches build executive trust and generate warm, pre-qualified leads for PeoplesHR.
