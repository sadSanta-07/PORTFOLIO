import type { MetadataRoute } from "next";

const siteUrl = "https://sahilsingh.is-a.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
