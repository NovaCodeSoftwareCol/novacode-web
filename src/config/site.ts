export const siteConfig = {
  name: "NovaCode",
  tagline: "Ingeniería de software y transformación tecnológica.",
  description:
    "NovaCode moderniza, desarrolla e integra soluciones de software multi-stack para ayudar a las empresas a evolucionar con claridad y continuidad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es",
  email: "lfcorrea97@gmail.com",
  phone: "+57 315 282 9636",
  phoneHref: "tel:+573152829636",
} as const;
