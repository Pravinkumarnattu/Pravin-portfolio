import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects, projectCategories } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';

function ProjectCard({ project, onOpen, i }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group glass rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 ease-out"
    >
      <div className="relative h-44 bg-gradient-to-br from-emerald-glow/15 via-azure/10 to-transparent flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img src={project.image} alt="project" className="text-emerald-glow/40 group-hover:scale-110 transition-transform duration-500" style={{height: "100%"}}/>
        {/* <FiFolder className="text-emerald-glow/40 group-hover:scale-110 transition-transform duration-500" size={56} /> */}
        {project.featured && (
          <span className="absolute top-3 right-3 font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-azure text-void font-medium">
            FEATURED
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="font-mono text-xs text-emerald-glow">{project.category} · {project.date}</p>
        <h3 className="font-display font-semibold text-lg text-ink mt-1.5">{project.title}</h3>
        <p className="mt-2.5 text-sm text-ink-muted leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-full bg-white/5 text-ink-faint border border-white/10">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 text-ink-faint">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => onOpen(project)}
            className="text-xs font-mono text-emerald-glow hover:underline underline-offset-4"
          >
            View details
          </button>
          <span className="text-ink-faint">·</span>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-ink">
            <FiGithub size={15} />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="text-ink-muted hover:text-ink">
            <FiExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading path="projects/" title="Things I've shipped" description="A few MERN builds that cover auth, role-based access, and real API design." />

        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs sm:text-sm">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-emerald-azure text-void border-transparent shadow-glow'
                  : 'border-white/10 text-ink-muted hover:text-ink hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} i={i} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
