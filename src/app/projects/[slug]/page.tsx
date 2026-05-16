import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Calendar } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

// Required for Next.js static site generation with dynamic routes
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-500 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Kembali ke Portofolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-t border-b border-slate-200 dark:border-slate-800 py-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 dark:text-slate-200">Peran:</span>
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              {project.github !== "#" && (
                <a href={project.github} className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                  <Code2 size={16} /> Repository
                </a>
              )}
              {project.demo !== "#" && (
                <a href={project.demo} className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Main Image Slider */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
          {project.images.length > 0 ? (
            <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800">
               <ImageCarousel 
                  images={project.images} 
                  title={project.title} 
                  slug={project.slug} 
                />
            </div>
          ) : (
            <div className="aspect-video w-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
              <div className="text-6xl opacity-20">💻</div>
            </div>
          )}
        </div>

        {/* Detailed Content */}
        <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tentang Proyek</h2>
          <div className="whitespace-pre-line text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.content}
          </div>
        </article>
      </div>
    </main>
  );
}
