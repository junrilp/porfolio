import { motion } from "framer-motion";
import React, { useState } from "react";

const tabs = [
  { id: "projects", label: "Highlights" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Tech Stack" },
];

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
  </svg>
);

const AwardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3 0-1 6 4-2 4 2-1-6" />
  </svg>
);

const StackIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
  </svg>
);

const iconMap = {
  projects: <CodeIcon />,
  experience: <AwardIcon />,
  stack: <StackIcon />,
};

const stackIconMap = {
  "Vue.js": "https://img.icons8.com/color/96/vue-js.png",
  VueJS: "https://img.icons8.com/color/96/vue-js.png",
  NuxtJS:
    "https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000",
  ReactJS: "https://img.icons8.com/color/96/react-native.png",
  NextJS: "https://img.icons8.com/fluency/96/nextjs.png",
  "React Native": "https://img.icons8.com/color/96/react-native.png",
  Expo: "https://img.icons8.com/ios-filled/96/ffffff/expo.png",
  "Tailwind CSS": "https://img.icons8.com/color/96/tailwindcss.png",
  Tailwind: "https://img.icons8.com/color/96/tailwindcss.png",
  HTML5: "https://img.icons8.com/color/96/html-5.png",
  Bootstrap: "https://img.icons8.com/color/96/bootstrap.png",
  jQuery: "https://img.icons8.com/ios-filled/96/0769ad/jquery.png",
  Laravel: "https://img.icons8.com/fluency/96/laravel.png",
  PHP: "https://img.icons8.com/officel/96/php-logo.png",
  CodeIgniter:
    "https://img.icons8.com/?size=100&id=r4UrHt1gLC2t&format=png&color=FFFFFF",
  Symfony: "https://img.icons8.com/?size=100&id=78295&format=png&color=FFFFFF",
  NestJS: "https://img.icons8.com/color/96/nestjs.png",
  MySQL: "https://img.icons8.com/color/96/mysql-logo.png",
  PostgreSQL: "https://img.icons8.com/color/96/postgreesql.png",
  "Digital Ocean":
    "https://img.icons8.com/?size=100&id=NTk60lqGX88D&format=png&color=FFFFFF",
  "Cloud Panel": "https://img.icons8.com/fluency/96/cloud.png",
  Cloudflare: "https://img.icons8.com/color/96/cloudflare.png",
  FingerPrint: "https://img.icons8.com/fluency/96/fingerprint.png",
  cPanel:
    "https://img.icons8.com/?size=100&id=guteo8_ARDB_&format=png&color=FFFFFF",
  Vercel: "https://img.icons8.com/ios-filled/96/ffffff/vercel.png",
  Replit: "https://img.icons8.com/color/96/replit.png",
  Git: "https://img.icons8.com/color/96/git.png",
  Postman:
    "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  "OpenAI APIs": "https://img.icons8.com/ios-filled/96/ffffff/chatgpt.png",
  OpenAI: "https://img.icons8.com/ios-filled/96/ffffff/chatgpt.png",
  "n8n automation":
    "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/n8n-color.png",
  n8n: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/n8n-color.png",
  "REST APIs": "https://img.icons8.com/fluency/96/api-settings.png",
  "CI/CD":
    "https://img.icons8.com/?size=100&id=38VIWX4TT5YQ&format=png&color=FFFFFF",
};

