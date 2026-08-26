"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/layout/container";
import { diagnosticSchema } from "@/lib/validation/diagnostic";
import { submitDiagnostic } from "@/services/diagnostic";
import type { DiagnosticFormData } from "@/types/diagnostic";

const fields: Array<{ name: keyof DiagnosticFormData; label: string; placeholder: string; type?: string }> = [
  { name: "name", label: "Nombre", placeholder: "Tu nombre" },
  { name: "company", label: "Empresa", placeholder: "Nombre de la empresa" },
  { name: "email", label: "Email", placeholder: "nombre@empresa.com", type: "email" },
  { name: "phone", label: "Teléfono", placeholder: "+57 315 282 9636", type: "tel" },
  { name: "currentTechnology", label: "Tecnología actual", placeholder: "Java EE, Struts, servidor de aplicaciones..." },
  { name: "javaVersion", label: "Versión Java", placeholder: "Java 8, Java 11, No aplica..." },
  { name: "database", label: "Base de datos", placeholder: "Oracle, SQL Server, MySQL..." },
];

export function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DiagnosticFormData>({ resolver: zodResolver(diagnosticSchema) });

  async function onSubmit(values: DiagnosticFormData) {
    const result = await submitDiagnostic(values);
    if (!result.error) setSubmitted(true);
  }

  if (submitted) {
    return <Container><div className="border border-accent bg-surface p-6 md:p-8"><h2 className="text-xl font-semibold text-ink">Información recibida.</h2><p className="mt-2 text-sm leading-6 text-muted">Gracias por compartir el contexto. Nos pondremos en contacto contigo para conversar sobre el siguiente paso.</p></div></Container>;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 border border-line bg-surface p-6 md:grid-cols-2 md:p-8">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-ink">
            {field.label}
            <input {...register(field.name)} type={field.type ?? "text"} placeholder={field.placeholder} className="h-11 rounded-[var(--radius-control)] border border-line bg-bg px-3 font-normal text-ink outline-none placeholder:text-muted focus:border-accent" />
            {errors[field.name] && <span className="text-xs font-normal text-legacy">{errors[field.name]?.message}</span>}
          </label>
        ))}
        {(["systemDescription", "mainProblem", "objective"] as const).map((name) => (
          <label key={name} className="grid gap-2 text-sm font-medium text-ink md:col-span-2">
            {name === "systemDescription" ? "Descripción del sistema" : name === "mainProblem" ? "Problema principal" : "Objetivo"}
            <textarea {...register(name)} rows={4} className="rounded-[var(--radius-control)] border border-line bg-bg p-3 font-normal text-ink outline-none placeholder:text-muted focus:border-accent" placeholder="Comparte el contexto que consideres relevante..." />
            {errors[name] && <span className="text-xs font-normal text-legacy">{errors[name]?.message}</span>}
          </label>
        ))}
        <div className="md:col-span-2"><button type="submit" disabled={isSubmitting} className="h-11 rounded-[var(--radius-control)] bg-accent px-5 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60">{isSubmitting ? "Enviando..." : "Enviar diagnóstico"}</button></div>
      </form>
    </Container>
  );
}