import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TechChip from '../components/TechChip';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Layout, Blocks, Zap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';

function StrengthCard({ icon, title, desc, bullets }) {
  const Icon =
    icon === 'layout'
      ? Layout
      : icon === 'blocks'
      ? Blocks
      : icon === 'zap'
      ? Zap
      : ShieldCheck;

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[var(--radius-xl2)]
        border border-[var(--color-border)]
        bg-white/80 backdrop-blur
        shadow-[0_18px_44px_rgba(15,23,42,0.10)]
        p-5
        transition
        hover:-translate-y-1
        hover:shadow-[0_26px_60px_rgba(15,23,42,0.16)]
        hover:border-[var(--color-skyP-200)]
      "
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-skyP-400)] to-[var(--color-skyP-200)] opacity-70" />

      <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_55%)]" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="h-11 w-11 rounded-2xl bg-[var(--color-skyP-100)] border border-[var(--color-skyP-200)] flex items-center justify-center">
          <Icon size={22} />
        </div>
        <div>
          <div className="font-semibold tracking-tight text-base sm:text-lg">
            {title}
          </div>
          <div className="mt-1 text-sm text-[var(--color-subtext)] leading-relaxed">
            {desc}
          </div>
        </div>
      </div>

      <div className="relative mt-4 space-y-1.5 sm:space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-skyP-400)]" />
            <span className="text-[15px] text-[var(--color-subtext)]">{b}</span>
          </div>
        ))}
      </div>

      {/* micro footer */}
      <div className="relative mt-5 text-sm text-[var(--color-subtext)]">
        Outcome:{' '}
        <span className="text-[var(--color-text)] font-medium">
          faster dev + cleaner UX
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [avatarOpen, setAvatarOpen] = useState(false);

  const featured = projects.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="py-12 md:py-20">
        <Container>
          <div
            className="
        grid gap-8 md:gap-10
        md:grid-cols-2 md:items-center
        relative rounded-[var(--radius-xl2)]
        border border-[var(--color-border)]
        bg-white/80 backdrop-blur
        shadow-[0_30px_70px_rgba(15,23,42,0.18)]
        p-5 sm:p-6 md:p-10
      "
          >
            {' '}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
                Frontend /{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-skyP-500)] to-[var(--color-skyP-300)]">
                  Full-stack
                </span>{' '}
                Developer
              </h1>

              <p className="mt-4 text-[15px] sm:text-base md:text-lg text-[var(--color-subtext)] leading-relaxed">
                I build clean, responsive user interfaces and real-world
                full-stack web applications.
              </p>
              <p className="mt-2 text-[15px] sm:text-base text-[var(--color-subtext)] leading-relaxed">
                Focused on UI quality, scalability, and practical system design.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] text-[var(--color-subtext)]">
                <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1">
                  Final-year IS student · UIT – VNU HCM
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1">
                  Open to Internship / Fresher · HCMC
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button className="w-full sm:w-auto" to="/projects">
                  View Projects
                </Button>
                <Button
                  className="w-full sm:w-auto"
                  variant="outline"
                  to="/contact"
                >
                  Contact Me
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'React',
                  'JavaScript',
                  'UI/UX',
                  'TypeScript',
                  'NestJS',
                  'Prisma',
                ].map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>
            </motion.div>
            {/* Right card */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[var(--color-skyP-100)] to-transparent blur-xl opacity-80" />
              <div className="relative rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] p-6">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setAvatarOpen(true)}
                    className="
    h-16 w-16 rounded-2xl overflow-hidden
    focus:outline-none
    focus:ring-2 focus:ring-[var(--color-skyP-300)]
    transition
    ease-in-out duration-150
    hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)] cursor-pointer transform hover:-translate-y-1

  "
                    aria-label="View profile photo"
                  >
                    <img
                      src="/avatar.jpg"
                      alt="Nguyen Thi Quynh Mai"
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <div>
                    <div className="font-semibold tracking-tight">
                      Nguyen Thi Quynh Mai
                    </div>
                    <div className="text-sm text-[var(--color-subtext)]">
                      Frontend / Full-stack Developer
                    </div>
                  </div>
                </div>

                <motion.div
                  className="mt-6 grid grid-cols-3 gap-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.12 },
                    },
                  }}
                >
                  {[
                    ['3+', 'Academic & personal projects'],
                    ['UI', 'Responsive + clean layout'],
                    ['API', 'REST API integration'],
                  ].map(([a, b]) => (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="rounded-xl border border-[var(--color-border)] bg-white/70 backdrop-blur p-3"
                      key={a}
                    >
                      <div className="text-lg font-semibold">{a}</div>
                      <div className="text-sm text-[var(--color-subtext)] mt-0.5">
                        {b}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="py-12 md:py-20 bg-white/70 backdrop-blur border-y border-[var(--color-border)]"
      >
        {/* <section className="py-12 md:py-20"> */}
        <Container>
          <SectionTitle
            title="Selected Projects"
            subtitle="A selection of projects showcasing my frontend and full-stack experience."
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                tagline={p.tagline}
                slug={p.slug}
                tech={p.tech}
              />
            ))}
          </div>
        </Container>
      </motion.section>

      {/* Strengths */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionTitle
              title="What I do best"
              subtitle="Capabilities that directly translate to shipping production-ready UI."
            />

            {/* mini proof */}
            <div className="rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/75 backdrop-blur px-5 py-4 shadow-[0_18px_44px_rgba(15,23,42,0.10)] w-full md:w-auto">
              <div className="text-sm text-[var(--color-subtext)]">
                Strength summary
              </div>
              <div className="mt-1 text-[15px] font-semibold">
                UI polish • Clean architecture • Fast learning{' '}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            <StrengthCard
              icon="layout"
              title="UI Engineering"
              desc="Responsive layouts with strong visual hierarchy and spacing."
              bullets={['Mobile-first patterns', 'Consistent components']}
            />
            <StrengthCard
              icon="blocks"
              title="Component Architecture"
              desc="Reusable React components with predictable behavior & styling."
              bullets={['Shared design tokens', 'Less duplication']}
            />
            <StrengthCard
              icon="zap"
              title="Data & State"
              desc="Smooth API integration with reliable UI states and edge cases."
              bullets={['Loading/empty/error UX', 'Pagination & filters']}
            />
            <StrengthCard
              icon="shield"
              title="Full-stack Integration"
              desc="Frontend that respects auth, roles, and real-world workflows."
              bullets={['RBAC-aware UI', 'Clean request flow']}
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-[15px] text-[var(--color-subtext)]">
              Want to see how I apply these in real projects?
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto" to="/projects">
                View Projects
              </Button>
              <Button
                className="w-full sm:w-auto"
                variant="outline"
                to="/contact"
              >
                Let’s talk
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <ImageLightbox
        open={avatarOpen}
        onClose={() => setAvatarOpen(false)}
        src="/avatar.jpg"
        title="Nguyen Thi Quynh Mai"
      />
    </div>
  );
}
