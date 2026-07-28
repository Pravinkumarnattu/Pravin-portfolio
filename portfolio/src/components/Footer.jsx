import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

const LINKS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="container-px max-w-6xl mx-auto py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-bold text-lg text-ink">
            <span className="text-emerald-glow font-mono">&lt;</span>Pravin<span className="text-gradient">.dev</span>
            <span className="text-emerald-glow font-mono">/&gt;</span>
          </p>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-xs">
            Full Stack MERN Developer building clean, production-ready web apps.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-ink-faint font-mono-caption mb-3">QUICK LINKS</p>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l}`} className="text-sm text-ink-muted hover:text-emerald-glow transition-colors capitalize">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-ink-faint font-mono-caption mb-3">ELSEWHERE</p>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-emerald-glow transition-colors">
              <FiGithub size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-emerald-glow transition-colors">
              <FiLinkedin size={15} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-emerald-glow transition-colors">
              <FiMail size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <p className="text-center text-xs text-ink-faint font-mono">
          © {new Date().getFullYear()} Pravin Kumar M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
