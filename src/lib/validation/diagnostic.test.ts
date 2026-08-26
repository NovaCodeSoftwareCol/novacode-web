import { describe, expect, it } from "vitest";
import { validateDiagnostic } from "@/lib/validation/diagnostic";
import type { DiagnosticFormData } from "@/types/diagnostic";

const validDiagnostic: DiagnosticFormData = {
  name: "Luis Correa",
  company: "NovaCode",
  email: "lfcorrea97@gmail.com",
  phone: "+57 315 282 9636",
  currentTechnology: "Java EE",
  javaVersion: "Java 8",
  database: "Oracle",
  systemDescription: "Aplicación empresarial crítica con integraciones internas.",
  mainProblem: "Los cambios tardan demasiado y tienen riesgo operativo.",
  objective: "Modernizar por etapas sin detener el servicio.",
};

describe("validateDiagnostic", () => {
  it("accepts a complete diagnostic request", () => {
    expect(validateDiagnostic(validDiagnostic)).toEqual({});
  });

  it("reports missing technical context", () => {
    expect(validateDiagnostic({ ...validDiagnostic, javaVersion: "", systemDescription: "short" })).toMatchObject({
      javaVersion: "Indica la versión de Java o escribe No aplica.",
      systemDescription: "Añade más contexto sobre el sistema.",
    });
  });
});