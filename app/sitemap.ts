import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com";
  const routes = [
    { route: "", priority: 1, changeFrequency: "weekly" },
    { route: "/buy", priority: 0.95, changeFrequency: "weekly" },
    { route: "/activity-pack", priority: 0.92, changeFrequency: "weekly" },
    { route: "/about-ollie", priority: 0.9, changeFrequency: "monthly" },
    { route: "/characters", priority: 0.88, changeFrequency: "monthly" },
    { route: "/sparkle-bay", priority: 0.86, changeFrequency: "monthly" },
    { route: "/resources", priority: 0.84, changeFrequency: "weekly" },
    { route: "/youtube", priority: 0.78, changeFrequency: "weekly" },
    { route: "/faq", priority: 0.72, changeFrequency: "monthly" },
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { route: "/contact", priority: 0.55, changeFrequency: "monthly" },
    { route: "/merch-waitlist", priority: 0.5, changeFrequency: "monthly" },
    { route: "/privacy-policy", priority: 0.25, changeFrequency: "yearly" }
  ] as const;

  return [
    ...routes.map((item) => ({
      url: `${siteUrl}${item.route}`,
      changeFrequency: item.changeFrequency,
      priority: item.priority
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.68
    }))
  ].map((item) => ({
    ...item,
    lastModified: new Date()
  }));
}
