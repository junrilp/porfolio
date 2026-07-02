import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const SparkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z" />
    <path d="m5 3 .7 2.1L8 6l-2.3.9L5 9l-.7-2.1L2 6l2.3-.9L5 3Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export default function Hero({ data, onScrollTo }) {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const expertiseItems =
    data.coreExpertise?.length > 0 ? data.coreExpertise : [data.subtitle];

  useEffect(() => {
    setTypedSubtitle("");

    let expertiseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeLoop = () => {
      const currentExpertise = expertiseItems[expertiseIndex];
      const nextText = currentExpertise.slice(0, letterIndex);

      setTypedSubtitle(nextText);

      if (!isDeleting && letterIndex < currentExpertise.length) {
        letterIndex += 1;
        timeout = window.setTimeout(typeLoop, 75);
        return;
      }

      if (!isDeleting && letterIndex >= currentExpertise.length) {
        isDeleting = true;
        timeout = window.setTimeout(typeLoop, 1500);
        return;
      }

      if (isDeleting && letterIndex > 0) {
        letterIndex -= 1;
        timeout = window.setTimeout(typeLoop, 35);
        return;
      }

      if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        timeout = window.setTimeout(() => {
          expertiseIndex = (expertiseIndex + 1) % expertiseItems.length;
          typeLoop();
        }, 300);
      }
    };

    timeout = window.setTimeout(typeLoop, 150);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [expertiseItems]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.7fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-8"
        >
          <p className="inline-flex items-center gap-3 rounded-full border border-violet-400/25 bg-white/[0.04] px-5 py-3 text-sm font-bold text-accent shadow-[0_0_34px_rgba(139,92,246,0.28)] sm:text-base">
            <SparkIcon />
            Ready to Innovate
          </p>
          <div className="space-y-4">
            <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Full Stack
              <span className="block text-gradient">Developer</span>
            </h1>
            <p className="text-2xl leading-tight text-textBase sm:text-2xl">
              <span aria-label="Core expertise">{typedSubtitle}</span>
              <span className="ml-1 inline-block h-8 w-1 translate-y-1 animate-pulse rounded-full bg-accent" />
            </p>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-textMuted">
            {data.headline}
          </p>
          <div className="flex flex-wrap gap-3">
            {data.sections.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-textBase shadow-inner"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <button
              onClick={() => onScrollTo("projects")}
              className="btn-primary"
            >
              Projects
              <ArrowIcon />
            </button>
            <button
              onClick={() => onScrollTo("contact")}
              className="btn-primary"
            >
              Contact
              <MailIcon />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="hero-portrait-shell">
            <img
              src={data.profileImage}
              alt={`${data.name} portrait`}
              className="hero-portrait-image"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
            <div className="hidden h-full w-full place-items-center p-10 text-center">
              <div>
                <p className="text-6xl font-black text-gradient">JP</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.28em] text-textMuted">
                  Portrait
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
