'use client';

import { ArrowUpRight, User, Mail } from 'lucide-react';

export default function NewspaperWaitlist() {
  return (
    <section id="waitlist" className="w-full bg-[#fbfbf9] border-b-2 border-[#111111] py-12 sm:py-16">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#111111] mb-8 gap-2">
          <div>
            <h2 className="tan-section-title text-[#111111]">THE LEADERS CIRCLE ENROLMENT</h2>
            <p className="text-xs text-[#666666] font-mono mt-0.5">
              OFFICIAL TELEGRAPH REGISTRY • BOWEN UNIVERSITY CONVOCATION
            </p>
          </div>
          <span className="text-[10px] font-mono bg-[#d9221e] text-white font-bold px-2.5 py-1 uppercase">
            PRIORITY PASS
          </span>
        </div>

        {/* 2-Column Split: Editorial Manifesto + Interactive Tally Coupon Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 7 Columns: Editorial Manifesto & Convening Rights */}
          <div className="lg:col-span-7 bg-[#ffffff] border-2 border-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-[#111111] pb-3 mb-4 text-xs font-mono text-[#555555]">
                <span className="text-[#d9221e] font-bold">CIRCULAR NO. 2026/27</span>
                <span className="font-bold text-[#111111]">CONFIDENTIAL EMBARGO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#111111] mb-3 leading-tight">
                Be the First to Receive the Unsealed 2026 Theme
              </h3>

              <p className="text-xs sm:text-sm text-[#444444] font-serif leading-relaxed mb-6 text-justify">
                Notice is hereby given to all aspiring delegates, entrepreneurs, builders, and practitioners: 
                entry into <strong className="text-[#111111]">The LEADers Circle</strong> guarantees priority reception when 
                the sealed conference theme is unreservedly proclaimed to the nation.
              </p>

              {/* Convening Rights */}
              <div className="space-y-3 font-mono text-xs text-[#222222] border-t-2 border-[#111111] pt-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#d9221e] font-bold">§ 1.</span>
                  <span>Direct personal notification at the instant of the official Theme Reveal.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#d9221e] font-bold">§ 2.</span>
                  <span>Priority seat allocation at the Bowen University Citadel Plenary.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#d9221e] font-bold">§ 3.</span>
                  <span>Exclusive access to executive monographs, workshop briefs, and builder roundtables.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#111111] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#666666]">
              <span>SIGNED: SECRETARIAT OF THE CONVOCATION</span>
              <span className="text-[#d9221e] font-bold">BOWEN UNIVERSITY • IWO</span>
            </div>
          </div>

          {/* Right 5 Columns: Printed Telegraph Coupon Form on White Broadside */}
          <div className="lg:col-span-5 bg-[#ffffff] border-2 border-dashed border-[#111111] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#d9221e] transition-colors shadow-sm">
            
            {/* Cut mark badge */}
            <div className="absolute -top-3 left-6 bg-[#ffffff] px-2 text-[9px] font-mono tracking-widest uppercase text-[#555555] border border-[#111111] font-bold">
              ✂ OFFICIAL REGISTRY COUPON
            </div>

            <div>
              <div className="text-center pb-4 mb-5 border-b border-[#111111]">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#d9221e] block">
                  PRIORITY ENROLMENT COUPON
                </span>
                <h4 className="text-xl font-serif font-black text-[#111111] mt-1">
                  Enter The LEADers Circle
                </h4>
                <p className="text-xs text-[#666666] font-sans mt-0.5">
                  Complete registration via the official Tally docket.
                </p>
              </div>

              {/* Form redirecting to user's Tally link */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open('https://tally.so/r/aQWj4q', '_blank');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#333333] font-bold mb-1">
                    Your Full Name:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Adebayo Ogunlesi"
                      required
                      className="w-full bg-[#fbfbf9] border-2 border-[#111111] focus:border-[#d9221e] text-[#111111] text-xs font-sans pl-9 pr-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#333333] font-bold mb-1">
                    Your Email Address:
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="e.g. builder@bowen.edu.ng"
                      required
                      className="w-full bg-[#fbfbf9] border-2 border-[#111111] focus:border-[#d9221e] text-[#111111] text-xs font-sans pl-9 pr-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d9221e] hover:bg-[#111111] text-white font-mono text-xs uppercase font-bold tracking-widest py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-md mt-2"
                >
                  <span>SUBMIT TO OFFICIAL TALLY DOCKET</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Direct Tally Link Fallback */}
            <div className="mt-6 pt-4 border-t border-[#e5e2da] text-center">
              <a
                href="https://tally.so/r/aQWj4q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#555555] hover:text-[#d9221e] font-bold transition-colors"
              >
                <span>Direct link: https://tally.so/r/aQWj4q</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d9221e]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}