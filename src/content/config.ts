import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        short: z.string(),
        weight: z.number(),
        tags: z.optional(z.array(z.string())),
        url: z.optional(z.string()),
        year: z.optional(z.string()),
        cover: z.optional(image()),
        github: z.optional(z.string()),
        readme: z.optional(z.string()),
    }),
});

const blocks = defineCollection({
    type: "content",
    schema: z.object({
    }),
});

export const collections = {
  "projects": projects,
  "demos": projects,
  "blocks": blocks,
};