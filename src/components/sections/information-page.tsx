import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

type InformationPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: readonly string[];
  groups?: readonly { title: string; technologies: string }[];
};

export function InformationPage({ eyebrow, title, intro, items, groups }: InformationPageProps) {
  return <>
    <Section><Container><Reveal><p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{eyebrow}</p><Heading className="mt-4 max-w-3xl">{title}</Heading><p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{intro}</p><Button href="/diagnostico" className="mt-8">Solicitar diagnóstico</Button></Reveal></Container></Section>
    <section className="border-y border-line bg-surface py-12 md:py-16"><Container><div className="grid gap-10 md:grid-cols-2"><div><p className="font-mono text-xs tracking-[0.2em] text-legacy uppercase">Nuestro criterio</p><Heading as="h2" className="mt-4">Modernizar con contexto, no por tendencia.</Heading></div><ul className="space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div>{groups && <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">{groups.map((group) => <div key={group.title} className="bg-bg p-5"><h3 className="text-sm font-semibold text-ink">{group.title}</h3><p className="mt-3 text-xs leading-5 text-muted">{group.technologies}</p></div>)}</div>}</Container></section>
  </>;
}