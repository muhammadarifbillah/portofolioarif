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
      <Link href={`/projects/${slug}`} className="block relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/50 dark:to-slate-900/50 flex flex-col items-center justify-center gap-3">
        <div className="text-5xl opacity-20">💻</div>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase px-4 text-center">
          Sedang tahap pemasukan data
        </span>
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
