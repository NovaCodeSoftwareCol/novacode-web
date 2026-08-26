export type Service = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  detail: string;
  benefits: string[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "modernizacion",
    category: "01 / Modernización de software",
    title: "Modernización de software",
    summary: "Evolución incremental de sistemas existentes, sin quedar atrapados en su tecnología de origen.",
    detail: "Diagnosticamos deuda técnica, dependencias y riesgos para construir una ruta gradual de actualización, refactorización o reingeniería.",
    benefits: ["Menor deuda técnica", "Cambios más previsibles", "Continuidad operativa"],
    technologies: ["Java", ".NET", "PHP", "Python", "Node.js"],
  },
  {
    slug: "desarrollo",
    category: "02 / Desarrollo de software",
    title: "Desarrollo de software",
    summary: "Nuevas aplicaciones, plataformas internas y productos digitales preparados para crecer.",
    detail: "Convertimos necesidades de negocio en soluciones web, APIs y plataformas mantenibles, con una arquitectura proporcional al problema.",
    benefits: ["Entrega enfocada en valor", "Arquitectura mantenible", "Base preparada para crecer"],
    technologies: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    slug: "backend",
    category: "03 / Backend & APIs",
    title: "Backend & APIs",
    summary: "Servicios y contratos que conectan capacidades de negocio con claridad.",
    detail: "Diseñamos backends robustos y APIs REST o GraphQL con límites claros, seguridad y observabilidad desde el inicio.",
    benefits: ["Integraciones más claras", "Contratos versionables", "Menor acoplamiento"],
    technologies: ["Java", "Spring Boot", ".NET", "NestJS", "FastAPI"],
  },
  {
    slug: "frontend",
    category: "04 / Frontend & Web",
    title: "Frontend & Web",
    summary: "Experiencias web rápidas y accesibles para clientes, equipos y operaciones.",
    detail: "Construimos interfaces que simplifican flujos reales y conectan con tus sistemas existentes, sin añadir complejidad innecesaria.",
    benefits: ["Mejores flujos de usuario", "Accesibilidad desde el diseño", "Rendimiento web"],
    technologies: ["React", "Next.js", "Angular", "Vue", "TypeScript"],
  },
  {
    slug: "cloud-devops",
    category: "05 / Cloud & DevOps",
    title: "Cloud & DevOps",
    summary: "Entrega, infraestructura y operación automatizadas con trazabilidad.",
    detail: "Preparamos despliegues repetibles y observables en cloud o entornos híbridos, según las restricciones de tu operación.",
    benefits: ["Despliegues repetibles", "Feedback más rápido", "Operación observable"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    slug: "data",
    category: "06 / Data & Databases",
    title: "Data & Databases",
    summary: "Datos disponibles, consistentes y listos para respaldar decisiones.",
    detail: "Optimizamos consultas, esquemas, migraciones e integraciones respetando la integridad de la información empresarial.",
    benefits: ["Datos más confiables", "Consultas eficientes", "Migraciones controladas"],
    technologies: ["PostgreSQL", "SQL Server", "Oracle", "MongoDB", "Redis"],
  },
  {
    slug: "inteligencia-artificial",
    category: "07 / Inteligencia Artificial",
    title: "Inteligencia Artificial",
    summary: "Capacidades de IA integradas a procesos y productos con criterio técnico.",
    detail: "Podemos desarrollar asistentes, automatizaciones, análisis de código y soluciones RAG con revisión humana y control del contexto.",
    benefits: ["Procesos asistidos", "Información más accionable", "Integración gradual"],
    technologies: ["LLM", "RAG", "AI APIs", "Agentes"],
  },
  {
    slug: "integracion-arquitectura",
    category: "08 / Integración & Arquitectura",
    title: "Integración & Arquitectura",
    summary: "Sistemas aislados convertidos en un ecosistema coherente y gobernable.",
    detail: "Definimos fronteras, eventos, mensajería e integraciones con terceros para que la arquitectura acompañe al negocio.",
    benefits: ["Menos silos", "Decisiones trazables", "Sistemas preparados para evolucionar"],
    technologies: ["REST", "GraphQL", "Eventos", "Mensajería"],
  },
  {
    slug: "java",
    category: "Especialidad / Java & Spring",
    title: "Java & Spring",
    summary: "Modernización profunda de aplicaciones Java, Spring y ecosistemas empresariales.",
    detail: "Java es una de nuestras especialidades: acompañamos migraciones de versión, refactorización, APIs, Spring Boot y evolución hacia arquitecturas modernas.",
    benefits: ["Configuración simplificada", "Observabilidad preparada", "Entrega incremental"],
    technologies: ["Java", "Spring", "Spring Boot", "Hibernate", "JPA", "REST"],
  },
];

export function getService(slug: string) {
  const aliases: Record<string, string> = {
    "spring-boot": "java",
    apis: "backend",
    microservicios: "integracion-arquitectura",
    "bases-de-datos": "data",
    devops: "cloud-devops",
    ia: "inteligencia-artificial",
  };
  return services.find((service) => service.slug === (aliases[slug] ?? slug));
}

export const serviceSlugs = [
  ...services.map((service) => service.slug),
  "spring-boot",
  "apis",
  "microservicios",
  "bases-de-datos",
  "devops",
  "ia",
];