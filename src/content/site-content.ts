import type { Locale, SiteContent } from './types';

const sharedProjects = {
  links: {
    pilotbench: 'https://arxiv.org/abs/2604.08987',
    procuraclaw: 'https://github.com/haotian-io/ProcuraClaw',
  },
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    nav: { home: 'Home', projects: 'Projects', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: 'Multimodal LLM Agents · AI for Software Engineering · NLP',
      interests: [
        'Multimodal LLM Agents',
        'AI for Software Engineering',
        'NLP',
      ],
      about:
        'I study multimodal LLM agents and their use in software engineering and NLP.',
    },
    labels: {
      education: 'Education',
      publications: 'Publications',
      selectedProjects: 'Selected Projects',
      experience: 'Experience',
      allProjects: 'Projects',
      viewProject: 'View',
    },
    publications: [
      {
        title:
          'PilotBench: A Benchmark for General Aviation Agents with Operational Constraints',
        venue: 'IJCNN 2026 · Accepted',
        role: 'Co-first author',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'Long-Horizon Memory Governance for LLM Agents',
        venue: 'Under review',
        role: 'First author',
      },
      {
        title:
          'LFUSE: Learned Evidence Fusion for Noisy Spoken and Image-Grounded Product Search',
        venue: 'Under review',
        role: 'Co-first author',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          'Co-developed a constraint-aware benchmark from 708 real trajectories, 34-channel telemetry, and nine flight phases.',
        result:
          'Contributed to evaluations of 41 models and analyses of precision–controllability and dynamic complexity.',
        status: 'Completed',
        href: sharedProjects.links.pilotbench,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary:
          'Developed a prototype memory-governance layer with append-only revisions, active-state semantics, risk gating, and governed forgetting.',
        result:
          'In controlled diagnostics, observed a 13.3-point GPT-4o gain in cross-turn decision consistency over flat memory.',
        status: 'Under review',
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          'Contributed to a deployed procurement-search system and its LFUSE retrieval layer, which fuses lexical and dense evidence for noisy typed, spoken, and image-grounded product requests.',
        result:
          'LFUSE improves MRR@10 over tuned convex fusion by 7.8% on average across three human-judged Chinese domains, with 80–100× lower fusion-stage latency than LLM-adaptive fusion.',
        status: 'Under review',
        selected: true,
        href: sharedProjects.links.procuraclaw,
      },
      {
        id: 'ceti',
        title: 'CETI: Collaborative Evidence-Constrained Task Interpretation',
        summary:
          'Designed a pre-coding review workflow that turns repository evidence into atomic, source-linked task constraints (Records) for developers to inspect and revise before an agent codes.',
        result:
          'Across 24 participants and 72 cases, Records-2 showed a 17.2-point adjusted contrast in descriptive understanding over FreeChat-2.',
        status: 'Ongoing',
        selected: true,
      },
    ],
    education: {
      organization: 'Xiamen University',
      degree: 'B.Eng. in Software Engineering',
      period: 'Sep. 2023 – Jun. 2027 (expected)',
      logo: '/xmu-emblem.jpg',
      rankings: [
        {
          label: 'U.S. News: #189',
          href: 'https://www.usnews.com/education/best-global-universities/xiamen-university-506410',
        },
        {
          label: 'ARWU: #101–150',
          href: 'https://www.shanghairanking.com/universities/Xiamen-University',
        },
      ],
    },
    experience: [
      {
        organization: 'H World Group, Shanghai',
        role: 'AI Research Intern',
        period: 'Nov. 2025 – Apr. 2026',
        summary:
          'Contributed to ProcuraClaw and its LFUSE retrieval layer for noisy typed, spoken, and image-grounded procurement requests.',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB, Beijing',
        role: 'Research Intern',
        period: 'Aug. 2026 – Present',
        summary:
          'Researching multimodal LLM agents for software engineering and NLP.',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: 'マルチモーダルLLMエージェント · AIを活用したソフトウェア工学 · 自然言語処理',
      interests: [
        'マルチモーダルLLMエージェント',
        'AIを活用したソフトウェア工学',
        '自然言語処理',
      ],
      about:
        'マルチモーダルLLMエージェントと、ソフトウェア工学・自然言語処理への応用を研究しています。',
    },
    labels: {
      education: '学歴',
      publications: '論文',
      selectedProjects: '主要プロジェクト',
      experience: '経験',
      allProjects: 'プロジェクト',
      viewProject: '詳細',
    },
    publications: [
      {
        title: 'PilotBench: 運用制約を伴う一般航空エージェントのベンチマーク',
        venue: 'IJCNN 2026・採択',
        role: '共同筆頭著者',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'LLMエージェントの長期記憶ガバナンス',
        venue: '査読中',
        role: '筆頭著者',
      },
      {
        title: 'LFUSE：ノイズの多い音声・画像指示商品検索のための学習型証拠融合',
        venue: '査読中',
        role: '共同筆頭著者',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '708件の実飛行軌跡、34チャネルのテレメトリ、9飛行段階から運用制約付き評価基盤を共同開発。',
        result: '41モデルの評価と精度・制御性、動的複雑性の分析に貢献。',
        status: '完了',
        href: sharedProjects.links.pilotbench,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary:
          '追記型改訂、状態管理、リスクゲート、管理された忘却を備える記憶ガバナンス層のプロトタイプを開発。',
        result:
          '統制診断で、フラットメモリ比でGPT-4oのターン間意思決定整合性が13.3ポイント向上。',
        status: '査読中',
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          '実運用の調達検索システムと、語彙・密ベクトルの証拠を融合してノイズの多い文字・音声・画像指示の商品検索に対応するLFUSE層に貢献。',
        result:
          '3つの中国語人手評価ドメインで、調整済み凸結合を上回るMRR@10を平均7.8%改善し、LLM適応融合より融合段階の遅延を80–100分の1に抑制。',
        status: '査読中',
        selected: true,
        href: sharedProjects.links.procuraclaw,
      },
      {
        id: 'ceti',
        title: 'CETI：Collaborative Evidence-Constrained Task Interpretation',
        summary:
          'リポジトリの証拠を原子単位のタスク制約（Records）に変換し、コーディング前に開発者が検査・修正できるレビュー方式を設計。',
        result:
          '24名・72ケースの研究で、Records-2はFreeChat-2に対して調整済みで17.2ポイント高い記述的理解向上を示した（95% CI [−6.0, 40.5]）。別の引き継ぎ分析では、10タスク・3モデル・504回のコーディング試行を分析。',
        status: '進行中',
        selected: true,
      },
    ],
    education: {
      organization: '厦門大学',
      degree: 'ソフトウェア工学 B.Eng.',
      period: '2023年9月 – 2027年6月（取得見込み）',
      logo: '/xmu-emblem.jpg',
      rankings: [
        {
          label: 'U.S. News：世界189位',
          href: 'https://www.usnews.com/education/best-global-universities/xiamen-university-506410',
        },
        {
          label: 'ARWU：世界101–150位',
          href: 'https://www.shanghairanking.com/universities/Xiamen-University',
        },
      ],
    },
    experience: [
      {
        organization: 'H World Group（上海）',
        role: 'AIリサーチインターン',
        period: '2025年11月 – 2026年4月',
        summary:
          'ProcuraClawと、ノイズの多い文字・音声・画像指示に対応するLFUSE検索層の研究開発に貢献。',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB（北京）',
        role: 'リサーチインターン',
        period: '2026年8月 – 現在',
        summary:
          'マルチモーダルLLMエージェントのソフトウェア工学・自然言語処理応用を研究。',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
  zh: {
    nav: { home: '主页', projects: '项目', cv: '简历' },
    identity: {
      name: '刘浩天',
      role: '多模态大语言模型智能体 · 人工智能赋能的软件工程 · 自然语言处理',
      interests: [
        '多模态大语言模型智能体',
        '人工智能赋能的软件工程',
        '自然语言处理',
      ],
      about:
        '我研究多模态大语言模型智能体，以及其在软件工程与自然语言处理中的应用。',
    },
    labels: {
      education: '教育经历',
      publications: '论文',
      selectedProjects: '精选项目',
      experience: '经历',
      allProjects: '项目',
      viewProject: '查看',
    },
    publications: [
      {
        title: 'PilotBench：面向运行约束的通用航空智能体基准',
        venue: 'IJCNN 2026 · 已录用',
        role: '共同一作',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: '面向大语言模型智能体的长程记忆治理',
        venue: '审稿中',
        role: '第一作者',
      },
      {
        title: 'LFUSE：面向噪声语音与图像指代商品搜索的学习式证据融合',
        venue: '审稿中',
        role: '共同一作',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '基于 708 条真实轨迹、34 通道遥测数据和 9 个飞行阶段共同开发运行约束评测基准。',
        result: '参与 41 个模型的评测及精度—可控性与动态复杂度分析。',
        status: '已完成',
        href: sharedProjects.links.pilotbench,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary:
          '开发包含追加式修订、活跃状态语义、风险门控与受控遗忘的记忆治理原型。',
        result:
          '在受控诊断中，相比平面记忆，GPT-4o 的跨轮决策一致性提高 13.3 个百分点。',
        status: '审稿中',
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          '参与已部署采购搜索系统及其 LFUSE 检索层，融合词法与稠密检索证据，处理噪声文本、语音和图像指代商品请求。',
        result:
          '在三个中文人工评测域上，LFUSE 的 MRR@10 比调优后的凸组合平均提升 7.8%，融合阶段延迟比 LLM 自适应融合低 80–100 倍。',
        status: '审稿中',
        selected: true,
        href: sharedProjects.links.procuraclaw,
      },
      {
        id: 'ceti',
        title: 'CETI：协作式证据约束任务解释',
        summary:
          '设计面向代码生成前审查的工作流，将仓库证据组织为与源码片段绑定的原子任务约束（Records），供开发者在智能体编码前检查和修订。',
        result:
          '24 名参与者、72 个案例的研究中，Records-2 相对 FreeChat-2 的描述性理解调整后差异为 17.2 个百分点。',
        status: '进行中',
        selected: true,
      },
    ],
    education: {
      organization: '厦门大学',
      degree: '软件工程工学学士（B.Eng.）',
      period: '2023 年 9 月 – 2027 年 6 月（预计）',
      logo: '/xmu-emblem.jpg',
      rankings: [
        {
          label: 'U.S. News：全球第 189 位',
          href: 'https://www.usnews.com/education/best-global-universities/xiamen-university-506410',
        },
        {
          label: 'ARWU：全球第 101–150 位',
          href: 'https://www.shanghairanking.com/universities/Xiamen-University',
        },
      ],
    },
    experience: [
      {
        organization: '华住集团（上海）',
        role: 'AI 研究实习生',
        period: '2025 年 11 月 – 2026 年 4 月',
        summary: '参与 ProcuraClaw 及其面向噪声文本、语音和图像指代的 LFUSE 检索层研发。',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB（北京）',
        role: '科研实习生',
        period: '2026 年 8 月 – 至今',
        summary: '研究多模态大语言模型智能体在软件工程与自然语言处理中的应用。',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
};
