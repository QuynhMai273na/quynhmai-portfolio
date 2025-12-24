import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import TechChip from '../components/TechChip';
import Button from '../components/Button';
import { projects } from '../data/projects';

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 backdrop-blur p-4">
      <div className="text-xs text-[var(--color-subtext)]">{label}</div>
      <div className="mt-1 text-base font-semibold text-[var(--color-text)]">
        {value}
      </div>
    </div>
  );
}

function Block({ id, title, children }) {
  return (
    <section
      id={id}
      className="
        reveal scroll-mt-28
        rounded-[var(--radius-xl2)]
        border border-[var(--color-border)]
        bg-white/85
        backdrop-blur
        shadow-[0_18px_44px_rgba(15,23,42,0.10)]
p-5 sm:p-6 md:p-7      "
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <a
          href={`#${id}`}
          className="text-xs text-[var(--color-subtext)] hover:text-[var(--color-text)] transition"
        >
          #{id}
        </a>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-[var(--color-subtext)] leading-relaxed">
      {(items ?? []).map((t, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-skyP-400)] shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}

function Lightbox({
  open,
  onClose,
  title,
  src,
  onPrev,
  onNext,
  canPrev,
  canNext,
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && canPrev) onPrev();
      if (e.key === 'ArrowRight' && canNext) onNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, onPrev, onNext, canPrev, canNext]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-5xl overflow-hidden rounded-[var(--radius-xl2)] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3">
          <div className="font-semibold truncate">{title}</div>
          <div className="flex flex-wrap items-center gap-2 justify-end">
            <button
              className="h-10 px-3 text-sm rounded-xl border border-[var(--color-border)] bg-white hover:bg-[var(--color-skyP-50)] transition disabled:opacity-40"
              onClick={onPrev}
              disabled={!canPrev}
            >
              ← Prev
            </button>
            <button
              className="h-10 px-3 text-sm rounded-xl border border-[var(--color-border)] bg-white hover:bg-[var(--color-skyP-50)] transition disabled:opacity-40"
              onClick={onNext}
              disabled={!canNext}
            >
              Next →
            </button>
            <button
              className="h-9 w-9 rounded-xl border border-[var(--color-border)] bg-white hover:bg-[var(--color-skyP-50)] transition"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="relative bg-[var(--color-bg)]">
          {src ? (
            <img
              src={src}
              alt={title}
              className="max-h-[80vh] w-full object-contain"
            />
          ) : (
            <div className="aspect-[16/9] flex items-center justify-center text-[var(--color-subtext)]">
              No image
            </div>
          )}
        </div>

        <div className="px-4 py-3 text-xs text-[var(--color-subtext)] border-t border-[var(--color-border)]">
          Tip: use <span className="font-semibold">Esc</span> to close ·{' '}
          <span className="font-semibold">← / →</span> to navigate
        </div>
      </div>
    </div>
  );
}

