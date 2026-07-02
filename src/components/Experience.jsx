import { motion } from 'framer-motion';
import React from 'react';
import { SectionHeading } from './SectionHeading';

export default function Experience({ items }) {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading title="Experience" description="Career timeline with results and tech used" />
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-panel p-8 shadow-soft"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-textBase">{item.role}</p>
                  <p className="text-sm text-textMuted">{item.company}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent">{item.period}</p>
              </div>
              <p className="mt-4 text-textMuted">{item.description}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl bg-white/5 p-4 text-sm text-textBase">
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-textMuted">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
