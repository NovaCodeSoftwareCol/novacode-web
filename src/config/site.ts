export const siteConfig = {
  name: "NovaCode",
  tagline: "Modernizamos sistemas Java antiguos sin detener la operación.",
  description:
    "NovaCode moderniza aplicaciones Java legacy con migración incremental, arquitectura, APIs y automatización, sin detener la operación.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es",
  email: "lfcorrea97@gmail.com",
  phone: "+57 315 282 9636",
  phoneHref: "tel:+573152829636",
} as const;
