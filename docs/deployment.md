# Deployment

## Destino

Vercel, framework Next.js 15. El plan gratuito es suficiente para el sitio y sus Route Handlers iniciales.

## Build

Command: `npm run build`  
Output: `.next` (gestionado por Vercel)  
Install: `npm install`

## Entornos

| Entorno | `NEXT_PUBLIC_SITE_URL` |
| --- | --- |
| Development | `http://localhost:3000` |
| Preview | URL de preview de Vercel |
| Production | Dominio real pendiente de definir |

## Publicación

1. Importar el repositorio en Vercel.
2. Seleccionar el framework Next.js y conservar `npm run build`.
3. Configurar `NEXT_PUBLIC_SITE_URL` con la URL pública asignada.
4. Ejecutar un envío de contacto y diagnóstico después del primer deploy.

Las solicitudes se guardan en memoria durante esta fase. Para producción real hay que conectar un proveedor persistente o un webhook mediante `CONTACT_WEBHOOK_URL`; las credenciales deben configurarse en Vercel, nunca en el frontend.

## Seguridad

- No subir `.env.local`.
- No usar `NEXT_PUBLIC_` para claves privadas.
- Validar datos sensibles en servidor cuando existan formularios (Sprint 4+).
- Los endpoints limitan a cinco solicitudes por minuto y dirección durante el proceso inicial.

## SEO de despliegue

Tras el dominio real, actualizar `NEXT_PUBLIC_SITE_URL` para canónicas, `sitemap.xml` y `robots.txt`.

## Imagen Open Graph

`src/app/opengraph-image.tsx` genera la imagen OG. No hay `public/og.png` estático en este sprint; si se necesita un PNG de diseño, sustituir el generador y documentarlo aquí.
