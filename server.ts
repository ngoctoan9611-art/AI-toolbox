import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client securely server-side with lazy loading to support dynamic API key updates in AI Studio
function getGeminiClient(): GoogleGenAI {
  const currentKey = process.env.GEMINI_API_KEY;
  if (!currentKey || currentKey.trim() === "" || currentKey === "MY_GEMINI_API_KEY") {
    throw new Error("MISSING_GEMINI_API_KEY");
  }
  return new GoogleGenAI({
    apiKey: currentKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API endpoint 1: Workspace educational AI generator
app.post("/api/workspace/generate", async (req, res) => {
  try {
    const { userPrompt, systemPrompt } = req.body;

    console.log("[Workspace] Using Default System API Key");

    if (!userPrompt) {
      return res.status(400).json({ error: "No user prompt provided" });
    }

    const aiInstance = getGeminiClient();
    const response = await aiInstance.models.generateContent({
      model: "gemini-flash-latest",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt || "You are a helpful educational AI assistant.",
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini WorkSpace Generate Error:", error);

    // Handle invalid API Key
    if (error?.status === "UNAUTHENTICATED" || error?.code === 401) {
      return res.status(401).json({ error: "INVALID_API_KEY" });
    }

    // Handle model not found (404)
    if (error?.status === "NOT_FOUND" || error?.code === 404) {
      return res.status(404).json({ error: "MODEL_NOT_FOUND" });
    }

    if (error?.message === "MISSING_GEMINI_API_KEY") {
      return res.status(400).json({ error: "MISSING_GEMINI_API_KEY" });
    }
    // Check for quota error
    if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.code === 429) {
      return res.status(429).json({ error: "QUOTA_EXHAUSTED" });
    }
    res.status(500).json({ error: error?.message || "Internal Server Error in workspace generator" });
  }
});

// API endpoint 2: Chatbot assistant adviser
app.post("/api/chat", async (req, res) => {
  try {
    const { message, previousMessages } = req.body;

    console.log("[Chat] Using Default System API Key");

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    const systemPrompt = `Bạn là "Dewey AI Navigator" - Trợ lý công nghệ giáo dục tích hợp trên Cẩm nang AI Dewey Schools.
Nhiệm vụ của bạn là tư vấn công cụ AI phù hợp nhất từ danh sách 36+ công cụ hệ thống.

Danh sách các Tool nội bộ: ChatGPT, Claude 3.5 Sonnet, Google Gemini, Microsoft Copilot, Poe AI, NotebookLM, Perplexity AI, Consensus, Elicit, SciSpace (Typeset), Semantic Scholar, MagicSchool, Eduaide.ai, Brisk Teaching, Quizizz AI, Kahoot! AI, Curipod, QuestionWell, Blooket, ELSA Speak, Duolingo Max, Speak App, Character.ai, GrammarlyGO, QuillBot, Notion AI, Jenni AI, ChatPDF, HeyGen Video Avatar, Descript, Suno AI Music, ElevenLabs Voice, Runway Gen-2, Synthesia, Gamma App, Beautiful.ai, Canva Magic Studio, Midjourney, Slidesgo AI, Khanmigo, Photomath, Socratic by Google, GitHub Copilot, Padlet Magic, Miro AI Board.

NGUYÊN TẮC TRẢ LỜI CỰC KỲ QUAN TRỌNG:
1. Trả lời bằng ngôn ngữ mà người dùng hỏi (Tiếng Việt, Tiếng Anh, hoặc Tiếng Hàn).
2. vô cùng ngắn gọn, thân thiện và trực diện. Không chào hỏi rườm rà.
3. Nếu người dùng muốn giải bài tập/code hộ: Nhắc nhở KHÔNG CHÉP ĐÁP ÁN ĐỂ GIỮ LIÊM CHÍNH HỌC THUẬT, hãy gợi ý dùng Khanmigo hoặc Socratic bám hiệu quả hướng dẫn từng bước.
4. Cấu trúc câu trả lời bắt buộc phải rõ ràng:
- **Đề xuất công cụ**: [Tên Tool gợi ý cụ thể]
- **Lý do khuyên dùng**: [Điểm nổi bật ngắn gọn thích hợp mục đích]
- **Mẫu lệnh Prompt khuyên dùng**: "Hãy viết một template câu lệnh thực tế mà giáo viên/học sinh có thể copy dùng liền cho công cụ đó"`;

    const contextPrompt = previousMessages && previousMessages.length > 0 
      ? `Lịch sử hội thoại trước:\n${previousMessages.map((m: any) => `${m.sender}: ${m.text}`).join("\n")}\n\nCâu hỏi mới nhất: ${message}`
      : message;

    const aiInstance = getGeminiClient();
    const response = await aiInstance.models.generateContent({
      model: "gemini-flash-latest",
      contents: contextPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);

    // Handle invalid API Key
    if (error?.status === "UNAUTHENTICATED" || error?.code === 401) {
      return res.status(401).json({ error: "INVALID_API_KEY" });
    }

    // Handle model not found (404)
    if (error?.status === "NOT_FOUND" || error?.code === 404) {
      return res.status(404).json({ error: "MODEL_NOT_FOUND" });
    }

    if (error?.message === "MISSING_GEMINI_API_KEY") {
      return res.status(400).json({ error: "MISSING_GEMINI_API_KEY" });
    }
    // Check for quota error
    if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.code === 429) {
      return res.status(429).json({ error: "QUOTA_EXHAUSTED" });
    }
    res.status(500).json({ error: error?.message || "Internal Server Error in chat coordinator" });
  }
});

// API endpoint: Get analytics stats
app.get("/api/admin/stats", (req, res) => {
  res.json({ message: "Use Firestore SDK directly on client" });
});


// API endpoint 3: Get all user contributed tools
app.get("/api/contributions", (req, res) => {
  res.json({ message: "Use Firestore SDK directly on client" });
});

// File storage for user sheets config
const SHEETS_CONFIG_FILE = path.join(process.cwd(), "sheets-config.json");

function readSheetsConfig() {
  try {
    if (fs.existsSync(SHEETS_CONFIG_FILE)) {
      const data = fs.readFileSync(SHEETS_CONFIG_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading sheets config:", error);
  }
  return { spreadsheetId: "" };
}

function writeSheetsConfig(config: any) {
  try {
    fs.writeFileSync(SHEETS_CONFIG_FILE, JSON.stringify(config, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing sheets config:", error);
    return false;
  }
}

// API endpoint 3: Get all user contributed tools
app.get("/api/contributions", (req, res) => {
  res.json({ message: "Use Firestore SDK directly on client" });
});

// Route: Get Google Sheets Configuration
app.get("/api/sheets-config", (req, res) => {
  res.json(readSheetsConfig());
});

// Route: Save Google Sheets Configuration
app.post("/api/sheets-config", (req, res) => {
  let { spreadsheetId } = req.body;
  if (spreadsheetId) {
    spreadsheetId = spreadsheetId.trim();
    // Regular expression to extract the ID from a full Google Sheets URL
    const match = spreadsheetId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      spreadsheetId = match[1];
    }
  }
  const config = { spreadsheetId: (spreadsheetId || "") };
  writeSheetsConfig(config);
  res.json({ success: true, config });
});

// Route: Sync contributions list to Google Sheets
// This now needs to be handled on CLIENT side or we need to pass data to backend
// For now, I will NOT change the Sheets Sync logic here because it requires significant refactoring
// to read from Firestore on the server. I will inform the user.
app.post("/api/sheets-sync", async (req, res) => {
  res.status(501).json({ error: "Sync logic moved to Client or needs Firestore Admin SDK on server." });
});

// API endpoint 4: Post a new user contribution (DEPRECATED - Use Firestore Client SDK)
app.post("/api/contributions", async (req, res) => {
  res.status(410).json({ error: "Moved to Firestore Client SDK" });
});

// Main server bootstrap wrapping async function to support CJS building perfectly
async function bootstrap() {
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    // Integrate Vite Dev middleware inside development state
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve build static output files inside production container state
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Bind server port
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Dewey Academic AI Server is running seamlessly at http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Critical server bootstrap error:", err);
});
