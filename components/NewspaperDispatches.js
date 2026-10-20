'use client';

import { ArrowUpRight } from 'lucide-react';

const dispatches = [
  {
    tag: 'EDITORIAL REVIEW',
    title: 'THE ARCHITECTURE OF CONVICTION: BUILDING UNDER CONSTRAINT',
    desc: 'An inquiry into how youth-driven enterprise reconstructs regional economies despite systemic headwind.',
    img: '/assets/img (1).jpg',
  },
  {
    tag: 'CITADEL INTERVIEW',
    title: 'VOICES OF THE FELLOWSHIP: THE PATIENCE TO BUILD ENDURING INSTITUTIONS',
    desc: 'LEAD convocation delegates talk building endurance, community scaffolding, and leadership ethics.',
    img: '/assets/img (2).jpg',
  },
  {
    tag: 'FIELD REPORT',
    title: 'MAPPING STUDENT-LED ENTERPRISES ACROSS NIGERIAN CAMPUSES',
    desc: 'From initial prototype labs to national ventures: mapping the trajectory of summit fellows and builders.',
    img: '/assets/img (3).jpg',
  },
  {
    tag: 'ESSAY & PERSPECTIVE',
    title: 'THE DIGNITY OF THE CRAFT: LESSONS FROM THE CITADEL AMPHITHEATRE',
    desc: 'Why technical mastery and unyielding resolve remain the bedrock of authentic institutional reform.',
    img: '/assets/img (4).jpg',
  }
];

export default function NewspaperDispatches() {
  return (
    <section id="archives" className="w-full bg-[#ffffff] border-b-2 border-[#111111] py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Newspaper Section Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#111111] mb-8 gap-2">
          <div>
            <h2 className="tan-section-title text-[#111111]">DISPATCHES & ESSAYS</h2>
            <p className="text-[11px] font-mono text-[#666666] uppercase mt-0.5">
              SECTION 01 • ESSAYS, INVESTIGATIONS & CITADEL VOICES
            </p>
          </div>
          <span className="text-[11px] font-mono font-bold text-[#d9221e] uppercase">
            CHRONICLE ESSAYS
          </span>
        </div>

        {/* 4-Item Grid in authentic newspaper card format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {dispatches.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-5 items-start group border-b sm:border-b-0 border-[#e5e2da] pb-6 sm:pb-0"
            >
              {/* Photo Box with clean newspaper border */}
              <div className="w-full sm:w-48 sm:h-36 h-48 flex-shrink-0 bg-[#f5f4f0] border-2 border-[#111111] overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover tan-img-filter group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5">
                  PLATE #{idx + 1}
                </span>
              </div>

              {/* Text metadata */}
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <span className="tan-tag mb-2">{item.tag}</span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-snug mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-serif mt-2 line-clamp-3 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#e5e2da] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#888888] uppercase">LEAD CHRONICLE</span>
                  <a
                    href="https://tally.so/r/aQWj4q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors"
                  >
                    READ DISPATCH <ArrowUpRight className="w-3 h-3 text-[#d9221e]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}