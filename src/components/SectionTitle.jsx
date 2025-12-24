export default function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2
        className={[
          'font-semibold tracking-tight text-[var(--color-text)]',
          'text-2xl sm:text-3xl md:text-4xl',
          'leading-[1.15]',
          align === 'center' ? 'text-center' : 'text-left',
        ].join(' ')}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            'mt-3 text-[var(--color-subtext)] max-w-[65ch] leading-relaxed',
            'text-[15px] sm:text-base md:text-lg',
            align === 'center' ? 'mx-auto text-center' : 'text-left',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
