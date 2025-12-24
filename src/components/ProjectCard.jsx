import TechChip from './TechChip';
import Button from './Button';

const accentMap = {
  sky: {
    from: 'rgba(56,189,248,0.35)',
    mid: 'rgba(186,230,253,0.25)',
    to: 'rgba(240,249,255,0.9)',
  },
  cyan: {
    from: 'rgba(34,211,238,0.30)',
    mid: 'rgba(165,243,252,0.22)',
    to: 'rgba(240,253,255,0.9)',
  },
  blue: {
    from: 'rgba(59,130,246,0.25)',
    mid: 'rgba(191,219,254,0.22)',
    to: 'rgba(239,246,255,0.9)',
  },
};

function Thumb({ accent = 'sky' }) {
  const a = accentMap[accent] ?? accentMap.sky;

  return (
    <div className="relative h-44 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(700px 220px at 20% 10%, ${a.from}, transparent 60%),
                       radial-gradient(600px 220px at 85% 30%, ${a.mid}, transparent 62%),
                       linear-gradient(135deg, ${a.to}, white)`,
        }}
      />
      <div className="absolute -top-20 -right-20 h-60 w-60 rotate-12 rounded-full bg-white/50 blur-2xl opacity-60" />

      <div className="absolute inset-0 p-5">
        <div className="h-3 w-24 rounded-full bg-white/70" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-xl bg-white/70" />
          <div className="h-16 rounded-xl bg-white/55" />
          <div className="h-16 rounded-xl bg-white/40" />
        </div>
        <div className="mt-3 h-10 rounded-xl bg-white/55" />
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  tagline,
  slug,
  tech,
  featured,
  accent,
}) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[var(--radius-xl2)]
        bg-white
        border border-[var(--color-border)]
        shadow-[0_20px_40px_rgba(15,23,42,0.12)]
        transition
        hover:-translate-y-1
        hover:shadow-[0_30px_60px_rgba(15,23,42,0.18)]
        hover:border-[var(--color-skyP-200)]
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(56,189,248,0.20),transparent_55%)]" />
      </div>

      <Thumb accent={accent} />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-[var(--color-subtext)] text-[15px] leading-relaxed">
              {tagline}
            </p>
          </div>

          {featured && (
            <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[var(--color-skyP-100)] px-3 py-1 text-xs font-semibold text-[var(--color-skyP-500)] border border-[var(--color-skyP-200)]">
              ★ Featured
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.slice(0, 6).map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Button className="w-full sm:w-auto" to={`/projects/${slug}`}>
            Case Study
          </Button>
          <Button
            className="w-full sm:w-auto"
            variant="outline"
            to={`/projects/${slug}`}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
