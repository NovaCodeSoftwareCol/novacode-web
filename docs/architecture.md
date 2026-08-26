# Arquitectura

## Visión

NovaCode es una empresa de ingeniería de software y transformación tecnológica. Java es una especialidad importante dentro de una oferta multi-stack; el sitio de marketing es la cara inicial y las capacidades de producto se añaden por sprints sin reconstruir el shell.

## Principios

- App Router y React Server Components por defecto.
- Client Components solo para tema, menú móvil, motion y controles interactivos.
- El copy vive en `src/content/`, no en arrays dentro de JSX.
- La UI no se acopla a un backend concreto (`src/services/` como puerto).
- IA se consume mediante `src/services/ai/`, sin acoplar la aplicación a un proveedor.
- Sin clientes, métricas ni testimonios inventados. Usar `[PLACEHOLDER]` cuando falte dato real.

## Capas

```text
app/(marketing)  →  components + content
                         ↓
                    services (puerto)
                         ↓
              API / CMS / Spring Boot (futuro)
```

## Carpetas

- `src/app` — rutas, metadata, SEO
- `src/components` — UI, layout, navegación, marca, motion
- `src/content` — navegación, páginas, blog (CMS-ready)
- `src/config` — configuración de sitio
- `src/lib` — utilidades (`cn`, SEO)
- `src/providers` — ThemeProvider
- `src/services` — contratos de integración
- `src/types` — tipos compartidos
- `docs` — documentación de producto

## Rutas de marketing

`/`, `/servicios`, `/soluciones`, `/proceso`, `/tecnologias`, `/nosotros`, `/contacto`, `/blog`.

`/diagnostico` contiene un formulario client-side con validación local y servicio desacoplado; la persistencia queda para backend.

No hay rutas indexables de dashboard, portal, auth ni marketplace en este sprint.

## Temas

`next-themes` con `attribute="class"`, `defaultTheme="system"` y `suppressHydrationWarning` en `<html>` para evitar flash.

## Blog

`src/content/blog/posts.ts` define `BlogPost[]` con contenido editorial local. Más adelante puede alimentarse desde CMS sin cambiar las páginas.
