import Link from "next/link";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Basic page section wrapper: consistent spacing and an optional heading.
 */
export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 ${className ? ` ${className}` : ""}`}
    >
      {title ? (
        <h2 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

interface SectionLinkProps {
  href: string;
  children: ReactNode;
}

export function SectionLink({ href, children }: SectionLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full border border-charcoal/25 px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-cream"
    >
      {children}
    </Link>
  );
}
