"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const order = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line bg-surface text-ink"
        aria-label="Cambiar tema"
        disabled
      />
    );
  }

  const current = (theme ?? "system") as (typeof order)[number];
  const next = order[(order.indexOf(current) + 1) % order.length];
  const label =
    current === "dark"
      ? "Tema oscuro. Cambiar a sistema"
      : current === "light"
        ? "Tema claro. Cambiar a oscuro"
        : "Tema del sistema. Cambiar a claro";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line bg-surface text-ink hover:bg-bg"
      aria-label={label}
    >
      {current === "dark" ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : current === "light" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Monitor className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
