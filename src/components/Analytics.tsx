import React, { useState } from "react";
import { Language } from "../types";
import { Sparkles, BookOpen, Lock, X } from "lucide-react";

interface AnalyticsProps {
  currentLang: Language;
  dict: any;
  toolCount: number;
  categoryCount: number;
}

const DEFINITIONS = {
  vi: {
    applicability: {
      title: "Tính ứng dụng (Applicability)",
      color: "border-[#00AEEF]/20 bg-sky-50/50 text-stone-700 dark:bg-sky-950/10 dark:text-stone-300",
      accentText: "text-[#00AEEF]",
      iconBg: "bg-sky-100/80 dark:bg-sky-950/40",
      desc: "Việc lựa chọn và tích hợp các công cụ AI vào giảng dạy và học tập cần dựa trên mục tiêu giáo dục cụ thể, nâng cao tính thực tiễn đổi mới phương pháp giảng dạy sáng tạo, trực quan hóa và cá nhân hóa trải nghiệm người học tại Dewey Schools."
    },
    integrity: {
      title: "Liêm chính học thuật (Academic Integrity)",
      color: "border-emerald-500/20 bg-emerald-50/30 text-stone-700 dark:bg-emerald-950/5 dark:text-stone-300",
      accentText: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-950/40",
      desc: "Sử dụng AI có trách nhiệm, trung thực, trích dẫn nguồn đầy đủ và rõ ràng. ERPC khuyến khích học sinh dùng AI như người cố vấn, nâng bồi kiến thức (tutor) chứ không phải để gian lận, sao chép hoặc trốn tránh tư duy độc lập."
    },
    security: {
      title: "Bảo mật dữ liệu (Data Security)",
      color: "border-orange-500/20 bg-orange-50/20 text-stone-700 dark:bg-orange-950/5 dark:text-stone-300",
      accentText: "text-[#F58220] dark:text-amber-500",
      iconBg: "bg-orange-100/80 dark:bg-orange-950/40",
      desc: "Không chia sẻ thông tin cá nhân của học sinh, giáo viên hoặc dữ liệu nội bộ của Dewey Schools lên các mô hình AI công cộng. Luôn sử dụng tài khoản trường cấp và tuân thủ các quy tắc bảo mật dữ liệu an toàn của Hội đồng ERPC."
    }
  },
  en: {
    applicability: {
      title: "Applicability",
      color: "border-[#00AEEF]/20 bg-sky-50/50 text-stone-700 dark:bg-sky-950/10 dark:text-stone-300",
      accentText: "text-[#00AEEF]",
      iconBg: "bg-sky-100/80 dark:bg-sky-950/40",
      desc: "AI integration in teaching & learning must align with specific learning objectives, foster pedagogical innovation, and enable visualization and personalization of learning experiences at The Dewey Schools."
    },
    integrity: {
      title: "Academic Integrity",
      color: "border-emerald-500/20 bg-emerald-50/30 text-stone-700 dark:bg-emerald-950/5 dark:text-stone-300",
      accentText: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-950/40",
      desc: "Ethical use of AI with clear, honest attribution. ERPC encourages students to utilize AI as an intellectual tutor to enhance knowledge, rather than as a tool to bypass independent thinking, plagiarize, or cheat."
    },
    security: {
      title: "Data Security",
      color: "border-orange-500/20 bg-orange-50/20 text-stone-700 dark:bg-orange-950/5 dark:text-stone-300",
      accentText: "text-[#F58220] dark:text-amber-500",
      iconBg: "bg-orange-100/80 dark:bg-orange-950/40",
      desc: "Avoid sharing confidential student, staff, or internal The Dewey Schools data with public AI models. Always use school-provided accounts and respect ERPC security guidelines."
    }
  },
  ko: {
    applicability: {
      title: "적용 가능성 (Applicability)",
      color: "border-[#00AEEF]/20 bg-sky-50/50 text-stone-700 dark:bg-sky-950/10 dark:text-stone-300",
      accentText: "text-[#00AEEF]",
      iconBg: "bg-sky-100/80 dark:bg-sky-950/40",
      desc: "AI의 교육적 통합은 구체적인 학습 목표와 연계되어야 하며, Dewey Schools의 창의적이고 시각화되며 개인화된 학습 경험을 위한 교육적 혁신을 촉진해야 합니다."
    },
    integrity: {
      title: "학문적 무결성 (Academic Integrity)",
      color: "border-emerald-500/20 bg-emerald-50/30 text-stone-700 dark:bg-emerald-950/5 dark:text-stone-300",
      accentText: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-950/40",
      desc: "출처를 인용하여 AI를 성실하고 윤리적으로 사용합니다. ERPC는 인공지능을 독립적 교수법의 대안이 아닌 보조 튜터로 활용할 것을 권장합니다."
    },
    security: {
      title: "데이터 보안 (Data Security)",
      color: "border-orange-500/20 bg-orange-50/20 text-stone-700 dark:bg-orange-950/5 dark:text-stone-300",
      accentText: "text-[#F58220] dark:text-amber-500",
      iconBg: "bg-orange-100/80 dark:bg-orange-950/40",
      desc: "학생이나 교사의 개인정보 및 학교 내부 데이터를 대용량 공개형 AI 모델과 공유하지 마십시오. 학교 지급 계정을 사용하고 ERPC 보안 수칙을 준수해야 합니다."
    }
  }
};

