export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  { slug: "modernizacion-java-por-etapas", title: "Modernización Java por etapas", description: "Por qué una ruta incremental reduce el riesgo de cambiar sistemas críticos.", publishedAt: "2026-08-20", tags: ["Java", "Modernización"] },
  { slug: "cuando-spring-boot-es-el-siguiente-paso", title: "Cuando Spring Boot es el siguiente paso", description: "Criterios técnicos para evaluar una migración con contexto.", publishedAt: "2026-08-13", tags: ["Spring Boot", "Arquitectura"] },
  { slug: "hacer-visible-la-deuda-tecnica", title: "Hacer visible la deuda técnica", description: "Un inventario útil convierte problemas difusos en decisiones priorizables.", publishedAt: "2026-08-06", tags: ["Legacy", "Calidad"] },
  { slug: "microservicios-sin-dogmas", title: "Microservicios sin dogmas", description: "La distribución solo vale la pena cuando mejora los límites y la operación.", publishedAt: "2026-07-30", tags: ["Microservicios", "DevOps"] },
];
