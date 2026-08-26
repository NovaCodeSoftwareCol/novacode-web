import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/validation/contact";

describe("validateContact", () => {
  it("rejects incomplete contact data", () => {
    expect(validateContact({ name: "", company: "", email: "bad", message: "x" })).toEqual({
      name: "Escribe tu nombre.",
      company: "Escribe el nombre de tu empresa.",
      email: "Escribe un correo válido.",
      message: "Cuéntanos brevemente en qué podemos ayudarte.",
    });
  });

  it("accepts a valid contact request", () => {
    expect(validateContact({ name: "Luis Correa", company: "NovaCode", email: "lfcorrea97@gmail.com", message: "Necesito modernizar una aplicación Java crítica." })).toEqual({});
  });
});