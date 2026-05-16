"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Keahlian
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Hard Skills &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Teknologi
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-5">
                  <category.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <skill.icon size={16} className="text-blue-500 flex-shrink-0" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
