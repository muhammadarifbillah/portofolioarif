"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

interface ImageCarouselProps {
  images: string[];
  title: string;
  featured?: boolean;
  slug: string;
}

export default function ImageCarousel({ images, title, featured, slug }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <Link href={`/projects/${slug}`} className="block relative h-full w-full overflow-hidden bg-white/5 dark:bg-slate-900/60 backdrop-blur-md flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:bg-white/10 dark:group-hover:bg-slate-800/60">
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl drop-shadow-lg z-10"
          >
            💻
          </motion.div>
        </div>
        <div className="space-y-1.5 px-6 text-center z-10">
          <p className="text-[11px] font-bold text-slate-900 dark:text-white tracking-[0.2em] uppercase opacity-80">
            Sedang tahap pemasukan data
          </p>
          <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono tracking-tight">
            // ASSETS_V1_SYNC_IN_PROGRESS
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel">
      <Link href={`/projects/${slug}`} className="block w-full h-full">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blurred Background to fill empty space */}
            <Image
              src={images[currentIndex]}
              alt=""
              fill
              className="object-cover blur-md opacity-50 scale-110"
              aria-hidden="true"
            />
            {/* Main Image */}
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500 z-10 drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </Link>

      {featured && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full z-10">
          <Star size={12} fill="currentColor" />
          Featured
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/50 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/50 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
