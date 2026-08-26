# Backend

## Estado actual

El backend inicial vive en Route Handlers de Next.js:

- `POST /api/contact` recibe `name`, `company`, `email` y `message`.
- `POST /api/diagnostic` recibe los diez campos del diagnóstico.

Ambos endpoints validan el cuerpo en servidor y devuelven `400` para payloads con forma inválida, `422` para campos inválidos y `201` cuando aceptan la solicitud.

Si existe `CONTACT_WEBHOOK_URL`, cada solicitud aceptada se reenvía desde el servidor a ese webhook. Un fallo del webhook no bloquea la respuesta, pero se registra para observabilidad.

## Persistencia

`src/services/server/submission-store.ts` usa memoria del proceso para desarrollo local. No es persistencia de producción: los datos se pierden al reiniciar y no existe todavía autenticación ni panel administrativo.

El siguiente paso es implementar un repositorio persistente detrás del mismo contrato, con PostgreSQL, migraciones, control de acceso, rate limiting y observabilidad antes de publicar estos endpoints.

El rate limiting inicial permite cinco solicitudes por minuto y dirección en cada endpoint. En una plataforma distribuida debe trasladarse a Redis, KV o el mecanismo equivalente del proveedor.

## Integraciones

Los componentes cliente llaman a `src/services/contact.ts` y `src/services/diagnostic.ts`, no a los Route Handlers directamente. Esto permite sustituir la API interna por un servicio externo sin cambiar la UI.