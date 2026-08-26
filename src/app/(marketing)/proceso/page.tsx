import { InformationPage } from "@/components/sections/information-page";
import { informationPages } from "@/content/information";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.proceso.title,
  description: marketingPages.proceso.description,
  path: "/proceso",
});

export default function ProcesoPage() {
  return <InformationPage {...informationPages.proceso} />;
}
