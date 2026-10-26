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
    defineField({
      name: "metaDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
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