export default function Analytics({ currentLang, dict, toolCount, categoryCount }: AnalyticsProps) {
  const [selectedDetail, setSelectedDetail] = useState<"applicability" | "integrity" | "security" | null>(null);

  const handleToggle = (badgeType: "applicability" | "integrity" | "security") => {
    setSelectedDetail((prev) => (prev === badgeType ? null : badgeType));
  };

  const getActiveDetailData = () => {
    if (!selectedDetail) return null;
    return DEFINITIONS[currentLang][selectedDetail];
  };

  const activeData = getActiveDetailData();

  return (
    <section id="analytics" className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch scroll-mt-24">
      {/* Informative advice from ERPC */}
      <div className="space-y-6 flex flex-col justify-center">
        <div className="p-8 bg-sky-50/60 dark:bg-sky-950/20 rounded-3xl border border-[#00AEEF]/20 dark:border-[#00AEEF]/30 h-full flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1">
          <h4 className="text-[#121C4F] dark:text-white text-2xl font-black mb-4 flex items-center tracking-tight">
            <span className="mr-3 bg-[#00AEEF]/10 dark:bg-[#00AEEF]/20 p-2.5 rounded-2xl text-2xl leading-none">💡</span> 
            {dict[currentLang].erpc_recommend}
          </h4>
          <p 
            className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: dict[currentLang].erpc_desc }}
          />

          {/* Guidelines micro badges */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div 
              onClick={() => handleToggle("applicability")}
              className={`p-3 bg-white dark:bg-stone-800/40 rounded-xl border flex flex-col items-center text-center cursor-pointer select-none transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                selectedDetail === "applicability"
                  ? "border-[#00AEEF] ring-2 ring-[#00AEEF]/20 bg-sky-50/20 dark:bg-sky-950/20 scale-[1.03]"
                  : "border-stone-200/60 dark:border-stone-700/50 hover:border-[#00AEEF]/50"
              }`}
            >
              <Sparkles className={`w-5 h-5 mb-1.5 transition-transform duration-300 ${selectedDetail === "applicability" ? "text-[#00AEEF] scale-110" : "text-stone-400 dark:text-stone-500"}`} />
              <span className="text-[8px] font-bold text-stone-600 dark:text-stone-300 block uppercase tracking-wider">
                {dict[currentLang].sec_badge_applicability}
              </span>
            </div>

            <div 
              onClick={() => handleToggle("integrity")}
              className={`p-3 bg-white dark:bg-stone-800/40 rounded-xl border flex flex-col items-center text-center cursor-pointer select-none transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                selectedDetail === "integrity"
                  ? "border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/10 dark:bg-emerald-950/20 scale-[1.03]"
                  : "border-stone-200/60 dark:border-stone-700/50 hover:border-emerald-500/50"
              }`}
            >
              <BookOpen className={`w-5 h-5 mb-1.5 transition-transform duration-300 ${selectedDetail === "integrity" ? "text-emerald-500 scale-110" : "text-stone-400 dark:text-stone-500"}`} />
              <span className="text-[8px] font-bold text-stone-600 dark:text-stone-300 block uppercase tracking-wider">
                {dict[currentLang].sec_badge_academic_integrity}
              </span>
            </div>

            <div 
              onClick={() => handleToggle("security")}
              className={`p-3 bg-white dark:bg-stone-800/40 rounded-xl border flex flex-col items-center text-center cursor-pointer select-none transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                selectedDetail === "security"
                  ? "border-orange-500 ring-2 ring-orange-500/20 bg-orange-50/10 dark:bg-orange-950/20 scale-[1.03]"
                  : "border-stone-200/60 dark:border-stone-700/50 hover:border-orange-500/50"
              }`}
            >
              <Lock className={`w-5 h-5 mb-1.5 transition-transform duration-300 ${selectedDetail === "security" ? "text-[#F58220] scale-110" : "text-stone-400 dark:text-stone-500"}`} />
              <span className="text-[8px] font-bold text-stone-600 dark:text-stone-300 block uppercase tracking-wider">
                {dict[currentLang].sec_badge_data_security}
              </span>
            </div>
          </div>

          {/* Interactive display details */}
          {activeData && (
            <div className={`mt-5 p-5 border rounded-2xl flex items-start gap-4 relative animate-in slide-in-from-top-3 fade-in duration-300 ${activeData.color}`}>
              <button 
                onClick={() => setSelectedDetail(null)}
                className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-200 p-1 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                title={currentLang === "en" ? "Close explanation" : "Đóng định nghĩa"}
              >
                <X className="w-3.5 h-3.5" />
              </button>
              
              <div className={`p-2.5 rounded-xl flex-shrink-0 ${activeData.iconBg}`}>
                {selectedDetail === "applicability" && <Sparkles className={`w-4 h-4 ${activeData.accentText}`} />}
                {selectedDetail === "integrity" && <BookOpen className={`w-4 h-4 ${activeData.accentText}`} />}
                {selectedDetail === "security" && <Lock className={`w-4 h-4 ${activeData.accentText}`} />}
              </div>

              <div className="space-y-1.5 pr-4 select-text">
                <h5 className={`text-xs font-black uppercase tracking-wider ${activeData.accentText}`}>
                  {activeData.title}
                </h5>
                <p className="text-xs leading-relaxed font-semibold text-stone-600 dark:text-stone-300">
                  {activeData.desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Numeric Stats */}
      <div className="bg-white dark:bg-stone-900 p-8 rounded-[2rem] shadow-sm border border-stone-200/80 dark:border-stone-800/80 hover:border-[#00AEEF]/50 flex flex-col justify-center transition-all duration-300 hover:shadow-lg">
        <h3 className="text-2xl font-black text-[#121C4F] dark:text-white mb-6 tracking-tight">
          {dict[currentLang].ai_ecosystem}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl text-center border border-stone-200/60 dark:border-stone-800/80 hover:bg-stone-100/50 dark:hover:bg-stone-700 transition-colors">
            <p className="text-3xl font-extrabold text-[#121C4F] dark:text-stone-100" id="totalCount">
              {toolCount}
            </p>
            <span className="text-[8px] uppercase font-extrabold text-stone-400 dark:text-stone-500 mt-1.5 tracking-widest leading-normal block">
              {dict[currentLang].total_tools}
            </span>
          </div>
          <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl text-center border border-stone-200/60 dark:border-stone-800/80 hover:bg-stone-100/50 dark:hover:bg-stone-700 transition-colors">
            <p className="text-3xl font-extrabold text-[#F58220] dark:text-amber-500" id="catCount">
              {categoryCount}
            </p>
            <span style={{ fontSize: '8px', width: '143.766px' }} className="uppercase font-extrabold text-stone-400 dark:text-stone-500 mt-1.5 tracking-widest leading-normal block mx-auto">
              {dict[currentLang].support_fields}
            </span>
          </div>
        </div>

        {/* Branding badge decoration */}
        <div className="mt-6 text-center text-xs font-semibold text-stone-400 dark:text-stone-500 italic">
          {dict[currentLang].sec_sponsored_by}
        </div>
      </div>
    </section>
  );
}
