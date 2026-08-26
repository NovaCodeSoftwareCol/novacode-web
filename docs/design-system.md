# Sistema de diseño

## Concepto

Legacy → Modern → Future. Capas desplazadas (sistema actual / sistema destino), trazos tipo plano, nodos. Paleta restringida: cobre (origen), teal (acción), azul (destino).

## Color

| Token | Light | Dark | Uso |
| --- | --- | --- | --- |
| `--bg` | `#F3F1EC` | `#0B1016` | Fondo |
| `--surface` | `#FFFcf7` | `#121821` | Superficies |
| `--ink` | `#12171F` | `#E8EDF4` | Texto |
| `--muted` | `#5C6570` | `#9AA3AD` | Secundario |
| `--line` | `#D8D2C8` | `#243041` | Bordes |
| `--legacy` | `#B4532A` | `#E07A4A` | Origen / deuda |
| `--accent` | `#0F6E6B` | `#3D9A96` | CTA |
| `--future` | `#1B4F8A` | `#6BA3E0` | Destino / arquitectura |

## Tipografía

Geist Sans (UI) y Geist Mono (pasos, etiquetas, código). Carga con `next/font`.

## Espacio y forma

Escala de 4px. Secciones `py-16 md:py-24`. Contenedor `max-w-6xl`. Radio 4px en controles, 8px en cards. Sombras mínimas; el borde define la jerarquía.

## Componentes

`Button` (primary, secondary, ghost), `Container`, `Section`, `Heading`, `Logo`, `Navbar`, `MobileNav`, `Footer`, `ThemeToggle`, `Reveal`, `PageIntro`.

Un problema visual, un componente. Navbar y Footer leen `src/content/navigation.ts`.

## Motion

180–280ms, easing `[0.22, 1, 0.36, 1]`. `Reveal` respeta `prefers-reduced-motion`.

## Accesibilidad

HTML semántico, skip link, `focus-visible`, `aria` en menú móvil, contraste de tokens, `lang="es"`.
