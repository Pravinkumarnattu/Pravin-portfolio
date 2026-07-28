import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Say a little more (10+ characters)';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('sending');
    try {
      // ── EmailJS integration ──────────────────────────────────────
      // 1. npm install @emailjs/browser
      // 2. Create a service + template at https://www.emailjs.com
      // 3. Uncomment below and add your IDs (use env vars, not hardcoded keys)
      //
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   { from_name: form.name, from_email: form.email, message: form.message },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );

      await new Promise((res) => setTimeout(res, 900)); // placeholder until EmailJS is wired
      setStatus('sent');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading path="contact/" title="Let's build something" description="Open to full-time SDE roles, freelance MERN work, and interesting problems in general." />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          {/* Info column */}
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3.5 glass rounded-2xl p-5 hover:border-emerald-glow/40 transition-colors">
              <span className="w-10 h-10 rounded-xl bg-emerald-azure/15 flex items-center justify-center text-emerald-glow shrink-0"><FiMail size={17} /></span>
              <div className="min-w-0">
                <p className="text-xs text-ink-faint font-mono">EMAIL</p>
                <p className="text-sm text-ink truncate">{profile.email}</p>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 glass rounded-2xl p-5 hover:border-emerald-glow/40 transition-colors">
              <span className="w-10 h-10 rounded-xl bg-emerald-azure/15 flex items-center justify-center text-emerald-glow shrink-0"><FiGithub size={17} /></span>
              <div className="min-w-0">
                <p className="text-xs text-ink-faint font-mono">GITHUB</p>
                <p className="text-sm text-ink truncate">github.com/pravinkumar</p>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 glass rounded-2xl p-5 hover:border-emerald-glow/40 transition-colors">
              <span className="w-10 h-10 rounded-xl bg-emerald-azure/15 flex items-center justify-center text-emerald-glow shrink-0"><FiLinkedin size={17} /></span>
              <div className="min-w-0">
                <p className="text-xs text-ink-faint font-mono">LINKEDIN</p>
                <p className="text-sm text-ink truncate">linkedin.com/in/pravinkumar</p>
              </div>
            </a>
            <div className="flex items-center gap-3.5 glass rounded-2xl p-5">
              <span className="w-10 h-10 rounded-xl bg-emerald-azure/15 flex items-center justify-center text-emerald-glow shrink-0"><FiMapPin size={17} /></span>
              <div className="min-w-0">
                <p className="text-xs text-ink-faint font-mono">LOCATION</p>
                <p className="text-sm text-ink truncate">{profile.location}</p>
              </div>
            </div>

            {/* <div className="glass rounded-2xl overflow-hidden h-48">
              <iframe
                title="Location map"
                className="w-full h-full grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                src="https://www.google.com/maps?q=Salem,Tamil%20Nadu,India&output=embed"
              />
            </div> */}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-ink-faint mb-2">NAME</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-emerald-glow/60 outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-ink-faint mb-2">EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-emerald-glow/60 outline-none transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-xs font-mono text-ink-faint mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-emerald-glow/60 outline-none transition-colors resize-none"
                placeholder="Tell me about the role or project..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-azure text-void font-mono text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'sending' ? 'Sending...' : <>Send Message <FiSend size={15} /></>}
            </button>

            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 text-emerald-glow text-sm font-mono"
                >
                  <FiCheck /> Message sent — I'll reply soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-red-400 text-sm font-mono">
                  Something went wrong. Try emailing directly instead.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
