import type { DiagnosticFormData } from "@/types/diagnostic";
import type { ServiceResult } from "@/services";

export async function submitDiagnostic(data: DiagnosticFormData): Promise<ServiceResult<null>> {
  try {
    const response = await fetch("/api/diagnostic", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) return { data: null, error: "No pudimos enviar el diagnóstico." };
    return { data: null, error: null };
  } catch {
    return { data: null, error: "No pudimos conectar con el servicio." };
  }
}