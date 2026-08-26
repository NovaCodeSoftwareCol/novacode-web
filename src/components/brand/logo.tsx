import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  href?: string;
};

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="8"
        width="18"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-legacy"
      />
      <rect
        x="11"
        y="4"
        width="18"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-accent"
      />
      <circle cx="20" cy="12" r="1.4" className="fill-future" />
    </svg>
  );
}

export function Logo({ className, href = "/" }: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2 text-ink", className)}>
      <Mark />
      <span className="font-semibold tracking-tight">NovaCode</span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label="NovaCode, inicio"
      className="inline-flex items-center rounded-[var(--radius-control)]"
    >
      {content}
    </Link>
  );
}
