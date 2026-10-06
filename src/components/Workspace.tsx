import React, { useState } from "react";
import { Language, WorkspaceTab } from "../types";
import { Sparkles, Copy, RefreshCw, AlertCircle, FileText, Wand2, Lightbulb } from "lucide-react";
import { incrementGlobalStat } from "../lib/firebaseStore";
import katex from "katex";
import "katex/dist/katex.min.css";

// Helper to parse bold tags inside normal text segments
function parseBoldText(text: string): React.ReactNode[] {
  if (!text) return [];
  const boldRegex = /(\*\*[^*]+?\*\*)/g;
  const parts = text.split(boldRegex);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} className="text-[#121C4F] dark:text-white font-black tracking-tight">
          {inner}
        </strong>
      );
    }
    return part;
  });
}

// Main LaTeX & Normal content rendering helper
export function renderTextWithMath(text: string): React.ReactNode {
  if (!text) return "";

  // Regex to split by display math ($$...$$, \[...\]) and inline math ($...$, \(...\))
  const mathRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^\$]+?\$|\\\([\s\S]+?\\\))/g;
  const parts = text.split(mathRegex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Check for display block math delimited by $$
    if (part.startsWith("$$") && part.endsWith("$$")) {
      const formula = part.slice(2, -2);
      try {
        const html = katex.renderToString(formula.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        return (
          <span
            key={idx}
            className="block my-3 overflow-x-auto text-center py-2 select-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (err) {
        return <span key={idx} className="block my-3 text-red-500 font-mono text-xs select-text">{part}</span>;
      }
    }

    // Check for display block math delimited by \[ \]
    if (part.startsWith("\\[") && part.endsWith("\\]")) {
      const formula = part.slice(2, -2);
      try {
        const html = katex.renderToString(formula.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        return (
          <span
            key={idx}
            className="block my-3 overflow-x-auto text-center py-2 select-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (err) {
        return <span key={idx} className="block my-3 text-red-500 font-mono text-xs select-text">{part}</span>;
      }
    }

    // Check for inline math delimited by $
    if (part.startsWith("$") && part.endsWith("$")) {
      const formula = part.slice(1, -1);
      if (formula.trim().length === 0) {
        return part;
      }
      try {
        const html = katex.renderToString(formula.trim(), {
          displayMode: false,
          throwOnError: false,
        });
        return (
          <span
            key={idx}
            className="inline-block px-1 align-middle select-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (err) {
        return <span key={idx} className="inline text-red-500 font-mono text-xs select-text">{part}</span>;
      }
    }

    // Check for inline math delimited by \( \)
    if (part.startsWith("\\(") && part.endsWith("\\)")) {
      const formula = part.slice(2, -2);
      try {
        const html = katex.renderToString(formula.trim(), {
          displayMode: false,
          throwOnError: false,
        });
        return (
          <span
            key={idx}
            className="inline-block px-1 align-middle select-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (err) {
        return <span key={idx} className="inline text-red-500 font-mono text-xs select-text">{part}</span>;
      }
    }

    // For any normal text segment, parse any bold markdown tags in it.
    return <React.Fragment key={idx}>{parseBoldText(part)}</React.Fragment>;
  });
}

interface WorkspaceProps {
  currentLang: Language;
  dict: any;
  onToolsSuggested: (ids: string[]) => void;
}

export default function Workspace({ currentLang, dict, onToolsSuggested }: WorkspaceProps) {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("activity");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Form states
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("THPT / High School");
  const [topic, setTopic] = useState("");
  const [targetTool, setTargetTool] = useState("ChatGPT/Claude");
  const [rawPrompt, setRawPrompt] = useState("");
  const [concept, setConcept] = useState("");
  const [audience, setAudience] = useState("Học sinh 14 tuổi / 14-year-old student");

  const [copySuccess, setCopySuccess] = useState(false);

  // Helper to render custom styled markdown/paragraphs with LaTeX rendering integration
  const formatMarkdown = (text: string) => {
    if (!text) return null;

    // Split text into paragraphs or list items
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-2"></div>;

      // Unordered lists
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
        const cleanContent = trimmed.replace(/^(-\s*|\*\s*|•\s*)/, "");
        return (
          <ul key={idx} className="list-disc pl-6 my-1.5 space-y-1 text-stone-700 dark:text-stone-300">
            <li className="leading-relaxed font-normal">{renderTextWithMath(cleanContent)}</li>
          </ul>
        );
      }

      // Ordered lists (1. 2. 3.)
      const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        const cleanContent = numMatch[2];
        return (
          <ol key={idx} className="list-decimal pl-6 my-1.5 space-y-1 text-stone-700 dark:text-stone-300">
            <li className="leading-relaxed font-normal">{renderTextWithMath(cleanContent)}</li>
          </ol>
        );
      }

      // Check for headers (e.g., ### title or ## title)
      if (trimmed.startsWith("#")) {
        const hashCount = (trimmed.match(/^#+/) || [""])[0].length;
        const cleanTitle = trimmed.replace(/^#+\s*/, "");
        const sizeClass = hashCount === 1 ? "text-2xl" : hashCount === 2 ? "text-xl" : "text-base";
        return (
          <h5 key={idx} className={`${sizeClass} font-extrabold text-[#121C4F] dark:text-sky-400 mt-5 mb-2.5 tracking-tight border-b border-stone-100 dark:border-stone-800 pb-1`}>
            {renderTextWithMath(cleanTitle)}
          </h5>
        );
      }

      // Normal paragraph
      return (
        <p key={idx} className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-2.5 font-normal">
          {renderTextWithMath(trimmed)}
        </p>
      );
    });
  };

  const handleGenerate = async () => {
    // Increment stats on every click attempt
    console.log("[Workspace] Generate button clicked, incrementing stats...");
    await incrementGlobalStat("questions").catch((e) => console.error("[Workspace] Stats increment failed:", e));

    // Basic validations
    setErrorMsg("");
    if (activeTab === "activity" && (!subject || !topic)) {
      setErrorMsg(currentLang === "en" ? "⚠️ Please fill in both Subject and Topic!" : "⚠️ Vui lòng nhập đầy đủ Môn học và Chủ đề bài giảng!");
      return;
    }
    if (activeTab === "prompt" && !rawPrompt) {
      setErrorMsg(currentLang === "en" ? "⚠️ Please fill in your raw prompt idea!" : "⚠️ Vui lòng nhập ý tưởng Prompt thô của bạn!");
      return;
    }
    if (activeTab === "analogy" && !concept) {
      setErrorMsg(currentLang === "en" ? "⚠️ Please fill in the Concept that is difficult to explain!" : "⚠️ Vui lòng nhập khái niệm khó hiểu mà bạn muốn tối ưu!");
      return;
    }

    setLoading(true);
    setOutput("");
    
    let userPrompt = "";
    let systemPrompt = "";

    if (activeTab === "activity") {
      systemPrompt = `Bạn là Trợ lý Thiết kế Sư phạm Tích cực (Active Learning Designer) của hệ thống trường học phổ thông The Dewey Schools. 
Nhiệm vụ của bạn là tạo ra một kịch bản hoạt động học tập tích cực trong lớp học, tăng cường khả năng tương tác, tư duy phản biện của học sinh, bám sát phương pháp kiến tạo Dewey. 
Phản hồi bằng ngôn ngữ trùng với ngôn ngữ hiện tại của người dùng là (${currentLang === 'en' ? 'English' : currentLang === 'ko' ? 'Korean' : 'Vietnamese'}). 
Nếu nội dung có phát sinh các công thức toán học, lí, hóa hay biểu thức số học khoa học, hãy định dạng chúng bằng LaTeX chuẩn: sử dụng kí tự dollar đơn $...$ cho công thức nội dòng (inline formula), và sử dụng kí tự dollar kép $$...$$ cho những công thức khối lớn cần xuống dòng (block equation). Ví dụ: $E = mc^2$ hoặc $$\\int_a^b f(x)dx$$.
Trình bày mạch lạc, có cấu trúc sư phạm rõ ràng và dễ áp dụng ngay lập tức trong lớp học thực tế.`;

      userPrompt = `Hãy thiết kế một hoạt động học tập tích cực sáng tạo cho:
- Môn học: ${subject}
- Khối lớp: ${grade}
- Chủ đề bài giảng: ${topic}

Cấu trúc phản hồi bắt buộc gồm:
1. 🎯 Tên Hoạt động (Một tên gọi lôi cuốn, tạo tò mò)
2. 🛠️ Cách thức tiến hành (Các bước thực hiện nhanh gọn bao gồm phân chia thời gian, phân nhóm)
3. 🌟 Gợi ý công cụ AI hỗ trợ đắc lực (Gợi ý các công cụ phù hợp trong cẩm nang như Kahoot, Miro, Padlet, MagicSchool, Eduaide, Curipod, Blooket... và hướng dẫn ứng dụng cụ thể)`;
    } else if (activeTab === "prompt") {
      systemPrompt = `Bạn là Chuyên gia kỹ thuật cấu trúc câu lệnh (Prompt Engineer) hàng đầu trong Giáo dục phổ thông. 
Nhiệm vụ của bạn là tối ưu hóa câu lệnh thô của giáo viên hoặc học sinh thành một prompt cực kỳ chất lượng, chuyên nghiệp, áp dụng cấu trúc bộc lộ tài năng tốt nhất (gồm Vai trò - Ngữ cảnh - Nhiệm vụ cụ thể - Rào cản hạn chế) để đạt được kết quả tuyệt vời nhất khi dán vào các mô hình AI.
Nếu có công thức khoa học, toán lý hóa xuất hiện, hãy đảm bảo chúng được viết dưới định dạng LaTeX: bọc trong cặp kí tự $...$ cho công thức nội dòng và cặp kí tự $$...$$ cho công thức khối lớn.
Phản hồi bằng ngôn ngữ người dùng là (${currentLang === 'en' ? 'English' : currentLang === 'ko' ? 'Korean' : 'Vietnamese'}).`;

      userPrompt = `Tối ưu hóa câu lệnh thọc sau đây dành riêng cho công cụ: ${targetTool}.
Ý tưởng thô: "${rawPrompt}"

Hãy cung cấp phản hồi gồm:
1. 🪄 Prompt Đã Tối Ưu Hoàn Chỉnh (Có thể copy dán được ngay, bọc rõ ràng)
2. 🔍 Tại sao hiệu quả (Lý giải ngắn gọn 3 điểm cải thiện như thêm vai trò, thêm ví dụ bối cảnh học tập giúp AI hiểu sâu sắc)`;
    } else if (activeTab === "analogy") {
      systemPrompt = `Bạn là Nhà giáo dục tài ba, bậc thầy trong việc biến các khái niệm lý thuyết trừu tượng, khó giải cấu trúc (thuộc mảng Khoa học tự nhiên, Toán cơ bản, Kinh tế vĩ mô, Lập trình máy tính) thành những ví dụ trực quan dễ hình dung bằng phương pháp "Ẩn dụ" (Analogy comparison).
Để hiển thị chuẩn xác nhất, mọi công thức toán học, vật lý hay hóa học bắt buộc phải được bọc trong định dạng LaTeX: cặp dấu $...$ cho công thức nội dòng (inline) và cặp dấu $$...$$ cho các công thức cột khối lớn xuống dòng (block math).
Phản hồi bằng ngôn ngữ người dùng là (${currentLang === 'en' ? 'English' : currentLang === 'ko' ? 'Korean' : 'Vietnamese'}).`;

      userPrompt = `Hãy giải thích khái niệm trừu tượng: "${concept}" 
Dành cho đối tượng: ${audience}

Hãy sử dụng một phép so sánh, ẩn dụ thật đời thường, gần gũi với tầm độ tuổi đối tượng và đưa ra một ví dụ minh họa thực tế sinh động để người nghe có kích hoạt tư duy lập tức thấu hiểu bản chất.`;
    }

    try {
      const res = await fetch("/api/workspace/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt, systemPrompt }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 401 || data.error === "INVALID_API_KEY") {
          const err: any = new Error("INVALID_API_KEY");
          err.isUserKey = data.isUserKey;
          throw err;
        }
        if (res.status === 404 || data.error === "MODEL_NOT_FOUND") {
          const err: any = new Error("MODEL_NOT_FOUND");
          err.isUserKey = data.isUserKey;
          throw err;
        }
        if (data.error === "QUOTA_EXHAUSTED") {
          const err: any = new Error("QUOTA_EXHAUSTED");
          err.isUserKey = data.isUserKey;
          throw err;
        }
        const err: any = new Error(data.error || "API call failed");
        err.isUserKey = data.isUserKey;
        throw err;
      }

      const generatedText = data.text || "No response received.";
      setOutput(generatedText);

      // Detect tools from rawTools mentioned in the output
      import("../data/tools").then(({ rawTools }) => {
        const mentionedIds = rawTools
          .filter((tool) => {
            const name = tool.name.toLowerCase();
            const text = generatedText.toLowerCase();
            return text.includes(name);
          })
          .map((tool) => tool.id);
        
        if (mentionedIds.length > 0) {
          onToolsSuggested(mentionedIds);
        }
      });
    } catch (err: any) {
      console.error(err);
      
      if (err.message === "MISSING_GEMINI_API_KEY") {
        setErrorMsg(
          currentLang === "en"
            ? "⚠️ GEMINI_API_KEY is missing! Please contact the administrator."
            : currentLang === "ko"
            ? "⚠️ GEMINI_API_KEY가 없습니다!"
            : "⚠️ Hệ thống đang thiếu khóa GEMINI_API_KEY! Vui lòng liên hệ quản trị viên."
        );
      } else if (err.message === "MODEL_NOT_FOUND") {
        setErrorMsg(
          currentLang === "en"
            ? "⚠️ MODEL NOT FOUND! The AI model is currently unavailable."
            : currentLang === "ko"
            ? "⚠️ 모델을 찾을 수 없습니다!"
            : "⚠️ KHÔNG TÌM THẤY MODEL! Model AI hiện không khả dụng."
        );
      } else if (err.message === "INVALID_API_KEY") {
        setErrorMsg(
          currentLang === "en"
            ? "⚠️ INVALID API KEY! The system key is incorrect."
            : currentLang === "ko"
            ? "⚠️ 유효하지 않은 API 키입니다!"
            : "⚠️ MÃ API KHÔNG HỢP LỆ! Mã hệ thống bị sai."
        );
      } else if (err.message === "QUOTA_EXHAUSTED") {
        setErrorMsg("⚠️ " + dict[currentLang].err_quota_exhausted);
      } else {
        setErrorMsg(`⚠️ Error: ${err.message || "Unknown"}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback
      console.error(err);
    }
  };

  return (
    <section id="workspace" className="mb-20 scroll-mt-24">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50/40 dark:from-stone-900/40 dark:to-stone-950/40 p-8 md:p-12 rounded-[2.5rem] border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[10px] font-extrabold text-[#F58220] uppercase tracking-widest bg-[#F58220]/10 px-3 py-1 rounded-full border border-[#F58220]/20">
                PRO-WORKSPACE
              </span>
              <h3 className="font-black mt-2.5 text-[#121C4F] dark:text-white tracking-tight" style={{ fontSize: "25px" }}>
                {dict[currentLang].workspace_title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 mt-1.5 font-medium" style={{ fontSize: "12px" }}>
                {dict[currentLang].workspace_subtitle}
              </p>
            </div>

            {/* Tab Swappers */}
            <div className="flex flex-row items-center bg-stone-200/50 dark:bg-stone-800/60 p-1.5 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 w-fit">
              <button
                onClick={() => setActiveTab("activity")}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === "activity"
                    ? "bg-[#121C4F] dark:bg-sky-600 text-white shadow-sm"
                    : "text-stone-600 hover:text-[#121C4F] dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="inline-block text-center" style={{ width: "140.531px" }}>{dict[currentLang].ws_tab_activity}</span>
              </button>
              <button
                onClick={() => setActiveTab("prompt")}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === "prompt"
                    ? "bg-[#121C4F] dark:bg-sky-600 text-white shadow-sm"
                    : "text-stone-600 hover:text-[#121C4F] dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60"
                }`}
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span className="inline-block text-center" style={{ width: "113.0803px" }}>{dict[currentLang].ws_tab_prompt}</span>
              </button>
              <button
                onClick={() => setActiveTab("analogy")}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === "analogy"
                    ? "bg-[#121C4F] dark:bg-sky-600 text-white shadow-sm"
                    : "text-stone-600 hover:text-[#121C4F] dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60"
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span className="inline-block text-center" style={{ width: "143px" }}>{dict[currentLang].ws_tab_analogy}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Column - 5 cols */}
            <div className="lg:col-span-5 bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-5">
              
              {/* Activity designer inputs */}
              {activeTab === "activity" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_subject}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={currentLang === "en" ? "e.g. Physics, History, Literature..." : currentLang === "ko" ? "예: 물리학, 역사, 문학..." : "VD: Vật lí, Ngữ văn, Lịch sử..."}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_grade}
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 font-bold text-stone-700 dark:text-stone-200 cursor-pointer"
                    >
                      <option value="Tiểu học / Elementary" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_elementary}</option>
                      <option value="THCS / Middle School" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_middle}</option>
                      <option value="THPT / High School" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_high}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_topic}
                    </label>
                    <textarea
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder={currentLang === "en" ? "e.g. Thermal expansion, Shakespearean plays, Industrial Revolution..." : currentLang === "ko" ? "예: 열팽창, 고전 문학, 산업 혁명..." : "VD: Sự nở vì nhiệt của chất rắn, Thơ Đường luật, Cách mạng công nghiệp..."}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 h-24 resize-none font-medium"
                    />
                  </div>
                </div>
              )}

              {/* Prompt Tuner inputs */}
              {activeTab === "prompt" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_target_tool}
                    </label>
                    <select
                      value={targetTool}
                      onChange={(e) => setTargetTool(e.target.value)}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 font-bold text-stone-700 dark:text-stone-200 cursor-pointer"
                    >
                      <option value="ChatGPT/Claude" className="dark:bg-stone-900 dark:text-white">ChatGPT / Claude</option>
                      <option value="Gamma" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_tool_gamma}</option>
                      <option value="Midjourney/Canva" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_tool_midjourney}</option>
                      <option value="NotebookLM" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_tool_notebook}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_raw_request}
                    </label>
                    <textarea
                      value={rawPrompt}
                      onChange={(e) => setRawPrompt(e.target.value)}
                      placeholder={currentLang === "en" ? "e.g. Write a sample essay outline about my hometown..." : currentLang === "ko" ? "예: 내 고향에 관한 에세이 작성을 도와줘..." : "VD: Hãy viết cho tôi một bài văn mẫu về quê hương..."}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 h-40 resize-none font-medium"
                    />
                  </div>
                </div>
              )}

              {/* Concept Analogy inputs */}
              {activeTab === "analogy" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-[#121C4F] dark:text-stone-300 text-xs font-extrabold uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_difficult_concept}
                    </label>
                    <input
                      type="text"
                      value={concept}
                      onChange={(e) => setConcept(e.target.value)}
                      placeholder={currentLang === "en" ? "e.g. Inflation, Centripetal Force, DNA..." : currentLang === "ko" ? "예: 인플레이션, 구심력, DNA..." : "VD: Lạm phát, Lực hướng tâm, DNA..."}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#121C4F] dark:text-stone-300 uppercase mb-1.5 tracking-wider">
                      {dict[currentLang].ws_target_audience}
                    </label>
                    <select
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm py-2.5 px-4 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 font-bold text-stone-700 dark:text-stone-200 cursor-pointer"
                    >
                      <option value="Trẻ em 8 tuổi / 8-year-old child" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_child}</option>
                      <option value="Học sinh 14 tuổi / 14-year-old student" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_option_student}</option>
                      <option value="Giáo viên / Teacher" className="dark:bg-stone-900 dark:text-white">{dict[currentLang].ws_audience_teacher}</option>
                    </select>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950/20 p-3.5 rounded-xl text-xs font-semibold border border-red-100 dark:border-red-900/40">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                id="workspace-generate-btn"
                disabled={loading}
                onClick={handleGenerate}
                className="w-full bg-[#121C4F] dark:bg-sky-600 hover:bg-[#0b1136] dark:hover:bg-sky-500 text-white font-extrabold text-sm py-4 rounded-xl transition-all shadow-lg shadow-blue-950/15 dark:shadow-sky-950/15 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Gemini is generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{dict[currentLang].ws_btn_generate}</span>
                  </>
                )}
              </button>
            </div>

            {/* Display output board - 7 cols */}
            <div className="lg:col-span-7 bg-white dark:bg-stone-900 p-6 md:p-8 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-sm flex flex-col justify-between min-h-[460px] h-full relative">
              <div className="overflow-y-auto max-h-[380px] pr-2 flex-grow space-y-4">
                {output ? (
                  <div className="animate-in fade-in duration-300">
                    {formatMarkdown(output)}
                  </div>
                ) : loading ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin"></div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#121C4F] dark:text-sky-400 animate-pulse">
                        {currentLang === "vi" 
                          ? "Khởi tạo ý tưởng học thuật..." 
                          : currentLang === "ko"
                          ? "학술 아이디어 생성 중..."
                          : "Generating academic ideas..."}
                      </p>
                      <p className="text-xs text-stone-400 dark:text-stone-500 font-medium">
                        {currentLang === "vi"
                          ? "Gemini đang thiết kế nội dung sư phạm dành riêng theo khung chương trình Dewey."
                          : currentLang === "ko"
                          ? "Gemini가 듀이 교육과정에 맞춘 맞춤형 교수 통찰을 설계하고 있습니다."
                          : "Gemini is designing custom pedagogical insights tailored inside Dewey curriculum rules."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-stone-400 dark:text-stone-500 animate-in fade-in duration-300">
                    <span className="text-5xl block mb-4">🪄</span>
                    <p className="text-sm font-bold max-w-md mx-auto leading-relaxed">
                      {dict[currentLang].ws_output_placeholder}
                    </p>
                  </div>
                )}
              </div>

              {/* Action summary footer */}
              {output && (
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4 mt-6 flex flex-wrap items-center justify-between gap-4 animate-in fade-in duration-300">
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-medium italic">
                    {dict[currentLang].ws_powered}
                  </span>
                  
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1.5 text-xs text-[#00AEEF] dark:text-sky-400 hover:text-[#121C4F] dark:hover:text-sky-300 font-bold transition-all bg-sky-50 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-900/30 py-2 px-4 rounded-xl border border-sky-100 dark:border-sky-900/40 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copySuccess ? "Copied!" : dict[currentLang].ws_copy}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