function getStackInitials(skill) {
  return skill
    .replace(/[^a-zA-Z0-9\s.]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function StackImage({ skill }) {
  const src = stackIconMap[skill];

  if (!src) {
    return (
      <span className="stack-icon-fallback" aria-hidden="true">
        {getStackInitials(skill)}
      </span>
    );
  }

  return (
    <span className="stack-icon-frame">
      <img
        src={src}
        alt={`${skill} logo`}
        className="h-9 w-9 object-contain"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
      />
    </span>
  );
}

function ProjectPreview({ project }) {
  if (project.previewType === "ethicalBrand") {
    return (
      <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-white via-sky-50 to-blue-100 p-5 text-slate-700">
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500 text-2xl font-black leading-none text-white shadow-lg shadow-sky-500/25">
            eb
          </div>
          <span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-black text-sky-600">
            Ethical Brand
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {["Plans", "Journal", "News"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-sky-100 bg-white/80 p-3 text-center shadow-sm"
            >
              <div className="mx-auto mb-2 h-7 w-7 rounded-full bg-sky-100" />
              <p className="text-xs font-black text-slate-600">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-100 bg-white/80 p-3 shadow-sm">
          <div className="h-2 w-24 rounded-full bg-sky-300" />
          <div className="mt-2 h-2 w-full rounded-full bg-slate-200" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
    );
  }

  if (project.previewType === "medical") {
    return (
      <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-sky-50 via-white to-cyan-100 p-5 text-slate-700">
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500 text-xl font-black text-white shadow-lg shadow-cyan-500/25">
            M4
          </div>
          <span className="rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-black text-cyan-600">
            Healthcare
          </span>
        </div>
        <div className="mt-5 rounded-2xl border border-cyan-100 bg-white/85 p-4 shadow-sm">
          <div className="h-3 w-40 rounded-full bg-cyan-300" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <span className="h-12 rounded-xl bg-cyan-50" />
            <span className="h-12 rounded-xl bg-blue-50" />
            <span className="h-12 rounded-xl bg-indigo-50" />
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-slate-200" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
        </div>
      </div>
    );
  }

  if (project.previewType === "socialClub") {
    return (
      <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 via-white to-violet-100 p-5 text-slate-700">
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-rose-500 text-lg font-black text-white shadow-lg shadow-rose-500/25">
            PF
          </div>
          <span className="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-black text-rose-600">
            Social Club
          </span>
        </div>
        <div className="mt-6 flex justify-center -space-x-3">
          {[
            "bg-rose-300",
            "bg-fuchsia-300",
            "bg-violet-300",
            "bg-indigo-300",
          ].map((color) => (
            <span
              key={color}
              className={`h-14 w-14 rounded-full border-4 border-white ${color}`}
            />
          ))}
        </div>
        <div className="mx-auto mt-5 h-3 w-44 rounded-full bg-rose-200" />
        <div className="mx-auto mt-3 h-2 w-32 rounded-full bg-slate-200" />
      </div>
    );
  }

  if (project.previewType === "outCloud") {
    return (
      <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 via-white to-sky-100 p-5 text-slate-700">
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-800 text-xl font-black text-white shadow-lg shadow-slate-900/20">
            OC
          </div>
          <span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-black text-sky-600">
            File Delivery
          </span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_0.7fr] gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="h-20 rounded-xl bg-slate-200" />
            <div className="mt-3 h-2 w-full rounded-full bg-slate-300" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-200" />
          </div>
          <div className="space-y-2">
            <span className="block h-9 rounded-xl bg-sky-100" />
            <span className="block h-9 rounded-xl bg-cyan-100" />
            <span className="block h-9 rounded-xl bg-blue-100" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-48 overflow-hidden rounded-lg bg-gradient-to-br ${project.accent}`}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute left-7 top-7">
        <p className="text-3xl font-black text-white text-center">
          {project.name}
        </p>
        <p className="mt-2 text-sm font-semibold text-white/70 text-center">
          {project.stack.slice(0, 3).join(" / ")}
        </p>
      </div>
    </div>
  );
}

export default function Projects({ data }) {
  const [activeTab, setActiveTab] = useState("projects");
  const stackItems = Array.from(
    new Set(data.skills.flatMap((group) => group.items)),
  );

  return (
    <section id="projects" className="relative">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title">Portfolio Showcase</h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-semibold leading-8 text-textMuted sm:text-xl">
            Explore my full stack highlights, professional experience, and
            technical expertise built across scalable web and mobile
            applications.
          </p>
        </div>

        <div className="glass-panel mt-16 grid gap-4 p-4 md:grid-cols-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "tab-button-active" : ""}`}
            >
              {iconMap[tab.id]}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "projects" && (
          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {data.projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-5"
              >
                <ProjectPreview project={project} />
                <h3 className="mt-7 text-2xl font-black text-textBase">
                  {project.name}
                </h3>
                <p className="mt-4 text-base font-semibold leading-7 text-textMuted">
                  {project.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm font-semibold leading-6 text-textMuted">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-textMuted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {data.experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="glass-card p-8"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/10 text-accent">
                  <AwardIcon />
                </div>
                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.role}
                </h3>
                <p className="mt-3 text-base font-semibold text-accent">
                  {item.company}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-textMuted">
                  {item.period}
                </p>
                <p className="mt-5 text-base font-semibold leading-7 text-textMuted">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-textMuted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            {data.education.map((item) => (
              <article key={item.name} className="glass-card p-8">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/10 text-accent">
                  <AwardIcon />
                </div>
                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-base font-semibold text-textMuted">
                  {item.issuer}
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  {item.year}
                </p>
              </article>
            ))}
          </div>
        )}

        {activeTab === "stack" && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((skill) => (
              <div key={skill} className="stack-card">
                <StackImage skill={skill} />
                <span className="min-w-0 text-center text-base font-black text-textBase">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
