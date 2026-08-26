import { NextResponse } from "next/server";
import { validateDiagnostic } from "@/lib/validation/diagnostic";
import { notifySubmission, saveSubmission } from "@/services/server/submission-store";
import { isRateLimited } from "@/services/server/rate-limit";
import type { DiagnosticFormData } from "@/types/diagnostic";

const diagnosticFields: Array<keyof DiagnosticFormData> = ["name", "company", "email", "phone", "currentTechnology", "javaVersion", "database", "systemDescription", "mainProblem", "objective"];

function isDiagnosticData(value: unknown): value is DiagnosticFormData {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return diagnosticFields.every((field) => typeof data[field] === "string");
}

export async function POST(request: Request) {
  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(`diagnostic:${clientKey}`)) return NextResponse.json({ error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." }, { status: 429 });
  const body: unknown = await request.json().catch(() => null);
  if (!isDiagnosticData(body)) return NextResponse.json({ error: "Datos de diagnóstico inválidos." }, { status: 400 });
  const errors = validateDiagnostic(body);
  if (Object.keys(errors).length > 0) return NextResponse.json({ error: "Revisa los campos del diagnóstico.", fields: errors }, { status: 422 });
  const submission = saveSubmission("diagnostic", body);
  await notifySubmission(submission);
  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
}