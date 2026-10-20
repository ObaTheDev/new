'use client';

export default function NewspaperMasthead() {
  return (
    <div className="w-full bg-[#ffffff] border-b-2 border-[#111111] pt-6 sm:pt-10 pb-6 text-center">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Newspaper Ear Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#555555] pb-3 mb-4 border-b border-[#111111] gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#d9221e]">VOL. XXVII</span>
            <span>•</span>
            <span>ISSUE NO. 001</span>
            <span>•</span>
            <span>IWO, OSUN STATE</span>
          </div>
          <div className="hidden md:block font-bold text-[#111111] tracking-[0.25em]">
            ★ SPECIAL BROADSIDE EXTRAORDINARY ★
          </div>
          <div className="flex items-center gap-2">
            <span>PRICE: GRATIS</span>
            <span>•</span>
            <span className="text-[#d9221e] font-bold">THEME: EMBARGOED</span>
          </div>
        </div>

        {/* Authentic Giant Newspaper Nameplate */}
        <h1 className="tan-masthead text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] tracking-[0.03em] text-[#111111] leading-none">
          THE LEAD NEWSPAPER
        </h1>

        {/* Editorial Subtitle & Double Rules */}
        <div className="mt-4 pt-2 border-t-2 border-b border-[#111111] flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-[#333333] py-1.5 px-2 gap-2">
          <span className="font-bold">BOWEN UNIVERSITY LEADERSHIP CONVOCATION</span>
          <span className="text-[#d9221e] font-black">✦ ✦ ✦</span>
          <span>SPECIAL BROADSIDE EDITION</span>
          <span className="text-[#d9221e] font-black">✦ ✦ ✦</span>
          <span className="font-bold text-[#111111]">NATIONWIDE CIRCULATION</span>
        </div>

      </div>
    </div>
  );
}