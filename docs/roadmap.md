# Roadmap

## Estado

- Sprint actual: 5 (Backend y QA) — MVP operativo en local
- Completados: 0 Arquitectura, 1 Foundation, 2 Landing, 3 Servicios, 4 Diagnóstico, blog editorial, backend inicial, pruebas de validación, seguridad HTTP básica
- En progreso: persistencia durable y preparación de publicación pública
- Pendientes: ampliar páginas informativas, persistencia backend, dashboard y portal

## Sprints

| Sprint | Objetivo |
| --- | --- |
| 0 | Arquitectura y sistema de diseño |
| 1 | Foundation: shell, tema, nav, docs |
| 2 | Landing (hero, problema, solución, servicios, proceso, tecnologías, resultados placeholder, CTA) |
| 3 | Páginas de servicios |
| 4 | Diagnóstico (React Hook Form + Zod) |
| 5 | Autenticación y roles |
| 6 | Dashboard |
| 7 | Portal cliente |
| 8 | IA (puerto de proveedor, sin lock-in) |
| 9 | Marketplace |
| 10 | Producción (seguridad, performance, SEO, a11y, build) |

## Problemas conocidos

- El dominio de producción aún está pendiente.
- El diagnóstico valida y simula el envío; la persistencia backend queda pendiente.
- Las páginas informativas usan una plantilla editorial compartida; tecnologías incluye el stack organizado por categorías.
- El blog usa contenido local de demostración, sin CMS.
- Los endpoints de contacto y diagnóstico ya validan y aceptan solicitudes; la persistencia actual es solo de desarrollo.
- `npm audit --omit=dev` reporta vulnerabilidades transitivas de Next 15/Sharp/PostCSS; actualizar a Next 16 requiere una migración mayor y queda pendiente.
- El repositorio remoto está configurado y el despliegue se documenta en `docs/deployment.md`.

## Decisiones

- Idioma v1: español, rutas en español.
- Tema por defecto: system.
- npm como gestor.
- Contenido tipado en `content/` para conectar un CMS más adelante.
