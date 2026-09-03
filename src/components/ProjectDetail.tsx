/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ALL_PROJECTS, getProjectImage } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, CornerDownLeft } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function ProjectDetail({ projectId, onClose, onNavigate }: ProjectDetailProps) {
  const project = ALL_PROJECTS.find(p => p.id === projectId);
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Esc and keyboard navigations handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Smooth auto-scroll details view to top on mount
    if (detailContainerRef.current) {
      detailContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose, onNavigate]);

  if (!project) return null;

  // Derive elegant fallback image source if specific files are missing
  const activeImage = getProjectImage(project);

  // Curate exactly 8 unique high-resolution images in a grid based on project ID and style
  const getDetailGalleryImages = (id: string, defaultImage: string): string[] => {
    if (id === 'selected-1') {
      return [
        "https://i.ibb.co/GvcvxB5c/kora-03.jpg",
        "https://i.ibb.co/xKTd3s61/kora-02.jpg",
        "https://i.ibb.co/rG9HS0w0/kora-01.jpg"
      ];
    }
    if (id === 'selected-2') {
      return [
        "https://i.ibb.co/mFGj7bKJ/yep-01.jpg",
        "https://i.ibb.co/9k1PWSVc/yep-02.jpg",
        "https://i.ibb.co/rKLssRbS/yep-03.jpg"
      ];
    }
    if (id === 'selected-3') {
      return [
        "https://i.ibb.co/bRRrhjy6/xwy-01.jpg",
        "https://i.ibb.co/WWXJR1Yb/xwy-02.jpg",
        "https://i.ibb.co/Q7XHxFrP/xwy-03.jpg",
        "https://i.ibb.co/XkZzB8rJ/xwy-04.jpg"
      ];
    }
    if (id === 'selected-5') {
      return [
        "https://i.ibb.co/Q7XHxFrP/xwy-03.jpg",
        "https://i.ibb.co/WWXJR1Yb/xwy-02.jpg",
        "https://i.ibb.co/XkZzB8rJ/xwy-04.jpg"
      ];
    }
    if (id === 'selected-6') {
      return [
        "https://i.ibb.co/hJNFGHQM/uniwonder-01.jpg",
        "https://i.ibb.co/Xk5R6mnT/uniwonder-02.jpg",
        "https://i.ibb.co/p6x0fgYM/uniwonder-03.jpg"
      ];
    }
    if (id === 'selected-7') {
      return [
        "https://i.ibb.co/4ZtfyBYf/xwya-01.jpg",
        "https://i.ibb.co/SzmXTTn/xwya-05.jpg"
      ];
    }
    if (id === 'selected-8') {
      return [
        "https://i.ibb.co/gLDbQXFq/naturo-02.jpg",
        "https://i.ibb.co/8DMbchkC/naturo-03.jpg",
        "https://i.ibb.co/Xx0DSvCL/naturo-01.jpg"
      ];
    }
    if (id === 'selected-9') {
      return [
        "https://i.ibb.co/Hfm7jHRJ/image.jpg",
        "https://i.ibb.co/gbcm3GLW/xwya-06.jpg",
        "https://i.ibb.co/2YCN8M0y/xwya-07.jpg",
        "https://i.ibb.co/4g7ZD2LJ/xwya-08.jpg"
      ];
    }
    if (id === 'selected-10') {
      return [
        "https://i.ibb.co/fYnbVdbC/huaban-722714134.jpg",
        "https://i.ibb.co/84PfgN11/libai-05.jpg",
        "https://i.ibb.co/fY5m9drR/libai-06.jpg"
      ];
    }
    if (id === 'selected-11') {
      return [
        "https://i.ibb.co/RT9vLNVT/xiao-bai-01.jpg",
        "https://i.ibb.co/5dT26dG/xiao-bai-03.jpg",
        "https://i.ibb.co/6Rg6Pdyc/xiao-bai-04.jpg"
      ];
    }
    if (id === 'selected-12') {
      return [
        "https://i.ibb.co/7xj5zDvc/libaixloopy-ip-01.jpg",
        "https://i.ibb.co/jvg9ncvc/libaixloopy-ip-02.jpg"
      ];
    }
    if (id === 'selected-13') {
      return [
        "https://i.ibb.co/k2FN5nFC/zhijing-02.jpg",
        "https://i.ibb.co/q3B8Wbfs/zhijing-03.jpg",
        "https://i.ibb.co/bR8T444K/zhijing-01.jpg"
      ];
    }
    if (id === 'selected-14') {
      return [
        "https://i.ibb.co/Nd0K598k/qeosy-02.jpg",
        "https://i.ibb.co/pjxgzQSS/qeosy-01.jpg",
        "https://i.ibb.co/BRm6pXH/qeosy-04.jpg"
      ];
    }
    if (id === 'selected-16') {
      return [
        "https://i.ibb.co/1th561WV/xioa-baibai-04.jpg",
        "https://i.ibb.co/Z6FFmNtf/xioa-baibai-02.jpg"
      ];
    }
    if (id === 'tempo-peach') {
      return [
        "https://i.ibb.co/TxkSJR9m/Tempo-01.jpg",
        "https://i.ibb.co/MkMNy00x/Tempo-02.jpg",
        "https://i.ibb.co/Kj99XxZj/Tempo-03.jpg",
        "https://i.ibb.co/S4c4hZJ2/Tempo-04.jpg"
      ];
    }
    if (id === 'naturo-soap') {
      return [
        "https://i.ibb.co/Xx0DSvCL/naturo-01.jpg",
        "https://i.ibb.co/gLDbQXFq/naturo-02.jpg",
        "https://i.ibb.co/8DMbchkC/naturo-03.jpg",
        "https://i.ibb.co/VKqX04b/naturo-05.jpg"
      ];
    }
    if (id === 'libai-handrose') {
      return [
        "https://i.ibb.co/LDFtCJPK/libai-01.jpg"
      ];
    }
    if (id === 'xiaobai-laundry') {
      return [
        "https://i.ibb.co/RT9vLNVT/xiao-bai-01.jpg",
        "https://i.ibb.co/6Rg6Pdyc/xiao-bai-04.jpg",
        "https://i.ibb.co/5dT26dG/xiao-bai-03.jpg",
        "https://i.ibb.co/t9yykQ3/xiao-bai-02.jpg"
      ];
    }
    if (id === 'xiaobai-shoe-cleaner') {
      return [
        "https://i.ibb.co/1th561WV/xioa-baibai-04.jpg",
        "https://i.ibb.co/XfCKwfjX/xioa-baibai-05.jpg"
      ];
    }
    if (id === 'sylvia-scentcard') {
      return [
        "https://i.ibb.co/4ZtfyBYf/xwya-01.jpg",
        "https://i.ibb.co/N8QcNgR/xwya-02.jpg",
        "https://i.ibb.co/1GKbHN7x/xwya-03.jpg",
        "https://i.ibb.co/k2RRk426/xwya-04.jpg"
      ];
    }
    if (id === 'libai-loopy-laundry' || id === 'selected-15') {
      return [
        "https://i.ibb.co/2YqrRYh8/libaixloopy-ip-01.jpg",
        "https://i.ibb.co/VkFxScT/libaixloopy-ip-02.jpg"
      ];
    }
    if (id.startsWith('selected-3') || id.startsWith('more-')) {
      // Industrial / Steel / Chrome / Corporate / Fashion Minimal
      return [
        defaultImage,
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
      ];
    } else if (id.startsWith('selected-2') || id.startsWith('selected-6') || id.startsWith('selected-10')) {
      // Natural Sage Green / Forest botanicals
      return [
        defaultImage,
        "https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599818817343-6d0ca0ca5427?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop"
      ];
    } else if (id.startsWith('selected-1') || id.startsWith('selected-5') || id.startsWith('selected-11')) {
      // Amber glass and apothecary essences
      return [
        defaultImage,
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop"
      ];
    } else {
      // Medical / Premium / Clinical White & Clean
      return [
        defaultImage,
        "https://images.unsplash.com/photo-1579154204601-01588f351167?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
      ];
    }
  };

  const galleryImages = getDetailGalleryImages(project.id, activeImage);

  if (project.id === 'selected-4' || project.id === 'libai-handrose') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        ref={detailContainerRef}
        className="w-full bg-[#fdfbf9] min-h-screen px-6 md:px-12 py-10"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Navigation Floating Actions Area with compressed padding */}
          <div className="flex justify-between items-center border-b border-neutral-100 pb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
            {/* Back Home triggers */}
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-neutral-900 font-semibold group hover:text-neutral-500 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{t('返回首页', 'Back to Index')}</span>
            </button>
          </div>

          {/* Split Content Area - main image removed, only rendering 4 images */}
          <div className="max-w-4xl mx-auto">
            {/* Curated 1-Column Gallery Layout */}
            <div className="grid grid-cols-1 gap-y-[0.2cm]">
              {galleryImages.slice(0, 4).map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-[#fdfdfd] border border-neutral-100"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Detail ${index + 1}`} 
                    referrerPolicy="no-referrer"
                    className={`w-full h-auto transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:opacity-95 filter brightness-[0.98] ${index === 0 ? '' : 'group-hover:scale-105'}`} 
                  />
                  <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom index help controls */}
          <div className="border-t border-neutral-100 pt-10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-widest text-neutral-400 gap-4">
            <span></span>
            <button 
              onClick={onClose}
              className="flex items-center gap-1 text-neutral-900 cursor-pointer hover:underline animate-pulse"
            >
              <CornerDownLeft className="w-3.5 h-3.5" /> {t('返回首页', 'Close and Return')}
            </button>
          </div>

        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      ref={detailContainerRef}
      className="w-full bg-white min-h-screen px-6 md:px-12 py-10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Floating Actions Area with compressed padding */}
        <div className="flex justify-between items-center border-b border-neutral-100 pb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
          
          {/* Back Home triggers */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-neutral-900 font-semibold group hover:text-neutral-500 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t('返回首页', 'Back to Index')}</span>
          </button>

        </div>

        {/* Detail Layout - Top hero banner removed, only remaining 4 images */}
        <div className="space-y-[0.2cm]">
          
          {/* SECOND ROW: 4 Beautiful Detail Images */}
          <div className="space-y-[0.2cm]">
            <div className="grid grid-cols-1 gap-y-[0.2cm]">
              {galleryImages.slice(0, 4).map((imgUrl, index) => {
                const isTempoFourth = (project.id === 'tempo-peach' || project.id === 'selected-1') && (index as number) === 3;
                if (isTempoFourth) {
                  return (
                    <a 
                      key={index} 
                      href="https://www.digitaling.com/projects/79883.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden bg-[#f8f8f8] border border-neutral-100/70 cursor-pointer"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Detail ${index + 1}`} 
                        referrerPolicy="no-referrer"
                        className={`w-full h-auto transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:opacity-90 filter brightness-[0.98] ${index === 0 ? '' : 'group-hover:scale-105'}`} 
                      />
                      {/* Premium soft overlay */}
                      <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </a>
                  );
                }
                return (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-[#f8f8f8] border border-neutral-100/70"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Detail ${index + 1}`} 
                      referrerPolicy="no-referrer"
                      className={`w-full h-auto transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:opacity-90 filter brightness-[0.98] ${index === 0 ? '' : 'group-hover:scale-105'}`} 
                    />
                    {/* Premium soft overlay */}
                    <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom index help controls */}
        <div className="border-t border-neutral-100 pt-10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-widest text-neutral-400 gap-4">
          <span></span>
          <button 
            onClick={onClose}
            className="flex items-center gap-1 text-neutral-900 cursor-pointer hover:underline"
          >
            <CornerDownLeft className="w-3.5 h-3.5" /> {t('返回首页', 'Close and Return')}
          </button>
        </div>

      </div>
    </motion.div>
  );
}
