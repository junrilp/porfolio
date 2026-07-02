import React from 'react';

export function SectionHeading({ title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">{title}</p>
      <h2 className="mt-3 text-3xl font-semibold text-textBase sm:text-4xl">{description}</h2>
    </div>
  );
}
