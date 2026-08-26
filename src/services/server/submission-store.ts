import { randomUUID } from "node:crypto";
import type { ContactFormData } from "@/types/contact";
import type { DiagnosticFormData } from "@/types/diagnostic";

export type Submission =
  | { id: string; type: "contact"; createdAt: string; data: ContactFormData }
  | { id: string; type: "diagnostic"; createdAt: string; data: DiagnosticFormData };

const submissions: Submission[] = [];

export function saveSubmission<T extends Submission["data"]>(type: Submission["type"], data: T) {
  const submission = { id: randomUUID(), type, createdAt: new Date().toISOString(), data } as Submission;
  submissions.push(submission);
  return submission;
}

export function listSubmissions() {
  return [...submissions];
}

export async function notifySubmission(submission: Submission) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
  } catch {
    console.error("Submission webhook notification failed", { submissionId: submission.id });
  }
}