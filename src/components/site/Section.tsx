import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container-editorial">
        {eyebrow ? (
          <p className="mb-10 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            {eyebrow}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
