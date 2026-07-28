import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'booting portfolio.exe',
  'connecting to MongoDB Atlas... ok',
  'mounting Express routes... ok',
  'hydrating React tree... ok',
  'npm run dev — ready',
];

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      onDone?.();
      return;
    }
    const interval = setInterval(() => {
      setLineIndex((i) => {
        if (i >= BOOT_LINES.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onDone?.();
          }, 420);
          return i;
        }
        return i + 1;
      });
    }, 260);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45 }}
        >
          <div className="w-[min(90vw,420px)] rounded-xl border border-white/10 bg-surface/80 font-mono text-sm shadow-glass overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-ink-faint text-xs">zsh</span>
            </div>
            <div className="p-4 space-y-1.5 min-h-[132px]">
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <div key={line} className="text-ink-muted">
                  <span className="text-emerald-glow">➜</span>{' '}
                  <span className={i === lineIndex ? 'text-ink' : ''}>{line}</span>
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-emerald-glow align-middle animate-blink" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
