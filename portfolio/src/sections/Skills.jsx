import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, marqueeTech } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const CATEGORIES = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="skills" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading path="skills/" title="Tools I reach for" description="Grouped the way I'd organize a real codebase — by concern, not alphabet." />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs sm:text-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? 'bg-emerald-azure text-void border-transparent shadow-glow'
                  : 'border-white/10 text-ink-muted hover:text-ink hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills[active].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.4)' }}
              className="glass rounded-xl p-5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-ink text-sm sm:text-base">{skill.name}</span>
                <span className="font-mono text-xs text-emerald-glow">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-emerald-azure"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite marquee */}
        <div className="mt-16 relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-10 w-max animate-marquee">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span key={`${tech}-${i}`} className="font-mono text-ink-faint text-sm sm:text-base whitespace-nowrap">
                {tech} <span className="text-emerald-glow/50 ml-10">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
