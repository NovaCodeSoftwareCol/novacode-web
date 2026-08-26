import { InformationPage } from "@/components/sections/information-page";
import { informationPages } from "@/content/information";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.tecnologias.title,
  description: "Stack tecnológico multi-stack para backend, frontend, datos, cloud, DevOps e inteligencia artificial.",
  path: "/tecnologias",
});

export default function TecnologiasPage() {
  return <InformationPage {...informationPages.tecnologias} />;
}
