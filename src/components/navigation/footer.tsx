import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { brand } from "@/content/site";
import { ctaNav, footerNav } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm text-muted">{brand.tagline}</p>
          <div className="mt-3 flex flex-col items-start gap-1 text-sm text-muted">
            <a href={`mailto:${brand.email}`} className="hover:text-accent">
              {brand.email}
            </a>
            <a href={brand.phoneHref} className="hover:text-accent">
              {brand.phone}
            </a>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs tracking-wide text-muted uppercase">Empresa</p>
          <ul className="mt-3 space-y-2">
            {footerNav.empresa.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs tracking-wide text-muted uppercase">Oferta</p>
          <ul className="mt-3 space-y-2">
            {footerNav.oferta.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={ctaNav.primary.href} className="text-sm text-ink hover:text-accent">
                {ctaNav.primary.label}
              </Link>
            </li>
            <li>
              <Link href={ctaNav.secondary.href} className="text-sm text-ink hover:text-accent">
                {ctaNav.secondary.label}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} NovaCode. Ingeniería para evolucionar tu software.
        </p>
      </Container>
    </footer>
  );
}
