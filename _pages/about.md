---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<style>
  /* --- 全局与重置样式 --- */
  :root {
    --primary-text: #111827;
    --secondary-text: #4b5563;
    --accent-color: #be185d;
    --accent-bg: #fdf2f8;
    --border-color: #f0f0f0;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--secondary-text);
  }

  h1, h2, h3 {
    color: var(--primary-text);
    font-weight: 700;
  }

  /* 现代化的小节标题 */
  .section-title {
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
    margin-top: 48px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* --- 现代感列表 (同行紧凑排版) --- */
  .modern-list {
    list-style: disc; 
    padding-left: 20px;
    margin: 0;
  }

  .modern-list li {
    margin-bottom: 12px;
    line-height: 1.6;
    color: var(--secondary-text);
  }

  .modern-list-date {
    display: inline-block;
    font-weight: 600;
    color: var(--accent-color);
    font-size: 0.95rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    margin-right: 8px; 
  }

  .modern-list-content {
    display: inline; 
  }

  .modern-list-content strong {
    color: var(--primary-text);
  }

  /* --- 经历与教育专属卡片 --- */
  .exp-card {
    background: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 16px;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .exp-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
    border-color: #e5e7eb;
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .exp-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--primary-text);
  }

  .exp-date {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.85rem;
    color: var(--accent-color);
    background: var(--accent-bg);
    padding: 4px 12px;
    border-radius: 20px;
    font-weight: 600;
    white-space: nowrap;
  }

  .exp-org {
    font-size: 1rem;
    font-weight: 600;
    color: var(--secondary-text);
  }

  .exp-desc {
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.5;
    margin-top: 4px;
  }

  @media (max-width: 600px) {
    .exp-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  /* --- 迷你卡片 (Working Papers) --- */
  .mini-card {
    background: #ffffff;
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--border-color);
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 16px;
    transition: all 0.2s ease;
  }

  .mini-card:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border-left-color: var(--accent-color);
  }

  .mini-card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-text);
    margin-bottom: 6px;
  }

  .mini-card-authors {
    font-size: 0.95rem;
    color: var(--secondary-text);
    margin-bottom: 6px;
  }

  .mini-card-authors strong {
    color: var(--primary-text);
  }

  .mini-card-status {
    font-size: 0.85rem;
    font-style: italic;
    color: #6b7280;
  }

  /* --- 已发表论文卡片样式 --- */
  .paper-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 16px; 
    padding: 24px;
    margin-bottom: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    gap: 32px; 
  }

  .paper-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
    border-color: #e5e7eb;
  }

  .paper-image-container {
    flex: 0 0 260px; 
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #f3f4f6;
    background: #fafafa;
  }

  .paper-image-container img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  .paper-card:hover .paper-image-container img {
    transform: scale(1.02);
  }

  .paper-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .paper-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-text); 
    line-height: 1.4;
    letter-spacing: -0.01em;
    transition: color 0.2s ease;
  }

  .paper-title:hover {
    color: var(--secondary-text); 
  }

  .paper-authors {
    font-size: 1rem;
    color: var(--secondary-text);
    line-height: 1.6;
  }

  .paper-authors strong {
    color: var(--primary-text);
    font-weight: 600;
  }

  .paper-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 2px;
  }

  .conf-badge {
    background: var(--accent-bg); 
    color: var(--accent-color);      
    padding: 4px 10px;
    border-radius: 6px; 
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .paper-status {
    font-size: 0.95rem;
    color: #6b7280;
    font-weight: 500;
  }

  .paper-links {
    margin-top: 8px;
    display: flex;
    gap: 12px;
  }

  .paper-btn {
    display: inline-flex;
    align-items: center;
    padding: 6px 18px;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    background: #ffffff;
    transition: all 0.2s ease;
    gap: 6px; 
  }

  .paper-btn:hover {
    background: var(--accent-bg);
    border-color: #fbcfe8;
    color: var(--accent-color);
  }

  /* 移动端适配 */
  @media (max-width: 768px) {
    .paper-card {
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      gap: 20px;
    }
    .paper-image-container {
      flex: 100%;
      width: 100%;
      max-width: 100%;
    }
  }
</style>

Here is **Peng Lai (赖鹏)**. I am currently a second-year **M.Phil. student** in the Department of Statistics and Data Science at **Southern University of Science and Technology**, enrolled in an integrated M.Phil.–Ph.D. program (Mathematics → Computer Science), and will formally continue as a Ph.D. student under the supervision of Prof. [Guanhua Chen](https://ghchen.me/) starting in Fall 2026. I am currently doing a research internship at **Alibaba Cloud**.

My current research focuses on **LLM-as-a-judge**, **reward model**, and **reinforcement learning**. I aim to enhance model evaluation capabilities, enabling models to understand their own limitations and progressively improve—advancing the paradigm of **self-reflective and continuously improving language models**.

I usually enjoy singing, working out, and competitive gaming. I reached **Master tier** in League of Legends (Season 14), achieved **Challenger** rank in League of Legends: Wild Rift, and attained **Diamond** rank in Valorant.

I am interested in popular and exciting research directions, and I am willing to collaborate with outstanding researchers. You are welcome to reach out to me anytime to discuss related research~

<h1 class="section-title">🔥 News</h1>
<ul class="modern-list">
  <li>
    <span class="modern-list-date">2026.01</span>
    <span class="modern-list-content">Two papers (<em>AlignScal</em> and <em>UniRRM</em>) were submitted to <strong>ICML 2026</strong> and are currently under review.</span>
  </li>
  <li>
    <span class="modern-list-date">2026.01</span>
    <span class="modern-list-content">🎉🎉 Two papers — <em>“BiasScope: Towards Automated Detection of Bias in LLM-as-a-Judge Evaluation”</em> and <em>“Anchored Supervised Fine-Tuning”</em> — were accepted to <strong>ICLR 2026 (Poster)</strong>.</span>
  </li>
  <li>
    <span class="modern-list-date">2025.09</span>
    <span class="modern-list-content">🎉🎉 Our paper <em>"Beyond the Surface: Enhancing LLM-as-a-Judge Alignment with Human via Internal Representations"</em> was accepted to <strong>NeurIPS 2025 (Poster)</strong>.</span>
  </li>
</ul>

<h1 class="section-title">📝 Publications</h1>
<p style="font-size: 0.9rem; color: #6b7280; margin-bottom: 24px;">(<sup>*</sup> indicates equal contribution.)</p>

<div class="paper-card">
  <div class="paper-image-container">
    <img src="images/biasscope_fig.png" alt="BiasScope Framework Figure">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      BiasScope: Towards Automated Detection of Bias in LLM-as-a-Judge Evaluation
    </div>
    <div class="paper-authors">
      <strong>Peng Lai<sup>*</sup></strong>, Zhihao Ou<sup>*</sup>, Yong Wang, Longyue Wang, Jian Yang, Yun Chen, Guanhua Chen
    </div>
    <div class="paper-meta">
      <span class="conf-badge">ICLR 2026</span>
      <span class="paper-status">Accepted (Poster)</span>
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2602.09383v1" class="paper-btn" target="_blank">📄 Paper</a>
      <a href="https://github.com/sustech-nlp/BiasScope" class="paper-btn" target="_blank">💻 Code</a>
    </div>
  </div>
</div>

<div class="paper-card">
  <div class="paper-image-container">
    <img src="images/asft.png" alt="ASFT Figure">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      Anchored Supervised Fine-Tuning
    </div>
    <div class="paper-authors">
      He Zhu<sup>*</sup>, Junyou Su<sup>*</sup>, <strong>Peng Lai<sup>*</sup></strong>, Ren Ma, Wenjia Zhang, Linyi Yang, Guanhua Chen
    </div>
    <div class="paper-meta">
      <span class="conf-badge">ICLR 2026</span>
      <span class="paper-status">Accepted (Poster)</span>
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2509.23753" class="paper-btn" target="_blank">📄 Paper</a>
      <a href="https://github.com/zhuchichi56/ASFT" class="paper-btn" target="_blank">💻 Code</a>
    </div>
  </div>
</div>

<div class="paper-card">
  <div class="paper-image-container">
    <img src="images/lager_fig.png" alt="LAGER Framework Figure">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      Beyond the Surface: Enhancing LLM-as-a-Judge Alignment with Human via Internal Representations
    </div>
    <div class="paper-authors">
      <strong>Peng Lai</strong>, Jianjie Zheng, Sijie Cheng, Yun Chen, Peng Li, Yang Liu, Guanhua Chen
    </div>
    <div class="paper-meta">
      <span class="conf-badge">NeurIPS 2025</span>
      <span class="paper-status">Accepted (Poster)</span>
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2508.03550" class="paper-btn" target="_blank">📄 Paper</a>
      <a href="https://github.com/sustech-nlp/LAGER" class="paper-btn" target="_blank">💻 Code</a>
    </div>
  </div>
</div>

<h2 class="section-title" style="font-size: 1.5rem; border: none; margin-top: 24px;">Working Papers</h2>

<div class="mini-card">
  <div class="mini-card-title">UniRRM: Unified Reasoning Reward Models Across Languages and Evaluation Paradigms</div>
  <div class="mini-card-authors"><strong>Peng Lai</strong>, Yichao Du, Junchao Wu, Weibo Gao, Linan Yue, Longyue Wang, Weihua Luo, Derek F. Wong, Guanhua Chen</div>
  <div class="mini-card-status">Under review at ICML 2026</div>
</div>

<div class="mini-card">
  <div class="mini-card-title">AlignScal: Enhancing Preference Alignment via Data Selection Using Model Internal Signals</div>
  <div class="mini-card-authors"><strong>Peng Lai<sup>*</sup></strong>, He Zhu<sup>*</sup>, Zhiwen Ruan, Dongdong Zhang, Yun Chen, Peng Li, Furu Wei, Yang Liu, Guanhua Chen</div>
  <div class="mini-card-status">Under review at ICML 2026</div>
</div>

<div class="mini-card">
  <div class="mini-card-title">StatABench: Dataset and Framework for Evaluating Statistical Analysis Capabilities of LLMs</div>
  <div class="mini-card-authors">Youxin Zhu, Yixuan Ding, <strong>Peng Lai</strong>, Longyue Wang, Bingyi Jing, Guanhua Chen</div>
  <div class="mini-card-status"> </div>
</div>
</ul>
<h1 class="section-title">💻 Internships</h1>

<div class="exp-card">
  <div class="exp-header">
    <div class="exp-title">Research Intern</div>
    <div class="exp-date">2026.01 – Present</div>
  </div>
  <div class="exp-org">Alibaba Cloud</div>
</div>

<div class="exp-card">
  <div class="exp-header">
    <div class="exp-title">Research Intern</div>
    <div class="exp-date">2025.10 – 2026.01</div>
  </div>
  <div class="exp-org">Alibaba International Digital Commerce</div>
</div>

<h1 class="section-title">📖 Educations</h1>

<div class="exp-card">
  <div class="exp-header">
    <div class="exp-title">Integrated M.Phil.–Ph.D. program</div>
    <div class="exp-date">2024 – Present</div>
  </div>
  <div class="exp-org">Southern University of Science and Technology</div>
  <div class="exp-desc">Department of Statistics and Data Science (Mathematics → Computer Science). Ph.D. student status from Fall 2026.</div>
</div>

<div class="exp-card">
  <div class="exp-header">
    <div class="exp-title">B.Sc. in Statistics</div>
    <div class="exp-date">2020 – 2024</div>
  </div>
  <div class="exp-org">Sichuan Normal University</div>
  <div class="exp-desc">School of Mathematical Sciences</div>
</div>


<h1 class="section-title">🎖 Honors and Awards</h1>
<ul class="modern-list">
  <li>
    <span class="modern-list-date">2025</span>
    <span class="modern-list-content">Graduate Academic Scholarship (Special Class), <strong>Southern University of Science and Technology</strong> (Top 20%)</span>
  </li>
  <li>
    <span class="modern-list-date">2022</span>
    <span class="modern-list-content">Sichuan Provincial First Prize, National College Student Market Research and Analysis Competition (Team Leader)</span>
  </li>
  <li>
    <span class="modern-list-date">2021</span>
    <span class="modern-list-content">Sichuan Provincial First Prize, National College Student Mathematical Modeling Competition (Team Leader)</span>
  </li>
</ul>


<h1 class="section-title">📚 Teaching Experience</h1>
<p style="color: #4b5563; margin-bottom: 20px;">Served as a Teaching Assistant at <strong>Southern University of Science and Technology</strong>.</p>
<ul class="modern-list">
  <li>
    <span class="modern-list-date">Fall 2025</span>
    <span class="modern-list-content">Advanced Natural Language Processing (Graduate)</span>
  </li>
  <li>
    <span class="modern-list-date">Spring 2025</span>
    <span class="modern-list-content">Probability Theory and Mathematical Statistics (Undergraduate)</span>
  </li>
  <li>
    <span class="modern-list-date">Fall 2024</span>
    <span class="modern-list-content">Engineering Probability and Statistics (Undergraduate)</span>
  </li>
</ul>

<h1 class="section-title">🤝 Academic Services</h1>
<ul class="modern-list">
  <li>
    <span class="modern-list-date">Reviewer</span>
    <span class="modern-list-content">NeurIPS 2026 (forthcoming)</span>
  </li>
  <li>
    <span class="modern-list-date">Reviewer</span>
    <span class="modern-list-content">ICLR 2026 Workshop LLA</span>
  </li>
  <li>
    <span class="modern-list-date">Reviewer</span>
    <span class="modern-list-content">ACL ARR 2025 October</span>
  </li>
</ul>
