import { motion } from 'framer-motion';
import React from 'react';
import { SectionHeading } from './SectionHeading';

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading title="Skills" description="Technical strengths organized by category" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[1.5rem] border border-white/10 bg-panel p-7 shadow-soft"
            >
              <h3 className="mb-5 text-xl font-semibold text-textBase">{group.category}</h3>
              <ul className="space-y-3 text-sm text-textMuted">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
