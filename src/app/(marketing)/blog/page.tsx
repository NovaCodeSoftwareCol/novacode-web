import { PageIntro } from "@/components/sections/page-intro";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { blogPosts } from "@/content/blog/posts";
import { marketingPages } from "@/content/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: marketingPages.blog.title,
  description: marketingPages.blog.description,
  path: "/blog",
});

export default function BlogPage() {
  return <><PageIntro heading={marketingPages.blog.heading} description="Notas de ingeniería sobre Java, Spring, legacy, datos y modernización." /><section className="border-t border-line py-12 md:py-16"><Container className="grid gap-4 md:grid-cols-2">{blogPosts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-card border border-line bg-surface p-6 hover:border-accent"><p className="font-mono text-xs text-accent">{post.publishedAt}</p><h2 className="mt-8 text-lg font-semibold text-ink">{post.title}</h2><p className="mt-2 text-sm leading-6 text-muted">{post.description}</p><div className="mt-5 flex gap-2">{post.tags.map((tag) => <span key={tag} className="font-mono text-xs text-muted">#{tag}</span>)}</div></Link>)}</Container></section></>;
}
