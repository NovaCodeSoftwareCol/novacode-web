import type { ContactFormData } from "@/types/contact";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre."),
  company: z.string().trim().min(2, "Escribe el nombre de tu empresa."),
  email: z.string().trim().email("Escribe un correo válido."),
  message: z.string().trim().min(10, "Cuéntanos brevemente en qué podemos ayudarte."),
});

export function validateContact(data: ContactFormData) {
  const result = contactSchema.safeParse(data);
  if (result.success) return {};
  return result.error.issues.reduce<Partial<Record<keyof ContactFormData, string>>>((errors, issue) => {
    const field = issue.path[0] as keyof ContactFormData;
    if (!errors[field]) errors[field] = issue.message;
    return errors;
  }, {});
}