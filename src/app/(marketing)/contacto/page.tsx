import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { PageIntro } from "@/components/sections/page-intro";
import { marketingPages } from "@/content/pages";
import { brand } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.contacto.title,
  description: marketingPages.contacto.description,
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        heading={marketingPages.contacto.heading}
        description={marketingPages.contacto.description}
        primaryCta={{ href: "/diagnostico", label: "Ver diagnóstico" }}
        secondaryCta={{ href: "/servicios", label: "Ver servicios" }}
      />
      <section className="border-t border-line py-12 md:py-16" aria-labelledby="datos-contacto">
        <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="max-w-xl rounded-card border border-line bg-surface p-6 md:p-8">
            <h2 id="datos-contacto" className="text-xl font-semibold text-ink">
              Hablemos de tu sistema
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Cuéntanos qué necesitas modernizar y encontraremos el siguiente paso adecuado.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={`mailto:${brand.email}`} className="font-medium text-accent hover:underline">
                {brand.email}
              </a>
              <a href={brand.phoneHref} className="font-medium text-accent hover:underline">
                {brand.phone}
              </a>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
