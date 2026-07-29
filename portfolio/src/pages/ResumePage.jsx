import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { resumeHighlights, profile } from "../data/portfolioData";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container-px max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-ink-muted hover:text-emerald-glow transition-colors mb-8"
        >
          <FiArrowLeft size={15} /> Back to portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="font-mono text-xs text-emerald-glow mb-2">
              resume/pravin_kumar.pdf
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              {profile.name}
            </h1>
            <p className="text-ink-muted mt-2">
              Full Stack MERN Developer · {profile.location}
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-azure text-void font-mono text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            <FiDownload size={16} /> Download PDF
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-2xl overflow-hidden shadow-glass"
            style={{ height: "80vh" }}
          >
            {/* <iframe
              src="/resume.pdf"
              title="Pravin Kumar M — Resume"
              className="w-full h-full"
            /> */}
            <iframe
              src="https://docs.google.com/viewer?url=https://pravinkumar-dev.vercel.app/resume.pdf&embedded=true"
              title="Pravin Kumar M — Resume"
              className="w-full h-full"
            />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="glass rounded-2xl p-6 h-fit"
          >
            <p className="font-mono text-xs text-ink-faint mb-4 font-mono-caption">
              WHY IT PASSES ATS
            </p>
            <ul className="space-y-3">
              {resumeHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm text-ink-muted"
                >
                  <FiCheckCircle
                    className="text-emerald-glow mt-0.5 shrink-0"
                    size={15}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
