import React from "react";
import { Language, ToolItem } from "../types";
import { X, CheckCircle2, ShieldAlert, Sparkles, BookOpen, ExternalLink } from "lucide-react";

interface ModalProps {
  currentLang: Language;
  tool: ToolItem | null;
  onClose: () => void;
  dict: any;
}

export default function Modal({ currentLang, tool, onClose, dict }: ModalProps) {
  if (!tool) return null;

  const langData = tool[currentLang];

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "toolModalOverlay") {
      onClose();
    }
  };

  const displayRole = tool.role === "Cả hai" 
    ? dict[currentLang].role_both 
    : tool.role === "Giáo viên" 
    ? dict[currentLang].role_gv 
    : dict[currentLang].role_hs;

  let roleBadgeStyle = "";
  if (tool.role === "Giáo viên") {
    roleBadgeStyle = "text-purple-700 bg-purple-50 border-purple-100 dark:text-purple-300 dark:bg-purple-950/20 dark:border-purple-900/30";
  } else if (tool.role === "Học sinh") {
    roleBadgeStyle = "text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-900/30";
  } else {
    roleBadgeStyle = "text-[#F58220] bg-[#F58220]/5 border-[#F58220]/10 dark:bg-[#F58220]/10 dark:border-[#F58220]/20";
  }

  return (
    <div
      id="toolModalOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-stone-900/60 dark:bg-black/70 backdrop-blur-sm z-[2000] flex justify-center items-center p-4 animate-in fade-in duration-300"
    >
      <div className="bg-white dark:bg-stone-900 rounded-[2rem] max-w-2xl w-full p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-700 dark:text-stone-400 dark:hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer border-none"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Categories and Roles */}
        <div className="flex items-center gap-2.5 flex-wrap pt-2">
          <span className="text-[10px] font-extrabold text-[#00AEEF] bg-[#00AEEF]/5 border border-[#00AEEF]/10 dark:border-sky-500/20 uppercase tracking-widest px-3 py-1 rounded-full">
            {tool.cat[currentLang]}
          </span>
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${roleBadgeStyle}`}>
            {displayRole}
          </span>
        </div>

        {/* Name and Header description */}
        <div>
          <h4 className="text-3xl font-black text-[#121C4F] dark:text-stone-100 tracking-tight">{tool.name}</h4>
          <p className="text-[#F58220] dark:text-sky-400 font-bold text-sm mt-1.5">{langData.desc}</p>
        </div>

        {/* Detailed Long description */}
        <div className="bg-stone-50 dark:bg-stone-800 rounded-2xl p-6 border border-stone-200/80 dark:border-stone-800">
          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-medium">
            {langData.longDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key features */}
          <div>
            <p className="text-[10px] font-black text-[#121C4F] dark:text-sky-400 uppercase tracking-wider mb-4 flex items-center">
              <Sparkles className="w-4.5 h-4.5 text-[#00AEEF] mr-2" />
              <span>{dict[currentLang].lbl_features}</span>
            </p>
            <ul className="text-stone-600 dark:text-stone-350 space-y-3 font-semibold text-xs leading-relaxed">
              {langData.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] mr-2 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sư phạm Pro-tip */}
          <div>
            <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center">
              <BookOpen className="w-4.5 h-4.5 text-emerald-600 mr-2" />
              <span>{dict[currentLang].lbl_tip}</span>
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-300 bg-emerald-50/55 dark:bg-emerald-950/15 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 italic leading-relaxed font-semibold">
              "{langData.tip}"
            </p>
          </div>
        </div>

        {/* Security Warning */}
        <div className="bg-rose-50/70 dark:bg-rose-950/20 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/40 flex items-start">
          <ShieldAlert className="w-5.5 h-5.5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              {dict[currentLang].lbl_warn}
            </p>
            <p className="text-xs text-rose-900 dark:text-rose-200 font-bold leading-relaxed">
              {langData.warn}
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <a
          href={tool.link}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#F58220] hover:bg-[#d66f19] text-white rounded-2xl text-sm font-black text-center shadow-lg shadow-[#F58220]/25 flex items-center justify-center space-x-2 cursor-pointer transition-all uppercase tracking-wider"
        >
          <span>{dict[currentLang].lbl_access} {tool.name}</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}
export {};