function ScreenshotGrid({ screenshots, onOpen }) {
  const list = screenshots ?? [];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {list.map((s, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onOpen(idx)}
          className="
            text-left
            rounded-2xl border border-[var(--color-border)]
            bg-white overflow-hidden
            transition
            hover:-translate-y-0.5
            hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-skyP-200)]
          "
        >
          <div className="relative aspect-[16/9] bg-[var(--color-skyP-100)]">
            {s.src ? (
              <img
                src={s.src}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-subtext)]">
              {s.src ? '' : 'Screenshot'}
            </div>
            <div className="absolute bottom-2 right-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs border border-[var(--color-border)]">
              Click to zoom
            </div>
          </div>

          <div className="p-4">
            <div className="font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-[var(--color-subtext)]">
              UI snapshot / flow highlight
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  // Reveal animation for blocks
  useRevealOnScroll();

  const sectionIds = [
    'problem',
    'solution',
    'contributions',
    'architecture',
    'screenshots',
    'next',
  ];
  const activeSection = useActiveSection(sectionIds);

  // Lightbox state (index-based)
  const shots = project?.screenshots ?? [];
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const openAt = (idx) => {
    setLbIndex(idx);
    setLbOpen(true);
  };

  const close = () => setLbOpen(false);
  const prev = () => setLbIndex((i) => Math.max(0, i - 1));
  const next = () => setLbIndex((i) => Math.min(shots.length - 1, i + 1));

  const canPrev = lbIndex > 0;
  const canNext = lbIndex < shots.length - 1;

  const heroGradient =
    project?.accent === 'cyan'
      ? 'from-[rgba(34,211,238,0.35)] via-[rgba(240,253,255,0.85)] to-white'
      : project?.accent === 'blue'
      ? 'from-[rgba(59,130,246,0.25)] via-[rgba(239,246,255,0.85)] to-white'
      : 'from-[rgba(56,189,248,0.35)] via-[rgba(240,249,255,0.85)] to-white';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      document.title = 'Copied ✅';
      setTimeout(() => {
        document.title = project?.title ?? 'Project';
      }, 900);
    } catch {}
  };

  if (!project) {
    return (
      <section className="py-10 sm:py-12 md:py-20">
        <Container>
          <div className="rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/85 backdrop-blur p-6">
            Project not found.
          </div>
        </Container>
      </section>
    );
  }

  const currentShot = shots[lbIndex] ?? { title: '', src: '' };

  return (
    <section className="py-10 md:py-16">
      <Container>
        {/* Top actions bar */}
        <div className="mb-4 reveal flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-[var(--color-subtext)]">
            <span className="text-[var(--color-text)] font-medium">
              Projects
            </span>{' '}
            /{' '}
            <span className="text-[var(--color-text)] font-medium">
              {project.title}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:flex gap-3">
            <Button
              className="w-full sm:w-auto"
              variant="outline"
              to="/projects"
            >
              ← Back
            </Button>
            <Button
              className="w-full sm:w-auto"
              variant="outline"
              href="#screenshots"
            >
              Screenshots
            </Button>
            <Button
              className="w-full sm:w-auto"
              variant="outline"
              onClick={copyLink}
            >
              Copy link
            </Button>
          </div>
        </div>

        {/* Hero */}
        <div className="reveal relative overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/75 backdrop-blur shadow-[0_30px_70px_rgba(15,23,42,0.16)]">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${heroGradient}`}
          />
          <div className="relative p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/75 px-3 py-1 text-xs text-[var(--color-subtext)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-skyP-400)]" />
                  Case Study · {project.timeline ?? '—'}
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                  {project.title}
                </h1>

                <p className="mt-3 text-base sm:text-base md:text-lg text-[var(--color-subtext)] max-w-[72ch] leading-relaxed">
                  {project.overview ?? project.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.tech ?? []).map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                  {(project.links ?? []).slice(0, 2).map((l) => (
                    <Button
                      className="w-full sm:w-auto"
                      key={l.url}
                      href={l.url}
                    >
                      {l.label}
                    </Button>
                  ))}
                  <Button
                    className="w-full sm:w-auto"
                    variant="outline"
                    href="#next"
                  >
                    Next Improvements
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3 w-full lg:w-[280px]">
                <Stat label="Role" value={project.role ?? '—'} />
                <Stat
                  label="Focus"
                  value={project.metrics?.[1]?.value ?? '—'}
                />
                <Stat
                  label="Scope"
                  value={project.metrics?.[0]?.value ?? '—'}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            <Block id="problem" title="Problem">
              <BulletList items={project.problem} />
            </Block>

            <Block id="solution" title="Solution">
              <BulletList items={project.solution} />
            </Block>

            <Block id="contributions" title="My Contributions">
              <BulletList items={project.contributions} />
            </Block>

            <Block id="architecture" title="Architecture">
              <ul className="space-y-2 text-[var(--color-subtext)] leading-relaxed">
                {(project.architecture ?? []).map((x, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-skyP-400)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="screenshots" title="Screenshots">
              <ScreenshotGrid
                screenshots={project.screenshots}
                onOpen={openAt}
              />
              <p className="mt-4 text-sm text-[var(--color-subtext)]">
                Put images in{' '}
                <span className="font-medium text-[var(--color-text)]">
                  /public/images
                </span>{' '}
                and update paths in{' '}
                <span className="font-medium text-[var(--color-text)]">
                  projects.js
                </span>
                .
              </p>
            </Block>

            <Block id="next" title="Next Improvements">
              <BulletList items={project.next} />
            </Block>
          </div>
          {/* Sidebar */}
          <aside className="hidden lg:block space-y-6">
            {' '}
            <div className="sticky top-24 space-y-6">
              <div className="reveal rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/85 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">On this page</h3>
                  <span className="text-xs text-[var(--color-subtext)]">
                    TOC
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  {sectionIds.map((id) => {
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`
                          rounded-xl px-3 py-2 text-[15px] transition border
                          ${
                            isActive
                              ? 'border-[var(--color-skyP-200)] bg-[var(--color-skyP-50)] text-[var(--color-text)]'
                              : 'border-transparent text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-white'
                          }
                        `}
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="reveal rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/85 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
                <h3 className="font-semibold text-lg tracking-tight">
                  Interview talking points
                </h3>
                <ul className="mt-3 space-y-2 text-[var(--color-subtext)] text-[15px] leading-relaxed">
                  <li>• What trade-offs you made in UI architecture</li>
                  <li>• How you handled loading/empty/error states</li>
                  <li>• The hardest responsive issue you solved</li>
                  <li>• One improvement you’d ship next</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <Lightbox
        open={lbOpen}
        title={currentShot.title}
        src={currentShot.src}
        onClose={close}
        onPrev={prev}
        onNext={next}
        canPrev={canPrev}
        canNext={canNext}
      />
    </section>
  );
}
