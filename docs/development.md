# Desarrollo

## Requisitos

Node.js 20+ y npm.

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

- `npm run dev` — servidor de desarrollo (Turbopack)
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript sin emitir
- `npm run format` — Prettier
- `npm run build` — build de producción
- `npm start` — servir el build

## Convenciones

- TypeScript strict. Evitar `any`.
- Server Components por defecto; `"use client"` solo cuando haya estado, tema o motion.
- Copy en `src/content`.
- No secretos en el cliente.
- No inventar clientes, logos de terceros como “partners” ni métricas reales.

## Calidad mínima por cambio

```bash
npm run lint
npm run typecheck
npm run build
```

Revisar mentalmente 375 / 768 / 1024 / 1440 y navegación por teclado.
