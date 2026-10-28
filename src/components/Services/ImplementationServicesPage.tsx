import React from "react";
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
import { IMPLEMENTATION_SERVICES_CONTENT } from "@/constants/implementationServices";
import { SERVICES_CONTENT } from "@/constants/services";

export function ImplementationServicesPage() {
  const content = IMPLEMENTATION_SERVICES_CONTENT;

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      <section className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Implementation Services" },
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
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.14]">
              {content.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <span>Request a Demo</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 text-xs sm:text-sm">
                <Link href="/packages/stack-builder">Try Stack Builder</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-14">
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How implementation support works
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            A practical path from discovery tools to a go-live conversation—without inventing a separate consulting catalog.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] flex flex-col"
              >
                <span className="text-[11px] font-extrabold text-primary tracking-wider uppercase">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{step.detail}</p>
                <Link
                  href={step.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  {step.cta}
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              What you leave with
            </h2>
            <ul className="mt-5 space-y-3">
              {content.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckSmallIcon className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Platform modules we implement against
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Implementation conversations map to the same product modules on the Features pages.
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_CONTENT.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.linkHref || "/features"}
                    className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white border border-slate-200/90 px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-3">
                  {faq.question}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                <span>Ready to start</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Book a demo and walk through your rollout path
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Bring your Stack Builder results or start fresh—we will focus on the modules that matter for your workforce.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold shrink-0">
              <Link href="/contact">Contact PeoplesHR</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImplementationServicesPage;
