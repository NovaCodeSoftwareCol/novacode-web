import { siteConfig } from "@/config/site";

export const brand = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
} as const;
