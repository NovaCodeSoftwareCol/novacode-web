# NovaCode

Plataforma tecnológica para **modernizar sistemas Java antiguos sin detener la operación**.

NovaCode no es una plantilla de agencia: es el inicio de un producto B2B (diagnóstico, portal, dashboard, IA y marketplace) construido sobre un shell de Next.js listo para producción.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- next-themes (claro, oscuro, sistema)

Despliegue previsto: **Vercel**.

## Instalación

```bash
npm install
cp .env.example .env.local
```

## Desarrollo

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Variables de entorno

Vea `.env.example`.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica (SEO, sitemap, Open Graph) |

No coloque secretos ni API keys privadas en variables `NEXT_PUBLIC_*` ni en el código del cliente.

Pendiente: definir el dominio de producción.

## Deploy (Vercel)

1. Importar el repositorio en Vercel.
2. Framework: Next.js.
3. Definir `NEXT_PUBLIC_SITE_URL` en Production y Preview.
4. Build command: `next build` (script `npm run build`).

## Documentación

- [docs/architecture.md](docs/architecture.md)
- [docs/design-system.md](docs/design-system.md)
- [docs/development.md](docs/development.md)
- [docs/deployment.md](docs/deployment.md)
- [docs/backend.md](docs/backend.md)
- [docs/roadmap.md](docs/roadmap.md)

## Estado

- Sprint actual: 5 (Backend y QA)
- Completados: arquitectura, foundation, landing, servicios, diagnóstico, blog y backend inicial
- Siguiente: persistencia durable y publicación pública
