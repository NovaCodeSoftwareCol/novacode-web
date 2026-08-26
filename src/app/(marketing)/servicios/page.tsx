import { PageIntro } from "@/components/sections/page-intro";
import { ServiceGrid } from "@/components/sections/service-grid";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.servicios.title,
  description: marketingPages.servicios.description,
  path: "/servicios",
});

export default function ServiciosPage() {
  return <><PageIntro heading={marketingPages.servicios.heading} description={marketingPages.servicios.description} /><ServiceGrid /></>;
}
