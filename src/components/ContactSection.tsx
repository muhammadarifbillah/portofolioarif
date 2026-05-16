"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code2, Link2, Camera, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { contactInfo } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Link2,
  instagram: Camera,
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
              Kontak
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Mari{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Terhubung
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
              Tertarik untuk berkolaborasi atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ScrollReveal delay={0}>
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ y: -4 }}
              className="block p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail size={22} className="text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 break-all">{contactInfo.email}</p>
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="block p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Phone size={22} className="text-emerald-500" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">WhatsApp</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{contactInfo.whatsapp}</p>
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 text-center sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <MapPin size={22} className="text-amber-500" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Lokasi</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{contactInfo.location}</p>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Social Links */}
        <ScrollReveal>
          <div className="flex justify-center gap-4">
            {contactInfo.socials.map((social) => {
              const Icon = socialIcons[social.icon] || Send;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg font-medium text-sm"
                >
                  <Icon size={18} />
                  {social.name}
                </motion.a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
