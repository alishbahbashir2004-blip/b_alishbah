import streamlit as st
import base64
from pathlib import Path

st.set_page_config(
    page_title="Alishbah Bashir | AI & CS",
    page_icon="🧱",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ---------------------------------------------------------------
# ADVANCED CSS THEME & ANIMATIONS
# ---------------------------------------------------------------
CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;800&display=swap');

:root {
  --bg: #0B0E14;
  --panel: #151A23;
  --line: #2A3241;
  --text: #E2E8F0;
  --dim: #94A3B8;
  
  --lego-red: #D01012;
  --lego-yellow: #FFCF00;
  --lego-blue: #0055BF;
  --lego-green: #00852B;
  --lego-cyan: #00A3A3;
}

html, body, .stApp {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
}

/* Faint LEGO background grid */
.stApp {
  background-image: 
    radial-gradient(circle at 10px 10px, rgba(255,255,255,0.02) 3px, transparent 4px),
    linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px);
  background-size: 40px 40px, 100px 100px, 100px 100px;
  background-attachment: fixed;
}

h1, h2, h3 { font-family: 'JetBrains Mono', monospace !important; color: #fff; font-weight: 800; }
h1 { font-size: 3rem; line-height: 1.1; margin-bottom: 0; }
h2 { font-size: 1.6rem; border-bottom: 2px solid var(--line); padding-bottom: 10px; margin-top: 50px; margin-bottom: 25px;}

/* ---------------------------------------------------------------
   KEYFRAME ANIMATIONS
   --------------------------------------------------------------- */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glow {
  0% { box-shadow: 0 0 5px var(--lego-cyan); }
  50% { box-shadow: 0 0 15px var(--lego-cyan); }
  100% { box-shadow: 0 0 5px var(--lego-cyan); }
}

.float-anim { animation: float 6s ease-in-out infinite; }
.blink-anim { animation: blink 1.5s step-end infinite; }
.slide-anim { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

/* Staggered animation delays for scroll reveal */
.delay-1 { animation-delay: 0.1s; opacity: 0; }
.delay-2 { animation-delay: 0.2s; opacity: 0; }
.delay-3 { animation-delay: 0.3s; opacity: 0; }

/* Terminal Hero Block */
.term {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.4);
  position: relative;
}
/* 3 Brick studs on top */
.term::before {
  content: ''; position: absolute; top: -12px; left: 30px; width: 20px; height: 12px;
  background: var(--lego-red); border-radius: 6px 6px 0 0;
  box-shadow: 30px 0 0 var(--lego-yellow), 60px 0 0 var(--lego-green);
}
.prompt { color: var(--lego-green); font-weight: 600; }
.path { color: var(--lego-cyan); }

/* Section Headers with LEGO Studs */
.sec-head { display: flex; align-items: center; margin-bottom: 25px; }
.studs-row { display: flex; gap: 6px; margin-right: 15px; }
.stud { width: 14px; height: 14px; border-radius: 4px; }
.stud.red { background: var(--lego-red); }
.stud.blue { background: var(--lego-blue); }
.stud.yellow { background: var(--lego-yellow); }
.stud.green { background: var(--lego-green); }

/* Dynamic Cards */
.lego-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px;
  margin-bottom: 20px;
  position: relative;
  transition: all 0.3s ease;
}
.lego-card:hover {
  transform: translateY(-4px);
  border-color: var(--lego-cyan);
  box-shadow: 0 8px 20px rgba(0, 163, 163, 0.15);
}
.lego-card::before {
  content: ''; position: absolute; top: -10px; left: 20px; width: 18px; height: 10px;
  background: inherit; border: 1px solid var(--line); border-bottom: none; border-radius: 4px 4px 0 0;
  box-shadow: 26px 0 0 -1px var(--panel), 26px 0 0 0 var(--line); 
}
.card-border-red { border-left: 5px solid var(--lego-red); }
.card-border-blue { border-left: 5px solid var(--lego-blue); }
.card-border-yellow { border-left: 5px solid var(--lego-yellow); }
.card-border-green { border-left: 5px solid var(--lego-green); }

