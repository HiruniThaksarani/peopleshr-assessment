import { defineType, defineArrayMember } from "sanity";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
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
    }),
    defineArrayMember({
      name: "callout",
      title: "Callout Box",
      type: "object",
      fields: [
        {
          name: "calloutType",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Tip", value: "tip" },
              { title: "Warning", value: "warning" },
              { title: "Takeaway", value: "takeaway" },
            ],
          },
          initialValue: "info",
        },
        {
          name: "calloutTitle",
          title: "Callout Title",
          type: "string",
        },
        {
          name: "calloutContent",
          title: "Callout Message",
          type: "text",
          rows: 3,
        },
      ],
    }),
  ],
});
