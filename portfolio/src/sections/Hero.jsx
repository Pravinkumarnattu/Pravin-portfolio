import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";
import { profile } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";
import { useMagnetic } from "../hooks/useMagnetic";

function useTypewriter(
  words,
  { typingSpeed = 65, deletingSpeed = 35, pause = 1400 } = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

function MagneticCTA({ href, onClick, variant, children, icon: Icon }) {
  const magnetic = useMagnetic(12);
  const isPrimary = variant === "primary";
  const Comp = href ? "a" : "button";

  return (
    <Comp
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      href={href}
      onClick={onClick}
      download={variant === "download" ? true : undefined}
      className={`group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-mono text-[13px] sm:text-sm font-medium transition-all duration-300 ${
        isPrimary
          ? "bg-emerald-azure text-void shadow-glow hover:shadow-glow-blue hover:-translate-y-0.5"
          : "glass text-ink hover:border-emerald-glow/50 hover:-translate-y-0.5"
      }`}
    >
      {children}
      {Icon && (
        <Icon
          className="transition-transform group-hover:translate-x-0.5"
          size={15}
        />
      )}
    </Comp>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const codeLines = [
    {
      n: 1,
      c: (
        <>
          <span className="text-[#c586c0]">const</span>{" "}
          <span className="text-[#9cdcfe]">developer</span>{" "}
          <span className="text-ink-muted">=</span>{" "}
          <span className="text-ink-muted">{"{"}</span>
        </>
      ),
    },
    {
      n: 2,
      c: (
        <>
          &nbsp;&nbsp;<span className="text-[#9cdcfe]">name</span>
          <span className="text-ink-muted">:</span>{" "}
          <span className="text-[#ce9178]">'Pravin Kumar M'</span>
          <span className="text-ink-muted">,</span>
        </>
      ),
    },
    {
      n: 3,
      c: (
        <>
          &nbsp;&nbsp;<span className="text-[#9cdcfe]">stack</span>
          <span className="text-ink-muted">:</span>{" "}
          <span className="text-[#ce9178]">'MERN'</span>
          <span className="text-ink-muted">,</span>
        </>
      ),
    },
    {
      n: 4,
      c: (
        <>
          &nbsp;&nbsp;<span className="text-[#9cdcfe]">focus</span>
          <span className="text-ink-muted">:</span>{" "}
          <span className="text-[#ce9178]">'{typed}'</span>
          <span className="inline-block w-[2px] h-4 bg-emerald-glow ml-0.5 align-middle animate-blink" />
        </>
      ),
    },
    {
      n: 5,
      c: (
        <>
          <span className="text-ink-muted">{"}"}</span>
          <span className="text-ink-muted">;</span>
        </>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center w-full">
        {/* Left: intro */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-emerald-glow text-sm mb-5 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
            Available for full-time SDE roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
            <br />I build with the{" "}
            <span className="relative inline-block">
              MERN
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,-2 100,5"
                  stroke="url(#heroUnderline)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="heroUnderline" x1="0" x2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            stack.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-ink-muted text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <MagneticCTA
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </MagneticCTA>
            <MagneticCTA
              href="/resume.pdf"
              variant="download"
              icon={FiDownload}
            >
              Download Resume
            </MagneticCTA>
            <MagneticCTA
              variant="ghost"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </MagneticCTA>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: FiGithub, href: profile.github, label: "GitHub" },
              { icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-ink-muted hover:text-emerald-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: code editor signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-emerald-azure opacity-20 blur-3xl rounded-full" />
          <div className="relative glass rounded-2xl shadow-glass overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">
                developer.js
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] sm:text-sm leading-7">
              {codeLines.map((line) => (
                <div key={line.n} className="flex gap-4">
                  <span className="text-ink-faint select-none w-4 text-right">
                    {line.n}
                  </span>
                  <span>{line.c}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -bottom-6 -left-4 w-20 h-20 sm:-bottom-8 sm:-left-8 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-void shadow-glass block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={profileImg}
              alt="Pravin Kumar M"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  );
}
