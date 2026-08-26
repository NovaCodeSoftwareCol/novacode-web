import type { DiagnosticFormData } from "@/types/diagnostic";
import { z } from "zod";

export const diagnosticSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre."),
  company: z.string().trim().min(2, "Escribe el nombre de tu empresa."),
  email: z.string().trim().email("Escribe un correo válido."),
  phone: z.string().trim().min(7, "Escribe un teléfono válido."),
  currentTechnology: z.string().trim().min(2, "Indica la tecnología principal."),
  javaVersion: z.string().trim().min(1, "Indica la versión de Java o escribe No aplica."),
  database: z.string().trim().min(2, "Indica la base de datos principal."),
  systemDescription: z.string().trim().min(20, "Añade más contexto sobre el sistema."),
  mainProblem: z.string().trim().min(10, "Describe el problema principal."),
  objective: z.string().trim().min(10, "Describe qué quieres conseguir."),
});

export function validateDiagnostic(data: DiagnosticFormData) {
  const result = diagnosticSchema.safeParse(data);
  if (result.success) return {};
  return result.error.issues.reduce<Partial<Record<keyof DiagnosticFormData, string>>>((errors, issue) => {
    const field = issue.path[0] as keyof DiagnosticFormData;
    if (!errors[field]) errors[field] = issue.message;
    return errors;
  }, {});
}