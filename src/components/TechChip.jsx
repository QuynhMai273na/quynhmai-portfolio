export default function TechChip({ label, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full',
        'bg-[var(--color-skyP-100)] border border-[var(--color-skyP-200)]',
        'px-3 py-1',
        'text-[12px] sm:text-xs font-medium text-[var(--color-text)]',
        'whitespace-nowrap',
        'transition hover:bg-[var(--color-skyP-50)]',
        className,
      ].join(' ')}
    >
      {label}
    </span>
  );
}
