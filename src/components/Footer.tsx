import React from "react";
import { Language } from "../types";

interface FooterProps {
  currentLang: Language;
  dict: any;
}

export default function Footer({ currentLang, dict }: FooterProps) {
  return (
    <footer className="bg-[#121C4F] dark:bg-stone-950 text-stone-300 dark:text-stone-400 py-16 px-6 text-center select-none border-t border-[#121C4F] dark:border-stone-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h5 className="text-white dark:text-sky-400 text-lg font-black tracking-wide uppercase">
          {dict[currentLang].footer_title}
        </h5>
        
        <div className="text-xs max-w-2xl mx-auto space-y-2.5 font-medium leading-relaxed text-stone-300/80 dark:text-stone-400/80">
          <p>{dict[currentLang].footer_p1}</p>
          <p>{dict[currentLang].footer_p2}</p>
        </div>

        {/* Dynamic color branding dots */}
        <div className="flex justify-center space-x-3.5 my-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#F58220]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF]"></div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] text-stone-400 dark:text-stone-500 font-extrabold tracking-widest uppercase">
            © 2026 The Dewey Schools & ERPC. All Rights Reserved.
          </p>
          <a 
            href="#admin" 
            onClick={() => window.location.hash = "admin"}
            className="text-[9px] text-stone-600 dark:text-stone-700 hover:text-stone-400 dark:hover:text-stone-500 transition-colors uppercase font-black tracking-[0.2em]"
          >
            Terminal Admin
          </a>
        </div>

        {dict[currentLang]?.footer_copyright_certified && (
          <div className="pt-2 text-[11px] text-[#00AEEF] dark:text-sky-400 font-bold tracking-wider flex flex-wrap items-center justify-center gap-1.5 opacity-90">
            <span>🛡️</span>
            <span>{dict[currentLang].footer_copyright_certified}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
