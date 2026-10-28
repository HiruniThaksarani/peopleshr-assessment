import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeatureDetailView from "@/components/FeatureDetail";
import { FEATURE_SLUGS, getFeaturePage } from "@/constants/featurePages";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomFAQPageJsonLd, CustomServiceJsonLd } from "@/lib/json-ld";

interface FeatureSlugPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: FeatureSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) {
    return constructMetadata({
      title: "Feature Not Found | PeoplesHR",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    canonical: `/features/${feature.slug}`,
    keywords: feature.keywords,
  });
}

export default async function FeatureSlugPage({ params }: FeatureSlugPageProps) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) {
    notFound();
  }

  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Features", url: "/features" },
          { name: feature.name, url: `/features/${feature.slug}` },
        ]}
      />
      <CustomServiceJsonLd
        name={feature.name}
        description={feature.summary}
        serviceType="Human Capital Management Software Module"
        url={`/features/${feature.slug}`}
        offers={feature.capabilities.map((name) => ({
          name,
          description: feature.summary,
        }))}
      />
      <CustomFAQPageJsonLd
        mainEntity={feature.faqs.map((faq, index) => ({
          id: `${feature.slug}-faq-${index}`,
          category: "Platform & Capabilities" as const,
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <FeatureDetailView feature={feature} />
    </>
  );
}
