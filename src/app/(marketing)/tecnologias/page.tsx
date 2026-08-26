import { InformationPage } from "@/components/sections/information-page";
import { informationPages } from "@/content/information";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.tecnologias.title,
  description: marketingPages.tecnologias.description,
  path: "/tecnologias",
});

export default function TecnologiasPage() {
  return <InformationPage {...informationPages.tecnologias} />;
}
