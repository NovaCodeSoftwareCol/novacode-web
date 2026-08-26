import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Section } from "@/components/layout/section";
import { blogPosts } from "@/content/blog/posts";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createPageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <Section><Container><p className="font-mono text-xs text-accent">{post.publishedAt} / {post.tags.join(" · ")}</p><Heading className="mt-4 max-w-3xl">{post.title}</Heading><p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{post.description}</p><div className="mt-12 max-w-2xl border-t border-line pt-8 text-sm leading-7 text-muted"><p>Este artículo forma parte de las notas editoriales de NovaCode. El contenido presenta ideas y criterios técnicos generales, no casos reales de clientes.</p></div></Container></Section>;
}