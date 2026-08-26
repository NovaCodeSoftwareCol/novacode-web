import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/services";

export function ServiceGrid() {
  return (
    <section className="border-t border-line py-12 md:py-16" aria-label="Servicios disponibles">
      <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}>
            <Link href={`/servicios/${service.slug}`} className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 hover:border-accent">
              <span className="flex items-center justify-between font-mono text-xs text-accent">
                {service.category}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <h2 className="mt-10 text-lg font-semibold text-ink">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
              <span className="mt-auto pt-8 text-xs font-medium text-accent">Explorar capacidad</span>
            </Link>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}