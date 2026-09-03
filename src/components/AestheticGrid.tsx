import React from 'react';

export default function AestheticGrid() {
  const images = [
    "https://i.ibb.co/RGpMfcJn/slide-01.jpg",
    "https://i.ibb.co/KjT9Zby0/slide-02.jpg",
    "https://i.ibb.co/351JTwbz/slide-03.jpg",
    "https://i.ibb.co/DPMcQBh1/slide-04.jpg"
  ];

  return (
    <section 
      id="aesthetic-grid-section" 
      className="w-full bg-white max-w-7xl mx-auto px-6 md:px-12 select-none"
    >
      <div className="grid grid-cols-2 gap-[0.1cm] w-full">
        {images.map((src, index) => (
          <div 
            key={index} 
            id={`aesthetic-card-${index + 1}`}
            className="relative w-full aspect-[1685/1745] overflow-hidden p-0 m-0 bg-neutral-100"
          >
            <img 
              src={src} 
              alt={`Aesthetic image ${index + 1}`} 
              className="w-full h-full object-cover p-0 m-0 border-0 outline-none block"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
