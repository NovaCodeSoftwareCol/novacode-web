import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation/contact";
import { notifySubmission, saveSubmission } from "@/services/server/submission-store";
import { isRateLimited } from "@/services/server/rate-limit";
import type { ContactFormData } from "@/types/contact";

function isContactData(value: unknown): value is ContactFormData {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return ["name", "company", "email", "message"].every((field) => typeof data[field] === "string");
}

export async function POST(request: Request) {
  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(`contact:${clientKey}`)) return NextResponse.json({ error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." }, { status: 429 });
  const body: unknown = await request.json().catch(() => null);
  if (!isContactData(body)) return NextResponse.json({ error: "Datos de contacto inválidos." }, { status: 400 });
  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) return NextResponse.json({ error: "Revisa los campos del formulario.", fields: errors }, { status: 422 });
  const submission = saveSubmission("contact", body);
  await notifySubmission(submission);
  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
}