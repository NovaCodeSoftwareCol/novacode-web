import { cn } from "@/lib/cn";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

const styles = {
  h1: "text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]",
  h2: "text-2xl font-semibold tracking-tight text-ink sm:text-3xl",
  h3: "text-lg font-semibold tracking-tight text-ink sm:text-xl",
};

export function Heading({ children, as: Tag = "h1", className }: HeadingProps) {
  return <Tag className={cn(styles[Tag], className)}>{children}</Tag>;
}
