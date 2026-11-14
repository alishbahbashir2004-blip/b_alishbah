export const socials = [
  { label: 'GitHub', href: 'https://github.com/alishbahbashir2004-blip?tab=repositories', icon: 'github', brand: '#ffffff', value: 'GitHub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alishbahbashir/', icon: 'linkedin', brand: '#0A66C2', value: 'LinkedIn' },
  { label: 'Email', href: 'mailto:alishbahbashir2004@gmail.com', icon: 'gmail', brand: '#EA4335', value: 'Email' },
  { label: 'WhatsApp', href: 'https://wa.me/923335124940', icon: 'whatsapp', brand: '#25D366', value: 'WhatsApp' },
];

export const international = [
  {
    title: 'Fully Funded Mitacs Globalink Research Internship',
    org: 'University of Alberta (UofA), Canada',
    date: 'August 2026',
    desc: 'Awarded the prestigious Mitacs Globalink Research Internship. Selected to work on cutting-edge AI research in Canada.',
    link: 'https://drive.google.com/file/d/1mcThpAhvXNP36DNmvxD9fHbX7URz7C5M/view?usp=drive_link',
    color: 'lego-red',
  },
  {
    title: 'Fully Funded EE Summer Camp 2025',
    org: 'KAIST (South Korea\'s Leading University)',
    date: 'Aug 2025',
    desc: 'Accepted into KAIST\'s fully funded EE Summer Camp. Selected for the Nanoscale Advanced Integrated Systems Lab Visit.',
    link: 'https://drive.google.com/file/d/1jdeNHuFSJjU2Pge2MuudXTGv9MGMULDZ/view?usp=drive_link',
    color: 'lego-blue',
  },
  {
    title: 'Workshop on Distributed Training in the Era of Large Models',
    org: 'KAUST (Saudi Arabia)',
    date: 'Nov 2025',
    desc: 'Attended an exclusive workshop on distributed training paradigms for LLMs by KAUST.',
    link: 'https://www.linkedin.com/posts/alishbahbashir_pieas-kaust-distributedtraining-activity-7403712053850390529-WkIs',
    color: 'lego-red',
  },
];

export const experience = [
  {
    title: 'Mitacs GRI Research Intern',
    org: 'University of Alberta (Canada)',
    date: 'Jul 2026 – Ongoing',
    color: 'lego-red',
    desc: 'Developed CH₄, CO, SO₂, CO₂, and NO₂ agents for a modular geospatial platform integrating Sentinel-5P/TROPOMI data in Google Earth Engine and NASA\'s GHG Center to detect localized emission anomalies. Wrote and published an application paper on the system. Earned direct commendation from Professor Bo Zhang for delivering high-quality agents and the paper in a remarkably short timeframe.',
  },
  {
    title: 'NLP Research Intern',
    org: 'PIEAS University (Dr. Ijaz Hussain)',
    date: 'Sep 2025 – Jun 2026',
    color: 'lego-blue',
    desc: 'Conducted research in RAG, efficient retrieval & recommendation architectures, LLM/VLM fine-tuning, and Agentic AI frameworks.',
  },
  {
    title: 'Generative AI Intern',
    org: 'National Telecommunication Corporation (NTC)',
    date: 'Jul – Aug 2025',
    color: 'lego-red',
    desc: 'Built GenAI applications for NTC. Engaged with IT department to assess requirements and deployed hybrid retrieval architecture. Presented trade-off analyses of RAG configurations.',
  },
  {
    title: 'Freelancing',
    org: 'Upwork (Remote)',
    date: 'Sep 2024 – May 2025',
    color: 'lego-blue',
    desc: 'Remote contract engagements in GenAI and software development.',
  },
  {
    title: 'Research & Operations Manager',
    org: 'Chalta Karobar (UAE & PK)',
    date: 'Aug 2023 – Jun 2024',
    color: 'lego-red',
    desc: 'Conducted market research, managed website backend and social media, and interfaced directly with clients for business matchmaking.',
  },
];

export const skills = [
  {
    label: 'Agentic AI',
    color: 'lego-red',
    items: ['LangGraph', 'LangChain', 'LangSmith', 'Workflows (Seq/Par/Cond)', 'HITL', 'Observability', 'Memory (STM/LTM)', 'Subgraphs', 'Multi-Agent Orchestration', 'MCP Clients'],
  },
  {
    label: 'Advanced RAG',
    color: 'lego-blue',
    items: ['Self-RAG', 'Corrective RAG (CRAG)', 'Relevance Grading', 'Query Rewriting', 'MMR / Multi-Query', 'Ensemble Retrieval'],
  },
  {
    label: 'Programming & Tools',
    color: 'lego-red',
    items: ['Python', 'FastAPI', 'Docker', 'SQL', 'Streamlit', 'PyTorch', 'ASP.NET'],
  },
  {
    label: 'MCP (Model Context Protocol)',
    color: 'lego-blue',
    items: ['Client/Server Config', 'Multi-server Orchestration', 'Tool/Resource Def', 'Local/Remote Servers'],
  },
];

