'use client';

import { ArrowUpRight } from 'lucide-react';

const columnsList = [
  {
    title: 'Direct dispatches from the ongoing leadership roundtables across university faculties.',
    tag: 'KEY DISPATCH',
    category: 'LEADERSHIP',
    img: '/assets/img (7).jpg'
  },
  {
    title: 'Report: how founders and student executives band together to seed new venture cohorts.',
    tag: 'SPECIAL REPORT',
    category: 'COHORTS',
    img: '/assets/img (8).jpg'
  },
  {
    title: 'Long-term thesis: how ethical builders create resilient infrastructure without fanfare.',
    tag: 'OPINION',
    category: 'THESIS',
    img: '/assets/img (9).jpg'
  },
  {
    title: 'Campus chronicles: retrospective on historic convene sessions and delegate growth.',
    tag: 'ARCHIVE',
    category: 'HISTORY',
    img: '/assets/img (10).jpg'
  }
];

export default function NewspaperColumns() {
  return (
    <section id="columns" className="w-full bg-[#ffffff] border-b-2 border-[#111111] py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] mb-8">
          <div>
            <h2 className="tan-section-title text-[#111111]">COLUMNS & CHRONICLES</h2>
            <p className="text-[11px] font-mono text-[#666666] uppercase mt-0.5">
              SECTION 04 • WEEKLY BULLETINS, ESSAYS & GUEST VOICES
            </p>
          </div>
          <a
            href="https://tally.so/r/aQWj4q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono uppercase font-bold text-[#111111] hover:text-[#d9221e] transition-colors inline-flex items-center gap-1"
          >
            READ ALL <ArrowUpRight className="w-3.5 h-3.5 text-[#d9221e]" />
          </a>
        </div>

        {/* Top 2 Big Column Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#e5e2da]">
          {columnsList.slice(0, 2).map((col, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="w-full h-56 sm:h-72 bg-[#f5f4f0] border-2 border-[#111111] overflow-hidden relative shadow-sm">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="tan-tag-red">{col.tag}</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-[10px] font-mono text-[#666666] uppercase block mb-1 font-semibold">
                  COLUMN 0{idx + 1} • {col.category}
                </span>
                <a
                  href="https://tally.so/r/aQWj4q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug block"
                >
                  {col.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Small Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {columnsList.map((col, idx) => (
            <div key={idx} className="flex flex-col justify-between group border-b sm:border-b-0 border-[#e5e2da] pb-4 sm:pb-0">
              <div className="w-full h-40 bg-[#f5f4f0] border-2 border-[#111111] overflow-hidden">
                <img
                  src={`/assets/img (${idx + 11}).jpg`}
                  alt="Column thumb"
                  className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex flex-col justify-between flex-1">
                <a
                  href="https://tally.so/r/aQWj4q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug line-clamp-2"
                >
                  {col.title}
                </a>
                <div className="mt-3 pt-2 border-t border-[#e5e2da]">
                  <span className="tan-tag text-[9px]">{col.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}