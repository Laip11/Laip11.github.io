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
    /* 卡片主容器：使用 Flexbox 实现图文并排排列，增加圆角和阴影 */
    .paper-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #ffffff;
      border: 1px solid #eaeaea;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
      gap: 28px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
  
    /* 鼠标悬停时的浮动和阴影加深效果 */
    .paper-card:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  
    /* 左侧图片容器设定固定宽度 */
    .paper-image-container {
      flex: 0 0 220px; 
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #f0f0f0;
    }
  
    .paper-image-container img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
    }
  
    /* 图片悬停时微微放大 */
    .paper-card:hover .paper-image-container img {
      transform: scale(1.03);
    }
  
    /* 右侧文本内容区 */
    .paper-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    /* 论文标题：学术蓝，加粗 */
    .paper-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a73e8; 
      text-decoration: none;
      line-height: 1.4;
    }
  
    .paper-title:hover {
      text-decoration: underline;
    }
  
    /* 作者列表：柔和的深灰色，你的名字会高亮显示为全黑 */
    .paper-authors {
      font-size: 1rem;
      color: #5f6368;
      line-height: 1.5;
    }
  
    .paper-authors strong {
      color: #202124;
    }
  
    /* 会议标签和状态信息 */
    .paper-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 4px;
    }
  
    /* 现代感的胶囊形会议徽章 */
    .conf-badge {
      background: #e8f0fe;
      color: #1967d2;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  
    .paper-status {
      font-size: 0.95rem;
      color: #5f6368;
    }
  
    /* 快捷按钮区域（如 PDF、代码库） */
    .paper-links {
      margin-top: 8px;
      display: flex;
      gap: 12px;
    }
  
    .paper-btn {
      display: inline-flex;
      align-items: center;
      padding: 6px 16px;
      border: 1px solid #dadce0;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #3c4043;
      text-decoration: none;
      transition: all 0.2s ease;
      background: #ffffff;
    }
  
    .paper-btn:hover {
      background: #f8f9fa;
      border-color: #bdc1c6;
      color: #202124;
    }
  
    /* 移动端适配：屏幕变窄时改为上下堆叠布局 */
    @media (max-width: 768px) {
      .paper-card {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 20px;
      }
      .paper-image-container {
        flex: 100%;
        width: 100%;
        max-width: 300px;
      }
    }
  </style>
  
  <div class="paper-card">
    <div class="paper-image-container">
      <img src="images/biasscope_fig.png" alt="BiasScope Framework Figure">
    </div>
    
    <div class="paper-content">
      <a href="https://arxiv.org/abs/2602.09383v1" class="paper-title" target="_blank">
        BiasScope: Towards Automated Detection of Bias in LLM-as-a-Judge Evaluation
      </a>
      
      <div class="paper-authors">
        <strong>Peng Lai<sup>*</sup></strong>, Zhihao Ou<sup>*</sup>, Yong Wang, Longyue Wang, Jian Yang, Yun Chen, Guanhua Chen
      </div>
      
      <div class="paper-meta">
        <span class="conf-badge">ICLR 2026</span>
        <span class="paper-status">Accepted (Poster)</span>
      </div>
      
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2602.09383v1" class="paper-btn" target="_blank">📄 arXiv</a>
        </div>
    </div>
  </div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/asft.png' alt="paper" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Anchored Supervised Fine-Tuning](https://arxiv.org/abs/2509.23753)

He Zhu<sup>*</sup>, Junyou Su<sup>*</sup>, **Peng Lai<sup>*</sup>**, Ren Ma, Wenjia Zhang, Linyi Yang, Guanhua Chen 

- Accepted to **ICLR 2026 (Poster)**. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/lager_fig.png' alt="paper" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Beyond the Surface: Enhancing LLM-as-a-Judge Alignment with Human via Internal Representations](https://arxiv.org/abs/2508.03550)

**Peng Lai**, Jianjie Zheng, Sijie Cheng, Yun Chen, Peng Li, Yang Liu, Guanhua Chen  

- Accepted to **NeurIPS 2025 (Poster)**. 
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
