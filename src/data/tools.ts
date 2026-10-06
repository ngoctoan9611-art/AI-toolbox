import { ToolItem } from "../types";

export const rawTools: ToolItem[] = [
  {
    id: "chatgpt",
    role: "Cả hai",
    cat: { vi: "Đa năng", en: "General AI", ko: "일반 AI" },
    link: "https://chatgpt.com/",
    name: "ChatGPT",
    vi: {
      desc: "AI xử lý ngôn ngữ tự nhiên phổ biến nhất.",
      longDesc: "Mô hình ngôn ngữ lớn phổ biến nhất thế giới. Giúp cá nhân hóa lộ trình học, giải thích khái niệm phức tạp và hỗ trợ thiết kế bài giảng sáng tạo.",
      features: ["Brainstorm ý tưởng", "Giải thích khái niệm", "Lập trình & Fix lỗi code"],
      tip: "Dùng nguyên tắc Role-play: 'Đóng vai chuyên gia giáo dục...'",
      warn: "Không cung cấp đề thi học kỳ hoặc thông tin nội bộ trường chưa công bố."
    },
    en: {
      desc: "Most popular natural language AI.",
      longDesc: "The world's most popular large language model. Helps personalize learning paths, explain complex concepts, and assist in creative lesson design.",
      features: ["Brainstorming", "Concept explanation", "Coding & Debugging"],
      tip: "Use the Role-play principle: 'Act as an educational expert...'",
      warn: "Do not provide unreleased semester exams or internal school credentials."
    },
    ko: {
      desc: "가장 인기 있는 자연어 처리 AI.",
      longDesc: "세계에서 가장 인기 있는 대규모 언어 모델입니다. 맞춤형 기획, 복잡한 개념 설명, 창의적인 수업 설계를 지원합니다.",
      features: ["브레인스토밍", "개념 설명", "코딩 및 오류 수정"],
      tip: "역할 설정 법칙을 써보세요: '교육 전문가로서 행동해줘...'",
      warn: "공개되지 않은 학기 시험 문제나 학교 내부 기밀 정보를 제공하지 마세요."
    }
  },
  {
    id: "claude",
    role: "Cả hai",
    cat: { vi: "Đa năng", en: "General AI", ko: "일반 AI" },
    link: "https://claude.ai/",
    name: "Claude 3.5 Sonnet",
    vi: {
      desc: "Văn phong tự nhiên, xử lý file văn bản khổng lồ.",
      longDesc: "Phát triển bởi Anthropic. Vượt trội trong phân tích tài liệu dài hàng trăm trang với diễn đạt học thuật mạch lạc, lập luận logic và viết lách tự nhiên.",
      features: ["Phân tích tài liệu lớn", "Viết lách sáng tạo", "Lập luận học thuật"],
      tip: "Tuyệt vời để tóm tắt các bài báo khoa học hoặc giáo án dài.",
      warn: "Khả năng tính toán logic toán học đôi khi cần kiểm tra lại."
    },
    en: {
      desc: "Natural writing, processes huge documents.",
      longDesc: "Developed by Anthropic. Excels at analyzing hundreds of pages with academic, coherent tone, logical reasoning, and fluent creative writing.",
      features: ["Analyze large datasets", "Creative writing", "Academic reasoning"],
      tip: "Excellent for summarizing long scientific articles or educational papers.",
      warn: "Mathematical and formal logic computations occasionally require manual verification."
    },
    ko: {
      desc: "자연스러운 문체, 방대한 문서 처리.",
      longDesc: "Anthropic 개발. 일관성 있고 수준 높은 학술적 톤으로 수백 페이지 분량의 문서를 분석하는 데 탁월하며, 유려한 논리적 서술 능력을 갖췄습니다.",
      features: ["대규모 문서 분석", "창의적 작문", "학술적 추론"],
      tip: "긴 논문이나 수업 계획안의 요약 및 분석에 이상적입니다.",
      warn: "수학적 혹은 과학적 정밀 계산의 경우 검증이 필요할 수 있습니다."
    }
  },
  {
    id: "gemini",
    role: "Cả hai",
    cat: { vi: "Đa năng", en: "General AI", ko: "일반 AI" },
    link: "https://gemini.google.com/",
    name: "Google Gemini",
    vi: {
      desc: "Tích hợp sâu hệ sinh thái Google (Docs, Sheets).",
      longDesc: "Kết nối internet thời gian thực mượt mà, phân tích đa phương tiện (ảnh, biểu đồ) và tích hợp trực tiếp vào Docs, Sheets, Google Drive, Gmail của bạn.",
      features: ["Tìm kiếm realtime", "Phân tích số liệu vào Sheets", "Tóm tắt email & tài liệu"],
      tip: "Dùng phím '@' trong ô chat để gọi Gemini xử lý trực tiếp tài liệu từ Google Drive của bạn.",
      warn: "Luôn fact-check chéo lại các số liệu thống kê lịch sử hoặc thông tin mới."
    },
    en: {
      desc: "Deeply integrated with Google ecosystem.",
      longDesc: "Seamless real-time internet connection, multimedia analysis (images, charts), and direct integration with your Google Docs, Sheets, Drive, and Gmail.",
      features: ["Real-time search", "Data analysis in Sheets", "Email & doc summarization"],
      tip: "Type '@' in the chatbox to ask Gemini to retrieve and process files from Google Drive.",
      warn: "Always cross-check historical statistics or freshly updated web information."
    },
    ko: {
      desc: "Google 생태계와 긴밀한 통합.",
      longDesc: "실시간 초고속 인터넷 검색, 멀티모달 분석(이미지, 차트) 기능을 갖추었으며, Google Docs, Sheets, Drive, Gmail과 간편하게 연동됩니다.",
      features: ["실시간 웹 정보 탐색", "스프레드시트 데이터 연동", "이메일 및 문서 요약"],
      tip: "채팅창에서 '@'를 입력하여 구글 드라이브의 문서를 원격 호출 및 처리하세요.",
      warn: "최신 뉴스 데이터나 역사적 수치 자료는 항상 정확성을 재검증해야 합니다."
    }
  },
  {
    id: "copilot",
    role: "Cả hai",
    cat: { vi: "Đa năng", en: "General AI", ko: "일반 AI" },
    link: "https://copilot.microsoft.com/",
    name: "Microsoft Copilot",
    vi: {
      desc: "Trợ lý AI tích hợp Word, PowerPoint, Excel.",
      longDesc: "Được xây dựng trên nền tảng GPT-4 từ Microsoft với bảo mật cấp doanh nghiệp. Giúp tạo nội dung, định dạng văn bản và phân tích dữ liệu trực tiếp trong Microsoft Office 365.",
      features: ["Tạo slide PPT tự động", "Phân tích dữ liệu Excel", "Tóm tắt họp trực tuyến"],
      tip: "Dùng trong trình duyệt Microsoft Edge để nhanh chóng dịch hoặc tóm tắt tài liệu PDF.",
      warn: "Hãy dùng tài khoản trường học (Edu) để đảm bảo an toàn bảo mật dữ liệu học sinh."
    },
    en: {
      desc: "AI assistant for Word, PowerPoint, Excel.",
      longDesc: "Built on Microsoft's GPT-4 platform with enterprise-grade security. Helps generate content, format text, and analyze data inside Microsoft Office 365.",
      features: ["Auto PPT creation", "Excel data analysis", "Online meeting minutes summarizing"],
      tip: "Use inside Microsoft Edge browser to summarize or translate open PDF files instantly.",
      warn: "Use school accounts (Edu) to ensure maximum protection and isolation of students' data."
    },
    ko: {
      desc: "Word, PowerPoint, Excel용 AI 비서.",
      longDesc: "마이크로소프트의 GPT-4를 기업급 보안 등급으로 가공한 비서입니다. Microsoft Office 365 소프트웨어 제품군 내에서 텍스트 수립, 서식 자동 구성 및 계산 등을 돕습니다.",
      features: ["자동 PPT 슬라이드 생성", "Excel 분석 자동화", "온라인 원격 회의록 요약"],
      tip: "Microsoft Edge 브라우저 내에서 켜두면 열려 있는 대형 PDF를 즉각 요약 분석해 줍니다.",
      warn: "학생 개인 정보와 학교 보안을 위해 반드시 공식 교육용(Edu) 계정을 경유해 사용하세요."
    }
  },
  {
    id: "poe",
    role: "Cả hai",
    cat: { vi: "Đa năng", en: "General AI", ko: "일반 AI" },
    link: "https://poe.com/",
    name: "Poe AI",
    vi: {
      desc: "Nền tảng đa mô hình (Truy cập nhiều AI cùng lúc).",
      longDesc: "Ứng dụng tổng hợp cho phép tương tác trực tiếp nhiều AI chất lượng cao khác nhau (như ChatGPT, Claude, Llama, Gemini) trong một giao diện duy nhất.",
      features: ["Truy cập nhiều hệ AI", "Tạo chatbot giáo viên riêng", "Tương tác so sánh kết quả"],
      tip: "Hãy sử dụng công cụ tạo Custom Bot để cài đặt prompt dạy học bám sát chương trình Dewey.",
      warn: "Các mô hình nâng cao sẽ bị giới hạn điểm truy vấn mỗi ngày đối với gói miễn phí."
    },
    en: {
      desc: "Multi-model platform (Access many AIs at once).",
      longDesc: "Synthesized workspace enabling direct conversation with multiple cutting-edge AI engines (like ChatGPT, Claude, Llama, Gemini) within a unified browser screen.",
      features: ["Unified multi-AI access", "Create specialized teacher bots", "Comparative answer testing"],
      tip: "Build your own Custom Bot pre-loaded with teaching prompts aligned to the Dewey curriculum.",
      warn: "Advanced models have query-point limits per day on free subscription plans."
    },
    ko: {
      desc: "다중 엔진 플랫폼(여러 AI를 동시에 활용).",
      longDesc: "단 하나의 편리한 창에서 다양한 AI 모델(ChatGPT, Claude, Llama, Gemini 등)을 스위칭하여 사용하고 최상의 결과물을 비교 산출할 수 있습니다.",
      features: ["단일 창 멀티 모델 연계", "나만의 전담 튜터 봇 설계", "다양한 모델 답변 대조"],
      tip: "커스텀 봇 제작 기능을 통해 듀이 커리큘럼 기반 프롬프트를 기본 탑재한 봇을 제작해 보세요.",
      warn: "무료 계정의 경우 고성능 프라임 모델들의 이용에 일일 포인트 제한 정책이 있습니다."
    }
  },
  {
    id: "notebooklm",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://notebooklm.google.com/",
    name: "NotebookLM",
    vi: {
      desc: "Trợ lý ghi chú, hỏi đáp trên tài liệu cá nhân.",
      longDesc: "Sản phẩm đột phá từ Google. AI chỉ phân tích và trả lời dựa trên kho dữ liệu do bạn tải bổ sung lên (PDF, Docs, Link), hạn chế triệt để hiện tượng 'bịa' thông tin.",
      features: ["Tạo cuộc hội thoại âm thanh (Audio Overview)", "Sơ đồ ý tưởng từ tài liệu", "Liên kết trích dẫn chính xác tuyệt đối"],
      tip: "Biến đổi tài liệu học thuật khô khan thành một bản Podcast thảo luận 2 người bằng tính năng Audio Overview.",
      warn: "Tuyệt đối không đăng tải tài liệu nội bộ tuyệt mật của nhà trường lên hệ thống nếu chưa phê duyệt."
    },
    en: {
      desc: "Note-taking and Q&A on personal documents.",
      longDesc: "A breakthrough tool from Google. The AI analyzes and answers queries strictly using sources you upload (PDFs, Google Docs, URLs), eliminating typical AI hallucinations.",
      features: ["Generate educational podcasts (Audio Overview)", "Idea generation maps", "Accurate inline citations for study"],
      tip: "Turn dry research papers into a lively two-speaker discussion podcast with the Audio Overview feature.",
      warn: "Never load restricted, confidential internal school documents onto shared server storage."
    },
    ko: {
      desc: "개인 소장 문서 학습 및 상호 질의응답.",
      longDesc: "구글의 획기적인 맞춤형 AI 노트 관리 도구입니다. 사용자가 직접 올린 전용 학습 파일(PDF, Docs, 웹링크 등) 안에서만 판단하고 응답하여, 사실 유도 오류(할루시네이션)가 일절 불가능합니다.",
      features: [
        "가상 팟캐스트 발췌 토론음성(Audio Overview)",
        "교안 문서에서 주제 구조 지도 도출",
        "자료 원문 출처 및 검증 단락 매핑"
      ],
      tip: "'Audio Overview' 기능을 이용해 긴 텍스트 문서를 감각적인 영어 대화 오디오 콘텐츠로 가공하세요.",
      warn: "연구 용도 이외에 승인되지 않은 비공개 학교 시스템 파일이나 성적 장부를 외부에 대량 업로드 마세요."
    }
  },
  {
    id: "perplexity",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://perplexity.ai/",
    name: "Perplexity AI",
    vi: {
      desc: "Trình tìm kiếm AI kèm chuẩn xác trích dẫn nguồn tin.",
      longDesc: "Hệ thống tra cứu chuyên nghiệp hoạt động nhờ AI. Quét tài nguyên mạng trực tiếp hiện thời và đính kèm đường dẫn xuất xứ cho từng câu nói.",
      features: ["Tải nguồn dữ liệu gốc", "Tìm kiếm đa dạng thuật thuật học", "Cập nhật realtime chính xác"],
      tip: "Có thể kích hoạt bộ lọc 'Academic' để kho báu kết quả chỉ lấy từ tập báo cáo, khóa luận.",
      warn: "Phải mở đường liên kết ngoài kiểm thử thực hư để phòng lỗi nguồn dẫn không đúng."
    },
    en: {
      desc: "AI Search Engine with citations.",
      longDesc: "An AI-powered professional search engine. Scans the web in real-time and appends transparent verified backlinks for every claim made.",
      features: ["Source citation links", "Diverse advanced academic searching", "Real-time query processing"],
      tip: "Toggle the 'Academic' Focus filter to restrict information lookup to research papers and theses.",
      warn: "Always click the source link briefly to guarantee it leads to a valid, peer-reviewed source."
    },
    ko: {
      desc: "출처가 확실한 지능형 데이터 탐색기.",
      longDesc: "실시간 웹 마이닝과 대규모 인공지능이 결합된 종합 답변기입니다. 답의 모든 단락마다 투명한 뉴스 혹은 연구 출처 주소를 표시해 줍니다.",
      features: ["정확한 원문 출처 하이퍼링크 제공", "상황 맞춤 포커스 분류 스캔", "실시간 이슈 통합 탐색"],
      tip: "Focus 설정 중 'Academic'을 적용하면 불필요한 광고나 블로그 글 없이 공식 학술 자료만 엄선해 줍니다.",
      warn: "달린 원저 출처 링크를 타고 들어가 문서 원저작자의 실제 인용 맥락이 맞는지 한번 점검하세요."
    }
  },
  {
    id: "consensus",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://consensus.app/",
    name: "Consensus",
    vi: {
      desc: "Công cụ tìm kiếm chuyên quét bài báo khoa học.",
      longDesc: "Ứng dụng AI tìm kiếm trực tiếp trong cơ sở dữ liệu học thuật chứa trên 200 triệu bài báo khoa học đã qua bình duyệt (peer-reviewed), trả lời các câu hỏi bằng khoa học thực chứng.",
      features: ["Chỉ số đồng thuận giới khoa học", "Trích xuất tóm tắt kết luận", "Tìm kiếm dựa trên bằng chứng"],
      tip: "Đặt câu hỏi dạng Yes/No như 'Does physical exercise improve cognitive performance?' để nhận biểu đồ tỷ lệ đồng ý của giới khoa học.",
      warn: "Chỉ quét các tài liệu nghiên cứu bằng tiếng Anh là chủ yếu."
    },
    en: {
      desc: "AI search engine for scientific papers.",
      longDesc: "Uses AI to search directly within a database of over 200 million peer-reviewed academic papers. Delivers evidence-based answers backed by science.",
      features: ["Scientific consensus meter", "Conclusion abstraction summaries", "Evidence-based learning"],
      tip: "Ask Yes/No questions such as 'Does physical exercise improve cognitive performance?' to see a visual chart of the scientific community's consensus.",
      warn: "Mainly scans published scientific materials written in English."
    },
    ko: {
      desc: "과학 논문 기반 근거 검색 플랫폼.",
      longDesc: "2억 편 이상의 동료 평가(Peer-reviewed) 정식 논문 데이터베이스를 직접 탐색하고, 대중의 의견 대신 과학적인 학술 분석 데이터만 취합하여 입증된 결과를 제시합니다.",
      features: ["과학계 합의 계량화 그래프", "학술 논문 핵심 결론 직관 요약", "입증된 연구 증거 중심 탐색"],
      tip: "'수면이 학업 성과에 직접적 영향을 주는가?' 등 양자택일형으로 물으면 과학계 동의율을 보여줍니다.",
      warn: "영어로 작성된 공식 저널 데이터 위주로 구축되어 한국어 관련 상세 통계는 미비할 수 있습니다."
    }
  },
  {
    id: "elicit",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://elicit.com/",
    name: "Elicit",
    vi: {
      desc: "Trợ lý phân tích tài liệu (Literature Review).",
      longDesc: "Hỗ trợ tự động hóa mảng rà duyệt công trình học thuật (Literature Review). Đọc hiểu nội dung chính, trích dữ liệu dạng bảng cực kỳ dễ so đối.",
      features: ["Nhận diện so kết luận", "Tìm bài báo bắc cầu lý thuyết", "Kẻ bảng đối sánh số liệu"],
      tip: "Upload bộ tập tin PDF của riêng bạn và để Elicit tự tổng hợp so sánh các bài nghiên cứu.",
      warn: "Hệ thống ưu tiên phục vụ người làm luận văn cử nhân, thạc sĩ chuyên sâu trở lên."
    },
    en: {
      desc: "Literature review assistant.",
      longDesc: "Automates the literature review process. Highly effective in pulling data, summarizing findings, and structured comparison in a clean tabular view.",
      features: ["Inter-paper conclusion analysis", "Cross-pollinating related papers", "Structured tabular comparison"],
      tip: "Upload your owns folder of reference PDFs and let Elicit auto-generate your comparative structured index.",
      warn: "Optimized for deep undergraduate and postgraduate research. Might feel too heavy for elementary schools."
    },
    ko: {
      desc: "체계적인 문헌 고찰 및 선행 연구 종합비서.",
      longDesc: "선행 연구 요약 및 논문 분석에 특화되어 수많은 관련 서적과 초록의 데이터를 취합한 뒤 구조화된 비교표 형태로 일괄 분석 수집해 줍니다.",
      features: ["결론 및 연구 모델간 대조", "선행 가설 유기적 흐름 찾기", "정밀 매개 변수 분석 통계 테이블화"],
      tip: "직접 보관 중인 PDF들을 폴더째 업로드하면 Elicit이 각 논문의 방법론과 발견점을 즉시 매핑해 줍니다.",
      warn: "전공 연구 대학서 서적 수준에 초점이 맞춰져 초·중등생이 다루기에는 키워드가 다소 무거울 수 있습니다."
    }
  },
  {
    id: "scispace",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://typeset.io/",
    name: "SciSpace (Typeset)",
    vi: {
      desc: "Giải thích văn bản và phương trình toán lý hóa.",
      longDesc: "Giao diện Copilot đột phá giúp bạn tô đen bất kỳ khái niệm phức tạp, ký tự công thức hay biểu đồ nào trong tài liệu khoa học để hiểu nghĩa chi tiết.",
      features: ["Giải nghĩa toán học trực quan", "Trợ lý chat ngay hông văn bản", "Đính ngôn ngữ theo nhu cầu học văn phong"],
      tip: "Cài thêm tiện ích mở rộng SciSpace Chrome Extension để phân tích bài báo trực tuyến khi đang lướt mạng.",
      warn: "Nên chỉnh độ phân giải của văn bản rõ nét khi đưa vào để AI nhận công thức toán học tốt nhất."
    },
    en: {
      desc: "Read and understand scientific papers.",
      longDesc: "An innovative interactive Copilot workspace where you can highlight any complex terminology, advanced physics equations, or statistical charts to receive an inline breakdown.",
      features: ["Equation & math visual translation", "Sidebar doc-oriented chat", "Academic dictionary on highlight"],
      tip: "Add the SciSpace Chrome Extension to analyze research articles directly inside your web explorer.",
      warn: "Ensure the scanned PDF resolution is clear so the OCR engine correctly processes complex inline formula symbols."
    },
    ko: {
      desc: "논문 독해 및 복잡한 수식 시각 解說.",
      longDesc: "학술 연구지 속의 복잡한 물리·수학 공식, 표 데이터, 통계 지표 등을 드래그하여 지정하면, 전담 교사처럼 알기 쉬운 언어로 공식의 기호와 결과를 풀어 설명해 주는 Copilot입니다.",
      features: ["복잡 방정식 해설 도출", "논문 한편 상호 집중 채팅", "개별 학술 어휘 다국어 풀이"],
      tip: "Chrome 확장 프로그램을 설치하면 연구 학술지 웹 브라우징 화면 내에서 곧바로 수식을 대조 해석합니다.",
      warn: "스캔된 PDF 문서의 해상도가 지나치게 낮을 경우 수학 기호가 오인식되어 왜곡된 풀이가 유도될 수 있습니다."
    }
  },
  {
    id: "semanticscholar",
    role: "Cả hai",
    cat: { vi: "Nghiên cứu", en: "Research", ko: "연구" },
    link: "https://www.semanticscholar.org/",
    name: "Semantic Scholar",
    vi: {
      desc: "Tìm sách báo nghiên cứu dựa trên ngữ nghĩa học thuật.",
      longDesc: "Cơ cụ tìm tài liệu khoa học phi lợi nhuận từ Viện AI Allen. AI hiểu đúng và sâu ngữ cảnh mục đích thay vì chỉ gõ tìm đúng mặt ký tự chữ.",
      features: ["Nút tóm lược siêu nhanh TLDR", "Theo dõi dòng liên kết trích sách", "Tìm mạch tác giả có tầm ảnh hưởng lớn"],
      tip: "Xem chỉ báo 'Highly Influential Citations' của tài liệu để lập tức định vị các nghiên cứu làm móng của chủ đề đó.",
      warn: "Công trình tra không lấy từ báo chí dân sự, chỉ tập trung vào nguồn học thuật hàn lâm."
    },
    en: {
      desc: "Semantic search for scientific papers.",
      longDesc: "A non-profit academic search portal developed by the Allen Institute for AI. The AI understands the context and intent of your query rather than relying on exact keyword matching.",
      features: ["One-sentence TLDR summaries", "Dynamic citation charts and tracking", "Identify prominent influential authors"],
      tip: "Examine the 'Highly Influential Citations' count to immediately isolate foundational works on any educational topic.",
      warn: "It ignores mass media articles, index databases are reserved for formal academic studies."
    },
    ko: {
      desc: "학술 논문 검색 인문 지능 네트워크.",
      longDesc: "앨런 인공지능 연구소(Allen Institute for AI)가 배포한 유수 학술 검색 플랫폼입니다. 정확한 검색 키워드가 없어도 전체적인 의도와 문맥을 해독하여 가장 깊이 있는 학술 자료들을 발견해 줍니다.",
      features: ["원문 유기적 전개 요약 TLDR", "인용 가도 대화형 궤적 추적", "분야별 영향파 저술가 분석"],
      tip: "'Highly Influential Citations' 지표를 활용하면 어떤 선행 이론에서 연구가 파생되었는지 한눈에 파악됩니다.",
      warn: "정통 학과 수업 발표 자료 등으로 활용하는 학문 자료망이므로 연예/일반 트렌드 뉴스는 수집되지 않습니다."
    }
  },
  {
    id: "magicschool",
    role: "Giáo viên",
    cat: { vi: "Soạn bài", en: "Lesson Planning", ko: "수업 준비" },
    link: "https://magicschool.ai/",
    name: "MagicSchool",
    vi: {
      desc: "Nền tảng All-in-one cho giáo viên với 60+ tool chuyên biệt.",
      longDesc: "Hệ nền tảng hoàn hảo nhất được thiết kế để phục vụ giáo dục phổ thông. Hỗ trợ từ viết đề bài tập phân hóa, soạn giáo án chuẩn, viết đề cương đến sinh bảng tiêu chí đánh giá (Rubric).",
      features: ["Xây dựng giáo án bài giảng bám mẫu", "Tạo Rubric đánh giá đa lớp", "Hạ thang từ khó văn bản (Lexile Leveler)"],
      tip: "Công cụ 'Text Leveler' giúp bạn chuyển tự động 1 đoạn tin tức khó thành 3 bản dịch với thang từ ngữ cho học sinh giỏi, trung bình hay yếu.",
      warn: "Vui lòng giữ nguyên tắc tuyệt mật thông tin: Không dán danh sách chứa họ tên rành mạch của học sinh lên đây."
    },
    en: {
      desc: "All-in-one platform for teachers (60+ tools).",
      longDesc: "The premier suite designed for K-12 educators. Includes robust options for planning diversified lessons, writing prompt-based assessments, creating rubrics, and generating personalized parental communications.",
      features: ["Standard-aligned lesson plan creator", "Interactive Rubrics generator", "Vocabulary and text leveler (Lexile)"],
      tip: "The 'Text Leveler' tool lets you quickly adapt a challenging source reading into three separate comprehension levels for tailored testing.",
      warn: "Adhere to safety rules: Never upload spreadsheet exports containing real full names of students."
    },
    ko: {
      desc: "교사용 특화 올인원 교육 지원 시스템 (60개 이상 연계 도구).",
      longDesc: "초·중·고 교육 현장 맞춤형 생성 AI 플랫폼입니다. 과목별 수업 실라버스 초안 수립, 학생 능력 차별화 퀴즈, 다차원 기준 평가표(Rubric) 생성 및 학부모 안부 서한 작성을 신속히 수행합니다.",
      features: [
        "표준 교육 과정 중심 레슨 플래너",
        "수준별 맞춤 평가 기준 루브릭 생성",
        "독해 척도 제어 및 가독 어휘 변환기"
      ],
      tip: "'Text Leveler' 도구를 이용하면 복잡한 영문 사설 뉴스 텍스트를 상·중·하 3가지 난이도 버전으로 일괄 재배포할 수 있습니다.",
      warn: "데이터 보안 규칙 준수: 원문에 학생들의 실제 이름, 소속 반, 학번 등이 연계된 채로 업로드 하지 마세요."
    }
  },
  {
    id: "eduaide",
    role: "Giáo viên",
    cat: { vi: "Soạn bài", en: "Lesson Planning", ko: "수업 준비" },
    link: "https://eduaide.ai/",
    name: "Eduaide.ai",
    vi: {
      desc: "Tạo tài liệu giảng dạy sáng tạo và bài tập trò chơi hóa.",
      longDesc: "Hỗ trợ giáo viên xây dựng bộ nội dung bài tập, lập kế hoạch hoạt động nhóm, xây dựng kịch bản lớp học đảo ngược (Flipped Classroom) và tích hợp các trò chơi gắn trực quan.",
      features: ["Sáng chế dạng bài đố vui trò chơi", "Xây dựng bài giảng đảo ngược", "Gợi mở kịch bản tư duy sâu"],
      tip: "Sử dụng tính năng sinh trò chơi từ vựng để biến hoạt động ổn ổn định lớp năm phút đầu giờ thành thử thách hấp dẫn.",
      warn: "Hãy chỉnh sửa lại cách Việt hóa từ ngữ của AI để sát khẩu ngữ nội bộ của Việt Nam."
    },
    en: {
      desc: "Teaching materials & Gamification generator.",
      longDesc: "Enables teachers to craft gamified classroom task sets, design flipped learning scripts, build interactive cooperative group games, and generate rich pedagogical resources easily.",
      features: ["Interactive class gamification", "Flipped classroom organizer", "Problem-based student prompts"],
      tip: "Apply its vocabulary game generator to customize a 5-minute warm-up quiz at the beginning of each lesson.",
      warn: "Verify localization settings; occasionally require terminology tuning to fit local dialect habits."
    },
    ko: {
      desc: "에듀테크 수업 아이디어 및 게이미피케이션 가공기.",
      longDesc: "학생들의 적극적 상호 소통과 경쟁을 부추기는 게이미피케이션 수업 설계, 플립 러닝(거꾸로 학습) 프로젝트 구성안, 상상력 유발 스토리텔링 등을 전격 기획하는 공간입니다.",
      features: ["학습 참여형 서바이벌 퀴즈 게임 기획", "거꾸로 교실 단계별 활동 설계", "창의적 문제 해결 미션 시나리오"],
      tip: "'어휘 보드게임' 엔진을 구동하면 도입부 5분간 학생들의 졸음을 깨울 만한 미니 시작 퀴즈판을 쉽게 추출할 수 있습니다.",
      warn: "외국 기술 규격 기반 번역이므로, 아시아권 특유의 초등 교육 용어에 맞게 어감이 부드러운 단어로 윤문해 쓰세요."
    }
  },
  {
    id: "brisk",
    role: "Giáo viên",
    cat: { vi: "Hành chính", en: "Admin", ko: "행정" },
    link: "https://briskteaching.com/",
    name: "Brisk Teaching",
    vi: {
      desc: "Tiện ích mở rộng tích hợp Google Docs/Classroom.",
      longDesc: "Công cụ Chrome Extension gọn nhẹ có nhiệm vụ hỗ trợ giáo viên chấm bài nhanh, để lại phản hồi chi tiết, phát hiện sự can thiệp của AI ngay trên Google Workspace.",
      features: ["Nhận xét trực tiếp trên Google Doc", "Phản hồi bài văn bám sát thang điểm", "Tìm hiểu quy trình gõ văn bản"],
      tip: "Tính năng Replay giúp bạn nhìn lại lịch sử gõ văn bản từng ký tự của học sinh để phát hiện hành vi sao chép không trung thực.",
      warn: "Không quá dựa dẫm vào hiển thị phát hiện AI vì công cụ có khả năng báo sai ngôn ngữ tiếng Việt."
    },
    en: {
      desc: "Chrome extension for Docs/Classroom.",
      longDesc: "A lightweight Chrome extension that helps teachers grade quickly, write rich contextual feedback, modify text levels, and evaluate writing authenticity inside Google Workspace.",
      features: ["Direct feedback inside Google Docs", "Standard-aligned feedback comments", "Writing process replay inspector"],
      tip: "Use the Replay function to safely visualize the student's keystroke writing timeline history to prevent sudden copy-pasting.",
      warn: "Do not depend blindly on AI detectors percentages, Vietnamese native writing is highly prone to false positives."
    },
    ko: {
      desc: "구글 문서 및 클래스룸 연동 크롬 확장 프로그램.",
      longDesc: "Google Docs 및 Google Classroom 화면 브라우저 우측 하단에 상주하며 에세이 첨삭 피드백, AI 작성 탐지, 독해 읽기 레벨 전환 등을 단 몇 초 만에 마법처럼 처리하는 확장 프로그램입니다.",
      features: [
        "Google Workspace 내 원클릭 채점",
        "루브릭 연계 영역별 정밀 코멘터리",
        "키스트로크 이력 기반 타자 타임라인 복원"
      ],
      tip: "'Replay'기능을 돌려 보면, 학생이 외부 사이트에서 긴 단락을 한눈에 통째로 복사해 붙였는지 직접 입력했는지 분석됩니다.",
      warn: "AI 탐지 확률 지표를 전적으로 신뢰하지는 마세요. 사람이 솔직히 쓴 한국어 문무도 종종 번역 투로 오진할 수 있습니다."
    }
  },
  {
    id: "quizizzai",
    role: "Giáo viên",
    cat: { vi: "Trắc nghiệm", en: "Quizzes", ko: "퀴즈" },
    link: "https://quizizz.com/",
    name: "Quizizz AI",
    vi: {
      desc: "Tự tạo hệ thống thi đố vui từ file PDF, liên kết YouTube hay tài liệu bất kỳ.",
      longDesc: "Cho phép bạn đưa vào những tệp học chính thức, AI sẽ tự xây dựng bộ ngân hàng câu hỏi trắc nghiệm tương tác đầy đủ hình ảnh sinh động chỉ trong tích tắc.",
      features: ["Thiết lập câu đố qua nguồn tài liệu tải lên", "Điều chỉnh phong cách câu hỏi sinh động", "Game hóa bài ôn tập về nhà"],
      tip: "Cố gắng lồng thêm các câu hỏi tự luận ngắn nhằm tăng cường mức độ kiểm tra sự thấu hiểu của tư duy học sinh.",
      warn: "Nhớ rà soát kỹ lại tính đúng sai của các câu đố học búa trước khi phát động trò chơi thực tế trên lớp."
    },
    en: {
      desc: "Auto-generate quizzes from PDF/Web.",
      longDesc: "Upload core books, files, YouTube lesson links, or articles, and the AI automatically converts the source reading material into highly competitive quizzes.",
      features: ["Translate raw texts into structured quizzes", "Differentiate difficulty settings", "Gamify homework with interactive leaderboards"],
      tip: "Combine standard multiple-choice with short open-ended reflection prompt questions to test critical comprehension.",
      warn: "Review questions and incorrect multiple choice answers thoroughly before creating a real live room."
    },
    ko: {
      desc: "인쇄용 유인물이나 학습 웹문서 기반 자동 퀴즈 추출기.",
      longDesc: "교사용 강의 원고, PDF, 심지어 특정 YouTube 학습 영상 주소만 입력하면 학생들의 경쟁심을 유도하는 온라인 멀티플레이 문제 풀이판을 빌드해 줍니다.",
      features: [
        "전용 파일 바탕 멀티 퀴즈 일괄 생성",
        "난이도 조절 및 문항 보강 편집 기능",
        "가상 리더보드 점수제를 도입한 과제 배포"
      ],
      tip: "객관식 이외에 단답형 서술 문항들을 점진 배치하면 실시간 개념 이해 점검에 더욱 효과적입니다.",
      warn: "생성 직후 간혹 논리적인 오류를 동반한 오목지 문제가 혼입될 수 있으니 실시간 시합 전에 꼭 셀프 검증을 해보세요."
    }
  },
  {
    id: "kahootai",
    role: "Giáo viên",
    cat: { vi: "Trắc nghiệm", en: "Quizzes", ko: "퀴즈" },
    link: "https://kahoot.com/",
    name: "Kahoot! AI Question Generator",
    vi: {
      desc: "Hỗ trợ tạo bộ câu hỏi tương tác nhanh bằng câu lệnh.",
      longDesc: "Tính năng chuyển biến mới của Kahoot ứng dụng trí tuệ nhân tạo. Bạn chỉ cần nêu ngắn chủ đề bài học, lập tức AI sẽ phát sinh bộ câu hỏi rộn rã gắn liền phần ảnh gợi ý sáng tạo.",
      features: ["Tạo câu đố thông qua gõ câu lệnh", "Tìm kiếm minh họa có bản quyền tự động", "Bơm sinh khí cực đỉnh cho buổi học"],
      tip: "Nên đan xen các câu hỏi tính hệ nhân điểm cao vào thời điểm quan trọng nhằm kích thích năng lượng các đội.",
      warn: "Coi chừng học sinh bấm trượt nhanh do tập trung quá mức vào khâu tranh đua thay vì ghi nhớ cốt lõi lý luận."
    },
    en: {
      desc: "Auto-generate Kahoot games by topic.",
      longDesc: "Allows creators and teachers to prompt a topic directly to auto-generate fully synchronized trivia quizzes, complete with customized countdown timers and recommended illustrations.",
      features: ["Prompt-to-quiz easy creator", "Automatic royalty-free illustrations link", "Boost class engagement of teams"],
      tip: "Insert double-point questions at strategic intervals during the quiz to motivate falling teams.",
      warn: "Ensure students spend time reflecting on curriculum content, rather than reacting mindlessly speed-clicking."
    },
    ko: {
      desc: "단답 텍스트 명령 기반 카훗 퀴즈 자동 보급.",
      longDesc: "많은 학교에서 애용되는 실시간 상호작용 플랫폼인 Kahoot!의 신규 인공지능 보도 도구입니다. 가르칠 핵심 소재 한 줄만 알려주면 완벽히 훌륭한 슬라이드 및 질문지가 구축됩니다.",
      features: ["초고속 프롬프트 퀴즈 생성", "주제 부합형 고품질 안전 이미지 자동 선정", "오프라인 전원 참여형 놀이형 도입부"],
      tip: "수업 복습 종종 고득점 찬스 문항을 골고루 분사해 두면 순위 방어전 심리를 자극해 분위기가 극적으로 고조됩니다.",
      warn: "일사천리로 문제를 대충 풀다가 게임 승패 요소에 과흥분하여 원래 알아가야 할 정답 정리가 무산되지 않도록 완급을 조절하세요."
    }
  },
  {
    id: "curipod",
    role: "Cả hai",
    cat: { vi: "Tương tác", en: "Interactive", ko: "대화형" },
    link: "https://curipod.com/",
    name: "Curipod",
    vi: {
      desc: "Tạo slide bài giảng tương tác hai chiều thời gian thực.",
      longDesc: "Ứng dụng giúp bạn chuẩn bị bài thuyết trình có thăm dò ý kiến, bảng vẽ tập thể, đám mây từ ngữ thời gian thực. Học sinh dùng điện thoại cá nhân kết nối để tham gia.",
      features: ["Trình bày bài giảng hai chiều", "Vẽ tranh mô tả chung lên bảng điện tử", "Khai phá đám mây cảm nhận ý tưởng học tập"],
      tip: "Dùng tính năng 'Draw' cho phép học sinh trung học tự phác họa tóm tắt sơ đồ cơ chế hô hấp của tế bào.",
      warn: "Cấp tài khoản không mất phí sẽ hạn chế số lượng học sinh thao tác trong cùng một thời điểm."
    },
    en: {
      desc: "Create real-time interactive slide decks.",
      longDesc: "A modern presentation tool designed for active polling, drawing tasks, open feedback, and multi-user word clouds. Students link to the live presentation using personal browsers.",
      features: ["Interactive teaching presentations", "Collaborating drawing pads on canvas", "Live word-cloud brainstorming dynamics"],
      tip: "Use the 'Draw' activity to empower students to visualize physics forces, molecular structures, or spatial layouts directly.",
      warn: "The free basic package imposes a maximum participant limit during simultaneous classroom sessions."
    },
    ko: {
      desc: "실시간 전원 피드백 대화형 수동 슬라이드.",
      longDesc: "실시간 투표, 단체 칠판 드로잉 드라프트, 시각화 아이디어 클라우드 등의 스마트 위젯들을 파워포인트 화면 속에 삽입해 줍니다. 학생들의 실시간 모바일 모니터가 그대로 메인 화면에 반영됩니다.",
      features: ["완동 상호 의견 청취 수렴회", "슬라이드 위 낙서 및 화상 의견 수립", "실구자 의견 수집 단어 시각 구형 클라우드"],
      tip: "'Draw' 기능을 발동해 과학 과목에 필요한 세포 조직도나 힘의 크기 전개 경로를 모바일 펜으로 직접 그리게 해보세요.",
      warn: "무료 플랜 상태에서는 동시에 접속 가능한 상호 작용 인원의 한계가 있습니다."
    }
  },
  {
    id: "questionwell",
    role: "Giáo viên",
    cat: { vi: "Trắc nghiệm", en: "Quizzes", ko: "퀴즈" },
    link: "https://www.questionwell.org/",
    name: "QuestionWell",
    vi: {
      desc: "Xây dựng câu hỏi hàng loạt và hỗ trợ xuất khẩu các file.",
      longDesc: "Nhập một mẩu bài báo khoa học hay văn chương, hệ thống tự tách bóc dữ liệu sinh ra danh sách câu hỏi kiểm tra đầy chuyên nghiệp kết nối thẳng sang Quizizz, Kahoot, Google Forms.",
      features: ["Tạo câu hỏi đa dạng mức độ đào sâu", "Khớp chuẩn sư phạm bài học", "Tương thích các phần mềm khác mượt mà"],
      tip: "Xuất khẩu file thẳng định cấu hình Google Forms tiện cho bài kiểm tra trực tuyến định kỳ mười lăm phút.",
      warn: "Nhớ lọc loại phân nhóm đối chiếu tránh để các câu hỏi bị trùng lắp ý nghĩa."
    },
    en: {
      desc: "Bulk question generator exporting to ed-apps.",
      longDesc: "Import any source text, essay, or book snippet. The AI designs comprehensive, learning-objective aligned questions and exports them to Google Forms, Kahoot, or Quizizz effortlessly.",
      features: ["Differentiated comprehension question levels", "Standard educational target alignment", "Highly optimized system exports"],
      tip: "Export directly to Google Forms format for quick automatic weekly review checking.",
      warn: "Carefully screen the outputs to filter out identical questions in different variations."
    },
    ko: {
      desc: "공식 교육용 포털 호환용 서열 퀴즈 대량 방출망.",
      longDesc: "선문 문장이나 길고 두꺼운 인쇄용 독해 본문 텍스트 전체를 던지면, 핵심 어휘와 추세 의도를 간파하여 유익한 학습 목적 질문을 수십 개 연산해 줍니다.",
      features: ["교수 목표 지면 맞춤형 문항 분석", "표준 학업 성과 성취 기준 충족", "타 플랫폼 친화적 일괄 파일 공유 추출"],
      tip: "구글 오피스 폼스로 내보내면 주간 단원 성취도 검사가 5분 만에 완료됩니다.",
      warn: "가끔 문맥의 해석 흐름이 유사하여 꼬리 물기식 중복 문항이 생성될 수 있으니 검토 단계에서 한 번 비워 주십시오."
    }
  },
  {
    id: "blooket",
    role: "Cả hai",
    cat: { vi: "Tương tác", en: "Interactive", ko: "대화형" },
    link: "https://www.blooket.com/",
    name: "Blooket",
    vi: {
      desc: "Trò chơi hóa học tập có tính cạnh tranh chiến thuật vô cùng cao.",
      longDesc: "Nền tảng học hỏi ôn bài lồng ghép trong các chế độ chơi cực cuốn như cướp vàng, xây lâu đài, nuôi rồng giúp học sinh hăng hái ghi nhớ từ vựng, ngày tháng lịch sử.",
      features: ["Có nhiều chế độ chơi đa dạng", "Nhúng cơ sở dữ liệu câu hỏi bằng AI nhanh gọn", "Báo cáo tiến trình học tập của học trò"],
      tip: "Thích hợp dùng cho hoạt động kết thúc buổi học (Exit Ticket) giúp giảm tải bức bối học hành dồn ứ.",
      warn: "Chú ý thiết lập thời hạn chế độ chơi phù hợp để không ảnh hưởng quỹ thời gian môn chính khóa khác."
    },
    en: {
      desc: "Highly competitive gamification learning platform.",
      longDesc: "Integrates study material inside tactical gameplay styles (Castle Defense, Gold Quest, Cafe). Elevates memorization of vocabulary, historical milestones, and formula rules while playing.",
      features: ["Action-packed multi-player modes", "AI integrated test set builders", "Precise class performance telemetry analytics"],
      tip: "Perfect as an action Exit Ticket activity to close a heavy lesson with peak excitement.",
      warn: "Manage task duration timers strictly to ensure gamification doesn't steal vital structural review minutes."
    },
    ko: {
      desc: "경쟁 및 전략 요소 극대화 학습 아케이드 게임.",
      longDesc: "성 지키기, 재화 파밍하기, 펫 조련하기 등 깊이 있는 게임 메커니즘 패러다임 속에 수업 문제를 삽입하여, 지루한 기본 공식과 외울 날짜를 기쁜 마음으로 반복 복습하게 해 줍니다.",
      features: ["시즌별 이색 테마 게임 모드 탑재", "AI 구동 학습 세트 스피디 이식", "학생별 정답률 통합 성취 도표"],
      tip: "수업을 끝내는 'Exit Ticket(퇴장 티켓)'으로 이를 지정하면 그 누구도 자지 않고 완벽히 집중합니다.",
      warn: "아케이드 요소가 강하므로 승부욕에 치우친 영양가 없는 요령 위주의 중독 놀이가 되지 않게 제한 규율을 지키세요."
    }
  },
  {
    id: "elsaspeak",
    role: "Học sinh",
    cat: { vi: "Ngôn ngữ", en: "Language", ko: "언어" },
    link: "https://elsaspeak.com/",
    name: "ELSA Speak",
    vi: {
      desc: "AI tối ưu và rèn luyện kỹ năng phát âm tiếng Anh chuẩn xác.",
      longDesc: "Ứng dụng ứng dụng công nghệ nhận diện giọng nói vượt bực, chỉnh sửa chi tiết cách đặt lưỡi, khẩu hình kẽ răng để rèn ngữ âm bản xứ.",
      features: ["Luyện và chấm điểm theo từ/câu", "Đo độ lưu loát trôi chảy ngôn từ", "Video khẩu hình gốc mô tả dễ dàng"],
      tip: "Dùng tính năng 'Speech Analyzer' để nghe phân tích sửa lỗi ngữ pháp phát âm khi nói một bài thuyết trình dài.",
      warn: "Nên đeo tai nghe đàm thoại chuyên dụng để đạt độ lọc nhận diện giọng nói đúng nhất."
    },
    en: {
      desc: "AI English pronunciation coach.",
      longDesc: "Leverages cutting-edge speech analysis technology to listen to users, pinpointing phonetic and accent flaws instantly. Offers direct visuals on mouth and tongue shapes.",
      features: ["Syllable-by-syllable feedback scoring", "Fluency progress analytics", "Detailed native speaker visual guidelines"],
      tip: "Use the 'Speech Analyzer' tool next to you during your long debate slides speaking practices.",
      warn: "Employ a high-quality external microphone or headset inside quiet rooms to minimize surrounding noise interference."
    },
    ko: {
      desc: "정밀 발음 교정 및 영어 구사 분석기.",
      longDesc: "독자기술 음성 신호 검출 인텔리전스로 발음 상태를 실시간 스캔합니다. 모음·자음 조음 오류, 강세 억양 높낮이를 아주 체ển히 확인해 줍니다.",
      features: ["개별 철자 정밀 발음 레이팅 점수화", "유창성 연동 통화 스피킹 지표 측정", "직관적 발음 구강 구조 모션 애니메이션 제공"],
      tip: "'Speech Analyzer' 프로그램을 활용하면 긴 분량의 발표문 리허설 발성 점검에 상당히 좋습니다.",
      warn: "원활한 소리 판단을 위해 교실 내 백색 소음을 제외하고 가급적 이어폰형 마이크를 사용해 시험하세요."
    }
  },
  {
    id: "duolingomax",
    role: "Học sinh",
    cat: { vi: "Ngôn ngữ", en: "Language", ko: "언어" },
    link: "https://duolingo.com/",
    name: "Duolingo Max",
    vi: {
      desc: "Học ngôn ngữ mới với sức mạnh từ mô hình GPT-4.",
      longDesc: "Bước nhảy vọt đưa tương tác mô phỏng đóng vai nhân vật nói chuyện đời thực và phân tích lý luận phản hồi lỗi sâu hơn nhờ GPT-4.",
      features: ["Thực hiện hội thoại đóng vai với AI", "Lý giải lỗi chi tiết của từng câu", "Cá nhân hóa nội dung ôn bài"],
      tip: "Dùng hoạt động đóng vai trò sinh hoạt khách sạn, đặt ăn hàng quán tăng mức tự tin phản xạ từ thô.",
      warn: "Hiện gói dịch vụ cao cấp Max mới mở rộng cho phiên bản cài iOS và ngôn ngữ giới hạn."
    },
    en: {
      desc: "Learn languages with GPT-4 (Explain & Roleplay).",
      longDesc: "An advanced tier of Duolingo backed by OpenAI's GPT-4. Introducing real-time conversational role-playing with custom AI avatars and a deep structural breakdown of grammar mistakes.",
      features: ["Interactive conversational scenarios", "Contextual 'Explain My Answer' tool", "Adaptive review exercises scheduling"],
      tip: "Engage with travel, booking, or food scenario roles to test native speaking confidence safely.",
      warn: "Max subscription tier features are currently limited on certain platforms and selective languages."
    },
    ko: {
      desc: "GPT-4 기반 초 밀착 언어 복습 시스템.",
      longDesc: "글로벌 언어 공부 앱 듀오링고의 프리미엄 테마입니다. GPT-4가 가상 대화 역할 상대(Roleplay)가 되어 주고, 질문이 틀렸을 때 왜 문맥상 오류인지 꼼꼼히 강의하듯 이유를 짚어줍니다.",
      features: ["생생한 가상 AI 역할 롤플레잉 연출", "'나의 오답 해설받기' 맞춤 설명 창녀", "지능화 개별 취약어 단복 연습"],
      tip: "식당 주문하기, 공항 체크인하기 등의 롤플레잉 활동에서 반말, 높임말 뉘앙스 차이를 실험해 보세요.",
      warn: "이 기능은 최신 iOS 기기 및 한정 국가 지역 위주로 순차 보급 중입니다."
    }
  },
  {
    id: "speak",
    role: "Học sinh",
    cat: { vi: "Ngôn ngữ", en: "Language", ko: "언어" },
    link: "https://www.speak.com/",
    name: "Speak App",
    vi: {
      desc: "Luyện nói tự nhiên không khoảng cách cùng AI thông minh.",
      longDesc: "Ứng dụng thiết kế chuyên biệt để luyện phản xạ nói đàm thoại. Ép người học nói liên tục qua hàng trăm tình huống có AI hiệu đính từ vựng tinh xảo, phản hồi tức khắc.",
      features: ["Luyện phản xạ âm hai chiều siêu nhạy", "Vào kịch bản thực tiễn sinh hoạt rộng", "Nhận ý kiến sửa cấu trúc dùng từ"],
      tip: "Hãy cứ mạnh dạn biểu đạt sai ngữ pháp thô, mô hình AI của Speak cực giỏi nhận ý tổng quát câu để điều trị tận gốc.",
      warn: "Nghỉ ngắt nhịp môi ngữ trường đủ tĩnh để tiện ích máy nghe thu trọn vẹn ngữ âm."
    },
    en: {
      desc: "Free-flowing interactive speaking practice with AI.",
      longDesc: "A dedicated conversational skill building system. Encourages active user talking, prompting speaking through real-world micro-situations with instantaneous pronunciation critiques.",
      features: ["Ultra-low latency audio processing", "Real-world simulator scenario scripts", "Alternative vocabulary expressions hints"],
      tip: "Do not freeze over grammar faults, Speak's engine is built to reconstruct your speech intent gracefully.",
      warn: "Requires low environmental background noise to capture clear, uncorrupted vocal ranges."
    },
    ko: {
      desc: "AI 대화형 영어 회화 스피킹 전담 앱.",
      longDesc: "말을 가장 많이 시키기로 화제인 회화 앱입니다. 사용자 음성을 0.1초 만에 감지한 뒤 실시간 소통 흐름을 유도하고, 좀 더 네이티브 표현에 어울리도록 입 모양과 뉘앙스를 바로잡습니다.",
      features: ["독보적 저지연 음성 상호작용", "상황 몰입식 실전 회화 시뮬레이터", "어색한 단어 선택 교체 추천"],
      tip: "문법이 틀릴까 봐 머뭇거리지 말고, 자신 있게 단어만 뱉어도 AI가 자연스러운 문장 구조로 재합성해 피드백해 줍니다.",
      warn: "조용한 밀폐 룸이나 조용한 가정 학습 방에서 테스트해야 정밀한 연음 인식이 원활하게 기록됩니다."
    }
  },
  {
    id: "characterai",
    role: "Học sinh",
    cat: { vi: "Ngôn ngữ", en: "Language", ko: "언어" },
    link: "https://character.ai/",
    name: "Character.ai",
    vi: {
      desc: "Học ngoại ngữ thông qua trò chuyện tự do cùng nhân vật ảo lịch sử.",
      longDesc: "Trò chuyện, học thuật với hàng triệu mô hình đóng vai các nhân vật giả tưởng hoặc danh nhân lịch sử (Einstein, Socrates). Hữu dụng khi thực hành văn nói ngẫu hứng.",
      features: ["Nói chuyện hóa thân đa nhân vật", "Lập nhóm đa thoại nhiều vĩ nhân cùng lúc", "Mượn ngôn ngữ kể tình huống học"],
      tip: "Kết nối chat với bot mang tên 'Language Teacher' hoặc các nhân vật văn học bạn đang học để mở rộng thế giới quan.",
      warn: "Văn phong trò chuyện của nhân vật có thể bịa đặt không đúng sự kiện thực tế trong lịch sử."
    },
    en: {
      desc: "Learn languages by chatting with character bots.",
      longDesc: "Converse, exchange knowledge, and practice writing styles with millions of bots embodying famous historical figures (e.g., Einstein, Socrates) or textbook characters within a safe sandbox.",
      features: ["Famous persona roleplaying chatbots", "Multi-personality shared sandbox rooms", "Contextual reading practice"],
      tip: "Search for the 'Language Teacher' bot or ask classic literary figures directly about their character motives.",
      warn: "Characters are prone to fictional hallucinations; do not rely on them for rigorous historical truth examinations."
    },
    ko: {
      desc: "가상 캐릭터 및 역사 위인과의 외국어 롤플레잉.",
      longDesc: "소크라테스, 닐 암스트롱 등 역사적 실존 영웅이나 문학 소설 속 허구 인격 마네킹과 펜팔이나 음성 전화를 나누듯 자연스러운 회화 연습 및 작문력을 신장할 수 있습니다.",
      features: ["다채로운 입체형 인물 역할극 매칭", "여러 위인이 대담하는 단체 대화방 연출", "상황극 유도 실감 대칭 공부"],
      tip: "'Language Teacher' 봇을 호출해 문법 에러가 날 때마다 실시간으로 과외 선생님처럼 상냥히 정정하도록 지시해 보십시오.",
      warn: "허구 시나리오 엔진을 쓰므로, 인물 AI가 역사 속 역사적 사실을 자기 마음대로 속여 말할 수 있습니다."
    }
  },
  {
    id: "grammarly",
    role: "Cả hai",
    cat: { vi: "Viết lách", en: "Writing", ko: "작문" },
    link: "https://grammarly.com/",
    name: "GrammarlyGO",
    vi: {
      desc: "Hệ thống kiểm lỗi chính tả, ngữ điệu và tái cấu trúc văn bản.",
      longDesc: "Trợ lý hỗ trợ rà soát chính xác cao lỗi từ vựng tiếng Anh học thuật. Có tích hợp trí tuệ nhân tạo để viết mồi hay điều chỉnh giọng văn bớt gai góc.",
      features: ["Sửa lỗi chính tả thời gian thực", "Rà lỗi đạo soạn văn bản học thuật", "Cải biến độ trang nghiêm câu từ"],
      tip: "Hãy luôn điều chỉnh thông số ngữ cảnh là 'Academic' và 'Formal' khi khởi tạo biên tập tiểu luận học thuật.",
      warn: "Đừng để tính năng viết tự động làm mất sạch chất giọng cảm nhận đặc trưng của chính bạn."
    },
    en: {
      desc: "Deep grammar and tone checker.",
      longDesc: "The industry standard for English spelling and academic formatting. Features prompt-based generative tools designed to alter tone, fix voice, rewrite passages, and inspect academic writing structures.",
      features: ["Real-time spelling orthography checking", "In-built robust plagiarism reporting", "Formal academic style adjustments"],
      tip: "Configure target settings to 'Academic' style of writing when compiling structured project paper outlines.",
      warn: "Relying purely on the generator can wash out your unique personal critical tone of voice."
    },
    ko: {
      desc: "글로벌 공인 문법 교정 소프트웨어.",
      longDesc: "전 세계 대학생과 교수진이 애용하는 최강 문법 필터 앱입니다. 이메일, 숙제 에세이의 미학적 오류와 문법 어순 미스를 잡고 글의 격식 지수를 자동으로 조율합니다.",
      features: ["실시간 영문 오탈자 및 문법 필터", "자체 표절 매치 검사 메커니즘 제공", "상황별 공식/비공식 문체 전환 보정"],
      tip: "과제 리포트 제출 전 설정값을 'Academic - Formal'로 전환 수축하면 연구논문용 어감으로 치환됩니다.",
      warn: "글 전체 자동 완성 기능에만 전적으로 끌려다니면 학생 자신의 개성 넘치는 필체와 사색력이 훼손될 수 있습니다."
    }
  },
  {
    id: "quillbot",
    role: "Cả hai",
    cat: { vi: "Viết lách", en: "Writing", ko: "작문" },
    link: "https://quillbot.com/",
    name: "QuillBot",
    vi: {
      desc: "Thiết bị viết lại câu (Paraphrase) mượt mà tránh lặp từ.",
      longDesc: "Giúp người học tái định dạng cách trình bày một khái niệm, mở rộng từ vựng vốn yếu kém thông qua các chế độ thay thế biến đổi phong phú.",
      features: ["Viết lại câu đa phong cách khác biệt", "Bóp thu gọn bài luận siêu dài", "Rà soát lỗi ngữ pháp tiện lợi"],
      tip: "Chọn chế độ 'Formal' để biến các đoạn văn giao tiếp xã hội đời thường thành văn phong luận án.",
      warn: "Nghiêm cấm các cá nhân lợi dụng viết lại câu cốt để ăn cắp vượt mặt phần mềm phát hiện đạo văn trường."
    },
    en: {
      desc: "Smooth paraphrasing tool.",
      longDesc: "An intuitive editing asset optimized to rewrite text in varied grammatical structures. Expands vocabulary fluency while maintaining original conceptual intent correctly.",
      features: ["Multi-mode advanced paraphraser", "Smart document summarizer", "Academic thesis translations"],
      tip: "Employ the 'Formal' mode to transition plain street dialogues to rigorous academic structures.",
      warn: "Under no circumstances use this tool as a shortcut to bypass original critical academic honesty obligations."
    },
    ko: {
      desc: "문장 재배열(Paraphrasing) 및 단어 회피 재가공 도구.",
      longDesc: "내가 쓴 뻔한 문장들을 의미 손실 없이 세련되고 전문적인 다양한 대체식 고품질 영문장으로 변경해 줍니다.",
      features: [
        "여러 필체별 영문 패러프레이징 선택",
        "방대한 요점 압축 요약 가이드 생성",
        "자연스러운 작문 문법 자동 보완"
      ],
      tip: "구어체 영어를 'Formal' 모드로 한 층 보정하면, 아주 공손하고 격조 높은 아카데믹 영작으로 다시 태어납니다.",
      warn: "작성한 내용을 단순히 꼼수로 쪼개어 타인의 지식 보고서를 몰래 도용해 표절 필터를 따돌리는 행동은 삼가십시오."
    }
  },
  {
    id: "notionai",
    role: "Cả hai",
    cat: { vi: "Viết lách", en: "Writing", ko: "작문" },
    link: "https://notion.so/",
    name: "Notion AI",
    vi: {
      desc: "Trợ lý thiết kế nội dung, tổ chức kế hoạch chuyên nghiệp.",
      longDesc: "Cộng tác viết nháp trực tiếp trên trang, lên lịch trình, thiết kế hoạt động nhóm của học sinh và lập bảng theo sát bài học.",
      features: ["Tạo lập bảng công việc phân giáo án", "Chiết rút mấu chốt hành động trong bài", "Sắp xếp cấu trúc tư liệu logic"],
      tip: "Lập bảng thuộc tính và yêu cầu Notion AI tự điền nội dung tóm tắt từ một bài văn dài.",
      warn: "Bảo quản thông tin, chú ý quyền chia sẻ trang Notion tránh rò rỉ bảo mật thông tin lớp bè."
    },
    en: {
      desc: "AI assistant integrated into your workspace.",
      longDesc: "A collaborative copilot directly nested within Notion pages. Speeds up document drafting, extracts bulleted action points, maps task dashboards, and organizes research.",
      features: ["Context-aware action item generator", "High-density page summarizer", "Direct inline content translation"],
      tip: "Define custom database rows and direct Notion AI to auto-populate abstract summaries from raw long documents.",
      warn: "Manage page sharing sharing access locks carefully to maintain internal classroom safety integrity."
    },
    ko: {
      desc: "생산성 페이지 관리 및 내부 AI 기획 보조.",
      longDesc: "Notion 메모 시트 안에 탑재된 똑똑한 비서입니다. 회의록 정돈, 아이디어 가지치기, 복잡한 공부 체크리스트 테이블 일괄 제어를 지원합니다.",
      features: ["할 일 목록 및 핵심 액션 아이템 추출", "긴 회의록 문서 한 문장 압축 요약", "다국어 어문 교열 통합 대응"],
      tip: "도출 표를 구성하고 AI 컬럼 기능을 연동하여 원문을 간략 요약하는 요약 컬럼을 연산하게 설계하세요.",
      warn: "학급 전용 노션 페이지 링크가 실수로 구글 검색 등 외부에 완전 노출되지 않도록 권한 체크를 점검하십시오."
    }
  },
  {
    id: "jenniai",
    role: "Cả hai",
    cat: { vi: "Viết lách", en: "Writing", ko: "작문" },
    link: "https://jenni.ai/",
    name: "Jenni AI",
    vi: {
      desc: "Trợ lý hỗ trợ soạn thảo văn bản kết cấu nghiên cứu học thuật.",
      longDesc: "Phù hợp để hoàn thành báo cáo khoa học. AI bám sát câu chữ người gõ để tự đề xuất viết từ nối tiếp theo bối cảnh kèm chú thích thư mục cụ thể chuẩn mực.",
      features: ["Đề xuất câu viết thông minh Autocomplete", "Trích dẫn thư mục chuẩn chỉnh APA, MLA", "Viết lại tinh chỉnh học thuật"],
      tip: "Tải các tài liệu liên quan dạng PDF lên mục thư viện riêng, Jenni sẽ ưu tiên chỉ trích tài liệu bạn muốn đó.",
      warn: "Tuyệt đối không khoán trắng để hệ thống tự viết hộ toàn bài từ đầu đến kết bài."
    },
    en: {
      desc: "Academic essay and research writing assistant.",
      longDesc: "Built for researchers and students compiling literature or theses. The AI dynamically predicts and autocompletes your sentences while anchoring verified APA, MLA, or Harvard styling references in real-time.",
      features: ["AI-guided autocomplete writing", "Verified MLA/APA bibliographies matching", "Plagiarism-free structural paraphraser"],
      tip: "Upload your personal research PDFs into its library first so Jenni restricts database lookup to your exact citations.",
      warn: "Never delegate the entire writing task of your scientific research paper or essay to the machine."
    },
    ko: {
      desc: "연구 에세이 특화 지능형 서술 비서.",
      longDesc: "연구 보고서와 졸업 논문 소요 작성자들을 밀동 지원합니다. 한 문단을 타이핑하면 맥락상 가장 적합한 다음 문장 지문을 타자로 자동 완성하며 APA, MLA 같은 인용 주석 양식을 단번에 매칭합니다.",
      features: ["맥락 인식 타이핑 자동완성 기능", "정식 인용 양식(MLA, APA등) 표기 자동 조치", "중복 우회 오리지널 수식 작문"],
      tip: "자신이 모은 정형 소장 PDF들을 업로드하여 참조 서류 폴더 범위를 한정해 두면 엉뚱한 가공 인용을 철저히 제어합니다.",
      warn: "어디까지나 연구의 전개 뼈대 작성용 조력자이며, 논문 한 편을 기계가 대필하도록 방임해서는 탈이 납니다."
    }
  },
  {
    id: "chatpdf",
    role: "Cả hai",
    cat: { vi: "Đọc hiểu", en: "Reading", ko: "읽기" },
    link: "https://www.chatpdf.com/",
    name: "ChatPDF",
    vi: {
      desc: "Đọc phân tích giải đáp dữ liệu trích ra từ tài liệu PDF.",
      longDesc: "Cách dễ nhất dán bất kỳ cuốn sách, hợp đồng hay giáo trình nặng hàng nghìn dòng để thảo luận đặt câu hỏi khai thông thắc mắc ngay tắp lự.",
      features: ["Chỉ điểm thông tin PDF", "Đáp án đính số trang tìm nguồn gốc", "Tra cứu thuật ngữ từ đa văn bản"],
      tip: "Yêu cầu ChatPDF soạn sẵn một bộ 10 câu hỏi để tự kiểm tra kiến thức của mình dựa trên file bài giảng vừa đọc.",
      warn: "Các văn bản sách scan ảnh mờ có thể sẽ bị hạn chế nhận diện chính xác dòng chữ."
    },
    en: {
      desc: "Chat directly with any PDF file.",
      longDesc: "Upload core books, legal agreements, historical novels, or complex manuals, and start discussing with your documents using real-time conversational prompts.",
      features: ["Speed-reading long PDF files", "Direct citation page tracking", "Instant contextual terminology breakdowns"],
      tip: "Direct ChatPDF to construct a custom study list of 10 key questions to auto-test your chapter knowledge after uploading.",
      warn: "Scanned image-only files with sub-standard resolution can disrupt characters extraction accuracy."
    },
    ko: {
      desc: "두꺼운 PDF 교재 학습 및 집중 질의응답.",
      longDesc: "수십~수백 페이지의 복잡한 전공 인쇄물, 계약서, 역사 서적 PDF를 끌어당겨 넣으면, 그 파일 범위 이내에서 핵심 포인트를 일괄 정돈해 줍니다.",
      features: ["방대한 PDF 내용 속정 수집", "정답 도출 페이지 위치 좌표 지목", "해당 실라버스 분석 기반 자문"],
      tip: "교재 파일을 투척하고 '이 문서 내 핵심 요약 문제 10개를 풀이와 함께 출제해줘(한국어로)'라고 입력해 풀어 보세요.",
      warn: "글자 추출 소프트웨어 특성상 저화질 자필 스캔본이나 손글씨가 가득 들어찬 PDF는 폰트 판독에 미스가 생깁니다."
    }
  },
  {
    id: "heygen",
    role: "Giáo viên",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://heygen.com/",
    name: "HeyGen Video Avatar",
    vi: {
      desc: "Sản xuất video học tập bằng người ảo thuyết trình AI sinh động.",
      longDesc: "Nhà sản xuất video đào tạo. Cho phép người dùng chuyển giọng văn bản thô thành khẩu hình lời nói phát biểu từ một người ảo (Avatar) cử chỉ hệt như thật.",
      features: ["Hệ thống MC người ảo nét căng", "Dịch giọng nói bài nói giữ nguyên cao độ âm sắc", "Rất nhiều mẫu bài giảng sinh động"],
      tip: "Dùng tính năng 'Video Translate' dịch video bài giảng chính của bạn qua tiếng Anh mà vẫn giữ nguyên khẩu hình lẫn tần số giọng nói quen thuộc.",
      warn: "Tuân thủ chặt chẽ yếu tố đạo đức đa dạng: Cần ghi chú minh bạch 'Video thiết lập thông qua hỗ trợ từ AI' dưới mô tả."
    },
    en: {
      desc: "Create lecture videos with AI Avatars & Voice clones.",
      longDesc: "A phenomenal avatar video creation tool. It lets teachers transform typed notes into live speaking presentations driven by realistic synthetic teachers who blink, move, and articulate wordings.",
      features: ["High-fidelity realistic human avatars", "Emotion-preserving voice dubs & translations", "Pre-built pedagogical presentation formats"],
      tip: "Trigger its 'Video Translate' engine to dub your teaching video into English, preserving your precise vocal pitch and cadence.",
      warn: "Ethics notice: You must include a transparent label stating 'Video generated by AI' beneath any educational media shared."
    },
    ko: {
      desc: "AI 휴먼 아바타 및 가상 동영상 강의 제작.",
      longDesc: "고품질 기업교육 및 가상 발표용 비디오 크리에이터입니다. 말소리와 똑같이 입술을 실감 나게 움직이며 교안을 낭독하는 전담 AI 인물 영상을 생성합니다.",
      features: ["실제 인물급 초고상 모션 아바타 배치", "음원 고유 어조 주파수를 보존한 비디오 다국어 번역", "단시간 내 전문 방송 스ود 템플릿화"],
      tip: "'Video Translate' 기법을 이용하면 우리말 강의 비디오를 내 목소리 톤 그대로 유지한 채 영어/일본어 교과 강의로 번역 가능합니다.",
      warn: "딥페이크 기법 남용 방지를 위해 상용 배포물 하단 구석에는 반드시 'AI 제작 영상' 마크를 덧붙이셔야 합니다."
    }
  },
  {
    id: "descript",
    role: "Cả hai",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://descript.com/",
    name: "Descript",
    vi: {
      desc: "Chỉnh sửa tệp âm thanh video bằng cách sửa dòng chữ gõ.",
      longDesc: "Chương trình cải tiến vượt bậc bóc tách tiếng nói trong video chuyển hóa thành dòng chữ. Khi bạn xóa ký tự bậy hay từ lặp đi trên văn bản viết, phân cảnh video tương ứng tự động tước bớt một cách thần kỳ.",
      features: ["Xóa tiếng thở dồn dập, từ à ừ chỉ trong một phím nhấn", "Tính năng Overdub sửa giọng điệu", "Tạo lập tóm tắt phụ đề đa quốc gia"],
      tip: "Sử dụng tính năng xóa từ kẽ âm 'um, uh' đề làm sạch bài tập thuyết trình gửi thầy cô giáo đạt điểm tối đa.",
      warn: "Tính năng tái tạo nhái âm nói (Voice Cloning) đòi hỏi quyền kiểm duyệt đạo đức ngặt nghèo trước khi bật."
    },
    en: {
      desc: "Text-based video and audio editor.",
      longDesc: "An all-in-one audio and video editing space that transcribes spoken media into plain text. Removing typed words in the text editor automatically cuts the corresponding section of the audio track.",
      features: ["One-click filter word (um, uh, like) removal", "Overdub voice correction tool", "Automated multilingual subtitle tracks processing"],
      tip: "Clean up your recorded speaking project files effortlessly by executing the automatic 'Remove Filler Words' button before submission.",
      warn: "Voice cloning modules require severe identity authorization locks to prevent cyber-bullying and deceptive speech imitations."
    },
    ko: {
      desc: "텍스트 스크립트 기반 오디오·비디오 동적 편집가.",
      longDesc: "업로드한 영상 속 육성을 바로 읽어 텍스트 글로 변환한 뒤, 글 편집 창에서 특정 오타를 지우거나 문단을 삭제하면 영상 타임라인이 자동으로 맞물려 스마트하게 컷 편집 되는 만능 캔버스입니다.",
      features: [
        "음 버벅임 필러 단어(어, 음) 일괄 자동 공제",
        "내 오디오 소리 보정 보컬 오버더빙 구현",
        "음성 매칭 자동 다국어 캡션(자막) 자막 장착"
      ],
      tip: "발표 과제 녹화 후 'Remove Filler Words' 기능을 돌리십시오. 불필요한 추임새가 청소되어 연설 품질이 극적으로 완성도 있게 올라갑니다.",
      warn: "Voice Cloning(목소리 기사화)은 반드시 본인의 실제 서약과 승인 도장을 거쳐야만 라이선서가 활성화됩니다."
    }
  },
  {
    id: "suno",
    role: "Cả hai",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://suno.com/",
    name: "Suno AI Music",
    vi: {
      desc: "Sáng tác bài hát hoàn chỉnh từ mô tả ý tưởng bằng văn bản.",
      longDesc: "Công cụ đột phá trong ngành nghệ thuật âm thanh giúp một người dùng thông thường chuyển tải ý thơ hay định lý toán học thành một bản nhạc có phối khí rộn tiếng hát.",
      features: ["Sinh giai điệu đủ thể loại (Pop, Rap, Rock)", "Tự động thiết lập hợp âm bản phối nhạc", "Sử dụng ngôn liệu viết lời nhạc trực diện"],
      tip: "Thử gom góp những công thức phân rã hóa học hay lý thuyết sinh vật phổ nhạc theo giai điệu nhạc Rap bốc lửa để nhớ bài nhanh gấp 10 lần.",
      warn: "Coi kỹ luật sở hữu quyền sao chép tác phẩm âm nhạc nếu có mục đích thương mại ngoài phạm vi trường học."
    },
    en: {
      desc: "Generate full songs from text.",
      longDesc: "A phenomenal AI music composition engine. Allows users to convert regular study summaries, poems, or science concepts into complete vocal tracks in multiple genres.",
      features: ["Multi-genre (Pop, Rap, Electronic) full composition", "Accompaniment & melody generation", "Custom lyrics incorporation"],
      tip: "Try turning heavy science or historical timelines tables into a high-energy Rock or Rap track for effective active memory.",
      warn: "Commercial distribution is restricted unless you hold corresponding active subscription pricing agreements."
    },
    ko: {
      desc: "텍스트 묘사 기획식 맞춤형 완전 자작곡 음원 메이커.",
      longDesc: "아이디어 입력만으로 세션 악기 반주 피아노, 고품질 보컬 싱어의 노래 녹음을 2분 만에 완성도 높은 정식 전 장르 트랙으로 마스터링해 주는 혁명적 음악 작곡 시스템입니다.",
      features: ["록, 발라드, 힙합 등 다양한 장르 일괄 설계", "자동 리듬 섹션 및 믹싱 완성본 도출", "원문 시문 및 암기 과목 공식 가사 이식"],
      tip: "화학 반응식이나 영어 핵심 조동사 규칙을 힙합 라임으로 가사 줄에 밀어 넣으면, 흥얼거리며 자연스레 암기됩니다.",
      warn: "Suno 생성 음원의 저작권 상업적 유료 배포 권한은 결제 등급에 따라 변동되니 주의해 이용하십시오."
    }
  },
  {
    id: "elevenlabs",
    role: "Cả hai",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://elevenlabs.io/",
    name: "ElevenLabs Voice",
    vi: {
      desc: "AI sinh âm thanh đọc tiếng nói truyền cảm chân thực nhất đại dương công nghệ.",
      longDesc: "Thay thế kiểu đọc rô bốt rập khuôn xưa cũ bằng những nốt giọng trầm bổng chân thực của con người có ngắt nghỉ nhấn nhá chuẩn xác nội dung cảm xúc.",
      features: ["Chuyển chữ viết sang tiếng đọc truyền cảm tự nhiên siêu thực", "Sao chép sao y bản bản mẫu tiếng nói", "Dịch thuật lồng tiếng âm nói gốc"],
      tip: "Nên tận dụng kịch bản đọc truyện ngoại ngữ để rèn bài tập nghe phát âm tốt nhất chuẩn giọng bản xứ.",
      warn: "Nghiêm cấm hành vi sử dụng nhái giọng chọc phá bè bạn gây vi phạm nguyên tắc ứng xử chung nhà trường."
    },
    en: {
      desc: "Most realistic Text-to-Speech AI.",
      longDesc: "The global gold-standard in high-fidelity synthetic voices and structural narration. Replaces repetitive robotic synthesizers with fully emotional, expressive voiceovers with human breaths.",
      features: ["Natural, highly realistic Text-to-Speech processing", "Voice cloning with minimal audio input", "Global multi-language real voiceovers matching"],
      tip: "Turn your written English stories into premium spoken narratives for listening tests.",
      warn: "Using cloned voice samples of peers or teachers to commit social pranks is highly prohibited by school safety guidelines."
    },
    ko: {
      desc: "인류적 질감에 가장 근접한 초실감형 보이스 합성기.",
      longDesc: "기존의 무미건조한 기계식 텍스트 낭독기(TTS)와 궤를 달리하며, 분노·슬픔·기쁨 등 인간의 기류 감정선과 자연스러운 숨소리 고저를 완벽히 모사해 대본 오디오를 읽어내는 성우 AI입니다.",
      features: ["초자연 고감도 성우 낭독 연출 기술력", "인코딩 최소 샘플 기반 정형 성우 가상 이식", "소리 더빙 다국어 즉각 호환 포맷 변환"],
      tip: "영문 단편 동화 줄거리를 이 도구로 오디오 변환하면 리스닝 평가용 자료나 모의고사 말하기 예제를 만들기 편합니다.",
      warn: "학우나 담당 선생님의 육성 샘플을 채취해 악의적 조작 영상이나 허위 보도, 장난 편지 소리로 변형 배포 시 퇴학 수준의 징계를 받게 됩니다."
    }
  },
  {
    id: "runway",
    role: "Giáo viên",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://runwayml.com/",
    name: "Runway Gen-2",
    vi: {
      desc: "Thiết kế clip video điện ảnh trực quan sống động từ câu nhập.",
      longDesc: "Đầu tàu trong lĩnh vực trí tuệ nhân tạo mảng phim ảnh. Bạn chỉ việc miêu tả dạng dòng (ví dụ: 'tế bào hồng cầu di chuyển trong động mạch máu'), hệ thống tự sinh thước phim nét chất lượng cao.",
      features: ["Biến câu chữ sang chuyển động hình ảnh chân xác nhất", "Chọn chuyển biến khung hình thông minh", "Trình kéo thả xóa phông, đổi môi cảnh sâu sắc"],
      tip: "Rất phù hợp để các thầy cô dạy môn khoa học tạo dựng mô phỏng các lý thuyết khó tưởng tượng bằng mắt thường.",
      warn: "Phiên bản tài khoản không tốn tiền sẽ bị hạn chế độ dài thước phim một lần tạo chỉ vài giây ngắn ngủi."
    },
    en: {
      desc: "Generate video from text (Text-to-Video).",
      longDesc: "A leader in visual generation and deep video composition models. Input detailed strings (e.g., 'red blood cells floating through small blood vessels') to instantly build impressive cinema-level slow-motion shots.",
      features: ["High-definition prompt-to-video processor", "Intuitive motion control brush adjustment", "In-built deep visual editing suite"],
      tip: "Excellent for Science and Geography teachers aiming to simulate space orbits, earthquakes, or microscopic reactions easily.",
      warn: "The free basic tier restricts output length to a brief few seconds of motion clip generation."
    },
    ko: {
      desc: "시각 자극 텍스트 입력식 비디오 렌더링 스튜디오.",
      longDesc: "최신 비디오 제너레이티브 인공지능 분야의 선구자격 툴입니다. '백혈구가 체내 바이러스를 포위해 정화하기 시작하는 모습' 등 단어 위주의 극적 설명만 주면 단편 물리 시뮬레이션급 그래픽 비디오를 완성해 줍니다.",
      features: ["초고화질 비주얼 시네마틱 무비 연출", "프레임 간 정적 연속성 모션 정제", "배경 레이어 마스킹 제거 및 편집 보조 브러시"],
      tip: "실물 촬영이 전면 불가능한 분자 단위의 결합이나 행성 궤도의 이탈 등을 가상 화상으로 창출해 시각 교육용으로 투입하십시오.",
      warn: "무료 체험 시에는 렌더링 영상 길이가 4초 전후의 극히 짧은 루프 클립으로 축소 수급 보급됩니다."
    }
  },
  {
    id: "synthesia",
    role: "Giáo viên",
    cat: { vi: "Đa phương tiện", en: "Multimedia", ko: "멀티미디어" },
    link: "https://www.synthesia.io/",
    name: "Synthesia",
    vi: {
      desc: "Thiết kế video thuyết giảng phong cách đào tạo chính quy.",
      longDesc: "Tập trung sâu rộng trong các dự án sản xuất bài giảng đồng bộ của bộ phận nhân sự trường hay gửi phụ huynh. Người ảo MC đứng giảng bục chuẩn mực đa quốc gia.",
      features: ["Trên 120 mẫu người giảng ảo sư phạm lịch sự", "Xử lý hàng trăm thứ tiếng mượt mà", "Bơm ảnh mẫu tài liệu slide bám bài viết gọn"],
      tip: "Rất tuyệt để thiết kế chuỗi video phổ biến sơ đồ đường lối định hướng đầu năm dành cho hàng nghìn phụ huynh học sinh mới.",
      warn: "Chi phí mua bản quyền tài khoản khá cao, thích hợp tổ chức trường mua dùng quy mô hơn cá nhân nhỏ lẻ."
    },
    en: {
      desc: "Create corporate/school training videos.",
      longDesc: "An AI video generation platform focused on formal, professional messaging. Allows school operators to convert scripts into formal, high-definition training tutorials led by multi-cultural virtual presenters.",
      features: ["150+ diverse professional speech presenters", "Fluent multilingual accents processing across 120 languages", "Direct PowerPoint to lesson imports"],
      tip: "Great for building a static video tutorial sequence of campus policies and orientations for thousands of incoming families.",
      warn: "The operating license presents high price configurations, making it suited for school organizations over a regular student."
    },
    ko: {
      desc: "프로패셔널 기업형 교육 및 학교 규정 안내 비디오 메이커.",
      longDesc: "HeyGen의 기업용 지향 사촌격입니다. 엄격한 정장 셋업과 차분한 아카데믹 아나운싱 연출을 기조로 하며, 신임 교직원 정착용 직무 OJT 연수나 학부모 소식용 비디오 브리핑에 발군입니다.",
      features: [
        "120가지 이상 고품격 차분한 이미지 가상 렉처 아바타",
        "자연스러운 발음의 전 세계 120개 언어 어순 대응 대독",
        "클릭 몇 번으로 PPT 대본 일괄 비디오 영상화"
      ],
      tip: "신입 교직원 필수 시청 성희롱 예방 지침이나 학교 내 방화 훈련 규정 영상들을 아바타 슬라이드로 쾌속 양산하세요.",
      warn: "엔터프라이즈 레벨 타깃 가격대가 책정되어 있어, 일개 개별 상용 학생 이용자가 결제하기엔 부담될 수 있습니다."
    }
  },
  {
    id: "gamma",
    role: "Cả hai",
    cat: { vi: "Thiết kế", en: "Design", ko: "디자인" },
    link: "https://gamma.app/",
    name: "Gamma App",
    vi: {
      desc: "Tạo slide thuyết trình, trang web từ dàn ý siêu tốc.",
      longDesc: "Bước đột phá trong việc tối ưu hóa trình bày. Chỉ việc đưa dàn bài thô sơ, Gamma sẽ tự phân bổ màu sắc thiết kế hài hòa nhét sẵn ảnh vẽ sắc sảo đúng nội dung trong 30 giây.",
      features: ["Khởi tạo slide nhanh chóng qua đầu vào chữ thô", "Bố trí khung ảnh trang nhã gọn gàng", "Có chức năng xuất tài liệu PDF/PowerPoint học sinh"],
      tip: "Có thể lồng trực tiếp các bảng câu hỏi Google Forms, video YouTube tương tác hoạt động ngay phía trong slide.",
      warn: "Hình vẽ AI tự động điền trong slide đôi khi bộc lộ lỗi thời gian lịch sử nếu không được rà duyệt."
    },
    en: {
      desc: "Create slides and websites from outlines instantly.",
      longDesc: "A complete revolution in information presentation. Simply enter a basic text outline, and Gamma structures, selects layouts, inserts relevant visual cards, and outputs modern slide decks or simple websites in under 30 seconds.",
      features: ["Generative prompt-to-deck engine", "Cohesive modern layouts and layout cards", "Clean export formats to PDF/PowerPoint sheets"],
      tip: "Embed active structures such as live Google Forms or Youtube educational playlinks directly into your presentation slides.",
      warn: "Confirm generated graphical backdrops; general AI illustrations occasionally mix up timeline or mechanical logic."
    },
    ko: {
      desc: "원작 스토리보드 구조 기반 30초 완성 프레젠테이션.",
      longDesc: "글씨 입력창에 몇 마디 대주제 서술만 던져 넣으면 미려한 폰트 테마 적용, 레이아웃 배열 배치, 연관 무료 삽화 이미지 배분 삽입까지 30초 만에 완수해 주는 글로벌 최고 인기 AI 문서 덱 빌더입니다.",
      features: [
        "텍스트 및 핵심 개요 기반 멀티 슬라이드 자동 생성",
        "반응형 블록 가공식 미려 그래픽 디자인 구조 적용",
        "보편적 편집 도구 연동형 PDF 및 PPT 파일 원격 내보내기"
      ],
      tip: "슬라이드 상단에 YouTube 복습 비디오나 실시간 피드백 구글 설문지를 하이퍼 텍스트로 임베드해 연동시켜 쓰세요.",
      warn: "기입된 팩트 설명 이외에 데코 이미지들이 가끔 엉뚱하게 삽입될 수 있어 발표 전 부가 조정이 수반되어야 합니다."
    }
  },
  {
    id: "beautifulai",
    role: "Cả hai",
    cat: { vi: "Thiết kế", en: "Design", ko: "디자인" },
    link: "https://www.beautiful.ai/",
    name: "Beautiful.ai",
    vi: {
      desc: "Phần mềm Slide thiết kế thông minh tự căn chỉnh hoàn mỹ bậc nhất.",
      longDesc: "Không lo lệch bố cục slide. Người học chỉ cần thêm nội dung, công cụ AI sẽ tự sắp xếp tỷ lệ bố cục, giãn dòng, căn lề đúng quy tắc mỹ thuật thời đại.",
      features: ["Mẫu slide thông minh bám chuyên nghiệp", "Căn chỉnh co dãn khuôn hình tự động", "Bản đồ hóa số liệu thông tin đẹp vô cùng"],
      tip: "Rất tối ưu khi rèn kỹ năng làm báo cáo nghiên cứu môn học bởi các biểu đồ vẽ cực kỳ trực quan và gọn gàng.",
      warn: "Tùy biến kéo thả tự do hơi hạn chế vì AI luôn đứng ra giữ chuẩn mực khuôn khổ bức hình."
    },
    en: {
      desc: "Presentation maker that 'can't look bad'.",
      longDesc: "A smart slide planning application applying strict design rules automatically. Add your data, and the software instantly resizes text, shifts elements, and realigns graphics to lock in professional harmony.",
      features: ["Pro-standard layout smart templates", "Autonomous layout proportions adjusting engine", "Beautiful visual charts for statistic reports"],
      tip: "Highly suited for science and academic projects as its analytical visual elements are ultra-modern.",
      warn: "Deep personalized adjustment is resticted, since the design engine locks layers to secure standard professional aesthetics."
    },
    ko: {
      desc: "레이아웃 붕괴를 원천 방지하는 프로 디자인 슬라이드 오피스.",
      longDesc: "내가 임의로 마우스를 잘못 끌어 화면 디자인을 망치는 일을 완전히 방어해 줍니다. 텍스트를 기입하고 신규 필드를 늘리거나 그래프를 얹을 때마다 여백과 정렬 비율을 디자인 황금비율로 수축 조정합니다.",
      features: [
        "글로벌 디자인 에이전시급 세련된 프리미엄 스마트 템플릿",
        "콘텐츠 수량 가변 대응 자동 정렬 어저스트먼트 기조",
        "통계 수치 연동 입체 차트 데이터 비주얼라이제이션"
      ],
      tip: "대외용 과제나 성료 연구 실적을 표로 구성해 스라이드화할 때 이 도구의 통계 슬라이드를 배치하면 가독성이 압권입니다.",
      warn: "자유분방한 개인 맘대로식 픽셀 드래그 수동 배치가 제약될 수 있어, 자유도 높은 변색 디자인을 원할 땐 낯설 수 있습니다."
    }
  },
  {
    id: "canva",
    role: "Cả hai",
    cat: { vi: "Thiết kế", en: "Design", ko: "디자인" },
    link: "https://canva.com/magic",
    name: "Canva Magic Studio",
    vi: {
      desc: "Trọn bộ công cụ trí tuệ nhân tạo đồ họa toàn năng.",
      longDesc: "Tìm kiếm, thiết kế áp phích học tập, tách ghép vật thể trong một nút bấm, chuyển slide thuyết trình nhanh gọn sang văn bản chỉ bằng Magic Switch.",
      features: ["Sinh ảnh thông qua câu lệnh mô tả", "Đổi định khuôn hình văn bản vạn năng", "Xây dựng các đồ họa thông minh bám chuyên sâu"],
      tip: "Sử dụng tính năng 'Magic Switch' tóm tắt nhanh bộ slide báo cáo sang định dạng Word gửi nhanh qua Email.",
      warn: "Tránh dùng các ảnh AI nhạy cảm ghép khuôn mặt bạn bè bừa bãi trái quy chế nhà trường."
    },
    en: {
      desc: "Comprehensive integrated AI design suite.",
      longDesc: "The global graphics app's suite leveraging advanced creators algorithms. Allows content creators to easily remove backgrounds, rewrite graphic copy, expand bounds of frames, and reformat structures seamlessly.",
      features: ["Text-to-image graphic models", "Universal file reformatting (Magic Switch)", "Extremely diversified educational layouts database"],
      tip: "Utilize 'Magic Switch' to export an academic slide deck into a plain summaries document with a singular click.",
      warn: "Avoid using digital assets editor tools to combine facial aspects of peers into inappropriate visual scenes and jokes."
    },
    ko: {
      desc: "켄바 인공지능 그래픽 매직 스튜디오 제품군.",
      longDesc: "글로벌 점유율 1위인 캔바(Canva)가 내재화한 시각 가공 패키지입니다. 배경 제거, 이미지 아웃페인팅 영역 연장, PPT 슬라이드를 한 번에 보고서 문서로 교환하는 작업을 단 수초 만에 해냅니다.",
      features: [
        "영역 맞춤 문장 기반 신규 이미지 조각 창출",
        "매직 스위치 기반 원화 파일 구조 자동 리포맷팅",
        "초급 학과 발표용 포스터 카드뉴스 템플릿 공급"
      ],
      tip: "'Magic Switch' 기능을 실행해 내가 가공한 학과 발표용 덱을 텍스트 요약 보고서 파일로 즉각 전환 신청하세요.",
      warn: "장난 목적으로 타 학우나 선생님의 전신 사진 실물을 끌어와 이상한 프레임에 합성 변조하는 기행을 일절 범하지 마십시오."
    }
  },
  {
    id: "midjourney",
    role: "Giáo viên",
    cat: { vi: "Thiết kế", en: "Design", ko: "디자인" },
    link: "https://midjourney.com/",
    name: "Midjourney",
    vi: {
      desc: "Hệ thống sinh ảnh nghệ thuật độ phân giải điện ảnh đỉnh cao.",
      longDesc: "Hỗ trợ giáo viên Mỹ thuật, Ngữ văn phác họa lại bối cảnh sử sách, tranh nghệ thuật chi tiết có ánh sáng kỳ vĩ vượt mong đợi.",
      features: ["Tranh minh họa chất lượng tuyệt mỹ", "Phối cảnh tranh dầu, vẽ phác họa, 3D phong phú", "Điều chỉnh thông số sâu sắc bằng câu lệnh phụ"],
      tip: "Bổ sung hậu tố câu lệnh '--ar 16:9' để ảnh sinh ra trải dài vừa góc chiếu ngang màn slide bài giảng.",
      warn: "Vận hành phần lớn trên nền tảng Discord, có thể hơi khó tiếp cận dành cho phụ huynh, học sinh tiểu học."
    },
    en: {
      desc: "Generate ultra-high-quality artistic images.",
      longDesc: "An industry-leading artistic visual modeling system. Empowers humanities and history educators to visualize complex historical milestones, classical settings, and conceptual ideas with breathtaking realism.",
      features: ["Stunning cinema-grade resolution render", "Rich artistic genres library support (3D, classic canvas, oil)", "Advanced prompt parameters editing controllers"],
      tip: "Append the command ending '--ar 16:9' to enforce wide-screen resolution suitable for powerpoint slide presentation screens.",
      warn: "Accessible principalmente inside the Discord interface; can present a learning curve for younger elementary teachers."
    },
    ko: {
      desc: "초고화질 극사실주의 예술 이미지 전용 크리에이터.",
      longDesc: "글로벌 최강의 아트 일러스트레이션 엔진입니다. 소설 속의 한 장면 묘사나 미술 교과 고대 그리스 신전의 복원 형태를 영화 스틸컷처럼 섬세하게 빛의 경로를 계산해 그려냅니다.",
      features: [
        "비교 불가 수준의 웅장한 아카데믹 비주얼 렌더링",
        "실감나는 수채화, 정밀 유화, 입체 3D 등 다채론 화풍 매칭",
        "매개변수 명령어 조절을 통한 정밀 변형 제어"
      ],
      tip: "대화 명령 뒤쪽에 '--ar 16:9'를 한 칸 띄우고 붙여주면 발표 화면에 착 떨어지는 와이드 형 가로 비율로 렌더링 됩니다.",
      warn: "네트워크용 디스코드 메신저 위주 구동 방식으로, 신입 교사 및 초등 자녀들이 처음 연동 가입하기엔 동선이 혼잡할 수 있습니다."
    }
  },
  {
    id: "slidesgo",
    role: "Cả hai",
    cat: { vi: "Thiết kế", en: "Design", ko: "디자인" },
    link: "https://slidesgo.com/ai-presentation-maker",
    name: "Slidesgo AI",
    vi: {
      desc: "Kho lưu trữ thư viện mẫu trình chiếu nay tích hợp AI phát sinh slide bài giảng.",
      longDesc: "Giúp chọn tông màu, mẫu vẽ yêu thích (Doodle, Minimal) nhập cấu trúc chữ thô và AI tự tống ráp cấu trúc bám sát giáo án cực nhanh.",
      features: ["Các mẫu sư phạm đẹp đẽ", "Tùy biến phong cách đa dạng nét vẽ", "Đồng bộ hóa ảnh nền vector chất lượng cao"],
      tip: "Tải file dưới gói định dạng Google Slides để dễ dàng làm việc chung chia sẻ tài liệu với học trò.",
      warn: "Lời văn tạo mặc định từ AI đôi khi hơi cụt nghĩa, cần cô giáo rà duyệt điền sâu thêm ý tốt."
    },
    en: {
      desc: "Massive template library now with AI generation.",
      longDesc: "Integratess the world's most recognizable PowerPoint layout library with generative AI. Pick thematic colors and artistic formats, and let the planner compile data templates instantly.",
      features: ["Educationally specialized structured designs", "Flexible presentation formats and layouts options", "Direct high-resolution vector assets injection"],
      tip: "Download output files directly onto Google Slides structure to maximize synchronous editing options with students.",
      warn: "The default generated text layers can be simplified; manual educational rewriting is suggested before public delivery."
    },
    ko: {
      desc: "정밀 디자인 슬라이드고 테마 퀴즈 렉처 메이커.",
      longDesc: "디자인이 완료된 슬라이드 템플릿 보관 사이트로 친숙했던 Slidesgo가 선보이는 생성 빌더입니다. 교실 주제, 희망 학기 톤앤매너만 입력하면 검증된 마스터 템플릿 시트에 내용을 채워 발송합니다.",
      features: ["공교육 친화 디자인 템플릿 세트", "아카데मिक 테마 컬러 및 감성 일러스트 배정", "안정적인 하이폴리 벡터 배경 탑재"],
      tip: "스마트 소통 공유를 위해 'Google Slides' 형태로 다운받으면 크롬 브라우저에서 조별 협업으로 교정하기 좋습니다.",
      warn: "탑재된 영문 설명 문구 자체는 비교적 짧고 일반적이므로, 교과 전문 교사가 교과용 심화 개념으로 윤문해 주세요."
    }
  },
  {
    id: "khanmigo",
    role: "Học sinh",
    cat: { vi: "Gia sư", en: "Tutoring", ko: "튜터リング" },
    link: "https://khanacademy.org/khanmigo",
    name: "Khanmigo",
    vi: {
      desc: "Gia sư AI học thuật thông thái huấn luyện kỹ năng giải bài Socratic.",
      longDesc: "Được chống lưng bởi Khan Academy. AI tuyệt bực không mớm lời giải đáp liền, liên tục chất vấn kéo mở tư duy học sinh tự tìm câu trả lời đúng.",
      features: ["Hướng dẫn giải bài bám chuẩn toán học khoa học", "Phân tích học coding thông thái", "Chống chỉ định trả đáp án ăn sẵn"],
      tip: "Hãy hỏi 'Gợi ý cho tớ bước tiếp theo của phương trình' thay vì xin ngay kết quả cuối.",
      warn: "Về lâu dài cần tính nhẫn nại từ học sinh để cùng AI thảo luận tiến hành bài học."
    },
    en: {
      desc: "Socratic AI tutor.",
      longDesc: "Powered by Khan Academy. Unlike typical answer engines, it acts as a dedicated personal mentor, asking guiding questions inline to steer students to discover calculations models themselves.",
      features: ["Socratic interactive math & science tutoring", "Dynamic computational coding companion", "Anti-cheating zero-direct-answer lock"],
      tip: "Prompt the companion with: 'Guide me to what calculations formula step is appropriate next' rather than asking for answers.",
      warn: "Requires high levels of focus and interactive patience to work side-by-side with the Socratic dialogue tree."
    },
    ko: {
      desc: "칸 아카데미 소크라테스식 학습 동반 가상 코치.",
      longDesc: "글로벌 에듀 거장 Khan Academy가 제작한 수학·과학 해결 과외봇입니다. 수학 답을 일방적으로 짚어주는 비효율을 방지하며, 유도 질문을 넌지시 건네 학생 스스로 원리를 대뇌여 해결해 내도록 교육합니다.",
      features: [
        "소크라테스 대화법 연계 과학수학 원리 유도",
        "순차 코딩 로직 및 알고리즘 개별 트레이닝",
        "개념 우회 훈련 집중식 즉각 정답 유출 제한 기능"
      ],
      tip: "문제를 들고 가서 단순 '풀어줘'가 아닌 '수정해야 할 첫 단추 공식을 제안해줘'라며 힌트 낚시로 돌려 대화하세요.",
      warn: "생성 AI와의 인내심 있는 논리 질의응답을 거쳐야 답을 수수할 수 있으므로, 단시간 치트 패스를 바라는 성향에겐 답답하게 느껴집니다."
    }
  },
  {
    id: "photomath",
    role: "Học sinh",
    cat: { vi: "Gia sư", en: "Tutoring", ko: "튜터リング" },
    link: "https://photomath.com/",
    name: "Photomath (by Google)",
    vi: {
      desc: "Quét camera nhận diện giải đáp bài tập toán học từng bước.",
      longDesc: "Công cụ đắc lực giải toán của Google phá mã mọi biểu thức đại số, lượng giác hay đạo hàm phức tạp chỉ thông qua việc chụp hình.",
      features: ["Quét tay viết và phông in mượt mà", "Phân tích sơ đồ tọa độ đồ thị hàm số", "Giải thích chi tiết logic từng bước làm"],
      tip: "Hãy đọc sâu phần 'Explain steps' (giải thích chi tiết bước làm) để nắm quy luật biến đổi toán học bám đề thi.",
      warn: "Tuyệt đối không lạm dụng trong thi cử sát hạch sẽ làm hỏng tư duy học tập."
    },
    en: {
      desc: "Camera scanner for step-by-step math solutions.",
      longDesc: "A robust math problem solver driven by Google's computer vision. Captures complex hand-written calculus, trigonometry, and algebra equations to outline detailed steps of solutions.",
      features: ["High-accuracy handwritten/printed text scanner", "Interactive graphing visual representations coordinate maps", "Detailed step-by-step structural logical breakdowns"],
      tip: "Thoroughly review the 'Explain Steps' panel inside to appreciate the core formulas transitions.",
      warn: "Highly prohibited inside assessment testing spaces; overuse will destroy analytical skills progress."
    },
    ko: {
      desc: "카메라 촬영 연동 수식 해결 지침 가이드.",
      longDesc: "종이에 직접 필기한 암해 수학 공식이나 복잡한 대수학, 미적분, 통계 방정식 프린트물을 내장 카메라로 찰칵 스캔하기만 하면 깔끔한 단계별 정답 유도 과정을 일괄 나열해 줍니다.",
      features: ["필체 및 기호 판독 연동 초고속 스마트 스캔", "방정식 그래프 자동 교차 변환 좌표 지형화", "순차 증명 단계 해독형 단계별 분석 도안 제공"],
      tip: "'Explain steps' 섹션의 상세 한 글자 풀이를 정독하십시오. 전형적인 수학 중간고사 고득점 변별력 문제 오답 원인 분석에 효과적입니다.",
      warn: "이 도구에 지나치게 수동 의존할 경우 스스로 자필 계산하는 집중 근육이 소실되며, 실제 지면 시험실에서는 절대 쓸 수 없습니다."
    }
  },
  {
    id: "socratic",
    role: "Học sinh",
    cat: { vi: "Gia sư", en: "Tutoring", ko: "튜터リング" },
    link: "https://socratic.org/",
    name: "Socratic by Google",
    vi: {
      desc: "Trợ lý hỗ trợ giải đáp bài tập đa môn học (Sinh, Sử, Địa, Khoa học).",
      longDesc: "Mạng lưới tìm kiếm giáo học từ Google. Khi học sinh đối mặt bài tập siêu hóc búa, AI quét tìm bài giảng, đoạn clip giải nghĩa hay nhất có trên internet kết cấu cho bạn hiểu.",
      features: ["Phục vụ phong phú giáo trình môn tự nhiên xã hội", "Chỉ nguồn clip hỗ trợ mô phỏng giảng hay", "Gợi ý hệ thống định lý liên quan sâu"],
      tip: "Rất hoàn hảo để hỏi học hiểu các câu bối cảnh lý thuyết xã hội Sử, Địa, Sinh học học đường.",
      warn: "Cơ dữ liệu hệ thống đôi khi ưu việt hơn với các giáo trình phổ biến toàn cầu bằng tiếng Anh."
    },
    en: {
      desc: "Comprehensive homework helper (Physics, History).",
      longDesc: "A multifaceted search assistant built by Google. Snap a photo of secondary school homework, and Socratic extracts the core concepts to suggest top-tier visual youtube lessons, graphics, and definitions.",
      features: ["Multi-disciplinary support across Humanities, Sciences, and Arts", "Interactive targeted video recommendations on concepts", "Contextual definition cards"],
      tip: "Highly recommended for science theories questions reviews where animated visual support helps memory retention.",
      warn: "The database centers heavily around English academic modules; native Vietnamese curriculum matching may vary."
    },
    ko: {
      desc: "포괄적 전 과목 숙제 요점 개념 정착 비서.",
      longDesc: "마찬가지로 구글이 설계한 모바일 교육 통합 앱입니다. 화학 공식, 중세 유럽사, 생물학 호르몬 표 등의 숙제 문항 질문지를 안면에 두고 사진 스캔해 주면 전 세계 가장 유명 소양 강의 영상 비주얼들을 보여줍니다.",
      features: [
        "이과(물리·화학·생물) 및 문과(사회·세계사) 종합 서포트",
        "해당 전문 내용 해설 유튜브 미디어 일대일 자동 필터 매핑",
        "연관 학과 원리 사전식 학습 안내 단락 제공"
      ],
      tip: "자연계열 개념 탐사 등에서 자칫 따분하게 굳을 수 있는 교재 요점 복습을 그래픽과 함께 학습하기에 맞춤입니다.",
      warn: "글로벌 검증 교재 콘텐츠를 기초해 두어 영문 검색이 아닌 독자적 교육 교재의 경우 매칭 매력이 줄 수 있습니다."
    }
  },
  {
    id: "githubcopilot",
    role: "Cả hai",
    cat: { vi: "Gia sư", en: "Tutoring", ko: "튜터リング" },
    link: "https://github.com/features/copilot",
    name: "GitHub Copilot",
    vi: {
      desc: "Trợ lý viết mã lập trình đỉnh hành tinh dành cho lớp tin học.",
      longDesc: "Tích hợp trực tiếp bám cạnh VS Code. AI theo mồi phác họa mã viết tiếp, giải toán dòng, lý giải gỡ lỗi code bài tập cho học sinh trong các lớp lập trình.",
      features: ["Gợi ý điền dòng code tốc độ thời gian thực", "Lý giải logic thiết kế lập trình phức tạp", "Truy nguồn sửa hệ lỗi bảo mật"],
      tip: "Học sinh trung học đăng ký bằng tài khoản định dạng học sinh GitHub Education sẽ được cấp miễn phí hoàn toàn.",
      warn: "Tránh giao phó cho AI viết giùm từ đầu đến cuối các bài tập lập trình lớn kẻo rỗng kiến thức cơ bản."
    },
    en: {
      desc: "Best AI coding assistant (for CS classes).",
      longDesc: "The prime software engineering assistant integrated directly with VS Code, PyCharm, and general IDEs. Autocompletes functions, writes diagnostic logs, and explains bugs as you code.",
      features: ["Real-time smart syntax code completions", "Detailed software logic algorithms analysis", "Vulnerabilities detection and rapid refactoring fixes"],
      tip: "Submit your student ID under the GitHub Education program to access a 100% free license.",
      warn: "Do not let it construct your entire assignments from scratch; you will stunt your core procedural coding logic."
    },
    ko: {
      desc: "컴퓨터 공학 및 SW 코딩 교육 동반 실시간 수식 입력기.",
      longDesc: "프로그래밍 코딩 작업용 에디터(VS Code 등)에 탑재하여 쓰는 개발용 최강의 동반자입니다. 변수를 선언하면 다음에 들어갈 핵심 코드 로직 라인을 추론하여 미리 반투명 글씨로 추천 제시합니다.",
      features: ["한 줄 코딩 실시간 자동 완성 프레임 제공", "작성 중인 코드 논리 구조 단계별 문답형 풀이", "디버깅 오류 파악 원인 추궁 및 최적화 추천"],
      tip: "듀이 학생들은 'GitHub Education' 학생 증명서 제출 후 100% 기부 무료 패스로 사용 가능하니 반드시 혜택을 받으세요.",
      warn: "포트폴리오 과제를 온전히 대필 완성시키면 학교 본인 대면 평가 및 알고리즘 시험 시 극도의 낭패를 볼 수 있습니다."
    }
  },
  {
    id: "padletai",
    role: "Cả hai",
    cat: { vi: "Tương tác", en: "Interactive", ko: "대화형" },
    link: "https://padlet.com/",
    name: "Padlet Magic",
    vi: {
      desc: "Bảng thảo luận trực quan có AI sinh kịch bản giáo trình.",
      longDesc: "Bảng cộng tác ảo vốn quen thuộc nay trang bị thêm AI. Hỗ trợ tạo khung timeline ngày lịch sử, găm đính bản đồ định vị tư duy của học sinh lớp học mượt mà.",
      features: ["Dựng lịch trình timeline lịch sử thông thái tự động", "Sinh vẽ ảnh bảo mật cho thành viên nhóm", "Dịch thuật tức tốc bình phẩm đóng góp bài của học trò"],
      tip: "Gõ lệnh đề cương kiểu: 'Tạo bảng tư duy tóm tắt Chiến tranh thế giới thứ nhất', AI sẽ dựng layout sẵn có hình minh họa.",
      warn: "Giáo viên hãy giữ quyền quản trị kiểm soát kỹ lưỡng bình luận bừa của học sinh trên các bảng chia sẻ cộng đồng."
    },
    en: {
      desc: "Collaborative board with AI generation.",
      longDesc: "The familiar digital notice board upgraded with advanced 'Magic Padlet' AI. Instantly designs history timelines, structural charts, and customized background styles based on prompt instructions.",
      features: ["Automated thematic historical timelines generator", "Safe in-app AI graphics generation", "Direct translations for group posts and contributions"],
      tip: "Direct the tool with: 'Create a WWII spatial timeline chart' and watch the board layout assemble natively in seconds.",
      warn: "Always monitor comments settings to block inappropriate anonymous remarks on shared public classroom links."
    },
    ko: {
      desc: "AI 기반 멀티미디어 협업 프레젠테이션 보드.",
      longDesc: "학습 공유 게시판이자 조별 과제 발표용으로 인기 있는 Padlet의 AI 에디션입니다. 역사 타임라인 나열, 가상 지형 핀 주소 연동, 학급 인포그래픽 수집을 지능형 템플릿으로 처리합니다.",
      features: [
        "역사적 전개 요강 타임라인 레이아웃 자동 기획",
        "보안 심사가 적용된 수려한 삽화 이미지 자체 수급",
        "여러 국가 학생 포스팅 의견 일괄 자동 통역 번역"
      ],
      tip: "'산업혁명 변천사를 역사 타임라인으로 기획해줘'라고 타이핑하면 바로 빈 레이아웃 도안이 깔끔히 장착됩니다.",
      warn: "링크 전체를 공개 설정했을 경우 원치 않는 장난 식 글이 침투할 수 있으므로 교사의 댓글 승인 기능을 가동하십시오."
    }
  },
  {
    id: "miro",
    role: "Cả hai",
    cat: { vi: "Tương tác", en: "Interactive", ko: "대화형" },
    link: "https://miro.com/ai/",
    name: "Miro AI Board",
    vi: {
      desc: "Bảng trắng vô cực tự ghép nhánh sơ đồ tư duy (Mindmap).",
      longDesc: "Công cụ kiến tạo tư duy lớn nhất nay tích hợp Miro AI. Nhấn nút là AI tự chẻ các nhánh ý tưởng phụ từ một từ khóa chính, gom sắp xếp phân loại hàng trăm tờ note dán lộn xộn.",
      features: ["Rút nhánh mở rộng ý đồ sơ đồ tư duy", "Gom nhóm tờ nhãn dán thông minh theo chủ đề", "Vẽ chuỗi sơ đồ hệ thống quy trình bài giảng"],
      tip: "Sử dụng tính năng phân nhóm 'AI Clustering' sau mỗi cuộc bùng nổ ý kiến tập thể để gạt bỏ ý kiến thừa thãi.",
      warn: "Cơ chế quản trị nghiêng sẫm cho cộng đồng thiết kế nên học sinh tiểu học sẽ cần thầy cô chỉ dẫn đồng hành."
    },
    en: {
      desc: "Auto-generate Mindmaps with AI.",
      longDesc: "The world's most versatile virtual canvas now boosted by Miro AI. In 1 click, developers and student groups can branch out infinite mindmaps, auto-group sticky notes, and build clean organizational flowcharts.",
      features: ["Interactive prompt-driven Mindmap branch expander", "Semantic sticky notes grouping (AI Clustering)", "Diagram flowchart automation"],
      tip: "Utilize the 'AI Clustering' option right after a heavy brainstorming session to auto-sort sticky notes into thematic groups.",
      warn: "Built primarily with advanced interface rules, element controls require guidance when applied inside K-5 grade levels."
    },
    ko: {
      desc: "무한 궤도 비주얼 마인드맵 및 가상 화이트보드 AI.",
      longDesc: "아이디어 발산용 캔버스 Miro에 인공지능이 탑재된 형태입니다. 화두용 키워드 한 단어에서 수십 가지 연관 논리를 사방으로 가지치기 생성하고, 마구 붙은 메모지들을 의미론적으로 분류 격리 배치해 줍니다.",
      features: ["원클릭 고속 마인드맵 논리 구조 가지치기", "메모 쪽지 지능형 테마 분류 결집(AI Clustering)", "역동 학술 다이어그램 및 흐름도 도식화 구현"],
      tip: "조별 토의 후 'AI Clustering'을 실행하면 수십 장의 학우 메모 쪽지들이 주제군별 대표 카테고리로 묶여 청소됩니다.",
      warn: "메뉴 스위치 기능이 영어 비즈니스에 기반하여, 저학년 초등학생들에게 가동법 가이드가 사전에 필수적입니다."
    }
  }
];
