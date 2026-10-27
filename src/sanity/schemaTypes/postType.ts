import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Short Summary",
      type: "text",
      rows: 3,
      validation: (rule: any) => rule.required().max(300),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (rule: any) => rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "readTimeMinutes",
      title: "Estimated Read Time (Minutes)",
      type: "number",
      initialValue: 6,
      validation: (rule: any) => rule.required().min(1),
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Display this post prominently in the hero highlights section",
      initialValue: false,
    }),
    defineField({
      name: "keyTakeaways",
      title: "Executive Key Takeaways",
      type: "array",
      description: "Quick 3-4 bullet takeaways highlighted at the top of the post",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "blockContent",
    }),
    // ==========================================
    // SEO & Search Visibility Configuration
    // ==========================================
    defineField({
      name: "metaTitle",
      title: "Custom SEO Meta Title",
      type: "string",
      description: "Optional browser tab & Google SERP title override (max 70 chars). Defaults to '{Title} | PeoplesHR Insights'.",
      validation: (rule: any) => rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 3,
      description: "Recommended 120-160 characters summary shown on Google search result snippets. Falls back to post excerpt.",
      validation: (rule: any) => rule.max(200),
    }),
    defineField({
      name: "seoKeywords",
      title: "Target SEO Keywords & Long-Tail Phrases",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Specific target keywords for this post (e.g. 'statutory payroll compliance', 'overtime calculation audit', 'cloud HCM platform'). Used in search engine meta tags, OpenGraph article tags, and Article JSON-LD schema.",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Custom Canonical URL",
      type: "url",
      description: "Optional custom canonical URL override if this article was syndicated from another publication.",
    }),
    defineField({
      name: "noIndex",
      title: "Exclude from Search Engines (noindex)",
      type: "boolean",
      description: "Enable to instruct search engines NOT to index this post (e.g. internal guidelines or private drafts).",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare(selection: any) {
      const { author, date } = selection;
      return {
        ...selection,
        subtitle: author && (date ? `by ${author} • ${new Date(date).toLocaleDateString()}` : `by ${author}`),
      };
    },
  },
});
