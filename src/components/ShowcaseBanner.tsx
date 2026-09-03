import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ShowcaseBanner() {
  const { t } = useLanguage();

  return (
    <section 
      id="showcase-banner-section"
      className="w-full relative overflow-hidden bg-white select-none"
    >
      <a 
        href="https://huaban.com/boards/100777946"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[600px] relative overflow-hidden group cursor-pointer bg-white flex items-center justify-center"
      >
        <motion.img
          src="https://i.ibb.co/PzmpLp5J/di-01.png"
          alt="Architectural Space Exhibition"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-transform duration-[1200ms] ease-out"
        />
      </a>
    </section>
  );
}
