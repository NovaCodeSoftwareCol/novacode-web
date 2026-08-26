export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  benefits: string[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "java",
    title: "Modernización Java",
    summary: "Actualización progresiva de aplicaciones Java legacy.",
    detail: "Reducimos el riesgo de evolucionar una aplicación crítica con una ruta técnica que conserva el conocimiento del dominio y entrega mejoras por etapas.",
    benefits: ["Menor deuda técnica", "Cambios más previsibles", "Continuidad operativa"],
    technologies: ["Java", "Maven", "JUnit"],
  },
  {
    slug: "spring-boot",
    title: "Spring Boot",
    summary: "Migración hacia servicios más simples, observables y mantenibles.",
    detail: "Llevamos componentes Java hacia una base moderna de Spring Boot cuando el contexto lo justifica, con pruebas y despliegues repetibles.",
    benefits: ["Configuración simplificada", "Observabilidad preparada", "Entrega incremental"],
    technologies: ["Spring", "Spring Boot", "Actuator"],
  },
  {
    slug: "apis",
    title: "APIs REST",
    summary: "Diseño y evolución de contratos para integrar el negocio.",
    detail: "Creamos fronteras claras alrededor de las capacidades del sistema para integrar nuevos canales sin exponer su complejidad interna.",
    benefits: ["Contratos versionables", "Integraciones más claras", "Mayor reutilización"],
    technologies: ["REST", "OpenAPI", "Spring MVC"],
  },
  {
    slug: "microservicios",
    title: "Microservicios",
    summary: "Descomposición progresiva cuando aporta valor real.",
    detail: "Evaluamos límites de dominio, dependencias y operación antes de extraer servicios. La distribución es una decisión, no un objetivo automático.",
    benefits: ["Límites explícitos", "Escalado contextual", "Menos acoplamiento"],
    technologies: ["Spring Cloud", "Docker", "Kubernetes"],
  },
  {
    slug: "bases-de-datos",
    title: "Bases de datos",
    summary: "Migración y optimización de datos empresariales.",
    detail: "Protegemos la integridad de los datos mientras mejoramos consultas, esquemas y estrategias de migración.",
    benefits: ["Datos trazables", "Consultas más eficientes", "Migraciones controladas"],
    technologies: ["SQL Server", "Oracle", "MySQL"],
  },
  {
    slug: "devops",
    title: "DevOps",
    summary: "Automatización CI/CD y despliegues con trazabilidad.",
    detail: "Convertimos pasos manuales y frágiles en una cadena de entrega repetible, auditable y alineada con la operación.",
    benefits: ["Despliegues repetibles", "Feedback más rápido", "Menor riesgo operativo"],
    technologies: ["Git", "CI/CD", "Docker"],
  },
  {
    slug: "ia",
    title: "IA aplicada al código",
    summary: "Análisis, documentación y modernización asistida.",
    detail: "Aplicamos IA como apoyo al análisis y la documentación, manteniendo revisión humana y control sobre el código resultante.",
    benefits: ["Análisis acelerado", "Documentación útil", "Decisiones auditables"],
    technologies: ["Análisis estático", "RAG", "Revisión humana"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}