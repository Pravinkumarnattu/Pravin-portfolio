import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiZap } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const ICONS = { internship: FiBriefcase, hackathon: FiZap, freelance: FiCode };

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px max-w-4xl mx-auto">
        <SectionHeading path="experience/" title="Where I've put in the work" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-glow via-azure to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const Icon = ICONS[item.type] ?? FiBriefcase;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-8 sm:-left-10 top-0 w-7 h-7 rounded-full glass flex items-center justify-center text-emerald-glow">
                    <Icon size={13} />
                  </span>

                  <div className="glass rounded-2xl p-6 hover:border-emerald-glow/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-semibold text-ink text-base sm:text-lg">{item.role}</h3>
                      <span className="font-mono text-xs text-emerald-glow whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="text-ink-muted text-sm">{item.org} — {item.location}</p>
                    <ul className="mt-3 space-y-2">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-azure shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
