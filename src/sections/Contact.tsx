import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Globe, Mail, Download, Send, BookOpen } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/ui/icons";
import { profile } from "../data/profile";
import { Reveal } from "../components/ui/Reveal";
import { MagneticButton } from "../components/ui/MagneticButton";

const SECTION_NUM = "07";

const PROJECT_TYPES = [
  "Research collaboration",
  "Full-stack engineering",
  "Generative-AI build",
  "Mentoring / talk",
  "Just to say hi",
];

export function Contact() {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid-fine bg-[length:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent" />

      <div className="relative px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · Contact</span>
        <h2 className="display-italic text-bone leading-[1.0] text-[clamp(56px,11vw,184px)] tracking-crush">
          Let's build
          <span className="display text-plasma not-italic"> something rare.</span>
        </h2>
      </div>

      <div className="relative px-5 md:px-10 pb-14 md:pb-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Channels */}
          <Reveal className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <p className="text-bone/80 leading-relaxed text-lg max-w-md">
              I'm looking for full-time research / engineering roles starting Oct 2026
              (OPT + STEM OPT) and select side collaborations. Email is the fastest path —
              I usually reply within a day.
            </p>
            <div className="flex flex-col gap-3">
              <ContactLine
                label="email"
                href={`mailto:${profile.email}`}
                icon={<Mail size={14} />}
                value={profile.email}
              />
              <ContactLine
                label="github"
                href={profile.socials.github}
                icon={<Github size={14} />}
                value="github.com/phanidhar"
              />
              <ContactLine
                label="linkedin"
                href={profile.socials.linkedin}
                icon={<Linkedin size={14} />}
                value="linkedin.com/in/phanidhar"
              />
              <ContactLine
                label="website"
                href={profile.socials.website}
                icon={<Globe size={14} />}
                value="phanidhar.dev"
              />
              <ContactLine
                label="scholar"
                href={profile.socials.scholar}
                icon={<BookOpen size={14} />}
                value="Google Scholar publications"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <MagneticButton
                href={profile.cv}
                download
                className="btn-solid"
                cursor="link"
                cursorLabel="Download"
              >
                <Download size={14} /> Download CV
              </MagneticButton>
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="btn-outline"
                cursor="link"
                cursorLabel="Compose"
              >
                <Send size={14} /> Send a note
              </MagneticButton>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="col-span-12 lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="border border-line bg-ink-50/40 backdrop-blur p-6 md:p-10 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between mono-mini text-bone/55">
                <span><span className="text-acid">●</span> CHANNEL · /msg.compose</span>
                <span>ENC · X25519 · TLS</span>
              </div>

              {/* Project type pills */}
              <div className="flex flex-col gap-2">
                <label className="mono-mini text-bone/55">/ kind of project</label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setType(p)}
                      className={`mono-mini px-3 py-2 border transition ${
                        type === p
                          ? "border-plasma text-ink bg-plasma"
                          : "border-line text-bone/65 hover:border-bone/50 hover:text-bone"
                      }`}
                      data-cursor="link"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <Field label="your name" name="name" required colSpan="md:col-span-6" />
                <Field label="email" name="email" type="email" required colSpan="md:col-span-6" />
                <Field label="company / lab" name="org" colSpan="md:col-span-6" />
                <Field label="budget / scope" name="budget" colSpan="md:col-span-6" placeholder="e.g. 4-week scoping" />
                <div className="col-span-12">
                  <label className="mono-mini text-bone/55">/ message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What are we building? What's the constraint?"
                    className="mt-2 w-full bg-transparent border-b border-line pb-3 pt-2 text-bone placeholder:text-bone/35 focus:border-plasma focus:outline-none transition resize-none"
                    data-cursor="text"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="mono-mini text-bone/55">
                  By submitting you accept I'll reply if our needs match.
                </span>
                <button
                  type="submit"
                  className="btn-solid"
                  disabled={submitted}
                  data-cursor="link"
                  data-cursor-label="Send"
                >
                  {submitted ? "Sent ✓" : (
                    <>
                      <Send size={14} /> Transmit
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-acid p-4 mono text-sm text-acid"
                >
                  → Message buffered locally. (Wire this form to your backend / form service when
                  you're ready.)
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  href,
  icon,
  value,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between border-t border-line py-3"
      data-cursor="link"
    >
      <div className="flex items-center gap-3">
        <span className="text-plasma">{icon}</span>
        <span className="mono-mini text-bone/55">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-bone group-hover:text-plasma transition-colors text-base">
          {value}
        </span>
        <ArrowUpRight
          size={14}
          className="text-bone/45 group-hover:text-plasma group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
        />
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  colSpan = "col-span-12",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  colSpan?: string;
  required?: boolean;
}) {
  return (
    <div className={`col-span-12 ${colSpan} flex flex-col`}>
      <label className="mono-mini text-bone/55" htmlFor={name}>
        / {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 bg-transparent border-b border-line pb-2 pt-2 text-bone placeholder:text-bone/35 focus:border-plasma focus:outline-none transition"
        data-cursor="text"
      />
    </div>
  );
}
