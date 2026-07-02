import { motion } from 'framer-motion';
import React from 'react';
import { SectionHeading } from './SectionHeading';

export default function AiHighlights({ data }) {
  return (
    <section id="ai">
      <div className="container">
        <SectionHeading title="AI / API Integration" description={data.title} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[1.5rem] border border-white/10 bg-panel p-8 shadow-soft"
        >
          <p className="text-textMuted leading-8">{data.description}</p>
          <ul className="mt-6 space-y-4 text-sm text-textBase">
            {data.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
