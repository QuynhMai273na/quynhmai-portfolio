import Container from '../components/Container';
import Button from '../components/Button';
import { Mail, Github, Linkedin, MessageSquareText } from 'lucide-react';
import { useState } from 'react';

function ContactCard({ icon, title, desc, action }) {
  const Icon = icon;

  return (
    <div className="h-full flex flex-col rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/80 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
      {/* Top */}
      <div className="flex items-start gap-3 flex-1">
        <div className="h-11 w-11 shrink-0 rounded-2xl bg-[var(--color-skyP-100)] border border-[var(--color-skyP-200)] flex items-center justify-center">
          <Icon size={20} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-semibold text-base sm:text-lg tracking-tight">
            {title}
          </div>

          <div className="mt-1 text-[15px] text-[var(--color-subtext)] leading-relaxed">
            {desc}
          </div>
        </div>
      </div>

      {/* Action pinned bottom */}
      <div className="mt-5">
        <div className="[&>*]:w-full md:[&>*]:w-auto break-words">{action}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const onSubmit = async (e) => {
    if (data.get('_gotcha')) {
      setStatus('error');
      return;
    }

    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xdanjkqo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  const resetIfNeeded = () => status !== 'idle' && setStatus('idle');

  return (
    <section className="py-10 sm:py-12 md:py-20">
      <Container>
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/75 backdrop-blur shadow-[0_30px_70px_rgba(15,23,42,0.16)] p-6 md:p-10">
          <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_55%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs text-[var(--color-subtext)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-skyP-400)]" />
              Contact
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.06]">
              {' '}
              Let’s build something together
            </h1>
            <p className="mt-3 text-[15px] sm:text-base md:text-lg text-[var(--color-subtext)] max-w-[72ch] leading-relaxed">
              Open to frontend or full-stack opportunities. If you like my work,
              feel free to reach out — I reply quickly.
            </p>
          </div>
        </div>

        {/* Contact methods */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {' '}
          <ContactCard
            icon={Mail}
            title="Email"
            desc="Best for opportunities, internships, and collaboration."
            action={
              <Button href="mailto:nguyenquynhmai273na@gmail.com">
                nguyenquynhmai273na@gmail.com
              </Button>
            }
          />
          <ContactCard
            icon={Linkedin}
            title="LinkedIn"
            desc="Connect and view my professional profile."
            action={
              <Button
                variant="outline"
                href="https://www.linkedin.com/in/quynhmai273na/"
              >
                Visit LinkedIn
              </Button>
            }
          />
          <ContactCard
            icon={Github}
            title="GitHub"
            desc="Browse code, commits, and project repositories."
            action={
              <Button
                variant="outline"
                href="https://github.com/QuynhMai273na/"
              >
                Visit GitHub
              </Button>
            }
          />
        </div>

        {/* Form */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/80 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <MessageSquareText size={18} />
              Quick message
            </div>
            <p className="mt-2 text-[15px] text-[var(--color-subtext)] leading-relaxed">
              This form sends messages directly to my email (Formspree). I
              usually reply within 24–48 hours.
            </p>

            <div className="mt-5 space-y-2 text-[15px] text-[var(--color-subtext)]">
              <div>• Preferred role: Frontend / Full-stack</div>
              <div>• Location: Ho Chi Minh City</div>
              <div>• Availability: Flexible</div>
              <div>• Start date: ASAP / Jan 2026</div>
            </div>
          </div>
          <div className="lg:col-span-3 rounded-[var(--radius-xl2)] border border-[var(--color-border)] bg-white/80 backdrop-blur shadow-[0_18px_44px_rgba(15,23,42,0.10)] p-6">
            <form className="grid gap-3" onSubmit={onSubmit}>
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  required
                  className="h-11 rounded-2xl border border-[var(--color-border)] bg-white px-3 outline-none focus:ring-2 focus:ring-[var(--color-skyP-200)]"
                  placeholder="Name"
                  onChange={resetIfNeeded}
                />

                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 rounded-2xl border border-[var(--color-border)] bg-white px-3 outline-none focus:ring-2 focus:ring-[var(--color-skyP-200)]"
                  placeholder="Email"
                  onChange={resetIfNeeded}
                />
              </div>

              <input
                name="subject"
                required
                className="h-11 rounded-2xl border border-[var(--color-border)] bg-white px-3 outline-none focus:ring-2 focus:ring-[var(--color-skyP-200)]"
                placeholder="Subject (e.g., Frontend role)"
                onChange={resetIfNeeded}
              />

              <textarea
                name="message"
                required
                className="min-h-[120px] sm:min-h-[140px] rounded-2xl border border-[var(--color-border)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-skyP-200)]"
                placeholder="Message"
                onChange={resetIfNeeded}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Button
                  className="w-full sm:w-auto"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'sent'
                    ? 'Sent ✅'
                    : 'Send'}
                </Button>

                {status === 'error' && (
                  <div className="text-xs text-red-600">
                    Something went wrong. Please email me directly.
                  </div>
                )}

                <div className="text-xs text-[var(--color-subtext)]">
                  (Sends via Formspree.)
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
