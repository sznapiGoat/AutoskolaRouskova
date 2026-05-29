import { clsx } from "clsx";

type SectionProps = {
  children: React.ReactNode;
  /** Soft off-white band instead of pure white. */
  muted?: boolean;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

/** Consistent vertical rhythm + container for every page section. */
export function Section({ children, muted, className, id, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(muted ? "bg-surface" : "bg-bg", "py-16 md:py-24", className)}
      {...rest}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-600 uppercase tracking-wider text-brand">{eyebrow}</p>
      )}
      <h1 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      {lead && <p className="mt-5 text-lg text-ink-soft">{lead}</p>}
    </header>
  );
}
