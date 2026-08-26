import type { ServiceResult } from "@/services";
import type { ContactFormData } from "@/types/contact";

export async function submitContact(data: ContactFormData): Promise<ServiceResult<null>> {
  try {
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) return { data: null, error: "No pudimos enviar el mensaje." };
    return { data: null, error: null };
  } catch {
    return { data: null, error: "No pudimos conectar con el servicio." };
  }
}