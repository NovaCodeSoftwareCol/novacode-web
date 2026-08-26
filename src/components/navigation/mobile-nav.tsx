"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { ctaNav, mainNav } from "@/content/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line bg-surface text-ink"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
      </button>

      {open ? (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-bg/95 p-4"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <p id={titleId} className="sr-only">
            Navegación
          </p>
          <nav className="flex flex-col gap-1" aria-label="Principal móvil">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-control)] px-3 py-3 text-base text-ink hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <Button href={ctaNav.primary.href} className="w-full">
              {ctaNav.primary.label}
            </Button>
            <Button href={ctaNav.secondary.href} variant="secondary" className="w-full">
              {ctaNav.secondary.label}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
