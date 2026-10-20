'use client';

import { useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const totalImages = 44;
const allPlates = Array.from({ length: totalImages }, (_, i) => ({
  id: i + 1,
  src: `/assets/img (${i + 1}).jpg`,
  plate: `PLATE ${String(i + 1).padStart(3, '0')}`,
  category:
    i % 4 === 0
      ? 'KEYNOTE FORUM'
      : i % 4 === 1
      ? 'CITADEL PLENARY'
      : i % 4 === 2
      ? 'EXECUTIVE AUDITORIUM'
      : 'DELEGATE ENGAGEMENT',
  caption: `Official Convocation Archive Record #${String(i + 1).padStart(3, '0')} • LEAD Annual Convening`
}));

export default function NewspaperGallery() {
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(16);

  const filteredPlates = filter === 'ALL' 
    ? allPlates 
    : allPlates.filter(p => p.category === filter);

  // 2 Museum Lead Plates
  const leadPlate1 = allPlates[0]; // img (1)
  const leadPlate2 = allPlates[1]; // img (2)

  const handleNext = () => {
    if (!activeModalImg) return;
    const currentIdx = allPlates.findIndex(p => p.id === activeModalImg.id);
    const nextIdx = (currentIdx + 1) % allPlates.length;
    setActiveModalImg(allPlates[nextIdx]);
  };

  const handlePrev = () => {
    if (!activeModalImg) return;
    const currentIdx = allPlates.findIndex(p => p.id === activeModalImg.id);
    const prevIdx = (currentIdx - 1 + allPlates.length) % allPlates.length;
    setActiveModalImg(allPlates[prevIdx]);
  };

  return (
    <section id="gallery" className="w-full bg-[#ffffff] border-b-2 border-[#111111] py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#111111] mb-8 gap-3">
          <div>
            <h2 className="tan-section-title text-[#111111]">PICTORIAL ARCHIVES (44 PLATES)</h2>
            <p className="text-xs text-[#555555] font-mono mt-0.5">
              AUTHENTICATED PHOTOGRAPHIC ENGRAVINGS FROM THE CONVOCATION DOCKET
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-white bg-[#111111] px-2.5 py-1 font-bold uppercase">
              44 ARCHIVED PRINTS
            </span>
            <span className="text-[10px] font-mono text-white bg-[#d9221e] px-2.5 py-1 font-bold uppercase">
              CITADEL GAZETTE
            </span>
          </div>
        </div>

        {/* TOP MUSEUM-STYLE 2-COLUMN BIG FEATURE (Exact TAN reference "MUSEUM" section on white broadside) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b-2 border-[#111111]">
          
          {/* Feature 1 */}
          <div className="flex flex-col group cursor-pointer" onClick={() => setActiveModalImg(leadPlate1)}>
            <div className="w-full h-72 sm:h-80 md:h-96 bg-[#f5f4f0] border-2 border-[#111111] overflow-hidden relative shadow-sm">
              <img
                src={leadPlate1.src}
                alt={leadPlate1.caption}
                className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#111111] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                {leadPlate1.plate}
              </div>
              <div className="absolute inset-0 bg-[#d9221e]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#111111] text-white font-mono text-xs px-3 py-1.5 uppercase flex items-center gap-1.5 border border-white">
                  <Eye className="w-3.5 h-3.5 text-[#d9221e]" /> INSPECT FULL PLATE
                </span>
              </div>
            </div>

            <div className="mt-4">
              <span className="tan-tag mb-1.5">{leadPlate1.category}</span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-tight">
                CONVOCATION HALL IN UNISON: THE FIRST PLENARY ADDRESS
              </h3>
              <p className="text-xs text-[#555555] font-serif mt-2 line-clamp-2 text-justify">
                Under the historic vaulted ceilings of Bowen University, hundreds of forward-thinking builders convene for the plenary session.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#666666] pt-2 border-t border-[#e5e2da]">
                <span>ARCHIVAL PLATE • CITADEL HALL</span>
                <span className="text-[#d9221e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                  READ ALL ↗
                </span>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col group cursor-pointer" onClick={() => setActiveModalImg(leadPlate2)}>
            <div className="w-full h-72 sm:h-80 md:h-96 bg-[#f5f4f0] border-2 border-[#111111] overflow-hidden relative shadow-sm">
              <img
                src={leadPlate2.src}
                alt={leadPlate2.caption}
                className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#111111] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                {leadPlate2.plate}
              </div>
              <div className="absolute inset-0 bg-[#d9221e]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#111111] text-white font-mono text-xs px-3 py-1.5 uppercase flex items-center gap-1.5 border border-white">
                  <Eye className="w-3.5 h-3.5 text-[#d9221e]" /> INSPECT FULL PLATE
                </span>
              </div>
            </div>

            <div className="mt-4">
              <span className="tan-tag mb-1.5">{leadPlate2.category}</span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-tight">
                THE CITADEL FORUM: DISCIPLINE & ART OF EXECUTION
              </h3>
              <p className="text-xs text-[#555555] font-serif mt-2 line-clamp-2 text-justify">
                Delegates and keynote practitioners dissect frameworks of institutional resilience, ethical leadership, and high-velocity craftsmanship.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#666666] pt-2 border-t border-[#e5e2da]">
                <span>ARCHIVAL PLATE • EXECUTIVE PLENARY</span>
                <span className="text-[#d9221e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                  READ ALL ↗
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 44 PLATES COMPLETE GALLERY CONTACT GRID */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase font-bold text-[#111111] tracking-widest">
                COMPLETE CONTACT SHEET:
              </span>
              <span className="text-xs font-mono font-bold text-[#d9221e]">
                ({filteredPlates.length} PLATES RECORDED)
              </span>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono uppercase">
              {['ALL', 'KEYNOTE FORUM', 'CITADEL PLENARY', 'EXECUTIVE AUDITORIUM', 'DELEGATE ENGAGEMENT'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-2.5 py-1 transition-colors border font-bold ${
                    filter === cat
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#f7f6f2] text-[#444444] border-[#d4d0c8] hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Newspaper Photo Grid: Responsive 2-col on mobile, 3-col on tablet, 4-col on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredPlates.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalImg(item)}
                className="bg-[#fbfbf9] border-2 border-[#111111] p-2.5 flex flex-col justify-between group cursor-pointer hover:border-[#d9221e] hover:shadow-md transition-all"
              >
                <div className="w-full h-36 sm:h-44 md:h-48 bg-[#f0eee9] overflow-hidden relative border border-[#111111]">
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#111111] text-[9px] font-mono text-white px-1.5 py-0.5 font-bold">
                    {item.plate}
                  </div>
                </div>

                <div className="mt-2.5">
                  <div className="flex justify-between items-center text-[9px] font-mono mb-1">
                    <span className="text-[#d9221e] font-bold">{item.category}</span>
                    <span className="text-[#666666]">#0{item.id}</span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors line-clamp-1">
                    {item.caption}
                  </h4>
                  <div className="mt-2 pt-1 border-t border-[#e5e2da] flex items-center justify-between text-[9px] font-mono text-[#666666]">
                    <span>INSPECT PRINT</span>
                    <span className="text-[#d9221e] font-bold">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reveal More Archival Plates */}
          {visibleCount < filteredPlates.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredPlates.length))}
                className="bg-[#ffffff] hover:bg-[#111111] text-[#111111] hover:text-white border-2 border-[#111111] font-mono text-xs uppercase tracking-widest font-bold px-8 py-3 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>REVEAL MORE ARCHIVAL PLATES ({visibleCount} / {filteredPlates.length})</span>
                <span className="text-[#d9221e]">↓</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* LIGHTBOX MODAL FOR FULL SCREEN PLATE INSPECTION */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#ffffff] border-4 border-[#111111] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] text-xs font-mono text-[#555555]">
              <div className="flex items-center gap-2">
                <span className="bg-[#d9221e] text-white font-bold px-2 py-0.5">{activeModalImg.plate}</span>
                <span className="text-[#111111] font-bold uppercase">{activeModalImg.category}</span>
              </div>
              <button
                onClick={() => setActiveModalImg(null)}
                className="text-[#111111] hover:text-[#d9221e] p-1 border border-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="w-full max-h-[65vh] bg-[#f5f4f0] flex items-center justify-center overflow-hidden border-2 border-[#111111]">
              <img
                src={activeModalImg.src}
                alt={activeModalImg.caption}
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Bottom Caption & Controls */}
            <div className="mt-4 pt-3 border-t-2 border-[#111111] flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm font-serif font-bold text-[#111111]">
                  {activeModalImg.caption}
                </p>
                <p className="text-[11px] font-mono text-[#666666] mt-0.5">
                  Bowen University, Iwo, Osun State • The LEAD Convocation Photographic Docket
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handlePrev}
                  className="bg-[#111111] hover:bg-[#d9221e] text-white p-2 transition-colors"
                  title="Previous plate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#111111] px-2">
                  #{activeModalImg.id} of {totalImages}
                </span>
                <button
                  onClick={handleNext}
                  className="bg-[#111111] hover:bg-[#d9221e] text-white p-2 transition-colors"
                  title="Next plate"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}