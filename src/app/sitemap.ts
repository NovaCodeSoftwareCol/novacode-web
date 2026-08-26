import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog/posts";
import { serviceSlugs } from "@/content/services";

const routes = [
  "",
  "/servicios",
  "/soluciones",
  "/proceso",
  "/tecnologias",
  "/nosotros",
  "/contacto",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [
    ...routes,
    ...serviceSlugs.map((slug) => `/servicios/${slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
  return allRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
