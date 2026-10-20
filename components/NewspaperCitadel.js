'use client';

import { ArrowUpRight } from 'lucide-react';

const sessions = [
  {
    date: '12 December 2026',
    title: 'Audacity under constraint: is early execution a breakthrough or standard discipline?',
    tag: 'LISTEN NOW',
    isRed: true,
  },
  {
    date: '5 December 2026',
    title: 'The art of building enduring community across tertiary university boundaries.',
    tag: 'AUDIO SERIES',
    isRed: false,
  },
  {
    date: '1 December 2026',
    title: 'Embarrassing flaws or necessary experiments: what will endure from the 2026 convening?',
    tag: 'TRANSCRIPT',
    isRed: false,
  }
];

export default function NewspaperCitadel() {
  return (
    <section id="citadel" className="w-full bg-[#ffffff] border-b-2 border-[#111111] py-10 sm:py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#111111] mb-8 gap-2">
          <div>
            <h2 className="tan-section-title text-[#111111]">CITADEL PLENARY & RECORDINGS</h2>
            <p className="text-[11px] font-mono text-[#666666] uppercase mt-0.5">
              SECTION 02 • ARCHITECTURAL MONUMENTS & RECORDED PROCEEDINGS
            </p>
          </div>
          <span className="text-[11px] font-mono font-bold text-[#d9221e] uppercase">
            BOWEN CAMPUS MONUMENT
          </span>
        </div>

        {/* 2-Column Newspaper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature Card: The Senate Building architectural plate in crisp white paper lithograph style */}
          <div className="lg:col-span-7 bg-[#fbfbf9] border-2 border-[#111111] p-6 sm:p-8 flex flex-col justify-between group">
            
            <div className="flex justify-between items-center text-[10px] font-mono uppercase pb-3 border-b border-[#111111] text-[#555555]">
              <span className="font-bold text-[#111111]">HISTORIC CITADEL MONUMENT</span>
              <span className="text-[#d9221e] font-bold">PLATE NO. 00 • ARCHIVAL ENGRAVING</span>
            </div>

            {/* The Senate Building Illustration in crisp white / light backdrop */}
            <div className="w-full h-64 sm:h-80 bg-[#ffffff] my-5 flex items-center justify-center p-6 border-2 border-[#111111] relative overflow-hidden shadow-inner">
              <img
                src="/assets/Senate-building-illustration.svg"
                alt="Bowen University Senate Citadel Monument"
                className="w-full h-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#111111] text-white font-mono text-[9px] font-bold px-2 py-0.5 uppercase">
                Senate Citadel
              </div>
            </div>

            <div>
              <span className="tan-tag mb-2">ARCHITECTURAL MONUMENT</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors leading-tight">
                The Bowen University Senate Citadel: Sanctuary of the LEAD Convocation
              </h3>
              <p className="text-xs text-[#555555] font-serif mt-2 leading-relaxed text-justify">
                The historic physical site where the annual gathering convenes practitioners, educators, founders, and scholars to set the agenda for student leadership and generational agency.
              </p>
              
              <div className="mt-5 pt-3 border-t border-[#111111] flex flex-wrap items-center justify-between text-[11px] font-mono gap-2">
                <span className="text-[#666666] font-semibold">IWO, OSUN STATE • NIGERIA</span>
                <a
                  href="https://tally.so/r/aQWj4q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors"
                >
                  JOIN DELEGATION <ArrowUpRight className="w-3.5 h-3.5 text-[#d9221e]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Audio & Transcript Records Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              {sessions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbfbf9] border-2 border-[#111111] p-4 flex gap-4 items-center group hover:bg-[#ffffff] hover:border-[#d9221e] transition-all"
                >
                  {/* Square thumbnail tile */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-[#f0eee9] border-2 border-[#111111] overflow-hidden">
                    <img
                      src={`/assets/img (${idx + 5}).jpg`}
                      alt="Plenary thumb"
                      className="w-full h-full object-cover tan-img-filter"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] font-mono text-[#d9221e] font-bold block">
                        {item.date}
                      </span>
                      <a
                        href="https://tally.so/r/aQWj4q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-serif font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors line-clamp-2 leading-snug mt-1 block"
                      >
                        {item.title}
                      </a>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 uppercase ${
                          item.isRed
                            ? 'bg-[#d9221e] text-white'
                            : 'bg-[#111111] text-white'
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#111111] group-hover:text-[#d9221e] transition-colors">
                        RECORD ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Embargo Notice Box on White Broadside */}
            <div className="border-2 border-dashed border-[#d9221e] p-5 bg-[#fff8f8]">
              <span className="text-[10px] font-mono uppercase font-bold text-[#d9221e] tracking-widest block">
                CLASSIFIED CITADEL DISPATCH
              </span>
              <p className="text-xs font-serif text-[#222222] mt-1.5 leading-snug">
                Theme release priority is granted only to registered attendees prior to public proclamation. Secure priority placement on the official docket.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}