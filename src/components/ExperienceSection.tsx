"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Award, Briefcase, Layers } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "@/lib/data";

const typeIcons: Record<string, any> = {
  "Work & Experience": Briefcase,
  "Projects": Layers,
  "Certification & Training": Award,
  "Teaching Assistance / Academic Support": BookOpen,
  "Project-Based Learning": FlaskConical,
};

const typeColors: Record<string, string> = {
  "Work & Experience": "from-blue-500 to-blue-600",
  "Projects": "from-indigo-500 to-indigo-600",
  "Certification & Training": "from-amber-500 to-amber-600",
  "Teaching Assistance / Academic Support": "from-blue-500 to-blue-600",
  "Project-Based Learning": "from-emerald-500 to-emerald-600",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Pengalaman
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Perjalanan{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Karier
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type] || BookOpen;
              const color = typeColors[exp.type] || "from-blue-500 to-blue-600";
              return (
                <ScrollReveal key={exp.title} delay={index * 0.15}>
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={22} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative flex-1 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                      <span className="inline-block text-xs font-semibold text-blue-500 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-500 mb-3">{exp.organization}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                      </div>
                    </motion.div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
