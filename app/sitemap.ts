import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com";
  const routes = [
    "",
    "/about-ollie",
    "/characters",
    "/sparkle-bay",
    "/buy",
    "/activity-pack",
    "/resources",
    "/youtube",
    "/merch-waitlist",
    "/faq",
    "/blog",
    "/contact",
    "/privacy-policy"
  ];

  return [
    ...routes,
    ...blogPosts.map((post) => `/blog/${post.slug}`)
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
