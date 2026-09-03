/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ALL_PROJECTS, getProjectImage } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

interface SelectedWorksProps {
  onSelectProject: (id: string) => void;
}

type ViewMode = 'Feed' | 'Full';

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('Feed');
  const selectedProjects = ALL_PROJECTS.filter(p => p.id.startsWith('selected-'));
  const { t, language } = useLanguage();

  // Container variants for staggered entrance
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="index" className="w-full px-6 md:px-12 pt-4 md:pt-6 pb-12 md:pb-20 max-w-7xl mx-auto bg-white">
      {/* Block Header Nav */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-neutral-100 pb-4 mb-8 md:mb-12 gap-4">
        <h3 className="font-sans text-3xl sm:text-4xl tracking-tight font-medium text-neutral-900 flex items-center gap-1.5">
          {t('Selected Works', 'Selected Works')}
        </h3>

        {/* Dynamic Static Filtering Tabs */}
        <div className="flex items-center gap-6 text-[12px] font-mono tracking-widest text-neutral-400">
          {(['Feed', 'Full'] as ViewMode[]).map((mode) => {
            const labelMap: Record<ViewMode, string> = {
              Feed: t("作品", "Works"),
              Full: t("案例", "Cases")
            };
            const isActive = viewMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                  isActive ? 'text-black font-medium' : 'hover:text-neutral-900'
                }`}
              >
                {labelMap[mode]}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline" 
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-neutral-900" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* VIEW 3: Feed Layout (Updated to 4x4 Grid with vertical rectangles) */}
        {viewMode === 'Feed' && (
          <motion.div
            key="feed-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[0.2cm]"
          >
            {Array.from({ length: 16 }).map((_, index) => {
              const project = selectedProjects[index % selectedProjects.length];
              const feedImages = [
                "https://i.ibb.co/27Zg6wV5/inage-01.jpg",
                "https://i.ibb.co/Gw3bHYh/inage-02.jpg",
                "https://i.ibb.co/spspq73N/inage-03.jpg",
                "https://i.ibb.co/XZ43s7hY/inage-04.jpg",
                "https://i.ibb.co/Q7C2jjQf/inage-05.jpg",
                "https://i.ibb.co/SwQ8RgJX/inage-06.jpg",
                "https://i.ibb.co/d4LQLPm3/inage-07.jpg",
                "https://i.ibb.co/nNdKsw1j/inage-08.jpg",
                "https://i.ibb.co/LzSPxqFd/inage-09.jpg",
                "https://i.ibb.co/W4MJPw43/inage-16.jpg",
                "https://i.ibb.co/nM4g6jGh/inage-11.jpg",
                "https://i.ibb.co/mVwjt6Cx/inage-10.jpg",
                "https://i.ibb.co/B24JfZkR/inage-13.jpg",
                "https://i.ibb.co/G4wFnYKy/inage-15.jpg",
                "https://i.ibb.co/Z6hB4Df9/inage-14.jpg",
                "https://i.ibb.co/TBWdKGJX/inage-10.jpg"
              ];
              const imageSrc = feedImages[index] || getProjectImage(project);
              const targetProjectId = index === 11 ? 'selected-12' : index === 12 ? 'selected-13' : index === 13 ? 'selected-14' : index === 14 ? 'libai-loopy-laundry' : index === 15 ? 'selected-16' : project.id;
              const targetProject = ALL_PROJECTS.find(p => p.id === targetProjectId) || project;
              const isDisabledCard = index === 2 || project.id === 'selected-3' || index === 3 || project.id === 'selected-4' || index === 14 || Boolean(targetProject.disableDetail || targetProject.disabled);
              return (
                <div
                  key={`${targetProjectId}-${index}`}
                  onClick={() => {
                    if (!isDisabledCard) {
                      onSelectProject(targetProjectId);
                    }
                  }}
                  className={`group ${isDisabledCard ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 rounded-none">
                    <img
                      src={imageSrc}
                      alt={project.titleEn}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-all duration-700 ease-[0.16,1,0.3,1] ${
                        isDisabledCard ? '' : 'group-hover:scale-105'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* VIEW 4: Full Layout (Updated to 3x3 Grid with vertical rectangles) */}
        {viewMode === 'Full' && (
          <motion.div
            key="full-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 gap-[0.1cm]"
          >
            {selectedProjects.slice(0, 9).map((project, index) => {
              const casesImages = [
                "https://i.ibb.co/fdx11kfP/cases-01.jpg",
                "https://i.ibb.co/LzjgrWdd/cases-02.jpg",
                "https://i.ibb.co/b5xnMRWJ/cases-03.jpg",
                "https://i.ibb.co/fVhpZ9s2/cases-04.jpg",
                "https://i.ibb.co/tpX16Y6G/cases-05.jpg",
                "https://i.ibb.co/TDYs60Wx/cases-06.jpg",
                "https://i.ibb.co/qX3b5Yg/cases-07.jpg",
                "https://i.ibb.co/2YctgLm1/cases-08.jpg",
                "https://i.ibb.co/RpNZ2K0n/cases-09.jpg"
              ];
              const imageSrc = casesImages[index] || getProjectImage(project);
              
              const cardLinks: Record<number, string> = {
                0: "https://huaban.com/boards/88166605",
                1: "https://huaban.com/boards/100777946",
                3: "https://huaban.com/boards/88166605",
                4: "https://huaban.com/boards/88166605",
                5: "https://huaban.com/boards/90161490",
                6: "https://huaban.com/boards/86643281",
                7: "https://www.zcool.com.cn/work/ZNDQ4ODA0ODQ=.html",
                8: "https://huaban.com/boards/90592644"
              };
              
              const link = cardLinks[index];
              const isClickable = !!link;

              const cardContent = (
                <img
                  src={imageSrc}
                  alt={project.titleEn}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 ${isClickable ? 'cursor-pointer' : ''}`}
                />
              );

              return (
                <div
                  key={project.id}
                  className="group select-none"
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 rounded-none">
                    {link ? (
                      <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      cardContent
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
