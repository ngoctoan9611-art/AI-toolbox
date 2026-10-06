import React from "react";
import { Language } from "../types";
import { Sparkles } from "lucide-react";

interface HeroProps {
  currentLang: Language;
  dict: any;
  toolCount: number;
}

export default function Hero({ currentLang, dict, toolCount }: HeroProps) {
  const rawTitle = dict[currentLang].hero_title;
  // Replace unescaped <br> and render text safely
  const formattedTitleHtml = rawTitle.replace("<br class='hidden md:block'>", "<br class='hidden md:block' />");

  const subtitleTemplate = dict[currentLang].hero_subtitle;
  const formattedSubtitle = subtitleTemplate.replace("{count}", toolCount);

  return (
    <header className="mt-20 py-20 px-6 bg-gradient-to-br from-[#0b1136] via-[#121C4F] to-[#1e2a63] text-white relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#00AEEF] border border-white/10 uppercase tracking-widest animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
          <span>Dewey Schools ERPC Certified</span>
        </div>
        
        <h2 
          className="mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tight text-white drop-shadow-md"
          style={{ fontSize: "42px", fontWeight: "bold" }}
          dangerouslySetInnerHTML={{ __html: formattedTitleHtml }}
        />
        
        <p 
          className="text-stone-200/90 max-w-3xl mx-auto font-light leading-relaxed"
          style={{ fontSize: "14px", width: "1528px", height: "28.982100000000003px", maxWidth: "100%" }}
          dangerouslySetInnerHTML={{ __html: formattedSubtitle }}
        />
      </div>
    </header>
  );
}
