import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "../env";

const imageBuilder = projectId && dataset
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

/**
 * Returns a configured Sanity image URL builder or null if Sanity is not configured
 */
export function urlForImage(source: any) {
  if (!imageBuilder || !source?.asset) {
    return null;
  }
  return imageBuilder.image(source).auto("format").fit("max");
}

/**
 * Helper to safely extract an image URL from either Sanity asset or direct fallback URL
 */
export function getPostImageUrl(
  post: { mainImage?: any; imageUrl?: string },
  fallback = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&auto=format&fit=crop&q=80"
): string {
  if (post?.mainImage?.asset) {
    try {
      const url = urlForImage(post.mainImage)?.url();
      if (url) return url;
    } catch {
      // Ignore builder errors and fall back
    }
  }

  if (post?.imageUrl) {
    return post.imageUrl;
  }

  return fallback;
}