export const projects = [
  {
    name: 'Pantheon — Autonomous Multi-Agent Content Gen',
    color: 'lego-blue',
    desc: 'Architected an end-to-end autonomous content generation pipeline using a distributed multi-agent orchestration framework. Implemented specialized agentic nodes: Router (open/closed-book decision), Research (web evidence synthesis), Orchestrator (outline planning), parallel Worker agents (fan-out enabling horizontal scalability), and Reducer subgraph (content merging + automated image generation). Built interactive frontend with live pipeline visualization.',
    tech: 'LangGraph, LangChain, Groq, Gemini, Tavily, FastAPI, React, Pydantic',
    url: 'https://github.com/alishbahbashir2004-blip/Multi-Agent-Blog-Writing-Pipeline-LangGraph-FastAPI-React-',
  },
  {
    name: 'Cogito — Self-RAG Framework',
    color: 'lego-yellow',
    desc: 'Implemented Self-RAG architecture from scratch with self-reflective agentic nodes: retrieval decision router, relevance filtering, grounded generation, hallucination detection guardrails (is sup), answer revision loop, utility assessment (is use), and semantic query rewriting. Applied MMR-based vector search optimization and visualized real-time execution paths with grounding scores.',
    tech: 'LangGraph, LangChain, Groq, ChromaDB, MMR, HuggingFace, Streamlit, Graphviz',
    url: 'https://github.com/alishbahbashir2004-blip/SelfRAG-LangGraph-Reflective-RAG',
  },
  {
    name: 'Verity — Corrective RAG (CRAG)',
    color: 'lego-green',
    desc: 'Engineered CRAG architecture with an LLM-based automated evaluation framework for retrieval quality grading (correct/incorrect/ambiguous). Pipeline includes MMR-based semantic retrieval, query rewriting for knowledge gaps, web search fallback integration, sentence-level context refinement, and grounded generation.',
    tech: 'LangGraph, LangChain, Groq (Llama-3), ChromaDB, HuggingFace, Tavily, Streamlit, Pydantic',
    url: 'https://github.com/alishbahbashir2004-blip/CRAG-LangGraph-Corrective-RAG',
  },
  {
    name: 'Full Stack RAG Chatbot (NTC Enterprise)',
    color: 'lego-red',
    desc: 'Developed and deployed a full-stack RAG-based chatbot for NTC policy documents. Evaluated multiple retrieval strategies (BM25, dense, MMR, contextual compression, multi-query) and established that a weighted hybrid ensemble provides the optimal accuracy-latency balance. Deployed FastAPI backend with CORS and interactive frontend on NTC servers.',
    tech: 'Python, FastAPI, LangChain, Google Gemini, OpenAI, ChromaDB, BM25, HTML/CSS/JS',
    url: 'https://github.com/alishbahbashir2004-blip/NTC_RAG_Chatbot',
  },
  {
    name: 'Text-to-SQL Generation Chatbot',
    color: 'lego-blue',
    desc: 'Researched and developed a text-to-SQL chatbot integrating schema-aware prompting with LLMs to generate and execute queries on live MySQL databases. Achieved a RAGAS score of 3.8; currently expanding the project to handle multi-database querying.',
    tech: 'LangChain, Gemini 2.5 Pro, MySQL, SQLAlchemy, RAGAS, Groq, HuggingFace',
    url: 'https://github.com/alishbahbashir2004-blip/Text_to_SQL_Query_Generation',
  },
  {
    name: 'EEG-Based Emotion Recognition using LSTM',
    color: 'lego-yellow',
    desc: 'Predicted emotional states from EEG signals by benchmarking five deep learning architectures (RNN, GRU, LSTM, MLP, CNN). The LSTM model achieved the highest test accuracy of 95.94%.',
    tech: 'Python, TensorFlow, Keras, Scikit-learn, NumPy, Pandas',
    url: 'https://github.com/alishbahbashir2004-blip/EEG_Based_Emotion_Recognition',
  },
  {
    name: 'Multi-source Agentic RAG',
    color: 'lego-green',
    desc: 'Developed a multi-source agentic RAG chatbot using zero-shot ReAct prompting with Gemini to autonomously orchestrate Wikipedia, Arxiv, and a custom Chroma-based retriever for accurate multi-domain QnA.',
    tech: 'LangChain, Gemini 2.5 Pro, Wikipedia API, Arxiv API, Chroma, Streamlit',
    url: '',
  },
  {
    name: 'Currency Conversion Agent',
    color: 'lego-red',
    desc: 'Built an AI-powered currency converter using the ExchangeRate API. Focused on the reliability of LLM-based agents in parsing user intent, formulating precise API calls, and interpreting structured JSON data.',
    tech: 'Python, LangChain, Gemini, REST API',
    url: '',
  },
];

