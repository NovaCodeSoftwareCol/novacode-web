"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation/contact";
import { submitContact } from "@/services/contact";
import type { ContactFormData } from "@/types/contact";

const initialValues: ContactFormData = { name: "", company: "", email: "", message: "" };

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema), defaultValues: initialValues });

  async function handleSubmitForm(values: ContactFormData) {
    const result = await submitContact(values);
    if (!result.error) setSubmitted(true);
  }

  if (submitted) return <div className="border border-accent bg-surface p-6"><h2 className="font-semibold text-ink">Mensaje recibido.</h2><p className="mt-2 text-sm leading-6 text-muted">Gracias por escribirnos. Nos pondremos en contacto contigo pronto.</p></div>;

  return <form onSubmit={handleSubmit(handleSubmitForm)} className="grid gap-5 border border-line bg-surface p-6 md:grid-cols-2 md:p-8">
    <label className="grid gap-2 text-sm font-medium text-ink">Nombre<input {...register("name")} placeholder="Tu nombre" className="h-11 rounded-[var(--radius-control)] border border-line bg-bg px-3 font-normal outline-none placeholder:text-muted focus:border-accent" />{errors.name && <span className="text-xs font-normal text-legacy">{errors.name.message}</span>}</label>
    <label className="grid gap-2 text-sm font-medium text-ink">Empresa<input {...register("company")} placeholder="Nombre de la empresa" className="h-11 rounded-[var(--radius-control)] border border-line bg-bg px-3 font-normal outline-none placeholder:text-muted focus:border-accent" />{errors.company && <span className="text-xs font-normal text-legacy">{errors.company.message}</span>}</label>
    <label className="grid gap-2 text-sm font-medium text-ink md:col-span-2">Email<input {...register("email")} type="email" placeholder="nombre@empresa.com" className="h-11 rounded-[var(--radius-control)] border border-line bg-bg px-3 font-normal outline-none placeholder:text-muted focus:border-accent" />{errors.email && <span className="text-xs font-normal text-legacy">{errors.email.message}</span>}</label>
    <label className="grid gap-2 text-sm font-medium text-ink md:col-span-2">Mensaje<textarea {...register("message")} rows={5} placeholder="¿Qué sistema necesitas modernizar?" className="rounded-[var(--radius-control)] border border-line bg-bg p-3 font-normal outline-none placeholder:text-muted focus:border-accent" />{errors.message && <span className="text-xs font-normal text-legacy">{errors.message.message}</span>}</label>
    <button type="submit" disabled={isSubmitting} className="h-11 w-fit rounded-[var(--radius-control)] bg-accent px-5 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60">{isSubmitting ? "Enviando..." : "Enviar mensaje"}</button>
  </form>;
}