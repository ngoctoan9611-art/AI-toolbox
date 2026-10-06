/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import { Language, ToolItem } from "./types";
import { rawTools } from "./data/tools";
import { dict } from "./data/dictionary";

// Sub-components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Workspace from "./components/Workspace";
import Cabinet from "./components/Cabinet";
import Rules from "./components/Rules";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AdminDashboard from "./components/AdminDashboard";
import { Trash2 } from "lucide-react";
import { incrementGlobalStat } from "./lib/firebaseStore";

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>("vi");
  const [selectedToolIndex, setSelectedToolIndex] = useState<number | null>(null);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [suggestedToolIds, setSuggestedToolIds] = useState<string[]>([]);

  // Listen for hash changes to show admin dashboard (Internal Terminal)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#admin") {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Increment visit in Firestore on mount
  useEffect(() => {
    incrementGlobalStat("visits").catch(err => console.error("Visit log failed:", err));
  }, []);

  // Read dark mode initial preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Sync dark class to html and body elements
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Read language configuration securely from URL search query on mounting
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as Language;
      if (urlLang && (urlLang === "vi" || urlLang === "en" || urlLang === "ko")) {
        setCurrentLang(urlLang);
      }
    } catch (e) {
      console.warn("Could not query URL language parameter due to iframe sandboxing restrictions.");
    }
  }, []);

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    } catch (e) {
      console.warn("Could not update URL parameter due to iframe sandboxing restrictions.");
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const totalToolsCount = rawTools.length;

  // Calculate sorted categories based on the current language
  const categoryCount = useMemo(() => {
    const catsSet = new Set<string>();
    rawTools.forEach((tool) => {
      catsSet.add(tool.cat[currentLang]);
    });
    return catsSet.size;
  }, [currentLang]);

  // Selected tool item for modal
  const activeModalTool = selectedToolIndex !== null ? rawTools[selectedToolIndex] : null;

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2d2a26] dark:bg-[#0c0a09] dark:text-[#f5f5f4] transition-colors duration-200 antialiased flex flex-col relative overflow-x-hidden">
      {/* 1. Header & Navigation switcher */}
      <Navigation 
        currentLang={currentLang} 
        onLangChange={handleLangChange} 
        dict={dict} 
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main wrapping block */}
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full pt-12">
        {/* 2. Hero banner */}
        <Hero 
          currentLang={currentLang} 
          dict={dict} 
          toolCount={totalToolsCount} 
        />

        {/* 3. Analytics & KPI counters */}
        <Analytics 
          currentLang={currentLang} 
          dict={dict} 
          toolCount={totalToolsCount} 
          categoryCount={categoryCount} 
        />

        {/* 4. Interactive Workspace with Gemini API routing */}
        <Workspace 
          currentLang={currentLang} 
          dict={dict} 
          onToolsSuggested={setSuggestedToolIds}
        />

        {/* 5. Tool Catalog cabinet */}
        <Cabinet 
          currentLang={currentLang} 
          rawTools={rawTools} 
          onSelectTool={setSelectedToolIndex} 
          dict={dict} 
          suggestedToolIds={suggestedToolIds}
          onClearSuggestions={() => setSuggestedToolIds([])}
        />

        {/* 6. Legal codes and rules: 3 Do's - 3 Don'ts */}
        <Rules 
          currentLang={currentLang} 
          dict={dict} 
        />
      </main>

      {/* 7. Floating guiding widget assistant */}
      <ChatWidget 
        currentLang={currentLang} 
        dict={dict} 
      />

      {/* 8. Institutional pedagogic footer */}
      <Footer 
        currentLang={currentLang} 
        dict={dict} 
      />

      {/* Portals and Overlays */}
      {selectedToolIndex !== null && (
        <Modal 
          currentLang={currentLang} 
          tool={activeModalTool} 
          onClose={() => setSelectedToolIndex(null)} 
          dict={dict} 
        />
      )}

      {/* Admin Internal Dashboard Overlay */}
      {showAdmin && (
        <AdminDashboard 
          currentLang={currentLang}
          onClose={() => {
            setShowAdmin(false);
            window.location.hash = "";
          }}
        />
      )}
    </div>
  );
}

