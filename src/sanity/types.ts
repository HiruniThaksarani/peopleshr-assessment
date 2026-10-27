export interface Author {
  _id?: string;
  name: string;
  slug?: { current: string };
  role: string;
  avatar: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Category {
  _id?: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  // Custom blocks
  calloutType?: "info" | "tip" | "warning" | "takeaway";
  calloutTitle?: string;
  calloutContent?: string;
  quoteAuthor?: string;
  quoteTitle?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: {
    asset?: {
      _ref?: string;
      url?: string;
    };
    alt?: string;
    caption?: string;
  };
  // Fallback direct image URL when loaded from mock or external
  imageUrl?: string;
  publishedAt: string;
  readTimeMinutes: number;
  featured?: boolean;
  categories: Category[];
  author: Author;
  body?: PortableTextBlock[] | any[];
  // Key takeaways bullet points for quick executive reading
  keyTakeaways?: string[];
  // SEO & Discoverability fields
  metaTitle?: string;
  metaDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  _updatedAt?: string;
  _createdAt?: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: 2 | 3;
}
