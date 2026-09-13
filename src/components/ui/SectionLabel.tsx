interface SectionLabelProps {
  label: string;
}

/**
 * Small editorial section label with a route-marker dot,
 * e.g. "● CURRENTLY BUILDING".
 */
export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <h2 className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-soft uppercase">
      <span aria-hidden className="size-2 rounded-full bg-ember" />
      {label}
    </h2>
  );
}