.title { color: #fff; font-weight: 800; font-size: 1.15rem; margin-bottom: 4px; }
.subtitle { color: var(--lego-yellow); font-size: 0.9rem; font-weight: 600; }
.date { color: var(--dim); font-size: 0.85rem; float: right; }
.desc { color: var(--text); font-size: 0.95rem; line-height: 1.6; margin-top: 12px; }
.tech-stack { margin-top: 15px; font-size: 0.8rem; color: var(--lego-cyan); }

/* Skill Tags */
.skill-tag {
  display: inline-block; background: #1C232F; border: 1px solid var(--line);
  padding: 6px 12px; border-radius: 6px; margin: 4px; font-size: 0.85rem;
  color: var(--dim); transition: all 0.2s;
}
.skill-tag:hover { border-color: var(--lego-yellow); color: var(--lego-yellow); }

/* Buttons */
.stLinkButton>a {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 0.85rem !important; font-weight: 600 !important;
  background: var(--panel) !important; color: #fff !important;
  border: 1px solid var(--line) !important; border-radius: 6px !important;
  transition: all 0.2s ease !important;
}
.stLinkButton>a:hover {
  border-color: var(--lego-cyan) !important;
  color: var(--lego-cyan) !important;
  box-shadow: 0 0 10px rgba(0, 163, 163, 0.2) !important;
}
#MainMenu, footer, header { visibility: hidden; }
</style>
"""
st.markdown(CSS, unsafe_allow_html=True)

def b64(p):
    p = Path(p)
    return base64.b64encode(p.read_bytes()).decode() if p.exists() else ""

def section_header(title, colors="red,blue,yellow"):
    studs = "".join([f'<div class="stud {c}"></div>' for c in colors.split(",")])
    st.markdown(f'<div class="sec-head slide-anim"><div class="studs-row">{studs}</div><h2>{title}</h2></div>', unsafe_allow_html=True)

# ---------------------------------------------------------------
# HERO SECTION
# ---------------------------------------------------------------
left, right = st.columns([1.6, 1], gap="large")

with left:
    st.markdown("""
    <div class="term float-anim slide-anim">
      <div><span class="prompt">alishbah@cs-node:~$</span> <span class="path">./run_portfolio.sh --verbose</span></div>
      <div style="margin: 25px 0 15px 0;">
        <h1>Alishbah Bashir</h1>
        <div style="font-size: 1.2rem; color: var(--lego-yellow); font-weight: 600;">GenAI Engineer & CS Researcher</div>
      </div>
      <div style="color: var(--dim); line-height: 1.8; font-size: 1rem;">
        <div>> Specializing in Agentic AI, Advanced RAG, and LLM/VLM Fine-Tuning.</div>
        <div>> Architecting scalable, multi-agent systems brick by brick.</div>
      </div>
      <div style="margin-top: 30px; color: var(--lego-cyan); font-weight: 600; border-left: 3px solid var(--lego-cyan); padding-left: 10px;">
        STATUS: <span class="blink-anim">Awaiting deployment...</span>
      </div>
    </div>
    """, unsafe_allow_html=True)

with right:
    photo = b64("assets/profile.jpg")
    img = f'<img src="data:image/jpeg;base64,{photo}" style="width:100%; border-radius:6px; margin-bottom:15px; border: 2px solid var(--line);">' if photo else ''
    st.markdown(f"""
    <div class="term slide-anim delay-2" style="animation-delay: 0.2s; text-align:center; padding: 20px;">
      {img}
      <div style="font-size:1.1rem; font-weight:800; color:#fff;">PIEAS University</div>
      <div style="color:var(--dim); font-size:0.9rem; margin-bottom:15px;">BS Computer Science (3.92/4.00 CGPA)</div>
      <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
        <span style="background:var(--lego-red); color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">Top 3 Rank</span>
        <span style="background:var(--lego-blue); color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">8x Scholar</span>
        <span style="background:var(--lego-green); color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">94% Research</span>
      </div>
    </div>
    """, unsafe_allow_html=True)

c1, c2, c3, c4 = st.columns(4)
c1.link_button("💻 GitHub", "https://github.com/alishbahbashir2004-blip?tab=repositories", use_container_width=True)
c2.link_button("💼 LinkedIn", "https://www.linkedin.com/in/alishbahbashir/", use_container_width=True)
c3.link_button("📄 arXiv", "https://arxiv.org/abs/2602.11836", use_container_width=True)
c4.link_button("✉️ Email", "mailto:alishbahbashir2004@gmail.com", use_container_width=True)


# ---------------------------------------------------------------
# INTERNATIONAL EXPERIENCES
# ---------------------------------------------------------------
section_header("International Experiences", "blue,green,red")

intl_data = [
    ("Fully Funded Mitacs Globalink Research Internship", "University of Alberta (UofA), Canada", "2026", 
     "Awarded the prestigious Mitacs Globalink Research Internship. Selected to work on cutting-edge AI research in Canada.",
     "https://drive.google.com/file/d/1mcThpAhvXNP36DNmvxD9fHbX7URz7C5M/view?usp=drive_link", "card-border-red"),
    ("Fully Funded EE Summer Camp 2025", "KAIST (South Korea's Leading University)", "Aug 2025",
     "Accepted into KAIST's fully funded EE Summer Camp. Selected for the Nanoscale Advanced Integrated Systems Lab Visit.",
     "https://drive.google.com/file/d/1jdeNHuFSJjU2Pge2MuudXTGv9MGMULDZ/view?usp=drive_link", "card-border-blue"),
    ("Workshop on Distributed Training in the Era of Large Models", "KAUST (Saudi Arabia)", "Nov 2025",
     "Attended an exclusive workshop on distributed training paradigms for LLMs by KAUST.",
     "https://www.linkedin.com/posts/alishbahbashir_pieas-kaust-distributedtraining-activity-7403712053850390529-WkIs?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADXpdekBrWQLiXzjOlsvJoFvj8qBppe626U&utm_campaign=copy_link", "card-border-green"),
]

for title, org, date, desc, link, color in intl_data:
    st.markdown(f"""
    <div class="lego-card {color} slide-anim">
      <span class="date">{date}</span>
      <div class="title">{title}</div>
      <div class="subtitle">{org}</div>
      <div class="desc">{desc}</div>
    </div>
    """, unsafe_allow_html=True)
    st.link_button("View Proof / Link →", link)

# ---------------------------------------------------------------
# EXPERIENCE
# ---------------------------------------------------------------
section_header("Professional Experience", "red,yellow,blue")

exp_data = [
    ("Mitacs GRI Research Intern", "University of Alberta (Canada)", "Jul 2026 - Ongoing", "card-border-red",
     "Developed CH₄, CO, SO₂, CO₂, and NO₂ agents for a modular geospatial platform integrating Sentinel-5P/TROPOMI data in Google Earth Engine and NASA's GHG Center to detect localized emission anomalies. Wrote and published an application paper on the system. Earned direct commendation from Professor Bo Zhang for delivering high-quality agents and the paper in a remarkably short timeframe."),
    ("NLP Research Intern", "PIEAS University (Dr. Ijaz Hussain)", "Sep 2025 - Jun 2026", "card-border-blue",
     "Conducted research in RAG, efficient retrieval & recommendation architectures, LLM/VLM fine-tuning, and Agentic AI frameworks."),
    ("Generative AI Intern", "National Telecommunication Corporation (NTC)", "Jul - Aug 2025", "card-border-yellow",
     "Built GenAI applications for NTC. Engaged with IT department to assess requirements and deployed hybrid retrieval architecture. Presented trade-off analyses of RAG configurations."),
    ("Freelancing", "Upwork (Remote)", "Sep 2024 - May 2025", "card-border-green",
     "Remote contract engagements in GenAI and software development."),
    ("Research & Operations Manager", "Chalta Karobar (UAE & PK)", "Aug 2023 - Jun 2024", "card-border-red",
     "Conducted market research, managed website backend and social media, and interfaced directly with clients for business matchmaking."),
]

for title, org, date, color, desc in exp_data:
    st.markdown(f"""
    <div class="lego-card {color} slide-anim">
      <span class="date">{date}</span>
      <div class="title">{title}</div>
      <div class="subtitle">{org}</div>
      <div class="desc">{desc}</div>
    </div>
    """, unsafe_allow_html=True)


# ---------------------------------------------------------------
# TECHNICAL SKILLS
# ---------------------------------------------------------------
section_header("Technical Arsenal", "green,red,yellow")

st.markdown(f"""
<div class="lego-card card-border-blue slide-anim">
  <div style="margin-bottom: 10px;"><b style="color:var(--lego-yellow);">Agentic AI Frameworks:</b> <br>
  <span class="skill-tag">LangGraph</span><span class="skill-tag">LangChain</span><span class="skill-tag">LangSmith</span><span class="skill-tag">Workflows (Seq/Par/Cond)</span><span class="skill-tag">HITL</span><span class="skill-tag">Observability</span><span class="skill-tag">Memory (STM/LTM)</span><span class="skill-tag">Subgraphs</span><span class="skill-tag">Multi-Agent Orchestration</span><span class="skill-tag">MCP Clients</span></div>

  <div style="margin-bottom: 10px;"><b style="color:var(--lego-cyan);">Advanced RAG:</b> <br>
  <span class="skill-tag">Self-RAG</span><span class="skill-tag">Corrective RAG (CRAG)</span><span class="skill-tag">Relevance Grading</span><span class="skill-tag">Query Rewriting</span><span class="skill-tag">Chroma / FAISS / Pinecone</span><span class="skill-tag">MMR / Multi-Query</span><span class="skill-tag">Ensemble Retrieval</span></div>

  <div style="margin-bottom: 10px;"><b style="color:var(--lego-green);">Programming & Tools:</b> <br>
  <span class="skill-tag">Python</span><span class="skill-tag">FastAPI</span><span class="skill-tag">Docker</span><span class="skill-tag">SQL</span><span class="skill-tag">Streamlit</span><span class="skill-tag">PyTorch</span><span class="skill-tag">ASP.NET</span></div>

  <div><b style="color:var(--lego-red);">MCP (Model Context Protocol):</b> <br>
  <span class="skill-tag">Client/Server Config</span><span class="skill-tag">Multi-server Orchestration</span><span class="skill-tag">Tool/Resource Def</span><span class="skill-tag">Local/Remote Servers</span></div>
</div>
""", unsafe_allow_html=True)


# ---------------------------------------------------------------
# PROJECTS (Detailed)
# ---------------------------------------------------------------
section_header("AI Projects & Systems", "blue,red,green")

projects = [
    ("Pantheon — Autonomous Multi-Agent Content Gen", "card-border-blue", 
     "Architected an end-to-end autonomous content generation pipeline using a distributed multi-agent orchestration framework. Implemented specialized agentic nodes: Router (open/closed-book decision), Research (web evidence synthesis), Orchestrator (outline planning), parallel Worker agents (fan-out enabling horizontal scalability), and Reducer subgraph (content merging + automated image generation). Built interactive frontend with live pipeline visualization.",
     "LangGraph, LangChain, Groq, Gemini, Tavily, FastAPI, React, Pydantic",
     "https://github.com/alishbahbashir2004-blip/Multi-Agent-Blog-Writing-Pipeline-LangGraph-FastAPI-React-"),
     
    ("Cogito — Self-RAG Framework", "card-border-yellow", 
     "Implemented Self-RAG architecture from scratch with self-reflective agentic nodes: retrieval decision router, relevance filtering, grounded generation, hallucination detection guardrails (is sup), answer revision loop, utility assessment (is use), and semantic query rewriting. Applied MMR-based vector search optimization and visualized real-time execution paths with grounding scores.",
     "LangGraph, LangChain, Groq, ChromaDB, MMR, HuggingFace, Streamlit, Graphviz",
     "https://github.com/alishbahbashir2004-blip/SelfRAG-LangGraph-Reflective-RAG"),
     
    ("Verity — Corrective RAG (CRAG)", "card-border-green", 
     "Engineered CRAG architecture with an LLM-based automated evaluation framework for retrieval quality grading (correct/incorrect/ambiguous). Pipeline includes MMR-based semantic retrieval, query rewriting for knowledge gaps, web search fallback integration, sentence-level context refinement, and grounded generation.",
     "LangGraph, LangChain, Groq (Llama-3), ChromaDB, HuggingFace, Tavily, Streamlit, Pydantic",
     "https://github.com/alishbahbashir2004-blip/CRAG-LangGraph-Corrective-RAG"),
     
    ("Full Stack RAG Chatbot (NTC Enterprise)", "card-border-red", 
     "Developed and deployed a full-stack RAG-based chatbot for NTC policy documents. Evaluated multiple retrieval strategies (BM25, dense, MMR, contextual compression, multi-query) and established that a weighted hybrid ensemble provides the optimal accuracy-latency balance. Deployed FastAPI backend with CORS and interactive frontend on NTC servers.",
     "Python, FastAPI, LangChain, Google Gemini, OpenAI, ChromaDB, BM25, HTML/CSS/JS",
     "https://github.com/alishbahbashir2004-blip/NTC_RAG_Chatbot"),
     
    ("Text-to-SQL Generation Chatbot", "card-border-blue", 
     "Researched and developed a text-to-SQL chatbot integrating schema-aware prompting with LLMs to generate and execute queries on live MySQL databases. Achieved a RAGAS score of 3.8; currently expanding the project to handle multi-database querying.",
     "LangChain, Gemini 2.5 Pro, MySQL, SQLAlchemy, RAGAS, Groq, HuggingFace",
     "https://github.com/alishbahbashir2004-blip/Text_to_SQL_Query_Generation"),

    ("EEG-Based Emotion Recognition using LSTM", "card-border-yellow",
     "Predicted emotional states from EEG signals by benchmarking five deep learning architectures (RNN, GRU, LSTM, MLP, CNN). The LSTM model achieved the highest test accuracy of 95.94%.",
     "Python, TensorFlow, Keras, Scikit-learn, NumPy, Pandas",
     "https://github.com/alishbahbashir2004-blip/EEG_Based_Emotion_Recognition"),
     
    ("Multi-source Agentic RAG", "card-border-green",
     "Developed a multi-source agentic RAG chatbot using zero-shot ReAct prompting with Gemini to autonomously orchestrate Wikipedia, Arxiv, and a custom Chroma-based retriever for accurate multi-domain QnA.",
     "LangChain, Gemini 2.5 Pro, Wikipedia API, Arxiv API, Chroma, Streamlit",
     ""),
     
    ("Currency Conversion Agent", "card-border-red",
     "Built an AI-powered currency converter using the ExchangeRate API. Focused on the reliability of LLM-based agents in parsing user intent, formulating precise API calls, and interpreting structured JSON data.",
     "Python, LangChain, Gemini, REST API",
     ""),
]

for name, color, desc, tech, url in projects:
    st.markdown(f"""
    <div class="lego-card {color} slide-anim">
      <div class="title">{name}</div>
      <div class="desc">{desc}</div>
      <div class="tech-stack"><b style="color:#fff;">Tech:</b> {tech}</div>
    </div>
    """, unsafe_allow_html=True)
    if url:
        st.link_button("Open Repo →", url)

# ---------------------------------------------------------------
# RESEARCH & PUBLICATIONS
# ---------------------------------------------------------------
section_header("Research Work", "red,yellow,blue")

st.markdown("""
<div class="lego-card card-border-red slide-anim">
  <div class="title">ULTRA — Transformer-based Recommendation for Low-Resource Urdu</div>
  <div class="desc">
    Proposed ULTRA, a novel dual-path recommendation framework for the Urdu language. 
    Achieved <b>94% precision</b> on Urdu news datasets. Currently under review for publication.
  </div>
</div>
""", unsafe_allow_html=True)
st.link_button("Read Paper on arXiv →", "https://arxiv.org/abs/2602.11836")


# ---------------------------------------------------------------
# AWARDS & SCHOLARSHIPS (Exhaustive List with Links)
# ---------------------------------------------------------------
section_header("Honors & Scholarships", "yellow,green,red")

awards = [
    ("Invitation to Prime Minister's House (Youm-e-Taleem-o-Taraqi)", "Recognized as one of the most talented students in Pakistan for outstanding academic excellence.", "Feb 2025", "https://drive.google.com/file/d/1oqTRdQwtYcuO3APrQXKuMmi2r8gCEVe3/view"),
    ("Outstanding Performance: Top 10 Position Holders Nationwide (ICAP)", "Awarded by FBISE for securing 6th position overall nationwide at the HSSC level.", "Mar 2023", "https://drive.google.com/file/d/1IzfN6oUrNHyKZw7XYnWjNUYHa8Y3V6cE/view?usp=drive_link"),
    ("Merit Scholarship by FBISE (4 Consecutive Years)", "For securing 6th position nationwide at the HSSC level.", "2022", "https://drive.google.com/file/d/1CwealxmVOt-ptB8w7rfD8RSgqBzP4yEX/view?usp=drive_link"),
    ("3rd Merit Position in PIEAS Entrance Exam", "Secured 3rd position across all departments for undergraduate admissions.", "2022", "https://drive.google.com/file/d/1w0OeYpOXQlex4fVZnpqTQgBRYdS7Of1o/view?usp=drive_link"),
    ("Merit Scholarship by STEP (4 Consecutive Years)", "Awarded for being among the top 25 scorers in the ECAT exam.", "2022", "https://drive.google.com/file/d/13g9EUOhLJpXeDQ8HLfmpMNTDnsfYcRpJ/view?usp=drive_link"),
    ("100% Merit Scholarship by STEP (HSSC-I)", "Awarded based on outstanding HSSC-I results (506/520).", "2022", "https://drive.google.com/file/d/1l_FqA9OgCJnZo7LgqHBZrcsYWxyP3R5O/view?usp=drive_link"),
    ("100% Merit Scholarship by STEP (SSAT)", "Awarded for securing 1st Position in the SSAT exam.", "2022", ""),
    ("100% Merit Scholarship by PGC", "Awarded based on SSC results (1083/1100, 98.45%).", "2020", "https://drive.google.com/file/d/1U1gUlHxEBqtTldefYX8WJfTgCKzUTq1I/view?usp=drive_link"),
    ("100% Merit Scholarship by Spectrum Science Academy", "Awarded based on 9th class results (496/510 marks).", "2019-2020", "https://drive.google.com/file/d/1X_bx_Ff0uhnusJwPlHoIJ_BHvG2p7nss/view?usp=sharing"),
]

for title, desc, date, link in awards:
    st.markdown(f"""
    <div class="lego-card card-border-yellow slide-anim" style="padding: 15px; margin-bottom: 12px;">
      <span class="date">{date}</span>
      <div style="color:#fff; font-weight:800; font-size:1rem;">🏆 {title}</div>
      <div style="color:var(--dim); font-size:0.85rem; margin-top:4px;">{desc}</div>
    </div>
    """, unsafe_allow_html=True)
    if link:
        st.link_button("View Certificate →", link)


# ---------------------------------------------------------------
# EXTRACURRICULAR
# ---------------------------------------------------------------
section_header("Extracurricular & Leadership", "green,blue,yellow")

extra = [
    ("Ambassador of Artificial Intelligence Community of Pakistan (AICP)", "at PIEAS University", "https://drive.google.com/file/d/1mZbRsVqnw7YfRgak5_lCBRr7aTpqtgBS/view?usp=drive_link"),
    ("Runner Up: Computing Quiz Competition (AirTech'24)", "Air University Islamabad", "https://drive.google.com/file/d/1R7beJdi0nQZUeE0v9PhNiV32WX--lPeb/view?usp=drive_link"),
    ("Runner Up: English Declamation Contest", "National Centre of GIS & Space Applications IST (Theme: Women in Space)", "https://drive.google.com/file/d/1gWSMi7JzV4Deew2bO422e65AjbtPfthC/view?usp=drive_link"),
    ("Speaker: 2-day SEO Workshop", "Digital Mastery Academy", "https://drive.google.com/file/d/1e_q09Z1xskY7WPRYPj7_DtxfYovbyrha/view?usp=drive_link"),
    ("MOS Word Associate Certification", "Microsoft", "https://drive.google.com/file/d/1bqjs0CvUN0xpcrJlFhY97PpSiEtlFqd1/view?usp=drive_link"),
]

for title, sub, link in extra:
    st.markdown(f"""
    <div class="lego-card card-border-green slide-anim" style="padding: 15px; margin-bottom: 12px;">
      <div style="color:#fff; font-weight:800; font-size:1rem;">🎯 {title}</div>
      <div style="color:var(--lego-cyan); font-size:0.9rem; margin-top:4px;">{sub}</div>
    </div>
    """, unsafe_allow_html=True)
    if link:
        st.link_button("View Proof →", link)

# ---------------------------------------------------------------
# FOOTER
# ---------------------------------------------------------------
st.markdown("""
<div style="text-align:center; color:var(--dim); font-size:0.85rem; margin-top:60px; padding-bottom:40px; border-top: 1px solid var(--line); padding-top: 20px;">
  <div style="margin-bottom: 10px;">
    <span style="color:var(--lego-red);">■</span>
    <span style="color:var(--lego-yellow);">■</span>
    <span style="color:var(--lego-blue);">■</span>
    <span style="color:var(--lego-green);">■</span>
  </div>
  // Designed & Engineered by Alishbah Bashir<br>
  // Built brick by brick.
</div>
""", unsafe_allow_html=True)