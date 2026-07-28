import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg glass rounded-2xl shadow-glass max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ink"
            >
              <FiX size={18} />
            </button>

            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-emerald-glow mb-2">{project.category} · {project.date}</p>
              <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
              <p className="mt-3 text-ink-muted text-sm leading-relaxed">{project.description}</p>

              <div className="mt-5">
                <p className="font-mono text-xs text-ink-faint mb-2 font-mono-caption">FEATURES</p>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-glow shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="font-mono text-xs text-ink-faint mb-2 font-mono-caption">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-ink-muted border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-mono text-ink hover:border-emerald-glow/50">
                  <FiGithub size={15} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-azure text-void text-sm font-mono font-medium shadow-glow">
                  <FiExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
