import { motion } from 'framer-motion';
import { FiAward, FiCode, FiZap, FiExternalLink } from 'react-icons/fi';
import { achievements, codingProfiles } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const ICONS = { trophy: FiAward, code: FiCode, bolt: FiZap, award: FiAward };

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading path="achievements/" title="Milestones along the way" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon] ?? FiAward;
            const Wrapper = item.link ? 'a' : 'div';
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Wrapper
                  {...(item.link ? { href: item.link, target: '_blank', rel: 'noreferrer' } : {})}
                  className="block h-full glass rounded-2xl p-6 hover:-translate-y-1.5 hover:border-emerald-glow/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-azure/15 flex items-center justify-center text-emerald-glow mb-4">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display font-semibold text-ink text-sm sm:text-base">{item.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">{item.subtitle}</p>
                  {item.link && (
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-glow">
                      View <FiExternalLink size={12} />
                    </span>
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Coding profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 glass rounded-full pl-4 pr-5 py-2.5 hover:border-emerald-glow/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-glow" />
              <span className="font-mono text-sm text-ink">{p.name}</span>
              <span className="text-ink-faint text-sm">— {p.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
