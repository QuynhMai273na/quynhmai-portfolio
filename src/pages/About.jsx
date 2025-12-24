import Container from '../components/Container';
import Button from '../components/Button';
import { GraduationCap, Sparkles, Layers, ArrowRight } from 'lucide-react';

function InfoPill({ icon, title, desc }) {
  const Icon = icon;
  return (
    <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white/80 backdrop-blur p-5 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-[var(--color-skyP-100)] border border-[var(--color-skyP-200)] flex items-center justify-center">
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-base sm:text-lg tracking-tight">
            {title}
          </div>
          <div className="mt-1 text-[15px] text-[var(--color-subtext)] leading-relaxed">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-10 sm:py-12 md:py-20">
      <Container>
        {/* Hero header */}
        <div className="relative overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/75 backdrop-blur shadow-[0_30px_70px_rgba(15,23,42,0.16)] p-5 sm:p-6 md:p-10">
          <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_55%)]" />

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs text-[var(--color-subtext)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-skyP-400)]" />
                About me
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.06]">
                Nguyen Thi Quynh Mai
              </h1>

              <p className="mt-3 text-[15px] sm:text-base md:text-lg text-[var(--color-subtext)] leading-relaxed max-w-[70ch]">
                Final-year Information Systems student at UIT – VNU HCM. I focus
                on building clean, responsive UI and integrating it with
                real-world backend systems.
              </p>

              {/* Buttons: mobile full width, desktop inline */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto" to="/projects">
                  <span className="inline-flex items-center gap-2">
                    View Case Studies <ArrowRight size={16} />
                  </span>
                </Button>
                <Button
                  className="w-full sm:w-auto"
                  variant="outline"
                  to="/contact"
                >
                  Contact
                </Button>
              </div>
            </div>

            {/* Right “profile” card */}
            <div className="rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/80 backdrop-blur p-6 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
              <div className="h-14 w-14 rounded-2xl bg-[var(--color-skyP-100)] border border-[var(--color-skyP-200)]" />
              <div className="mt-4 font-semibold text-lg tracking-tight">
                What I care about
              </div>
              <ul className="mt-3 space-y-2 text-[15px] text-[var(--color-subtext)]">
                {[
                  'UI polish & consistent design system',
                  'Practical architecture & maintainable components',
                  'Real API flows, edge cases, and UX states',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-skyP-400)] shrink-0" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <InfoPill
            icon={GraduationCap}
            title="Background"
            desc="Information Systems · UIT – VNU HCM. Comfortable with both FE and backend integration."
          />
          <InfoPill
            icon={Layers}
            title="Strength"
            desc="Component-driven UI, responsive layouts, and clean code organization."
          />
          <InfoPill
            icon={Sparkles}
            title="Style"
            desc="I like calm, modern UI with strong hierarchy and subtle motion."
          />
        </div>

        {/* Mini timeline */}
        <div className="mt-8 rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/80 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
          <div className="font-semibold text-lg tracking-tight">How I work</div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ['Plan', 'Clarify user flows + data contracts'],
              ['Build', 'Reusable components + clean state'],
              ['Polish', 'Responsive, a11y basics, edge cases'],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-5 h-full"
              >
                <div className="font-semibold tracking-tight">{t}</div>
                <div className="mt-1 text-[15px] text-[var(--color-subtext)] leading-relaxed">
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
