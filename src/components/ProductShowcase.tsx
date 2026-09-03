import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ROW1_IMAGES = [
  "https://i.ibb.co/0RDK82Lx/di-01.jpg",
  "https://i.ibb.co/tpgMhVZ3/di-02.jpg",
  "https://i.ibb.co/mVpn0rgg/di-03.jpg",
  "https://i.ibb.co/WpFmyzdK/di-06.jpg",
  "https://i.ibb.co/chBWC55S/di-05.jpg",
  "https://i.ibb.co/b5ZncLTD/di-04.jpg",
  "https://i.ibb.co/0jnCpfJx/di-08.jpg",
  "https://i.ibb.co/JFgQQz9M/di-09.jpg",
  "https://i.ibb.co/XkZ5kDy5/di-10.jpg",
  "https://i.ibb.co/RGs2LmNN/di-11.jpg"
];

const ROW2_IMAGES = [
  "https://i.ibb.co/RTSm47qk/di-12.jpg",
  "https://i.ibb.co/tpw5fcbK/di-13.jpg",
  "https://i.ibb.co/m5byDwTC/di-14.jpg",
  "https://i.ibb.co/ZpnBx422/di-15.jpg",
  "https://i.ibb.co/v4D2PRwv/di-16.jpg",
  "https://i.ibb.co/BSs1kWm/di-17.jpg",
  "https://i.ibb.co/mVbcMKQX/di-18.jpg",
  "https://i.ibb.co/cX2jBGPV/di-19.jpg",
  "https://i.ibb.co/fdF0YWY1/di-20.jpg"
];

export default function ProductShowcase() {
  const { t } = useLanguage();

  // We loop the arrays twice to create seamless continuous scrolling
  const loopRow1 = [...ROW1_IMAGES, ...ROW1_IMAGES];
  const loopRow2 = [...ROW2_IMAGES, ...ROW2_IMAGES];

  return (
    <section 
      id="product-showcase-section"
      className="w-full bg-white select-none py-12 md:py-16 overflow-hidden"
    >
      {/* Self-contained high-performance marquee keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 38s linear infinite;
        }
        /* Pause scroll on hover of a specific row */
        .marquee-row:hover .animate-marquee-left,
        .marquee-row:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Block Header Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-b border-neutral-100 pb-4 mb-8">
        <h3 className="font-sans text-3xl sm:text-4xl tracking-tight font-medium text-neutral-900">
          {t('产品展示', 'Product Showcase')}
        </h3>
      </div>

      {/* Horizontal Stretchy Full Bleed Slider Columns */}
      <div className="w-full flex flex-col gap-[0.1cm] marquee-wrapper">
        
        {/* Row 1: Leftward rolling stream */}
        <div className="w-full overflow-hidden flex whitespace-nowrap marquee-row">
          <div className="animate-marquee-left flex gap-[0.1cm]">
            {loopRow1.map((imgUrl, idx) => (
              <div 
                key={`row1-${idx}`} 
                className="w-[200px] sm:w-[260px] aspect-square bg-[#fcfcfc] overflow-hidden flex-shrink-0 cursor-default select-none rounded-none"
              >
                <img
                  src={imgUrl}
                  alt={`Product Showcase item ${idx}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Unified leftward rolling stream */}
        <div className="w-full overflow-hidden flex whitespace-nowrap marquee-row">
          <div className="animate-marquee-left flex gap-[0.1cm]">
            {loopRow2.map((imgUrl, idx) => (
              <div 
                key={`row2-${idx}`} 
                className="w-[200px] sm:w-[260px] aspect-square bg-[#fcfcfc] overflow-hidden flex-shrink-0 cursor-default select-none rounded-none"
              >
                <img
                  src={imgUrl}
                  alt={`Product Showcase item ${idx}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
