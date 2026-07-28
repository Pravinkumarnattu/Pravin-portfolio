import { motion } from 'framer-motion';

/**
 * Every section is framed like a file being opened in an editor:
 * a small "~/path" eyebrow followed by a bold title. This is the
 * site's structural signature — it ties the developer subject matter
 * directly into the way content is labeled.
 */
export default function SectionHeading({ path, title, description, align = 'left' }) {
  return (
    <div className={`mb-14 sm:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-2 font-mono text-xs sm:text-sm text-emerald-glow font-mono-caption mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-ink-faint">~</span>
        <span>{path}</span>
        <span className="w-1.5 h-3.5 bg-emerald-glow/70 animate-blink" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-ink"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
