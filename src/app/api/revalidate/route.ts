import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * On-Demand Server-Side Generation & Cache Revalidation Endpoint
 *
 * Can be triggered via:
 * 1. Sanity CMS Webhooks upon post publish/update/delete
 * 2. CI/CD pipelines
 * 3. Manual curl: /api/revalidate?secret=...&slug=...
 */
export async function POST(req: NextRequest) {
  return handleRevalidation(req);
}

export async function GET(req: NextRequest) {
  return handleRevalidation(req);
}

async function handleRevalidation(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret =
    searchParams.get("secret") || req.headers.get("x-revalidate-secret");
  const slug = searchParams.get("slug");
  const tag = searchParams.get("tag");

  const expectedSecret =
    process.env.SANITY_REVALIDATE_SECRET || "peopleshr_secure_revalidate_2026";

  if (secret !== expectedSecret) {
    return NextResponse.json(
      {
        revalidated: false,
        error: "Invalid revalidation secret token.",
      },
      { status: 401 }
    );
  }

  try {
    const revalidatedItems: string[] = [];

    // Always revalidate the blog index collection and sitemap
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    revalidatedItems.push("/blog", "/sitemap.xml");

    // Invalidate universal posts tag
    try {
      revalidateTag("posts", "max");
      revalidatedItems.push("tag:posts");
    } catch {
      // Fallback if tag profiles vary
    }

    // Invalidate specific slug if provided
    if (slug) {
      revalidatePath(`/blog/${slug}`);
      revalidatedItems.push(`/blog/${slug}`);
      try {
        revalidateTag(`post:${slug}`, "max");
        revalidatedItems.push(`tag:post:${slug}`);
      } catch {
        // Fallback
      }
    }

    // Invalidate custom tag if provided
    if (tag && tag !== "posts") {
      try {
        revalidateTag(tag, "max");
        revalidatedItems.push(`tag:${tag}`);
      } catch {
        // Fallback
      }
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      revalidatedItems,
      message: "Server-side generation cache successfully invalidated.",
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        revalidated: false,
        error: err?.message || "Failed to revalidate cache.",
      },
      { status: 500 }
    );
  }
}
