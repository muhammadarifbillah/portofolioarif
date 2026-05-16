"use client";

import { Code2, Link2, Camera, Heart } from "lucide-react";
import { contactInfo } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Link2,
  instagram: Camera,
};

export default function Footer() {
  return (
    <footer className="relative py-10 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Arif.
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            © {new Date().getFullYear()} Muhammad Arif Billah. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {contactInfo.socials.map((social) => {
              const Icon = socialIcons[social.icon] || Code2;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
