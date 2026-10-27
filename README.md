# PeoplesHR Web Experience Engineer Assessment

An interactive, high-converting digital web experience suite built for **PeoplesHR** (Enterprise Cloud Human Capital Management & Payroll Platform).

This project transforms traditional static B2B landing pages into **value-driven interactive applications** that empower prospective buyers to quantify administrative inefficiencies, diagnose operational bottlenecks, discover the right software tier, and transition seamlessly from search/discovery content into tailored solutions.

---

## 📌 Selected Business Challenges

This solution directly addresses **3 core assessment challenges**:

1. **Challenge 01: Visitors Cannot Quantify the Cost of Inefficient Work**
   - **Solution:** Interactive **Hours Leak & HR ROI Calculator** (accessible via Homepage teaser and dedicated `/calculator` application).
   - **Outcome:** Allows buyers to model headcount, wage rates, and payroll frequencies to visualize annual hours lost, cost of administrative drag across 5 sink categories, and a 3-year ROI payback curve.

2. **Challenge 02: Buyers Struggle to Identify the Right Software Option**
   - **Solution:** Consultative 4-stage **Interactive HR Stack Builder & Diagnostic Wizard** (`/packages/stack-builder`).
   - **Outcome:** Diagnoses operational bottlenecks, prioritizes core HR modules ("Must Have", "Nice to Have", "Not Now"), and programmatically matches buyers to their ideal package (Foundation, Growth, Enterprise) with transparent "Why this fits" vs. "Why not the others" gap analyses.

3. **Challenge 05: Useful Content Does Not Lead Visitors Toward Solutions**
   - **Solution:** **SEO/GEO-Ready Content-to-Solution Discovery Hub** (`/blog` and `/blog/[slug]`).
   - **Outcome:** Features structured Schema.org JSON-LD for AI search engines, sticky reading progress tracking, table of contents, and context-aware solution bridges that actively navigate readers from informational guides directly into the Stack Builder and ROI Calculator.

---

## 📖 Detailed Submission Documentation

A comprehensive, executive-ready breakdown of the UX philosophy, mathematical modeling, technical architecture, and conversion strategies is available in:
👉 **[`PEOPLESHR_PRACTICAL_ASSESSMENT_SUBMISSION.md`](./PEOPLESHR_PRACTICAL_ASSESSMENT_SUBMISSION.md)**

---

## 🚀 Getting Started & Local Run Instructions

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation & Run

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the local development server:**
   ```bash
   pnpm dev
   ```

3. **Open the interactive experiences in your browser:**
   - **Homepage (with Hours Leak Teaser):** [http://localhost:3000](http://localhost:3000)
   - **Dedicated HR ROI & Drag Calculator:** [http://localhost:3000/calculator](http://localhost:3000/calculator)
   - **Turnkey Solution Packages:** [http://localhost:3000/packages](http://localhost:3000/packages)
   - **Interactive HR Stack Builder:** [http://localhost:3000/packages/stack-builder](http://localhost:3000/packages/stack-builder)
   - **Content-to-Solution Discovery Hub (Blog):** [http://localhost:3000/blog](http://localhost:3000/blog)
   - **Article with Solution Bridges & Reading Progress:** [http://localhost:3000/blog/enterprise-guide-eliminating-payroll-leakage](http://localhost:3000/blog/enterprise-guide-eliminating-payroll-leakage)
   - **Enterprise Contact & Consultation:** [http://localhost:3000/contact](http://localhost:3000/contact)

4. **Production Build & Verification:**
   ```bash
   pnpm build
   pnpm start
   ```

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router, React Server Components, Partial Prerendering)
- **Library:** React 19
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 & Lucide Icons
- **Motion & Interactions:** Framer Motion 14
- **Accessible Primitives:** Radix UI Dialog (`@radix-ui/react-dialog`)
- **Document & PDF Engine:** CSS Print Media Engine (`@media print`)
- **Content Engine:** Sanity CMS & PortableText (`next-sanity`)
- **Notifications:** Sonner Toast
