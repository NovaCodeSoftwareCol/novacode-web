import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <Container className="flex flex-1 flex-col items-start justify-center py-24">
        <Logo />
        <p className="mt-10 font-mono text-sm text-muted">404</p>
        <Heading className="mt-3">Página no encontrada</Heading>
        <p className="mt-4 max-w-md text-muted">
          La ruta no existe o se ha movido. Vuelva al inicio para continuar.
        </p>
        <div className="mt-8">
          <Button href="/">Ir al inicio</Button>
        </div>
      </Container>
    </div>
  );
}
