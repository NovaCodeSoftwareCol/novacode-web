export const informationPages = {
  soluciones: {
    eyebrow: "Soluciones por escenario",
    title: "Evolución para sistemas que no pueden detenerse",
    intro: "Adaptamos la ruta a la realidad de cada plataforma: monolitos, integraciones, servidores antiguos y equipos que necesitan recuperar velocidad.",
    items: ["Monolitos Java de misión crítica", "Migraciones desde servidores de aplicaciones", "APIs que necesitan contratos claros", "Equipos frenados por deuda técnica"],
  },
  proceso: {
    eyebrow: "Cómo trabajamos",
    title: "Decisiones pequeñas, avance constante",
    intro: "Cada etapa produce evidencia y una siguiente decisión. Así la modernización deja de ser un salto de fe y se convierte en una secuencia controlable.",
    items: ["Observamos antes de proponer", "Priorizamos riesgo y valor", "Probamos antes de mover", "Documentamos lo que queda"],
  },
  tecnologias: {
    eyebrow: "Stack tecnológico",
    title: "Herramientas al servicio del contexto",
    intro: "Combinamos tecnologías empresariales probadas con herramientas modernas cuando mejoran la mantenibilidad, la entrega o la operación.",
    items: ["Java, Spring y Spring Boot", "Hibernate y bases de datos SQL", "React y Next.js para nuevas interfaces", "Docker, Kubernetes y CI/CD"],
    groups: [
      { title: "Backend", technologies: "Java · Spring Boot · .NET · C# · Node.js · Python · FastAPI" },
      { title: "Frontend", technologies: "React · Next.js · Angular · Vue · TypeScript" },
      { title: "Datos", technologies: "PostgreSQL · SQL Server · MySQL · Oracle · MongoDB · Redis" },
      { title: "Cloud & DevOps", technologies: "AWS · Azure · Google Cloud · Docker · Kubernetes · GitHub Actions" },
      { title: "IA", technologies: "LLM · RAG · AI APIs · agentes · automatización" },
    ],
  },
  nosotros: {
    eyebrow: "NovaCode",
    title: "Ingeniería para hacer evolucionar lo importante",
    intro: "NovaCode nace para acompañar a equipos que necesitan modernizar software crítico sin perder continuidad, conocimiento ni control sobre sus decisiones.",
    items: ["Claridad técnica para decidir", "Comunicación directa con los equipos", "Respeto por el dominio existente", "Resultados verificables por etapa"],
  },
} as const;