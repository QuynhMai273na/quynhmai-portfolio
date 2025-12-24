import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { Github, Menu, X } from 'lucide-react';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `
      inline-flex items-center
      rounded-full px-4 py-2 text-sm font-medium
      transition-colors duration-200
      border
      w-fit md:w-auto
      ${
        isActive
          ? 'bg-[var(--color-skyP-100)] text-[var(--color-skyP-600)] border-[var(--color-skyP-200)] shadow-sm'
          : 'text-[var(--color-subtext)] border-transparent hover:text-[var(--color-skyP-600)] hover:bg-[var(--color-skyP-50)]'
      }
    `
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`
          border-b border-[var(--color-border)]
          transition-all duration-300
          ${
            scrolled
              ? 'bg-white/85 backdrop-blur-md'
              : 'bg-white/70 backdrop-blur'
          }
        `}
      >
        <Container>
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${scrolled ? 'h-14' : 'h-20'}
            `}
          >
            {/* Brand */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div
                className={`
                 rounded-full
    bg-[var(--color-skyP-100)]
    border border-[var(--color-skyP-200)]
    flex items-center justify-center
    shadow-[0_8px_20px_rgba(56,189,248,0.25)]
    transition-all duration-300
    hover:shadow-[0_12px_30px_rgba(56,189,248,0.35)]
    ${scrolled ? 'h-8 w-8 text-sm' : 'h-10 w-10'}

                `}
              >
                <span className="font-semibold text-[var(--color-skyP-500)]">
                  QM
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-tight group-hover:text-[var(--color-skyP-600)] transition-colors">
                  Nguyen Thi Quynh Mai
                </div>
                {!scrolled && (
                  <div className="text-[13px] sm:text-sm text-[var(--color-subtext)] leading-tight">
                    Frontend / Full-stack Developer
                  </div>
                )}
              </div>
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://github.com/QuynhMai273na/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-[var(--color-border)]
                  bg-white
                  text-[var(--color-subtext)]
                  shadow-[0_2px_4px_rgba(0,0,0,0.02)]
                  transition-all duration-200
                  hover:bg-[var(--color-skyP-50)]
                  hover:text-[var(--color-skyP-600)]
                  hover:border-[var(--color-skyP-200)]
                  hover:-translate-y-[1px]
                  active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-skyP-300)]
                "
              >
                <Github size={18} />
              </a>
              <Button href="/NguyenQuynhMaiSE_CV.pdf">Download CV</Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setOpen((v) => !v)}
                className="
    inline-flex h-10 w-10 items-center justify-center
    rounded-full border border-[var(--color-border)] bg-white
    transition
    hover:bg-[var(--color-skyP-50)]
    hover:border-[var(--color-skyP-200)]
    active:scale-95
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-skyP-300)]
  "
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-[var(--color-border)] bg-white/95 backdrop-blur shadow-xl">
            <Container>
              <div className="py-4 grid gap-2">
                {nav.map((item) => (
                  <div key={item.to} className="[&>*]:w-full">
                    <NavItem {...item} />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