export const awards = [
  {
    title: 'Invitation to the Prime Minister\'s House on "Youm-e-Taleem-o-Taraqi" as among most talented students in recognition of outstanding academic excellence.',
    date: 'Feb. 2025',
    link: 'https://drive.google.com/file/d/1oqTRdQwtYcuO3APrQXKuMmi2r8gCEVe3/view',
  },
  {
    title: 'Awarded "Outstanding Performance Being Amongst Top 10 Position Holders" nationwide at HSSC level in Federal Board of Intermediate and Secondary Education (by ICAP Pakistan 6th overall), March 2023.',
    date: 'Mar. 2023',
    link: 'https://drive.google.com/file/d/1IzfN6oUrNHyKZw7XYnWjNUYHa8Y3V6cE/view?usp=drive_link',
  },
  {
    title: 'Awarded Merit Scholarship for 4 consecutive years by FBISE for securing 6th position nationwide at HSSC level in FBISE board, 2022.',
    date: '2022',
    link: 'https://drive.google.com/file/d/1CwealxmVOt-ptB8w7rfD8RSgqBzP4yEX/view?usp=drive_link',
  },
  {
    title: 'Secured 3rd merit position across all departments in the PIEAS entrance exam, 2022.',
    date: '2022',
    link: 'https://drive.google.com/file/d/1w0OeYpOXQlex4fVZnpqTQgBRYdS7Of1o/view?usp=drive_link',
  },
  {
    title: 'Awarded Merit Scholarship for 4 consecutive years by STEP, for being among top 25 scorers in ECAT exam, 2022.',
    date: '2022',
    link: 'https://drive.google.com/file/d/13g9EUOhLJpXeDQ8HLfmpMNTDnsfYcRpJ/view?usp=drive_link',
  },
  {
    title: '100% Merit Scholarship by STEP, on the basis of HSSC-I result (506/520), 2022.',
    date: '2022',
    link: 'https://drive.google.com/file/d/1l_FqA9OgCJnZo7LgqHBZrcsYWxyP3R5O/view?usp=drive_link',
  },
  {
    title: '100% Merit Scholarship by STEP for securing 1st Position in SSAT 2022.',
    date: '2022',
    link: '',
  },
  {
    title: '100% Merit Scholarship awarded by PGC, HSSC level on the basis of SSC result (1083/1100, 98.45%), 2020.',
    date: '2020',
    link: 'https://drive.google.com/file/d/1U1gUlHxEBqtTldefYX8WJfTgCKzUTq1I/view?usp=drive_link',
  },
  {
    title: '100% Merit Scholarship by Spectrum Science Academy on the basis of 9th class result (496/510 marks), 2019--2020.',
    date: '2019--2020',
    link: 'https://drive.google.com/file/d/1X_bx_Ff0uhnusJwPlHoIJ_BHvG2p7nss/view?usp=sharing',
  },
];

export const extracurricular = [
  {
    title: 'Ambassador of Artificial Intelligence Community of Pakistan (AICP) at PIEAS university.',
    link: 'https://drive.google.com/file/d/1mZbRsVqnw7YfRgak5_lCBRr7aTpqtgBS/view?usp=drive_link',
  },
  {
    title: 'Runner Up Computing Quiz Competition in AirTech\'24 - Air University Islamabad.',
    link: 'https://drive.google.com/file/d/1R7beJdi0nQZUeE0v9PhNiV32WX--lPeb/view?usp=drive_link',
  },
  {
    title: 'Runner Up in English Declamation Contest Organised by Space Research Lab, National Centre of GIS and Space Applications IST, Islamabad at National Level. Theme: "Women in Space", October 2021.',
    link: 'https://drive.google.com/file/d/1gWSMi7JzV4Deew2bO422e65AjbtPfthC/view?usp=drive_link',
  },
  {
    title: 'MOS Word Associate certification by Microsoft, 2019.',
    link: 'https://drive.google.com/file/d/1bqjs0CvUN0xpcrJlFhY97PpSiEtlFqd1/view?usp=drive_link',
  },
  {
    title: 'Speaker at 2-day SEO Workshop organised by Digital Mastery Academy for university students, May 2024.',
    link: 'https://drive.google.com/file/d/1e_q09Z1xskY7WPRYPj7_DtxfYovbyrha/view?usp=drive_link',
  },
  {
    title: '2nd Prize in English Declamation Contest at Intra School Level, 2017.',
    link: 'https://drive.google.com/file/d/1iW_FeHeDo-xlDix7iwLg2bhMt9L0t63V/view?usp=sharing',
  },
  {
    title: '1st Prize in English Essay Writing Competition organised by FGEI (Federal Government Educational Institutions C/G) at regional level.',
    link: 'https://drive.google.com/file/d/1JWl9U7ABuZD53z9qHGE3y2Xr9uzuKvPx/view?usp=sharing',
  },
  {
    title: 'Certificate of Participation in Urdu Declamation Contest, organised by FGEI (Federal Government Educational Institutions C/G) at regional level.',
    link: 'https://drive.google.com/file/d/1Vl47K3ALCgY93AJ9w-oaN2tVAXcQkDiN/view?usp=sharing',
  },
  {
    title: 'Certificate of Participation in Urdu Story Writing Competition, organised by FGEI (Federal Government Educational Institutions C/G) at regional level, 2016.',
    link: 'https://drive.google.com/file/d/1ozJkzIvnCmPZk0A7Lst_3RZFcnIS913p/view?usp=sharing',
  },
];
