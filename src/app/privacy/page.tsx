import type { Metadata } from "next";
import Link from "next/link";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { CONTACT_DETAILS } from "@/constants/contact";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | PeoplesHR",
  description:
    "How PeoplesHR collects and uses information submitted through this marketing website, contact forms, and interactive evaluation tools.",
  canonical: "/privacy",
  keywords: ["PeoplesHR privacy", "privacy policy", "data protection"],
});

export default function PrivacyPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ]}
      />
      <CustomWebPageJsonLd
        title="Privacy Policy | PeoplesHR"
        description="How PeoplesHR handles information submitted through this website."
        url="/privacy"
      />
      <div className="w-full min-h-screen bg-[#f8fbff] pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          <CustomBreadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: 28 October 2026
          </p>
          <div className="mt-8 space-y-8 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Overview</h2>
              <p className="mt-3">
                This Privacy Policy explains how {CONTACT_DETAILS.brandName} ({CONTACT_DETAILS.name})
                handles information you provide through this marketing website, including contact forms,
                the HR Stack Builder, and the Hours Leak / ROI Calculator. It is written for this
                website experience and does not replace contractual data-processing terms that may
                apply when you become a customer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Information we collect</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Contact details you submit (such as name, work email, company, and phone number).</li>
                <li>Message content and demo or consultation preferences you share in forms.</li>
                <li>
                  Inputs you enter into interactive tools (for example headcount, wage assumptions, or
                  module priorities) used to generate on-page estimates or recommendations.
                </li>
                <li>
                  Standard technical data such as browser type and pages visited, when analytics or
                  hosting logs are enabled in your deployment environment.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">How we use information</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Respond to demo requests and support enquiries.</li>
                <li>Provide calculator or stack-builder outputs you request.</li>
                <li>Improve website content, usability, and product messaging.</li>
                <li>Meet legal or security obligations where required.</li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-extrabold text-slate-900">Cookies and similar technologies</h2>
              <p className="mt-3">
                This site may use essential cookies required for basic operation. Optional analytics
                or marketing cookies should only be enabled where your deployment includes them and
                where consent requirements for your region are met. Browser controls can limit or
                clear cookies.
              </p>
            </section>

            <section id="security">
              <h2 className="text-xl font-extrabold text-slate-900">Security</h2>
              <p className="mt-3">
                Product marketing materials reference security practices such as encryption in transit
                and at rest, role-based access controls, and standards commonly discussed for enterprise
                HR platforms. Specific certifications applicable to a customer deployment should be
                confirmed directly with PeoplesHR during evaluation.
              </p>
            </section>

            <section id="trust">
              <h2 className="text-xl font-extrabold text-slate-900">Trust and your choices</h2>
              <p className="mt-3">
                You may request access, correction, or deletion of personal information submitted
                through this website by contacting{" "}
                <a className="text-primary font-semibold hover:underline" href={CONTACT_DETAILS.emailUrl}>
                  {CONTACT_DETAILS.email}
                </a>
                . For product feature details, see{" "}
                <Link href="/features" className="text-primary font-semibold hover:underline">
                  Features
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Contact</h2>
              <p className="mt-3">
                {CONTACT_DETAILS.name}
                <br />
                {CONTACT_DETAILS.fullAddress}
                <br />
                Email:{" "}
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
