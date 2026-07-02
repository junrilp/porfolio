import { motion } from "framer-motion";
import React from "react";

const icons = {
  user: <path d="M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  message: (
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  ),
  send: <path d="m22 2-7 20-4-9-9-4 20-7Z" />,
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
};

const Icon = ({ name, className = "h-6 w-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {icons[name]}
  </svg>
);

export default function Contact({ data }) {
  const contactItems = [
    {
      label: "Email",
      detail: data.email,
      href: `mailto:${data.email}`,
      mark: "https://cdn.simpleicons.org/imessage",
      color: "text-sky-400",
    },
    {
      label: "Phone",
      detail: data.phone,
      href: `tel:${data.phone.replace(/[^+\d]/g, "")}`,
      mark: "https://cdn.simpleicons.org/phonepe",
      color: "text-emerald-400",
    },
    {
      label: "Location",
      detail: data.address,
      href: "#contact",
      mark: "https://cdn.simpleicons.org/googleearth",
      color: "text-fuchsia-400",
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-5 text-xl font-semibold text-textMuted">
            Got a question? Send me a message, and I will get back to you soon.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-shell mx-auto mt-16 max-w-4xl p-6 sm:p-10"
        >
          <div className="glass-inner p-6 sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-4xl font-black text-gradient sm:text-5xl">
                  Get in Touch
                </h3>
                <p className="mt-5 text-lg font-semibold text-textMuted">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Icon
                name="share"
                className="mt-2 hidden h-12 w-12 text-accent/70 sm:block"
              />
            </div>

            <form
              className="mt-9 space-y-6"
              action={`https://formsubmit.co/${data.email}`}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New portfolio message"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex="-1" />
              <label className="contact-field">
                <Icon name="user" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </label>
              <label className="contact-field">
                <Icon name="mail" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </label>
              <label className="contact-field min-h-44 items-start py-5">
                <Icon name="message" className="mt-1 h-6 w-6" />
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </label>
              <button
                type="submit"
                className="btn-accent w-full justify-center"
              >
                <Icon name="send" className="h-5 w-5" />
                Send Message
              </button>
            </form>

            <div className="my-10 h-px bg-white/10" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h4 className="flex items-center gap-3 text-2xl font-black text-white">
                <span className="h-1 w-10 rounded-full bg-accent" />
                Contact Details
              </h4>
              <div className="mt-7 space-y-4">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} className="social-row">
                    <img
                      src={item.mark}
                      alt={item.label}
                      className="h-12 w-12 shrink-0"
                    />

                    <span className="min-w-0">
                      <span className="block text-lg font-black text-white">
                        {item.label}
                      </span>
                      <span className="break-words text-sm font-semibold text-textMuted">
                        {item.detail}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
