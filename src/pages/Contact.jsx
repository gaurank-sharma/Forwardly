import { useState } from "react";
import { Mail, MapPin, Clock, Send, Check } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";
import Reveal from "../components/ui/Reveal";

const services = [
  "Web Development",
  "Content Writing",
  "3D & Product Viz",
  "Logo & Branding",
  "Video & Motion",
  "Marketing & Growth",
  "App Development",
];

const info = [
  { icon: Mail, label: "Email", value: "hello@forwardly.in" },
  { icon: MapPin, label: "Studio", value: "Remote-first · India & worldwide" },
  { icon: Clock, label: "Response", value: "Within 2 hours" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: services[0], message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `New project enquiry — ${form.service}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`;
    window.location.href = `mailto:hello@forwardly.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        crumb="Contact"
        title={<>Start your <span className="text-gradient">project.</span></>}
        intro="Tell us about your vision and we'll come back with a clear plan, timeline and quote — usually within a couple of hours."
      />

      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* info side */}
          <Reveal className="flex flex-col gap-5" stagger={0.1}>
            <div data-reveal>
              <h2 className="font-display text-2xl font-bold text-ink">
                Talk to a human, fast.
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                No bots, no endless forms. A senior member of the team reads
                every enquiry and replies personally.
              </p>
            </div>
            {info.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.label} data-reveal className="flex items-center gap-4 rounded-2xl glass p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-[#0a0a0b]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted">{it.label}</div>
                    <div className="font-semibold text-ink">{it.value}</div>
                  </div>
                </div>
              );
            })}
          </Reveal>

          {/* form side */}
          <Reveal>
            <GlassCard data-reveal tilt={false} className="p-7 sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-[#0a0a0b] glow-brand">
                    <Check size={30} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    Your email is ready to send.
                  </h3>
                  <p className="mt-2 max-w-sm text-muted">
                    We opened your mail app with the details pre-filled. Prefer to
                    write directly? Reach us at hello@forwardly.in.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name">
                      <input
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jane Doe"
                        className="fwd-input"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jane@company.com"
                        className="fwd-input"
                      />
                    </Field>
                  </div>

                  <Field label="What do you need?">
                    <select value={form.service} onChange={set("service")} className="fwd-input">
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Tell us about your project">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Goals, timeline, budget range…"
                      className="fwd-input resize-none"
                    />
                  </Field>

                  <MagneticButton type="submit" className="mt-1 w-full">
                    Send enquiry <Send size={16} />
                  </MagneticButton>
                  <p className="text-center text-xs text-muted">
                    By sending you agree to our friendly, no-spam policy.
                  </p>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
