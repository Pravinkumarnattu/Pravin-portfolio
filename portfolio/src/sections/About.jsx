import { motion } from 'framer-motion';
import { FiMapPin, FiTerminal } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { profile, stats, education } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ stat, i }) {
  const { ref, value } = useCountUp(stat.value, 1400);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 text-center"
    >
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
        {value}
        {stat.suffix}
      </div>
      <div className="mt-1.5 text-xs sm:text-sm text-ink-muted font-mono">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading path="about/" title="A bit about how I got here" />

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="text-ink-muted text-base sm:text-lg leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 flex items-center gap-2 text-ink-muted font-mono text-sm"
            >
              <FiMapPin className="text-emerald-glow" size={16} />
              {profile.location}
            </motion.div>

            {/* Education timeline */}
            <div className="mt-10 relative pl-6 border-l border-white/10 space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-emerald-azure shadow-glow" />
                  <p className="font-mono text-xs text-emerald-glow">{edu.period}</p>
                  <h3 className="font-display font-semibold text-ink mt-1">{edu.degree}</h3>
                  <p className="text-ink-muted text-sm mt-1">
                    {edu.school} — {edu.location}
                  </p>
                  <p className="text-ink-faint text-sm mt-0.5">{edu.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Fun facts */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 glass rounded-2xl p-6"
            >
              <p className="flex items-center gap-2 font-mono text-xs text-emerald-glow font-mono-caption mb-3">
                <FiTerminal size={14} /> quick facts
              </p>
              <ul className="space-y-2.5">
                {profile.funFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2.5 text-ink-muted text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-glow shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
