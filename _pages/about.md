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

Here is **Peng Lai (赖鹏)**. I am currently a second-year **M.Phil. student** in the Department of Statistics and Data Science at **Southern University of Science and Technology**, enrolled in an integrated M.Phil.–Ph.D. program (Mathematics → Computer Science), and will formally continue as a Ph.D. student under the supervision of Prof. [Guanhua Chen](https://ghchen.me/) starting in Fall 2026. I am currently doing a research internship at **Alibaba Cloud**.

My current research focuses on **LLM-as-a-judge**, **reward model**, and **reinforcement learning**. I aim to enhance model evaluation capabilities, enabling models to understand their own limitations and progressively improve—advancing the paradigm of **self-reflective and continuously improving language models**.

I usually enjoy singing, working out, and competitive gaming. I reached **Master tier** in League of Legends (Season 14), achieved **Challenger** rank in League of Legends: Wild Rift, and attained **Diamond** rank in Valorant.

I am interested in popular and exciting research directions, and I am willing to collaborate with outstanding researchers. You are welcome to reach out to me anytime to discuss related research~

# 🔥 News
- *2026.01*: Two papers (*AlignScal* and *UniRRM*) were submitted to **ICML 2026** and are currently under review.
- *2026.01*: 🎉🎉 Two papers — *“BiasScope: Towards Automated Detection of Bias in LLM-as-a-Judge Evaluation”* and *“Anchored Supervised Fine-Tuning”* — were accepted to **ICLR 2026 (Poster)**.  
- *2025.09*: 🎉🎉 Our paper *"Beyond the Surface: Enhancing LLM-as-a-Judge Alignment with Human via Internal Representations"* was accepted to **NeurIPS 2025 (Poster)**.
  
# 📝 Publications 

(	<sup>*</sup> indicates equal contribution.)

<style>
    /* 卡片主容器：柔和的边框和丝滑的动画 */
    .paper-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #ffffff;
      border: 1px solid #f0f0f0;
      border-radius: 16px; 
      padding: 24px;
      margin-bottom: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
      gap: 32px; 
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
  
    /* 悬停效果：弥散阴影与上浮 */
    .paper-card:hover {
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
      transform: translateY(-3px);
      border-color: #e5e7eb;
    }
  
    /* 图片容器 */
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
  
    /* 文本区 */
    .paper-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  
    /* 标题：深空灰 */
    .paper-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #111827; 
      line-height: 1.4;
      letter-spacing: -0.01em;
      transition: color 0.2s ease;
    }
  
    .paper-title:hover {
      color: #4b5563; 
    }
  
    /* 作者列表 */
    .paper-authors {
      font-size: 1rem;
      color: #4b5563;
      line-height: 1.6;
    }
  
    .paper-authors strong {
      color: #111827;
      font-weight: 600;
    }
  
    /* 元数据：徽章与状态 */
    .paper-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }
  
    /* 统一的徽章设计：高级莫兰迪粉色系 */
    .conf-badge {
      background: #fdf2f8; /* 浅柔粉色背景 */
      color: #be185d;      /* 深玫瑰粉文字 */
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
  
    /* 按钮区域 */
    .paper-links {
      margin-top: 8px;
      display: flex;
      gap: 12px;
    }
  
    /* 按钮优化 */
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
      background: #fdf2f8; /* 按钮悬停时也呼应一点极淡的粉色 */
      border-color: #fbcfe8;
      color: #be185d;
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


## Working Papers

- **UniRRM: Unified Reasoning Reward Models Across Languages and Evaluation Paradigms**
  - **Peng Lai**, Yichao Du, Junchao Wu, Weibo Gao, Linan Yue, Longyue Wang, Weihua Luo, Derek F. Wong, Guanhua Chen
  - *Under review at ICML 2026*
- **AlignScal: Enhancing Preference Alignment via Data Selection Using Model Internal Signals**
  - **Peng Lai<sup>*</sup>**, He Zhu<sup>*</sup>, Zhiwen Ruan, Dongdong Zhang, Yun Chen, Peng Li, Furu Wei, Yang Liu, Guanhua Chen
  - *Under review at ICML 2026*  

# 🎖 Honors and Awards
- *2025*: Graduate Academic Scholarship (Special Class), Southern University of Science and Technology (Top 20%)  
- *2022*: Sichuan Provincial First Prize, National College Student Market Research and Analysis Competition (Team Leader)  
- *2021*: Sichuan Provincial First Prize, National College Student Mathematical Modeling Competition (Team Leader)

# 💻 Internships
- *2026.01 – Present*: Research Intern, Alibaba Cloud
- *2025.10 – 2026.01*: Research Intern, Alibaba International Digital Commerce


# 📖 Educations
- *2024 – Present*: Integrated M.Phil.–Ph.D. program (Mathematics → Computer Science), Department of Statistics and Data Science, Southern University of Science and Technology (Ph.D. student status from Fall 2026).
- *2020 – 2024*: B.Sc. in Statistics, School of Mathematical Sciences, Sichuan Normal University

  
# 📚 Teaching Experience
served as a Teaching Assistant at **Southern University of Science and Technology**. 

- Advanced Natural Language Processing (Graduate), Fall 2025
- Probability Theory and Mathematical Statistics (Undergraduate), Spring 2025
- Engineering Probability and Statistics (Undergraduate), Fall 2024

# 🤝 Academic Services
- NeurIPS 2026 Reviewer (forthcoming)
- ICLR 2026 Workshop LLA Reviewer
- ACL ARR 2025 October Reviewer
