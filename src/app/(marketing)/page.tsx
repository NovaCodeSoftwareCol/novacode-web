import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { HomeSections } from "@/components/sections/home-sections";
import { siteConfig } from "@/config/site";
import { ctaNav } from "@/content/navigation";
import { homeContent } from "@/content/home";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

function ArchitectureVisual() {
  const nodes = [
    { label: "Legacy Java", detail: "Aplicación actual", tone: "border-legacy text-legacy" },
    { label: "Modernización", detail: "Ruta incremental", tone: "border-accent text-accent" },
    { label: "Cloud ready", detail: "Plataforma futura", tone: "border-future text-future" },
  ];

  return (
    <div className="relative min-h-[20rem] overflow-hidden border-y border-line bg-surface px-5 py-8 sm:px-8 lg:min-h-[28rem] lg:border-y-0 lg:border-l">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
      <div className="relative flex h-full min-h-[18rem] flex-col justify-between gap-5 lg:min-h-[25rem]">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          <span>Architecture map</span>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> Live path</span>
        </div>
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {nodes.map((node, index) => (
            <div key={node.label} className="relative z-10 flex items-center gap-3 sm:block sm:w-[29%]">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-bg font-mono text-xs ${node.tone}`}>0{index + 1}</div>
              <div className="sm:mt-4"><p className="text-sm font-semibold text-ink">{node.label}</p><p className="mt-1 text-xs text-muted">{node.detail}</p></div>
            </div>
          ))}
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-legacy via-accent to-future sm:left-[14%] sm:top-6 sm:h-px sm:w-[72%] sm:bg-gradient-to-r" aria-hidden="true" />
        </div>
        <div className="border border-line bg-bg/90 p-4 font-mono text-xs leading-6 text-muted">
          <p><span className="text-legacy">$</span> assess --system java-legacy</p>
          <p><span className="text-accent">→</span> identify safe migration path</p>
          <p><span className="text-future">✓</span> operate without downtime</p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  ...createPageMetadata({
    title: "Inicio",
    description: marketingPages.home.description,
    path: "/",
  }),
  title: {
    absolute: `${siteConfig.name} · ${siteConfig.tagline}`,
  },
};

export default function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden !pb-0">
        <Container className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center py-16 md:py-24 lg:py-28 lg:pr-12">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.2em] text-legacy uppercase">{homeContent.eyebrow}</p>
              <Heading className="mt-4 max-w-3xl">{homeContent.hero.heading}</Heading>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{homeContent.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={ctaNav.primary.href}>{ctaNav.primary.label}</Button>
                <Button href={ctaNav.secondary.href} variant="secondary">
                  {ctaNav.secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
          <ArchitectureVisual />
        </Container>
      </Section>
      <HomeSections />
    </>
  );
}
