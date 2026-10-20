'use client';

export default function NewspaperFooter() {
  return (
    <footer className="w-full bg-[#111111] text-[#ffffff] border-t-4 border-[#d9221e] pt-12 pb-8">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2b2b2b]">
          
          {/* Logo Badge */}
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2">
              <div className="bg-[#d9221e] text-white font-black px-2.5 py-1 tracking-[0.2em] text-sm font-mono">
                TLN
              </div>
              <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                The Lead Newspaper
              </span>
            </div>
            <p className="mt-3 text-xs text-[#a0a0a0] font-serif leading-relaxed">
              Published at Bowen University, Iwo, Osun State. The official chronicle for the annual leadership convocation.
            </p>
          </div>

          {/* Col 1: CHAPTER */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white mb-4">
              CHAPTERS & SECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#a0a0a0]">
              <li><a href="#" className="hover:text-white transition-colors">Home Editorial</a></li>
              <li><a href="#archives" className="hover:text-white transition-colors">Dispatches & Essays</a></li>
              <li><a href="#citadel" className="hover:text-white transition-colors">Citadel Plenary & Monument</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">44 Photographic Plates</a></li>
              <li><a href="#columns" className="hover:text-white transition-colors">Columns & Chronicles</a></li>
            </ul>
          </div>

          {/* Col 2: SOCIAL */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white mb-4">
              CONVOCATION DISPATCH
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#a0a0a0]">
              <li><a href="https://tally.so/r/aQWj4q" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9221e] transition-colors font-bold text-white">Official Tally Registry ↗</a></li>
              <li><span className="hover:text-white cursor-pointer">Instagram @bowenlead</span></li>
              <li><span className="hover:text-white cursor-pointer">Twitter / X @leadbowen</span></li>
              <li><span className="hover:text-white cursor-pointer">LinkedIn Leadership Network</span></li>
            </ul>
          </div>

          {/* Col 3: CONTACT & EMBARGO */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-white mb-4">
              SECRETARIAT DESK
            </h4>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">
              Bowen University Campus,<br />
              Iwo, Osun State, Nigeria.<br />
              secretariat@bowenlead.org
            </p>
            <div className="mt-3 inline-block bg-[#1f1f1f] border border-[#d9221e] px-2.5 py-1 text-[10px] font-mono text-[#d9221e] font-bold">
              STATUS: THEME EMBARGO ACTIVE
            </div>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-[#888888]">
          <div>
            © 2026 THE LEAD NEWSPAPER • ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>NO THEME REVEAL UNTIL PREMIERE</span>
            <span>•</span>
            <a href="https://tally.so/r/aQWj4q" target="_blank" rel="noopener noreferrer" className="text-[#d9221e] hover:underline font-bold">
              ENROLMENT OPEN ↗
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}