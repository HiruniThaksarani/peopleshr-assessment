import type { Metadata } from "next";
import Link from "next/link";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { CONTACT_DETAILS } from "@/constants/contact";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | PeoplesHR",
  description:
    "Terms governing use of the PeoplesHR marketing website, interactive evaluation tools, and demo request forms.",
  canonical: "/terms",
  keywords: ["PeoplesHR terms", "terms of service", "website terms"],
});

export default function TermsPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
      />
      <CustomWebPageJsonLd
        title="Terms of Service | PeoplesHR"
        description="Terms governing use of the PeoplesHR marketing website and evaluation tools."
        url="/terms"
      />
      <div className="w-full min-h-screen bg-[#f8fbff] pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          <CustomBreadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
          />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: 28 October 2026
          </p>
          <div className="mt-8 space-y-8 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Agreement</h2>
              <p className="mt-3">
                By using this PeoplesHR marketing website, you agree to these Terms of Service. If you
                do not agree, please do not use the site. Customer use of the PeoplesHR software
                platform is governed by a separate commercial agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Website purpose</h2>
              <p className="mt-3">
                This website provides product information, educational content, package comparisons,
                and interactive evaluation tools such as the{" "}
                <Link href="/packages/stack-builder" className="text-primary font-semibold hover:underline">
                  HR Stack Builder
                </Link>{" "}
                and{" "}
                <Link href="/calculator" className="text-primary font-semibold hover:underline">
                  HR ROI Calculator
                </Link>
                . Outputs from those tools are estimates for evaluation only and are not financial,
                legal, or tax advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Acceptable use</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Do not misuse forms, APIs, or interactive tools.</li>
                <li>Do not attempt unauthorised access to non-public areas such as the content studio.</li>
                <li>Do not copy site content for competing commercial reuse without permission.</li>
                <li>Provide accurate information when requesting a demo or sending a message.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Intellectual property</h2>
              <p className="mt-3">
                PeoplesHR names, logos, product descriptions, and site materials are owned by{" "}
                {CONTACT_DETAILS.name} or its licensors. You may browse and share public pages with
                attribution for non-commercial evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Disclaimer</h2>
              <p className="mt-3">
                The website is provided on an &quot;as is&quot; basis. While we aim for accurate product
                descriptions, features, package contents, and statutory examples may change. Confirm
                current capabilities during a demo before making purchasing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Limitation of liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {CONTACT_DETAILS.name} is not liable for
                indirect or consequential losses arising from website use or reliance on calculator
                estimates. Nothing in these terms limits liability that cannot be limited by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Privacy</h2>
              <p className="mt-3">
                Personal information submitted through this site is described in our{" "}
                <Link href="/privacy" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Contact</h2>
              <p className="mt-3">
                Questions about these terms:{" "}
                <a className="text-primary font-semibold hover:underline" href={CONTACT_DETAILS.emailUrl}>
                  {CONTACT_DETAILS.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
