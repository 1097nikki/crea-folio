import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  extra: string;
  verticalLabel: string;
}

const CAROUSEL_SLIDES: SlideItem[] = [
  {
    id: 1,
    image: "https://i.ibb.co/6Rv75z81/image-01.jpg",
    title: "Alberto Giacometti",
    subtitle: "Surrealist Sculptor & Painter",
    extra: "dinzd.com",
    verticalLabel: "Lifestyle"
  },
  {
    id: 2,
    image: "https://i.ibb.co/Pz5FVzT3/image-04.jpg",
    title: "Constantin Brâncuși",
    subtitle: "Pioneer of Modernist Sculpture",
    extra: "brancusi.org",
    verticalLabel: "Atelier"
  },
  {
    id: 3,
    image: "https://i.ibb.co/GQz2BKkc/image-03.jpg",
    title: "Jackson Pollock",
    subtitle: "Abstract Expressionist Master",
    extra: "pollock.org",
    verticalLabel: "Expression"
  },
  {
    id: 4,
    image: "https://i.ibb.co/3mqVKncG/image-02.jpg",
    title: "Alexander Calder",
    subtitle: "Kinetic & Wire Sculptures",
    extra: "calder.org",
    verticalLabel: "Movement"
  },
  {
    id: 5,
    image: "https://i.ibb.co/d4xHh6NS/image-05.jpg",
    title: "Le Corbusier",
    subtitle: "Avant-Garde Architectural Vision",
    extra: "corbusier.org",
    verticalLabel: "Structure"
  }
];

export default function CreativeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const slideCount = CAROUSEL_SLIDES.length;

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  // Helper indices for the adjacent slides shown in left/right masks
  const prevIndex = activeIndex === 0 ? slideCount - 1 : activeIndex - 1;
  const nextIndex = activeIndex === slideCount - 1 ? 0 : activeIndex + 1;

  const activeSlide = CAROUSEL_SLIDES[activeIndex];
  const prevSlide = CAROUSEL_SLIDES[prevIndex];
  const nextSlide = CAROUSEL_SLIDES[nextIndex];

  // Animation variants for beautiful crossfade in center stage
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      opacity: 0,
      scale: 1.02,
      x: dir === 'right' ? 25 : -25
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.75, ease: "easeOut" },
        scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      }
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      scale: 0.98,
      x: dir === 'right' ? -25 : 25,
      transition: {
        opacity: { duration: 0.6, ease: "easeIn" },
        scale: { duration: 0.6 },
        x: { duration: 0.6 }
      }
    })
  };

  return (
    <section 
      id="creative-atelier-carousel"
      className="w-full bg-[#111111] h-[526px] md:h-[600px] flex overflow-hidden select-none relative"
    >
      {/* 1. Left Side Column Overlay (15% Width) */}
      <div 
        onClick={handlePrev}
        className="w-[15%] h-full relative cursor-pointer overflow-hidden group/side select-none flex-shrink-0"
      >
        <img
          src={prevSlide.image}
          alt={prevSlide.title}
          className="w-full h-full object-cover filter brightness-[0.7] transform duration-[1.2s] group-hover/side:scale-[1.04]"
          referrerPolicy="no-referrer"
        />
        {/* Deep, thick grey/black atmospheric overlay precisely matching the prompt reference */}
        <div className="absolute inset-0 bg-neutral-950/80 md:bg-neutral-950/85 group-hover/side:bg-neutral-950/75 transition-colors duration-500 flex flex-col items-center justify-center" />
        
        {/* Interactive hover glowing yellow background context around the arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 group-hover/side:bg-yellow-400/10">
            <ChevronLeft className="w-8 h-8 text-white/50 group-hover/side:text-white transition-colors duration-300 transform group-hover/side:-translate-x-0.5" />
          </div>
        </div>

        {/* Dynamic vertical rotated text labels from the reference photo */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.25em] text-white/20 group-hover/side:text-white/40 uppercase transition-colors duration-300 select-none">
            {prevSlide.verticalLabel}
          </span>
        </div>
      </div>

      {/* 2. Center Viewport Active Slide (70% Width) */}
      <div className="w-[70%] h-full relative overflow-hidden bg-neutral-950 flex-grow border-l border-r border-neutral-900/60">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* The primary art direction photograph */}
            <motion.img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3.5, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Right Side Column Overlay (15% Width) */}
      <div 
        onClick={handleNext}
        className="w-[15%] h-full relative cursor-pointer overflow-hidden group/side select-none flex-shrink-0"
      >
        <img
          src={nextSlide.image}
          alt={nextSlide.title}
          className="w-full h-full object-cover filter brightness-[0.7] transform duration-[1.2s] group-hover/side:scale-[1.04]"
          referrerPolicy="no-referrer"
        />
        {/* Deep, thick grey/black atmospheric overlay precisely matching the prompt reference */}
        <div className="absolute inset-0 bg-neutral-950/80 md:bg-neutral-950/85 group-hover/side:bg-neutral-950/75 transition-colors duration-500 flex flex-col items-center justify-center" />
        
        {/* Interactive hover glowing yellow background context around the arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 group-hover/side:bg-yellow-400/10">
            <ChevronRight className="w-8 h-8 text-white/50 group-hover/side:text-white transition-colors duration-300 transform group-hover/side:translate-x-0.5" />
          </div>
        </div>

        {/* Dynamic vertical rotated text labels from the reference photo */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.25em] text-white/20 group-hover/side:text-white/40 uppercase transition-colors duration-300 select-none">
            {nextSlide.verticalLabel.substring(0, 4)}...
          </span>
        </div>
      </div>
    </section>
  );
}
