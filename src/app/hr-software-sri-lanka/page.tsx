import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import {
  ArrowRightIcon,
  CheckSmallIcon,
  LayersStackIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { SRI_LANKA_PAGE_CONTENT } from "@/constants/sriLankaPage";
import FaqAccordion from "@/components/FaqAccordion";
import { constructMetadata } from "@/lib/seo";
import {
  CustomBreadcrumbJsonLd,
  CustomFAQPageJsonLd,
  CustomWebPageJsonLd,
} from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: SRI_LANKA_PAGE_CONTENT.metaTitle,
  description: SRI_LANKA_PAGE_CONTENT.metaDescription,
  canonical: "/hr-software-sri-lanka",
  keywords: SRI_LANKA_PAGE_CONTENT.keywords,
});

export default function HrSoftwareSriLankaPage() {
  const content = SRI_LANKA_PAGE_CONTENT;

  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "HR Software Sri Lanka", url: "/hr-software-sri-lanka" },
        ]}
      />
      <CustomWebPageJsonLd
        title={content.metaTitle}
        description={content.metaDescription}
        url="/hr-software-sri-lanka"
      />
      <CustomFAQPageJsonLd
        mainEntity={content.faqs.map((faq, index) => ({
          id: `sl-faq-${index}`,
          category: "Payroll & Compliance" as const,
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
        <section className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CustomBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "HR Software Sri Lanka" },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Badge
                variant="primary"
                icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
                className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
              >
                {content.eyebrow}
              </Badge>
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.14]">
                {content.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed">
                {content.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Request a Demo
                    <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 text-xs sm:text-sm">
                  <Link href="/features/payroll-time">Explore Payroll & Time</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-14">
          <section className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              What PeoplesHR is
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {content.whatItIs}
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Challenges for Sri Lankan HR teams
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.challenges.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)]"
                >
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Relevant PeoplesHR workflows
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.workflows.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-3xl bg-white border border-slate-200/90 p-6 hover:border-primary/40 transition-colors group"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    View feature
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Local product cues verified in this site
            </h2>
            <ul className="mt-5 space-y-3">
              {content.localCues.map((cue) => (
                <li key={cue} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckSmallIcon className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span>{cue}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Frequently Asked Questions" className="pt-2">
            <div className="max-w-4xl">
              <div className="mb-6 sm:mb-8">
                <Badge
                  variant="primary"
                  className="mb-3.5 shadow-2xs font-bold uppercase tracking-wider text-[11px]"
                >
                  FREQUENTLY ASKED QUESTIONS
                </Badge>
                <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-[38px] text-slate-900 tracking-tight leading-[1.15]">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Key details on Sri Lanka payroll automation, statutory contributions, and local implementation.
                </p>
              </div>

              <FaqAccordion faqs={content.faqs} />
            </div>
          </section>

          <section className="relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                  <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                  <span>Next step</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Validate Sri Lanka payroll workflows in a demo
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Or start with the Stack Builder and ROI Calculator to clarify modules and savings before you talk to sales.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 text-xs sm:text-sm">
                  <Link href="/packages/stack-builder">Stack Builder</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
