import React from "react";
import { Language } from "../types";
import { ShieldCheck, Flame, CheckCircle, AlertOctagon } from "lucide-react";

interface RulesProps {
  currentLang: Language;
  dict: any;
}

export default function Rules({ currentLang, dict }: RulesProps) {
  return (
    <section id="security" className="py-20 border-t border-stone-200 dark:border-stone-800 mt-20 scroll-mt-24">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-4xl font-extrabold text-[#121C4F] dark:text-white tracking-tight uppercase">
          {dict[currentLang].rule_title}
        </h3>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
          {dict[currentLang].rule_subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* DO list - green */}
        <div className="bg-emerald-50/50 dark:bg-emerald-950/15 p-8 md:p-10 rounded-[3rem] border border-emerald-100 dark:border-emerald-900/45 shadow-sm relative overflow-hidden group hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center mb-8 pb-4 border-b border-emerald-100 dark:border-emerald-900/45">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-950/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="ml-5 text-2xl font-black text-emerald-950 dark:text-[#0ee1ae] tracking-tight">
              {dict[currentLang].rule_yes_title}
            </h4>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold mr-4 text-xl leading-none">01</span>
              <div className="text-emerald-900/90 dark:text-emerald-200/90 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_yes_1 }} />
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold mr-4 text-xl leading-none">02</span>
              <div className="text-emerald-900/90 dark:text-emerald-200/90 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_yes_2 }} />
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold mr-4 text-xl leading-none">03</span>
              <div className="text-emerald-900/90 dark:text-emerald-200/90 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_yes_3 }} />
              </div>
            </li>
          </ul>
        </div>

        {/* DON'T list - red */}
        <div className="bg-rose-50/50 dark:bg-rose-950/15 p-8 md:p-10 rounded-[3rem] border border-rose-100 dark:border-rose-900/45 shadow-sm relative overflow-hidden group hover:border-rose-300 dark:hover:border-rose-700 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center mb-8 pb-4 border-b border-rose-100 dark:border-rose-900/45">
            <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-200 dark:shadow-rose-950/30">
              <AlertOctagon className="w-7 h-7" />
            </div>
            <h4 className="ml-5 text-2xl font-black text-rose-950 dark:text-[#ff6b97] tracking-tight">
              {dict[currentLang].rule_no_title}
            </h4>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-rose-600 dark:text-rose-400 font-extrabold mr-4 text-xl leading-none">01</span>
              <div className="text-rose-900/90 dark:text-rose-200 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_no_1 }} />
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 dark:text-rose-400 font-extrabold mr-4 text-xl leading-none">02</span>
              <div className="text-rose-900/90 dark:text-rose-200 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_no_2 }} />
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 dark:text-rose-400 font-extrabold mr-4 text-xl leading-none">03</span>
              <div className="text-rose-900/90 dark:text-rose-200 text-sm font-normal leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: dict[currentLang].rule_no_3 }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export {};
