'use client';

import { useState } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';

export default function NewspaperNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffffff] border-b-2 border-[#111111] sticky top-0 z-50">
      {/* Top micro bar with classic newspaper date, volume, price & status */}
      <div className="max-w-[1360px] mx-auto px-4 py-1.5 border-b border-[#e5e2da] flex items-center justify-between text-[11px] text-[#555555] font-mono tracking-wider">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-[#d9221e] font-bold">VOL. XXVII</span>
          <span>•</span>
          <span className="font-semibold text-[#111111]">SPECIAL BROADSIDE</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">BOWEN UNIVERSITY CITADEL</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-[#d9221e] font-semibold text-[10px] sm:text-[11px] flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d9221e] animate-ping" />
            EMBARGO ACTIVE
          </span>
          <a
            href="https://tally.so/r/aQWj4q"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[#111111] hover:text-[#d9221e] transition-colors font-bold"
          >
            ENROLMENT DOCKET <ArrowUpRight className="w-3 h-3 text-[#d9221e]" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1360px] mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Newspaper Monogram TLN */}
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#d9221e] text-white font-black px-2.5 py-1 tracking-[0.2em] text-sm sm:text-base font-mono group-hover:bg-[#111111] transition-colors">
              TLN
            </div>
            <span className="hidden sm:inline text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              The Lead Newspaper
            </span>
          </a>

          {/* Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.12em]">
            <a href="#" className="text-[#d9221e] border-b-2 border-[#d9221e] pb-0.5">
              Home
            </a>
            <a href="#archives" className="text-[#333333] hover:text-[#d9221e] transition-colors">
              Dispatches
            </a>
            <a href="#citadel" className="text-[#333333] hover:text-[#d9221e] transition-colors">
              Citadel Plenary
            </a>
            <a href="#gallery" className="text-[#333333] hover:text-[#d9221e] transition-colors">
              44-Plate Gallery
            </a>
            <a href="#columns" className="text-[#333333] hover:text-[#d9221e] transition-colors">
              Columns
            </a>
            <a href="#waitlist" className="text-[#333333] hover:text-[#d9221e] transition-colors">
              Registry
            </a>
          </nav>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://tally.so/r/aQWj4q"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#111111] hover:bg-[#d9221e] text-white text-[11px] uppercase tracking-wider font-bold px-3.5 py-1.5 transition-colors font-mono"
          >
            Priority Ticket <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#333333] hover:text-[#d9221e] p-1.5 border border-[#dddddd] hover:border-[#111111] transition-colors"
            title="Inspect 44 Archival Plates"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#111111] p-1.5 border border-[#111111]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-[#111111] bg-[#ffffff] px-5 py-4 flex flex-col gap-3 font-mono text-xs uppercase font-bold tracking-wider divide-y divide-[#eeeeee]">
          <a href="#" onClick={() => setMobileOpen(false)} className="text-[#d9221e] pt-1">1. Home Editorial</a>
          <a href="#archives" onClick={() => setMobileOpen(false)} className="text-[#111111] pt-2">2. Dispatches & Essays</a>
          <a href="#citadel" onClick={() => setMobileOpen(false)} className="text-[#111111] pt-2">3. Citadel Plenary & Monument</a>
          <a href="#gallery" onClick={() => setMobileOpen(false)} className="text-[#111111] pt-2">4. 44 Photographic Plates</a>
          <a href="#columns" onClick={() => setMobileOpen(false)} className="text-[#111111] pt-2">5. Columns & Reports</a>
          <a href="#waitlist" onClick={() => setMobileOpen(false)} className="text-[#d9221e] pt-2 flex items-center justify-between">
            <span>6. Join The LEADers Circle</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}