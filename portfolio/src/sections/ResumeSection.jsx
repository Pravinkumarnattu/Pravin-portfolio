import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload, FiEye, FiCheckCircle } from "react-icons/fi";
import { resumeHighlights } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import { useMagnetic } from "../hooks/useMagnetic";

export default function ResumeSection() {
  const dl = useMagnetic(10);
  const view = useMagnetic(10);

  return (
    <section id="resume" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          path="resume/pravin_kumar.pdf"
          title="One page. ATS-ready. Always current."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-ink-faint mb-4 font-mono-caption">
              ATS-FRIENDLY HIGHLIGHTS
            </p>
            <ul className="space-y-3">
              {resumeHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-ink-muted"
                >
                  <FiCheckCircle
                    className="text-emerald-glow mt-0.5 shrink-0"
                    size={16}
                  />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                ref={dl.ref}
                onMouseMove={dl.onMouseMove}
                onMouseLeave={dl.onMouseLeave}
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-azure text-void font-mono text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
              >
                <FiDownload size={15} /> Download PDF
              </a>
              <Link
                ref={view.ref}
                onMouseMove={view.onMouseMove}
                onMouseLeave={view.onMouseLeave}
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass font-mono text-sm text-ink hover:border-emerald-glow/50 hover:-translate-y-0.5 transition-transform"
              >
                <FiEye size={15} /> View Full Resume
              </Link>
            </div>
          </motion.div>

          {/* Preview frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-azure opacity-10 blur-3xl rounded-full" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-glass aspect-[8.5/8]">
              {/* <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                title="Resume preview"
                className="w-full h-full"
                loading="lazy"
              /> */}
              <iframe
                src="https://docs.google.com/viewer?url=https://pravinkumar-dev.vercel.app/resume.pdf&embedded=true"
                title="Resume preview"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
