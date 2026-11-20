import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    readingTime: z.string(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    initials: z.string(),
    portrait: z.string().optional(),
    role: z.string(),
    location: z.string(),
    experience: z.array(z.object({
      period: z.string(),
      title: z.string(),
      organization: z.string(),
      description: z.string().optional(),
      details: z.array(z.string()).default([]),
    })).default([]),
    education: z.array(z.object({
      period: z.string(),
      title: z.string(),
      organization: z.string(),
      description: z.string().optional(),
    })).default([]),
    skills: z.array(z.string()).default([]),
    hobbies: z.array(z.string()).default([]),
  }),
});

export const collections = { articles, profile };