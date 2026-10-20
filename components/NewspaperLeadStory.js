'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function NewspaperLeadStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#ffffff] border-b-2 border-[#111111] py-8 sm:py-10">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Newspaper Spread Layout:
            Left: The signature crimson red graphical block (Direct TAN aesthetic)
            Right: Editorial bulletin columns with authentic newspaper rules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 8 COLUMNS: Crimson Red Editorial Feature Box */}
          <div className="hero-anim lg:col-span-8 bg-[#d9221e] text-white p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-md border-2 border-[#111111]">
            
            {/* Top Bar inside Red Sheet */}
            <div className="flex flex-wrap items-center justify-between z-10 text-[11px] font-mono tracking-widest uppercase border-b border-white/30 pb-3 gap-2">
              <span className="font-bold bg-black text-white px-2 py-0.5">EXCLUSIVE BROADSIDE</span>
              <span className="text-white/90">DISPATCH NO. 01 • ANNUAL CONVOCATION</span>
            </div>

            {/* Central Content: Quote + Silhouette Cutout Collage */}
            <div className="my-auto py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
              <div className="w-full md:w-3/5 text-left">
                <span className="inline-block text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-black bg-white px-2.5 py-1 mb-3">
                  LEAD EDITORIAL PROCLAMATION
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] font-serif">
                  Not a wall, a staircase.
                </h2>
                
                <p className="mt-4 text-white/95 text-xs sm:text-sm leading-relaxed font-serif text-justify">
                  Real disadvantage, limited opportunity, and institutions that falter more often than they stand explain why building is arduous for young Africans today. Disadvantage explains why building is hard. It has never explained why building has to stop.
                </p>
                
                {/* Priority action link */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://tally.so/r/aQWj4q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white font-mono text-xs uppercase tracking-widest font-bold px-4 py-2.5 transition-all shadow-md border border-white/20"
                  >
                    <span>ENROL FOR PRIORITY ACCESS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d9221e]" />
                  </a>
                  <span className="text-[10px] font-mono tracking-wider text-black bg-white/80 px-2 py-1 font-bold uppercase">
                    [ THEME CLASSIFIED ]
                  </span>
                </div>
              </div>

              {/* Graphic Cutout - Newspaper Reader collage */}
              <div className="w-full md:w-2/5 flex items-center justify-center relative mt-4 md:mt-0">
                <div className="w-52 h-52 sm:w-64 sm:h-64 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/15 border-2 border-white/40 transform -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                  <img
                    src="/assets/magazine-reading.png"
                    alt="LEAD Reader broadside illustration"
                    className="w-full h-full object-contain relative z-10 filter contrast-125 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Red Box */}
            <div className="pt-3 border-t border-white/30 flex flex-wrap justify-between items-center text-[10px] font-mono tracking-wider text-white/90 z-10 gap-2">
              <span>LEAD CITADEL DISPATCH • BOWEN UNIVERSITY</span>
              <span className="font-bold">OFFICIAL THEME UNDER ENCRYPTED EMBARGO</span>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Vertical Newspaper Article Column Stack on White */}
          <div className="hero-anim lg:col-span-4 flex flex-col justify-between bg-[#fbfbf9] border-2 border-[#111111] divide-y divide-[#111111]">
            
            {/* Story 1 */}
            <div className="p-5 flex flex-col justify-between flex-1 group hover:bg-[#ffffff] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d9221e] uppercase font-bold block mb-1">
                  7 November 2026 • KEYNOTE DISPATCH
                </span>
                <a
                  href="#gallery"
                  className="text-sm sm:text-base font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug line-clamp-2 block"
                >
                  The convocation of builders in 2026: from the historic lecture amphitheatre to the national stage.
                </a>
                <p className="text-xs text-[#555555] font-serif mt-1.5 line-clamp-2">
                  Key architects reflect on student-led initiatives that shaped civic and economic resilience across Nigerian campuses.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e5e2da] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#666666] font-semibold">CITADEL ARCHIVE</span>
                <span className="text-[#d9221e] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  READ ↗
                </span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-5 flex flex-col justify-between flex-1 group hover:bg-[#ffffff] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d9221e] uppercase font-bold block mb-1">
                  4 November 2026 • EMBARGO NOTICE
                </span>
                <a
                  href="https://tally.so/r/aQWj4q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug line-clamp-2 block"
                >
                  Strict confidential embargo remains on the 2026 theme title until the premiere reveal dispatch.
                </a>
                <p className="text-xs text-[#555555] font-serif mt-1.5 line-clamp-2">
                  Priority notifications are reserved exclusively for candidates listed on the official Tally registry.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e5e2da] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#d9221e] font-bold">OFFICIAL DOCKET</span>
                <span className="text-[#d9221e] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  JOIN ↗
                </span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-5 flex flex-col justify-between flex-1 group hover:bg-[#ffffff] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#d9221e] uppercase font-bold block mb-1">
                  1 November 2026 • 44 PLATES RECORD
                </span>
                <a
                  href="#gallery"
                  className="text-sm sm:text-base font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug line-clamp-2 block"
                >
                  Entering the photo engravings: 44 photographic plates documenting student audacity and vision.
                </a>
                <p className="text-xs text-[#555555] font-serif mt-1.5 line-clamp-2">
                  Authenticated high-resolution photographic proof sheets capturing keynotes, debates, and delegations.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e5e2da] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#666666] font-semibold">PHOTOGRAPHY</span>
                <span className="text-[#d9221e] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  VIEW ↗
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}