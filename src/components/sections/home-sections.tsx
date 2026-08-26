import { ArrowRight, Database, GitBranch, ShieldCheck, Workflow } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ctaNav } from "@/content/navigation";
import { homeContent } from "@/content/home";

const serviceIcons = [Workflow, GitBranch, ArrowRight, Database];

export function HomeSections() {
  return (
    <>
      <Section className="border-t border-line bg-surface" id="problema">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-legacy uppercase">El reto</p>
            <Heading as="h2" className="mt-4">Los sistemas legacy no tienen que desaparecer para evolucionar.</Heading>
          </Reveal>
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {homeContent.problems.map((problem) => (
              <div key={problem} className="border-l-2 border-legacy px-4 py-3 text-sm leading-6 text-muted">
                {problem}
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section id="solucion">
        <Container>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">El enfoque</p>
            <Heading as="h2" className="mt-4 max-w-2xl">Modernización incremental, con el sistema actual como aliado.</Heading>
            <p className="mt-5 max-w-2xl leading-7 text-muted">No proponemos reemplazarlo todo por reflejo. Construimos una ruta que reduzca riesgo, preserve la operación y genere valor en cada etapa.</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.process.map((step) => (
              <Reveal key={step.number} className="bg-bg p-5">
                <span className="font-mono text-xs text-accent">{step.number}</span>
                <h3 className="mt-8 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface" id="servicios">
        <Container>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-future uppercase">Capacidades</p>
            <Heading as="h2" className="mt-4">Ingeniería para cada etapa de la evolución.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal key={service.title} className="rounded-card border border-line bg-bg p-5">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-8 font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-future uppercase">Tecnología con propósito</p>
            <Heading as="h2" className="mt-4 max-w-2xl">El stack correcto depende del sistema, no de una moda.</Heading>
            <p className="mt-5 max-w-xl leading-7 text-muted">Trabajamos con tecnologías empresariales probadas y herramientas modernas cuando aportan una mejora real a la operación.</p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-2 lg:justify-end">
            {homeContent.technologies.map((technology) => (
              <span key={technology} className="border border-line px-3 py-2 font-mono text-xs text-muted">{technology}</span>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-line bg-ink text-bg">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
            <Heading as="h2" className="mt-5 max-w-2xl text-bg">¿Tu sistema Java necesita evolucionar?</Heading>
            <p className="mt-4 max-w-xl leading-7 text-bg/70">Empecemos por entender dónde está hoy y qué necesita para avanzar.</p>
          </Reveal>
          <Reveal>
            <Button href={ctaNav.primary.href} className="bg-accent text-accent-foreground hover:opacity-90">Solicitar diagnóstico <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}