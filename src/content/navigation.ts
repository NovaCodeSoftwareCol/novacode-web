export const mainNav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/proceso", label: "Proceso" },
  { href: "/tecnologias", label: "Tecnologías" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
] as const;

export const ctaNav = {
  primary: { href: "/diagnostico", label: "Diagnóstico" },
  secondary: { href: "/contacto", label: "Contacto" },
} as const;

export const footerNav = {
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/proceso", label: "Proceso" },
    { href: "/blog", label: "Blog" },
  ],
  oferta: [
    { href: "/servicios", label: "Servicios" },
    { href: "/soluciones", label: "Soluciones" },
    { href: "/tecnologias", label: "Tecnologías" },
  ],
} as const;
