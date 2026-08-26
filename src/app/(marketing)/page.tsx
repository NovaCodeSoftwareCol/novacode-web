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
  const page = marketingPages.home;

  return (
    <>
      <Section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-line lg:block"
          aria-hidden="true"
        >
          <svg viewBox="0 0 320 480" className="h-full w-full text-line">
            <rect x="40" y="80" width="140" height="200" fill="none" stroke="currentColor" />
            <rect x="110" y="40" width="140" height="200" fill="none" stroke="currentColor" className="text-accent" />
            <line x1="80" y1="280" x2="180" y2="240" stroke="currentColor" />
            <circle cx="180" cy="240" r="4" className="fill-future" />
          </svg>
        </div>
        <Container>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-legacy uppercase">{homeContent.eyebrow}</p>
            <Heading className="mt-4 max-w-3xl">{homeContent.hero.heading}</Heading>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{page.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={ctaNav.primary.href}>{ctaNav.primary.label}</Button>
              <Button href={ctaNav.secondary.href} variant="secondary">
                {ctaNav.secondary.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
      <HomeSections />
    </>
  );
}
