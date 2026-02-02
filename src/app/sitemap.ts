import { MetadataRoute } from 'next'

export const runtime = 'edge'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eslan.pages.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://eslan.pages.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://eslan.pages.dev/tag',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}