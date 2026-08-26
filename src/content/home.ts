export const homeContent = {
  eyebrow: "Legacy → Modern → Future",
  hero: {
    heading: "Modernizamos sistemas Java antiguos sin detener la operación.",
    description:
      "Transformamos aplicaciones Java legacy en plataformas mantenibles y escalables mediante una modernización progresiva, medible y segura.",
  },
  problems: [
    "Versiones antiguas de Java y dependencias sin soporte",
    "Deuda técnica que ralentiza cada cambio",
    "Servidores obsoletos y poca trazabilidad operativa",
    "Riesgo de migrar un sistema crítico de una sola vez",
  ],
  process: [
    { number: "01", title: "Diagnóstico", description: "Entendemos la aplicación, sus dependencias y las restricciones del negocio." },
    { number: "02", title: "Análisis", description: "Encontramos riesgos, acoplamientos y oportunidades de mejora priorizadas." },
    { number: "03", title: "Estrategia", description: "Diseñamos una hoja de ruta incremental con objetivos verificables." },
    { number: "04", title: "Modernización", description: "Evolucionamos componentes sin perder continuidad ni conocimiento del dominio." },
    { number: "05", title: "Validación", description: "Probamos comportamiento, rendimiento y operación antes de cada avance." },
    { number: "06", title: "Producción", description: "Acompañamos el despliegue y dejamos una plataforma preparada para crecer." },
  ],
  services: [
    { title: "Modernización Java", description: "Actualización progresiva de aplicaciones Java legacy." },
    { title: "Spring Boot", description: "Migración hacia servicios más simples, observables y mantenibles." },
    { title: "APIs REST", description: "Diseño y evolución de contratos para integrar el negocio." },
    { title: "Datos y DevOps", description: "Bases de datos, CI/CD y despliegues con trazabilidad." },
  ],
  technologies: ["Java", "Spring Boot", "Hibernate", "SQL Server", "Oracle", "Docker", "Kubernetes", "CI/CD"],
} as const;