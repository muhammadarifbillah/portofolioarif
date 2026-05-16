"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2, Star } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { projects } from "@/lib/data";

import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Portofolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Proyek{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Unggulan
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-full rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                {/* Image Carousel Wrapper */}
                <div className="relative h-48 sm:h-56 w-full flex-shrink-0">
                  <ImageCarousel 
                    images={project.images} 
                    title={project.title} 
                    featured={project.featured} 
                    slug={project.slug} 
                  />
                  {/* @ts-ignore */}
                  {project.isUpdating && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg shadow-lg border border-white/20 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        UPDATING DATA
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <Link href={`/projects/${project.slug}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">
                      {project.title}
                    </Link>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={project.github} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-blue-500 transition-colors" aria-label="GitHub">
                        <Code2 size={16} />
                      </a>
                      <a href={project.demo} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-blue-500 transition-colors" aria-label="Live Demo">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <p className="text-sm text-blue-500 font-medium">{project.role}</p>
                    {/* @ts-ignore */}
                    {project.isUpdating && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-600 bg-amber-100 dark:bg-amber-500/20 dark:text-amber-400 rounded border border-amber-200 dark:border-amber-500/30 uppercase flex items-center gap-1">
                        🚧 Sedang Tahap Sinkronisasi Data
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
