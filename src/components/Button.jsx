import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Button({
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  // Base: đồng bộ chiều cao + không xuống dòng + focus ring
  const base = clsx(
    'inline-flex items-center justify-center',
    'h-11 px-5', // <--- quan trọng: fixed height để mọi button thẳng hàng
    'rounded-[var(--radius-xl2)]',
    'text-sm font-medium',
    'whitespace-nowrap',
    'transition',
    'active:scale-[0.98] hover:-translate-y-[1px] transition-transform',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-skyP-300)]'
  );

  const styles =
    variant === 'primary'
      ? clsx(
          'text-white',
          'bg-gradient-to-r from-[var(--color-skyP-400)] to-[var(--color-skyP-500)]',
          'shadow-[0_12px_30px_rgba(14,165,233,0.28)]',
          'hover:brightness-110'
        )
      : clsx(
          'text-[var(--color-text)]',
          'border border-[var(--color-border)]',
          'bg-white hover:bg-[var(--color-skyP-50)]',
          // tạo cảm giác 'độ nặng' tương đương primary để không bị “lệch”
          'shadow-[0_8px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_24px_rgba(15,23,42,0.10)]'
        );

  const cn = clsx(base, styles, className);

  if (to) {
    return (
      <Link to={to} className={cn} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:');

    return (
      <a
        href={href}
        className={cn}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
}
