import React from "react";
import { Language } from "../types";
import { School, Languages, Menu, X, Sun, Moon, Key } from "lucide-react";

interface NavigationProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  dict: any;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navigation({ currentLang, onLangChange, dict, darkMode, onToggleDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-[1000] bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 h-20 flex items-center shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3.5 select-none">
          <div className="flex-shrink-0 flex items-center justify-center bg-[#121C4F] dark:bg-transparent rounded-2xl p-1.5 transition-all duration-350 shadow-sm border border-stone-200/25 dark:border-transparent" style={{ width: "68px", height: "56px" }}>
            <img 
              src="/logo_dewey.svg" 
              onError={(e) => {
                // If local logo_dewey.svg is not found, dynamically load official site's logo.
                // If official site's logo fails (offline or blocked), fallback gracefully to another common path or text.
                const fallbackUrls = [
                  "https://thedeweyschools.edu.vn/wp-content/uploads/2023/01/vp_vp-logo-dewey-02-1.svg",
                  "https://thedeweyschools.edu.vn/wp-content/uploads/2021/01/logo.png",
                  "https://thedeweyschools.edu.vn/wp-content/uploads/2021/01/logo-header-1.png",
                  "https://thedeweyschools.edu.vn/wp-content/uploads/2021/01/logo-header.png"
                ];
                
                // Track retry attempts
                const currentSrc = e.currentTarget.src;
                const idx = fallbackUrls.indexOf(currentSrc);
                
                if (idx < fallbackUrls.length - 1) {
                  e.currentTarget.src = fallbackUrls[idx + 1];
                } else {
                  // If all external images fail, replace with school SVG or hide image politely
                  e.currentTarget.style.display = 'none';
                  const svgEl = document.getElementById('navbar-fallback-svg');
                  if (svgEl) {
                    svgEl.style.display = 'block';
                  }
                }
              }}
              onLoad={(e) => {
                // Hide fallback SVG on successful image load
                const svgEl = document.getElementById('navbar-fallback-svg');
                if (svgEl) {
                  svgEl.style.display = 'none';
                }
              }}
              className="max-w-[56px] max-h-[44px] object-contain flex-shrink-0"
              alt="The Dewey Schools Logo"
              referrerPolicy="no-referrer"
            />
            
            {/* Fallback SVG if image is offline or not found */}
            <svg 
              id="navbar-fallback-svg"
              viewBox="0 0 100 100" 
              style={{ width: "60.9955px", height: "55.9955px", display: "none" }} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 overflow-visible"
            >
              <defs>
                <linearGradient id="deweyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF100" />
                  <stop offset="60%" stopColor="#F58220" />
                  <stop offset="100%" stopColor="#E35205" />
                </linearGradient>
                <linearGradient id="deweyCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00AEEF" />
                  <stop offset="100%" stopColor="#0054A6" />
                </linearGradient>
                <linearGradient id="deweyNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B123C" />
                  <stop offset="100%" stopColor="#1B1464" />
                </linearGradient>
              </defs>
              
              {/* Layer 1: Navy Bottom Swirl */}
              <path 
                d="M30,42 C39,56 57,59 82,47 C84,54 81,64 71,73 C59,84 45,86 36,83 C26,73 23,54 30,42 Z" 
                fill="url(#deweyNavy)" 
              />
              
              {/* Layer 2: Middle Cyan Swirl */}
              <path 
                d="M30,42 C33,36 37,31 44,28 C55,23 68,26 80,24 C83,31 84,39 82,47 C57,59 39,56 30,42 Z" 
                fill="url(#deweyCyan)" 
              />
              
              {/* Layer 3: Top Yellow Swirl */}
              <path 
                d="M42,16 C53,4 71,11 80,24 C68,26 55,23 44,28 C37,31 33,36 30,42 C29,32 34,22 42,16 Z" 
                fill="url(#deweyYellow)" 
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            {/* BRANDING TYPOGRAPHY MATCHING UPLOADED LOGO */}
            <span className="text-[9px] font-black text-[#121C4F] dark:text-stone-300 tracking-widest leading-none select-none uppercase">
              THE
            </span>
            <span className="text-[20px] font-black text-[#121C4F] dark:text-white leading-none tracking-[-0.02em] font-sans -mt-0.5 select-none">
              DEWEY
            </span>
            <div className="relative mt-0.5">
              <span className="text-[9.5px] font-bold text-[#00AEEF] tracking-[0.22em] leading-none select-none uppercase block">
                SCHOOLS
              </span>
              {/* Logo horizontal yellow signature line underneath */}
              <div 
                className="h-[2px] w-[95%] rounded-full opacity-90 mt-1" 
                style={{
                  background: "linear-gradient(90deg, #F58220 0%, #FFF100 100%)"
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#workspace"
              className="text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
            >
              {dict[currentLang].nav_workspace}
            </a>
            <a
              href="#tools"
              className="text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
            >
              {dict[currentLang].nav_catalog}
            </a>
            <a
              href="#analytics"
              className="text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
            >
              {dict[currentLang].nav_analytics}
            </a>
            <a
              href="#security"
              className="text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
            >
              {dict[currentLang].nav_security}
            </a>
          </div>

          {/* Language Switcher Dropdown & Dark Mode Toggle Button */}
          <div className="relative flex items-center">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="flex items-center justify-center p-2 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:ring-2 hover:ring-[#00AEEF]/20 cursor-pointer transition-all mr-2"
              title={darkMode ? dict[currentLang].light_mode : dict[currentLang].dark_mode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-3.5 h-3.5 text-amber-500 animate-in spin-in duration-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-sky-600 animate-in spin-in duration-300" />
              )}
            </button>

            <div className="flex items-center bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full px-3 py-1.5 hover:ring-2 hover:ring-[#00AEEF]/20 transition-all">
              <Languages className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 mr-2" />
              <select
                id="langSwitcher"
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as Language)}
                className="bg-transparent text-xs font-bold text-[#121C4F] dark:text-white focus:outline-none cursor-pointer pr-1"
                aria-label="Select language"
              >
                <option value="vi" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">🇻🇳 Tiếng Việt</option>
                <option value="en" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">🇬🇧 English</option>
                <option value="ko" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">🇰🇷 한국어</option>
              </select>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-4 text-stone-600 dark:text-stone-300 hover:text-[#121C4F] dark:hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-stone-900 border-b border-stone-200/90 dark:border-stone-800/90 shadow-lg p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[999]">
          <a
            href="#workspace"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold text-stone-700 dark:text-stone-200 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] py-2"
          >
            {dict[currentLang].nav_workspace}
          </a>
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold text-stone-700 dark:text-stone-200 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] py-2"
          >
            {dict[currentLang].nav_catalog}
          </a>
          <a
            href="#analytics"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold text-stone-700 dark:text-stone-200 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] py-2"
          >
            {dict[currentLang].nav_analytics}
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold text-stone-700 dark:text-stone-200 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] py-2"
          >
            {dict[currentLang].nav_security}
          </a>
        </div>
      )}
    </nav>
  );
}
