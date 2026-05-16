"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Pendidikan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Riwayat{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Pendidikan
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {education.map((edu) => (
            <StaggerItem key={edu.institution}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-sm text-blue-500 font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar size={14} />
                  {edu.period}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
