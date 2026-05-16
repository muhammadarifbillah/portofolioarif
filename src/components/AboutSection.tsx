"use client";

import ScrollReveal from "./ScrollReveal";
import { aboutText } from "@/lib/data";
import { Shield, Code2, Activity } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Network Security Enthusiast", desc: "Keamanan jaringan & siber" },
  { icon: Code2, label: "Frontend Dev", desc: "React, Next.js, CSS, Blade" },
  { icon: Activity, label: "100+ Kontribusi", desc: "Aktivitas kode di GitHub (2025-2026)" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Tentang Saya
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Mengenal Lebih{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Dekat
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <ScrollReveal className="lg:col-span-3 space-y-5">
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </ScrollReveal>

          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} direction="right">
                <div className="group relative p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon size={22} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{item.label}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
