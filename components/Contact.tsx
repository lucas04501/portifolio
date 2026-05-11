"use client";
// components/Contact.tsx
// Seção de contato com formulário e links de redes sociais

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/config";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");

    // Simulação de envio — substitua por sua integração real
    // Ex: Resend, EmailJS, Formspree, etc.
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("sent");

    setTimeout(() => {
      setFormState("idle");
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  }

  const contactLinks = [
    {
      icon: "⌥",
      label: `github.com/${siteConfig.github}`,
      href: siteConfig.githubUrl,
    },
    {
      icon: "✉",
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: "in",
      label: `linkedin.com/in/${siteConfig.linkedin}`,
      href: siteConfig.linkedinUrl,
    },
  ];

  return (
    <section id="contato" className="py-28">
      <div className="max-w-[900px] mx-auto px-6" ref={ref}>
        {/* Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">contato</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Esquerda — texto e links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(28px,4vw,44px)] font-light tracking-[-1.5px] leading-[1.1] mb-4">
              Vamos <strong className="font-semibold">trabalhar</strong>
              <br />
              juntos?
            </h2>
            <p className="text-[15px] text-text-2 leading-[1.75] mb-8">
              Aberto a oportunidades de trabalho, projetos freelance ou só para
              trocar uma ideia sobre tecnologia.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-2 text-sm no-underline hover:text-text-1 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 bg-bg-3 border border-border rounded-lg flex items-center justify-center text-[14px] font-mono flex-shrink-0 group-hover:border-border-2 transition-colors">
                    {link.icon}
                  </div>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Direita — formulário */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-text-3 font-mono">nome</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                className="bg-bg-2 border border-border rounded-lg px-3.5 py-3 text-sm text-text-1 font-sans outline-none placeholder:text-text-3 focus:border-border-2 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-text-3 font-mono">email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className="bg-bg-2 border border-border rounded-lg px-3.5 py-3 text-sm text-text-1 font-sans outline-none placeholder:text-text-3 focus:border-border-2 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-text-3 font-mono">mensagem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={`Olá ${siteConfig.name}, tenho um projeto...`}
                className="bg-bg-2 border border-border rounded-lg px-3.5 py-3 text-sm text-text-1 font-sans outline-none placeholder:text-text-3 focus:border-border-2 transition-colors duration-200 resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={formState === "sending" || formState === "sent"}
              className={`self-start inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-none cursor-pointer transition-all duration-200 ${
                formState === "sent"
                  ? "bg-blue text-white"
                  : formState === "sending"
                  ? "bg-accent/60 text-bg cursor-wait"
                  : "bg-accent text-bg hover:bg-[#c4e550] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,245,100,0.2)]"
              }`}
            >
              {formState === "sent"
                ? "✓ Mensagem enviada!"
                : formState === "sending"
                ? "Enviando..."
                : "Enviar mensagem →"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
