import { motion } from 'framer-motion';
import React from 'react';

const icons = [
  <path key="code" d="m9 18-6-6 6-6M15 6l6 6-6 6" />,
  <path key="award" d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3 0-1 6 4-2 4 2-1-6" />,
  <path key="globe" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c3 3.5 3 14.5 0 18M3 12h18" />,
];

const StatIcon = ({ index }) => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2">
    {icons[index]}
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
  </svg>
);

export default function About({ data }) {
  return (
    <section id="about" className="relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="mx-auto mt-8 max-w-4xl text-balance text-xl font-semibold leading-10 text-textMuted sm:text-2xl">
            {data.sections.about}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <a href="/resume.pdf" download="Resume.pdf" className="btn-accent">
              <FileIcon />
              Download CV
            </a>
            <button type="button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
              <CodeIcon />
              View Projects
            </button>
          </div>
        </motion.div>

        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {data.sections.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card group p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-white/10 text-white">
                  <StatIcon index={index} />
                </div>
                <p className="text-5xl font-black text-white">{stat.value}</p>
              </div>
              <p className="mt-8 text-lg font-bold uppercase tracking-[0.16em] text-textBase">{stat.label}</p>
              <p className="mt-3 text-base font-semibold text-textMuted">{stat.detail}</p>
              <svg viewBox="0 0 24 24" className="ml-auto mt-4 h-6 w-6 text-textMuted transition group-hover:text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
