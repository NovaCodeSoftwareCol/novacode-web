import { InformationPage } from "@/components/sections/information-page";
import { informationPages } from "@/content/information";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.nosotros.title,
  description: marketingPages.nosotros.description,
  path: "/nosotros",
});

export default function NosotrosPage() {
  return <InformationPage {...informationPages.nosotros} />;
}
