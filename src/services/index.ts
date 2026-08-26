/**
 * Puerto de servicios.
 * Las pantallas no deben llamar a un backend concreto.
 * Este módulo es el punto de extensión para REST, GraphQL u otros proveedores.
 */
export type ServiceResult<T> = {
  data: T | null;
  error: string | null;
};
