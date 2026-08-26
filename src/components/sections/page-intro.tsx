import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ctaNav } from "@/content/navigation";

type PageIntroProps = {
  heading: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageIntro({
  heading,
  description,
  primaryCta = ctaNav.primary,
  secondaryCta = ctaNav.secondary,
}: PageIntroProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Heading>{heading}</Heading>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
