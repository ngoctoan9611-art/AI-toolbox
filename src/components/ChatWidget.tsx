import React, { useState, useRef, useEffect } from "react";
import { Language, ChatMessage } from "../types";
import { 
  Send, 
  X, 
  Sparkles,
  RefreshCw,
  Check,
  ChevronLeft
} from "lucide-react";
import { incrementGlobalStat, addContribution, getContributions, Contribution as FireContrib } from "../lib/firebaseStore";
import { googleSignIn, initAuth, logout } from "../lib/firebaseAuth";

interface ChatWidgetProps {
  currentLang: Language;
  dict: any;
}

export default function ChatWidget({ currentLang, dict }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "feedback">("chat");

  // Chat conversation
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  // Contribution Form state
  const [fbType, setFbType] = useState<"tool" | "website">("tool");
  const [fbName, setFbName] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [fbReason, setFbReason] = useState("");
  const [fbSuccess, setFbSuccess] = useState(false);
  const [fbSubmitting, setFbSubmitting] = useState(false);
  const [contributions, setContributions] = useState<FireContrib[]>([]);
  const [loadingContribs, setLoadingContribs] = useState(false);

  // Admin state for widget visibility settings (optional)
  const [isAdmin, setIsAdmin] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcomed message when language changes
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: dict[currentLang].chat_welcome,
      },
    ]);
  }, [currentLang, dict]);

  // Scroll to bottom of message panel
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (activeTab === "feedback") {
      fetchContributions();
    }
  }, [activeTab]);

  useEffect(() => {
    const unsubscribe = initAuth(
      () => setIsAdmin(true),
      () => setIsAdmin(false)
    );
    return () => unsubscribe();
  }, []);

  const fetchContributions = async () => {
    setLoadingContribs(true);
    try {
      const data = await getContributions();
      setContributions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingContribs(false);
    }
  };

  const handleSendMessage = async () => {
    const textStr = inputVal.trim();
    if (!textStr || chatLoading) return;
    
    // Increment stats on click
    console.log("[Chat] Sending message, incrementing stats...");
    await incrementGlobalStat("questions").catch((e) => console.error("[Chat] Stats increment failed:", e));

    const userMsg: ChatMessage = { id: `user-${Date.now()}`, sender: "user", text: textStr };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setChatLoading(true);
    const botLoadingId = `bot-loading-${Date.now()}`;
    setMessages((prev) => [...prev, { id: botLoadingId, sender: "bot", text: "", isLoading: true }]);

    try {
      const historyForAI = messages.filter((m) => m.id !== "welcome").slice(-6).map((m) => ({ sender: m.sender, text: m.text }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textStr, previousMessages: historyForAI }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "API call failed");
      setMessages((prev) => prev.map((m) => m.id === botLoadingId ? { ...m, text: data.text || "...", isLoading: false } : m));
    } catch (err: any) {
      let displayError = err.message || "Unknown";
      if (displayError === "QUOTA_EXHAUSTED") {
        displayError = dict[currentLang].err_quota_exhausted;
      }
      setMessages((prev) => prev.map((m) => m.id === botLoadingId ? { ...m, text: "⚠️ " + displayError, isLoading: false } : m));
    } finally {
      setChatLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fbName.trim() || fbSubmitting) return;
    setFbSubmitting(true);
    setFbSuccess(false);
    try {
      await addContribution(fbName, fbLink, fbReason, fbType);
      
      // Clear submitting state immediately after success
      setFbSubmitting(false);
      setFbSuccess(true);
      
      // Reset form
      setFbName(""); 
      setFbLink(""); 
      setFbReason(""); 
      setFbType("tool");
      
      // Background refresh (non-blocking)
      fetchContributions();
      
      setTimeout(() => setFbSuccess(false), 8000);
    } catch (err) {
      console.error("Contribution Error:", err);
      setFbSubmitting(false);
      alert(currentLang === 'vi' ? "Có lỗi xảy ra khi gửi đề xuất." : "Error submitting proposal.");
    }
  };

  const handleAdminLogin = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setIsAdmin(true);
        window.location.hash = "#admin";
      }
    } catch (err) { console.error(err); }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Enter") handleSendMessage(); };

  const formatChatMessage = (text: string) => {
    if (!text) return null;
    return text.split("\n").map((line, idx) => {
      let trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-1" />;
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0; let match;
      while ((match = boldRegex.exec(trimmed)) !== null) {
        if (match.index > lastIndex) parts.push(trimmed.substring(lastIndex, match.index));
        parts.push(<strong key={match.index} className="text-[#121C4F] dark:text-sky-400 font-bold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < trimmed.length) parts.push(trimmed.substring(lastIndex));
      const inlineContent = parts.length > 0 ? parts : trimmed;
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
        return (
          <ul key={idx} className="list-disc pl-5 my-1 text-stone-700 dark:text-stone-200">
            <li className="text-xs leading-relaxed">{typeof inlineContent === "string" ? inlineContent.replace(/^(-\s*|\*\s*|•\s*)/, "") : inlineContent}</li>
          </ul>
        );
      }
      return <p key={idx} className="text-xs leading-relaxed mb-1 text-stone-700 dark:text-stone-200">{inlineContent}</p>;
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#121C4F] hover:bg-[#0b1136] text-white p-4 rounded-full shadow-2xl hover:scale-105 duration-300 transition-transform z-[1500] flex items-center justify-center space-x-2 cursor-pointer shadow-blue-950/20"
      >
        <span className="text-2xl">🤖</span>
        <span className="font-extrabold text-xs hidden md:block">{dict[currentLang].widget_btn}</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[600px] max-h-[85vh] bg-white dark:bg-stone-900 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.22)] z-[1500] flex flex-col overflow-hidden border border-stone-200/90 dark:border-stone-800 animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          <div className="bg-gradient-to-r from-[#121C4F] to-[#0b1136] p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF] animate-pulse" />
              <h3 className="font-extrabold text-sm uppercase tracking-wider">{dict[currentLang].widget_title}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 rounded-full cursor-pointer"><X className="w-4 h-4" /></button>
          </div>

          <div className="flex border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-[10px] font-black uppercase tracking-widest text-stone-400">
            <button onClick={() => setActiveTab("chat")} className={`flex-1 py-3 transition-all ${activeTab === 'chat' ? 'text-blue-500 bg-white dark:bg-stone-900 border-b-2 border-blue-500' : 'hover:text-stone-600'}`}>{dict[currentLang].tab_chat}</button>
            <button onClick={() => setActiveTab("feedback")} className={`flex-1 py-3 transition-all ${activeTab === 'feedback' ? 'text-blue-500 bg-white dark:bg-stone-900 border-b-2 border-blue-500' : 'hover:text-stone-600'}`}>{dict[currentLang].tab_feedback}</button>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden bg-stone-50 dark:bg-stone-900">
            {activeTab === "chat" ? (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start animate-in fade-in duration-300"}`}>
                      <div className={`py-3 px-4 rounded-2xl max-w-[85%] text-xs ${m.sender === 'user' ? 'bg-[#F58220] text-white rounded-tr-none' : 'bg-white dark:bg-stone-800 dark:text-stone-200 border border-stone-100 dark:border-stone-800 rounded-tl-none shadow-sm'}`}>
                        {m.isLoading ? <div className="flex gap-1 py-1"><span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-100"></span><span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-200"></span></div> : formatChatMessage(m.text)}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-3 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex items-center space-x-2">
                  <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={handleKeyDown} 
                    className="flex-1 bg-stone-100 dark:bg-stone-800 border-none text-xs py-2.5 px-4 rounded-full text-stone-800 dark:text-stone-100 font-semibold" placeholder={currentLang === 'vi' ? 'Hỏi trợ lý...' : 'Ask assistant...'} />
                  <button onClick={handleSendMessage} disabled={!inputVal.trim() || chatLoading} className="w-9 h-9 flex items-center justify-center bg-[#00AEEF] text-white rounded-full cursor-pointer disabled:opacity-40"><Send className="w-4 h-4" /></button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-stone-900 text-[#121C4F] dark:text-stone-100">
                <form onSubmit={handleFeedbackSubmit} className="p-5 space-y-4 overflow-y-auto flex-1">
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed">{dict[currentLang].fb_desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={() => setFbType("tool")} className={`py-2 text-[10px] font-black rounded-xl border transition-all ${fbType === 'tool' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm shadow-blue-500/10' : 'bg-stone-50 border-stone-100 text-stone-400 hover:bg-stone-100 dark:bg-stone-800 dark:border-stone-700'}`}>
                      {dict[currentLang].fb_type_tool}
                    </button>
                    <button type="button" onClick={() => setFbType("website")} className={`py-2 text-[10px] font-black rounded-xl border transition-all ${fbType === 'website' ? 'bg-amber-50 border-amber-500 text-amber-600 shadow-sm shadow-amber-500/10' : 'bg-stone-50 border-stone-100 text-stone-400 hover:bg-stone-100 dark:bg-stone-800 dark:border-stone-700'}`}>
                      {dict[currentLang].fb_type_website}
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest pl-1">{fbType === 'tool' ? dict[currentLang].fb_lbl_name : dict[currentLang].fb_lbl_name_web}</label>
                      <input 
                        type="text" 
                        value={fbName} 
                        onChange={(e) => setFbName(e.target.value)} 
                        placeholder="..." 
                        className="w-full bg-stone-50 dark:bg-stone-800 border-stone-100 dark:border-stone-700 text-xs p-3 rounded-xl font-bold focus:ring-2 ring-blue-500/20" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest pl-1">{fbType === 'tool' ? dict[currentLang].fb_lbl_link : dict[currentLang].fb_lbl_link_web}</label>
                      <input 
                        type="text" 
                        value={fbLink} 
                        onChange={(e) => setFbLink(e.target.value)} 
                        placeholder="https://..." 
                        className="w-full bg-stone-50 dark:bg-stone-800 border-stone-100 dark:border-stone-700 text-xs p-3 rounded-xl font-bold focus:ring-2 ring-blue-500/20" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest pl-1">{fbType === 'tool' ? dict[currentLang].fb_lbl_reason : dict[currentLang].fb_lbl_reason_web}</label>
                      <textarea 
                        value={fbReason} 
                        onChange={(e) => setFbReason(e.target.value)} 
                        placeholder="..." 
                        className="w-full bg-stone-50 dark:bg-stone-800 border-stone-100 dark:border-stone-700 text-xs p-3 rounded-xl min-h-[80px] font-medium focus:ring-2 ring-blue-500/20" 
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={fbSubmitting}
                    className="w-full bg-[#F58220] hover:bg-[#d66f19] text-white font-black py-3.5 rounded-xl text-xs cursor-pointer shadow-lg shadow-orange-500/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {fbSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        {currentLang === 'vi' ? 'Đang gửi...' : 'Sending...'}
                      </>
                    ) : (
                      dict[currentLang].fb_btn
                    )}
                  </button>
                  {fbSuccess && (
                     <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-[10px] font-bold text-center animate-in zoom-in duration-300 mt-2">
                       ✅ {currentLang === 'vi' ? 'Đã gửi thành công! Cảm ơn bạn.' : 'Submitted successfully! Thank you.'}
                     </div>
                  )}
                  
                  <div className="pt-4 border-t border-stone-50 dark:border-stone-800 text-center">
                    <button type="button" onClick={isAdmin ? () => window.location.hash = "#admin" : handleAdminLogin} 
                      className="text-[9px] font-black text-stone-300 hover:text-blue-500 underline uppercase tracking-widest">{isAdmin ? "Admin Dashboard" : "Admin Login"}</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
