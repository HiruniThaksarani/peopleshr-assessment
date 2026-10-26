import { groq } from "next-sanity";

// Query for all published posts, ordered by published date descending
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    readTimeMinutes,
    featured,
    keyTakeaways,
    "categories": categories[]->{
      _id,
      title,
      slug,
      description,
      color
    },
    "author": author->{
      _id,
      name,
      slug,
      role,
      "avatar": avatar.asset->url,
      bio,
      socials
    }
  }
`;

// Query for featured posts only
export const FEATURED_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current) && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    readTimeMinutes,
    featured,
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    },
    "author": author->{
      name,
      role,
      "avatar": avatar.asset->url
    }
  }
`;

// Query single post by slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    readTimeMinutes,
    featured,
    keyTakeaways,
    metaDescription,
    body,
    "categories": categories[]->{
      _id,
      title,
      slug,
      description,
      color
    },
    "author": author->{
      _id,
      name,
      slug,
      role,
      "avatar": avatar.asset->url,
      bio,
      socials
    }
  }
`;

// Query all post slugs (for generateStaticParams)
export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// Query all categories
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

// Query related posts by matching category
export const RELATED_POSTS_QUERY = groq`
  *[_type == "post" && slug.current != $currentSlug && count((categories[]->_id)[@ in $categoryIds]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    readTimeMinutes,
    "categories": categories[]->{
      title,
      slug,
      color
    },
    "author": author->{
      name,
      role,
      "avatar": avatar.asset->url
    }
  }
`;
