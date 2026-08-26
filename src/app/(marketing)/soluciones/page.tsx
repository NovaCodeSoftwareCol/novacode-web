import { InformationPage } from "@/components/sections/information-page";
import { informationPages } from "@/content/information";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.soluciones.title,
  description: marketingPages.soluciones.description,
  path: "/soluciones",
});

export default function SolucionesPage() {
  const page = informationPages.soluciones;
  return <InformationPage {...page} />;
}
