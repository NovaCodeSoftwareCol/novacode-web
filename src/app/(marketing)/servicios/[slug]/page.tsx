import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({ title: service.title, description: service.summary, path: `/servicios/${service.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Section>
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Servicio / {service.slug}</p>
          <Heading className="mt-4 max-w-3xl">{service.title}</Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{service.detail}</p>
          <Button href="/diagnostico" className="mt-8">Solicitar diagnóstico</Button>
        </Container>
      </Section>
      <section className="border-y border-line bg-surface py-12 md:py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-legacy uppercase">Qué mejora</p>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm text-ink"><span className="text-accent">+</span>{benefit}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-future uppercase">Tecnologías relacionadas</p>
            <div className="mt-5 flex flex-wrap gap-2">{service.technologies.map((technology) => <span key={technology} className="border border-line px-3 py-2 font-mono text-xs text-muted">{technology}</span>)}</div>
          </div>
        </Container>
      </section>
    </>
  );
}