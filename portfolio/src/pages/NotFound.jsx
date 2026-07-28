import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="glass rounded-2xl px-6 py-8 font-mono text-left text-sm shadow-glass">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <p className="text-red-400">Error: route not found</p>
          <p className="text-ink-muted mt-2">{'>'} GET {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}</p>
          <p className="text-ink-faint mt-1">{'>'} 404 — this page doesn't exist in the tree</p>
        </div>

        <h1 className="font-display text-5xl font-bold mt-8 text-gradient">404</h1>
        <p className="text-ink-muted mt-2">The page you're looking for isn't part of this build.</p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-azure text-void font-mono text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
        >
          <FiArrowLeft size={15} /> Back home
        </Link>
      </motion.div>
    </div>
  );
}
