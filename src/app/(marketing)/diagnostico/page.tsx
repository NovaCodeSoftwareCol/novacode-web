import { DiagnosticForm } from "@/components/sections/diagnostic-form";
import { PageIntro } from "@/components/sections/page-intro";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.diagnostico.title,
  description: marketingPages.diagnostico.description,
  path: "/diagnostico",
  index: false,
});

export default function DiagnosticoPage() {
  return <><PageIntro heading={marketingPages.diagnostico.heading} description="Comparte el contexto técnico de tu aplicación y prepararemos una primera conversación de modernización." primaryCta={{ href: "/contacto", label: "Ir a contacto" }} secondaryCta={{ href: "/servicios", label: "Ver servicios" }} /><DiagnosticForm /></>;
}
