import { PageIntro } from "@/components/sections/page-intro";
import { ServiceGrid } from "@/components/sections/service-grid";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.servicios.title,
  description: "Ingeniería de software, modernización tecnológica e integración de soluciones multi-stack.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <><PageIntro heading="Ingeniería para evolucionar tu software" description="Modernizamos, desarrollamos e integramos soluciones tecnológicas para que tu negocio avance, sin importar dónde comenzó tu sistema." /><ServiceGrid /></>;
}
