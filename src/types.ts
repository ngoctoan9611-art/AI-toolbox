export type Language = "vi" | "en" | "ko";

export interface CategoryTranslation {
  vi: string;
  en: string;
  ko: string;
}

export interface ToolTranslation {
  desc: string;
  longDesc: string;
  features: string[];
  tip: string;
  warn: string;
}

export interface ToolItem {
  id: string;
  name: string;
  role: "Cả hai" | "Giáo viên" | "Học sinh";
  cat: CategoryTranslation;
  link: string;
  vi: ToolTranslation;
  en: ToolTranslation;
  ko: ToolTranslation;
}

export type WorkspaceTab = "activity" | "prompt" | "analogy";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  isLoading?: boolean;
}

export interface FeedbackForm {
  name: string;
  link: string;
  reason: string;
}
