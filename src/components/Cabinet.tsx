import React, { useState, useMemo, useEffect } from "react";
import { Language, ToolItem } from "../types";
import { Search, SlidersHorizontal, BookOpen, Plus, ExternalLink, ArrowRight, Heart, Sparkles } from "lucide-react";

interface CabinetProps {
  currentLang: Language;
  rawTools: ToolItem[];
  onSelectTool: (index: number) => void;
  dict: any;
  suggestedToolIds?: string[];
  onClearSuggestions?: () => void;
}

export default function Cabinet({ 
  currentLang, 
  rawTools, 
  onSelectTool, 
  dict,
  suggestedToolIds = [],
  onClearSuggestions
}: CabinetProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Persistent Favorites State via LocalStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("dewey_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Avoid triggering card details modal select
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      localStorage.setItem("dewey_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // Dynamically obtain unique categories sorted alphabetically based on current language
  const uniqueCategories = useMemo(() => {
    const catsSet = new Set<string>();
    rawTools.forEach((tool) => {
      catsSet.add(tool.cat[currentLang]);
    });
    return ["all", "favorites", "suggested", ...Array.from(catsSet).sort()];
  }, [currentLang, rawTools]);

  useEffect(() => {
    if (suggestedToolIds.length > 0) {
      setSelectedCategory("suggested");
    }
  }, [suggestedToolIds]);

  // Filter tools based on selectedCategory and Search Input string query
  const filteredTools = useMemo(() => {
    return rawTools.filter((tool) => {
      const matchCat = 
        selectedCategory === "all" 
          ? true 
          : selectedCategory === "favorites"
          ? favorites.includes(tool.id)
          : selectedCategory === "suggested"
          ? suggestedToolIds.includes(tool.id)
          : tool.cat[currentLang] === selectedCategory;
      const cleanSearch = searchTerm.toLowerCase();
      const matchText = 
        tool.name.toLowerCase().includes(cleanSearch) || 
        tool[currentLang].desc.toLowerCase().includes(cleanSearch) || 
        tool[currentLang].longDesc.toLowerCase().includes(cleanSearch);
      return matchCat && matchText;
    });
  }, [selectedCategory, searchTerm, currentLang, rawTools, favorites]);

  return (
    <section id="tools" className="mb-12 scroll-mt-24">
      {/* Search Header layout */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 border-b border-stone-200/50 dark:border-stone-800/60 pb-8">
        <div>
          <h3 className="text-3xl font-black text-[#121C4F] dark:text-white tracking-tight">
            {dict[currentLang].tool_lib}
          </h3>
          <p className="text-stone-500 dark:text-stone-400 text-sm mt-1.5 font-medium">
            {dict[currentLang].tool_lib_desc}
          </p>
        </div>

        {/* Dynamic Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={dict[currentLang].lbl_search_catalog}
              className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 py-2.5 pl-10 pr-4 text-xs font-semibold rounded-full focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 text-stone-700 dark:text-stone-100 shadow-sm transition-all"
            />
          </div>

          {/* Quick Favorite Switcher Tab */}
          <button
            onClick={() => setSelectedCategory(prev => prev === "favorites" ? "all" : "favorites")}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full border transition-all duration-300 shadow-sm cursor-pointer w-full sm:w-auto justify-center select-none ${
              selectedCategory === "favorites"
                ? "bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 border-rose-200 dark:border-rose-900/40 scale-[1.02]"
                : "bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${selectedCategory === "favorites" ? "fill-rose-600 dark:fill-rose-400 text-rose-600 dark:text-rose-400" : "text-stone-400 dark:text-stone-500"}`} />
            <span>
              {dict[currentLang].cat_favorites}
              <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-stone-100 dark:bg-stone-900 rounded-full text-stone-500 dark:text-stone-400">
                {favorites.length}
              </span>
            </span>
          </button>

          {/* Category drop down */}
          <div className="relative w-full sm:w-56">
            <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-500 dark:text-stone-400 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-100 text-xs font-bold py-2.5 pl-10 pr-8 rounded-full focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all shadow-sm appearance-none cursor-pointer"
            >
              {uniqueCategories.map((catKey) => {
                const label = 
                  catKey === "all" 
                    ? dict[currentLang].cat_all 
                    : catKey === "favorites"
                    ? dict[currentLang].cat_favorites
                    : catKey;
                return (
                  <option key={catKey} value={catKey} className="dark:bg-stone-900 dark:text-white" hidden={catKey === "suggested" && suggestedToolIds.length === 0}>
                    {catKey === "suggested" 
                      ? (currentLang === "en" ? "✨ Suggested Tools" : currentLang === "ko" ? "✨ 추천 도구" : "✨ Công cụ được gợi ý") 
                      : label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      {suggestedToolIds.length > 0 && selectedCategory === "suggested" && (
        <div className="flex items-center justify-between mb-6 bg-[#00AEEF]/5 dark:bg-[#00AEEF]/10 border border-[#00AEEF]/20 p-4 rounded-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00AEEF] text-white rounded-xl shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-black text-[#121C4F] dark:text-sky-400 uppercase tracking-tight">
                {currentLang === "en" ? "AI Suggested Tools" : currentLang === "ko" ? "AI 추천 도구" : "Công cụ AI gợi ý cho bạn"}
              </p>
              <p className="text-[10px] text-stone-500 dark:text-stone-400 font-bold">
                {currentLang === "en" ? "These tools were identified as highly relevant to your workspace activity." : currentLang === "ko" ? "워크스페이스 활동과 가장 관련이 깊은 도구들입니다." : "Các công cụ này được nhận diện là cực kỳ phù hợp với hoạt động Workspace của bạn."}
              </p>
            </div>
          </div>
          <button 
            onClick={onClearSuggestions}
            className="text-[10px] font-black text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 uppercase tracking-widest bg-white dark:bg-stone-800 px-4 py-2 rounded-xl border border-stone-100 dark:border-stone-700 transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 rotate-45" />
            {currentLang === "en" ? "Clear" : currentLang === "ko" ? "지우기" : "Gỡ bỏ"}
          </button>
        </div>
      )}

      {/* Grid rendering list */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => {
            const originalIndex = rawTools.findIndex((t) => t.id === tool.id);
            const isFavorited = favorites.includes(tool.id);
            const displayRole = tool.role === "Cả hai" 
              ? dict[currentLang].role_both 
              : tool.role === "Giáo viên" 
              ? dict[currentLang].role_gv 
              : dict[currentLang].role_hs;

            let roleBadgeStyle = "";
            if (tool.role === "Giáo viên") {
              roleBadgeStyle = "text-purple-700 bg-purple-50 border-purple-100 dark:text-purple-400 dark:bg-purple-950/30 dark:border-purple-900/30";
            } else if (tool.role === "Học sinh") {
              roleBadgeStyle = "text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/30 dark:border-emerald-900/30";
            } else {
              roleBadgeStyle = "text-[#F58220] bg-[#F58220]/5 border-[#F58220]/10 dark:text-amber-500 dark:bg-amber-950/30 dark:border-amber-900/30";
            }

            return (
              <div
                key={tool.id}
                onClick={() => onSelectTool(originalIndex)}
                className="bg-white dark:bg-stone-900 p-7 rounded-[2rem] flex flex-col justify-between border border-stone-200/80 dark:border-stone-800/80 hover:border-[#00AEEF] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/5 duration-300 transition-all cursor-pointer group relative animate-in fade-in duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 select-none">
                    <div className="flex items-center space-x-2 max-w-[70%] flex-wrap gap-y-1">
                      <span className="text-[10px] font-extrabold text-[#00AEEF] uppercase tracking-widest bg-sky-50 dark:bg-sky-950/40 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-900/40">
                        {tool.cat[currentLang]}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-sm ${roleBadgeStyle}`}>
                        {displayRole}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => toggleFavorite(e, tool.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                          isFavorited 
                            ? "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/35 text-rose-500 dark:text-rose-450 scale-105" 
                            : "bg-stone-50 dark:bg-stone-800 border-stone-100 dark:border-stone-700 text-stone-400 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400"
                        }`}
                        title={dict[currentLang].lbl_add_favorites}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-rose-500 dark:fill-rose-400 text-rose-500 dark:text-rose-400" : ""}`} />
                      </button>

                      <span className="w-8 h-8 rounded-full bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-400 dark:text-stone-300 group-hover:bg-[#121C4F] dark:group-hover:bg-sky-600 group-hover:text-white transition-colors border border-stone-100 dark:border-stone-700">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#121C4F] dark:text-white mb-3 tracking-tight group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                    {tool.name}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-semibold leading-relaxed line-clamp-3">
                    {tool[currentLang].desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-400 dark:text-stone-500 font-bold flex items-center justify-between">
                  <span className="uppercase tracking-wider">{dict[currentLang].btn_review}</span>
                  <span className="text-[#00AEEF] group-hover:translate-x-1 duration-200 transition-transform flex items-center space-x-1">
                    <span>{dict[currentLang].btn_explore}</span>
                    <Plus className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        selectedCategory === "favorites" ? (
          <div className="text-center py-24 bg-stone-50 dark:bg-stone-900 rounded-[2rem] border border-stone-200/80 dark:border-stone-800/85">
            <Heart className="w-12 h-12 text-rose-300 dark:text-rose-800/60 mx-auto mb-4 animate-pulse" />
            <p className="text-sm font-bold text-stone-500 dark:text-stone-400 max-w-md mx-auto px-4">
              {dict[currentLang].lbl_favorites_empty}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-extrabold text-[#00AEEF] hover:underline cursor-pointer"
            >
              {dict[currentLang].btn_explore}
            </button>
          </div>
        ) : (
          <div className="text-center py-24 bg-stone-50 dark:bg-stone-900 rounded-[2rem] border border-stone-200/80 dark:border-stone-800/82">
            <BookOpen className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-4" />
            <p className="text-sm font-bold text-stone-500 dark:text-stone-400">
              {dict[currentLang].lbl_no_tools_found}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-extrabold text-[#00AEEF] hover:underline cursor-pointer"
            >
              {dict[currentLang].lbl_reset_filters}
            </button>
          </div>
        )
      )}
    </section>
  );
}
export {};
