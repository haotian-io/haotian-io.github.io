import type { Locale, SiteContent } from './types';

const sharedProjects = {
  links: {
    pilotbench: 'https://arxiv.org/abs/2604.08987',
  },
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    nav: { home: 'Home', projects: 'Projects', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: 'Multimodal LLM Agents · AI for Software Engineering · Human–Computer Interaction',
      interests: [
        'Multimodal LLM Agents',
        'AI for Software Engineering',
        'Human–Computer Interaction',
      ],
      about:
        'My research interests include multimodal large language model agents, AI for software engineering, and human–computer interaction.',
    },
    labels: {
      education: 'Education',
      publications: 'Publications',
      selectedProjects: 'Selected Projects',
      experience: 'Industry Experience',
      allProjects: 'Projects',
      viewProject: 'View',
    },
    publications: [
      {
        title:
          'PilotBench: A Benchmark for General Aviation Agents with Safety Constraints',
        venue: 'IJCNN 2026 · Accepted',
        role: 'Co-first author',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'Long-Horizon Memory Governance for LLM Agents',
        venue: 'ICASSP 2027 · Under review',
        role: 'First author',
      },
      {
        title: 'Calibrated Lexical Fusion for Noise-Robust Retrieval of Colloquial Chinese Procurement Queries',
        venue: 'ICASSP 2027 · Under review',
        role: 'Co-first author',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          'Co-developed a safety-constrained benchmark from 708 real trajectories, 34-channel telemetry, and nine flight phases.',
        result:
          'Contributed to evaluations of 41 models and analyses of precision–controllability and dynamic complexity.',
        status: 'Completed',
        href: sharedProjects.links.pilotbench,
        selected: true,
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
          'Contributed to a deployed procurement-search system using LLM entity extraction, hybrid retrieval, profile-aware ranking, and Thompson Sampling.',
        result:
          'The system achieved MRR 0.95 and NDCG@5 0.91; reported A/B tests increased first-hit CTR by 6.2% and 9.8%.',
        status: 'Under review',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI: Collaborative Evidence-Constrained Task Interpretation',
        summary:
          'Designed a pre-coding review workflow that turns repository evidence into atomic, source-linked task constraints (Records) for developers to inspect and revise before an agent codes.',
        result:
          'In a 24-participant study across 72 cases, Records-2 showed the largest descriptive understanding gain: a 17.2-point adjusted contrast against FreeChat-2 (95% CI [−6.0, 40.5]). A separate handoff analysis covered 504 coding attempts across 10 tasks and 3 models.',
        status: 'Ongoing',
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
        summary: 'Built and deployed a context-aware B2B procurement-search system (ProcuraClaw) with four-path hybrid retrieval, hotel-profile-driven ranking, and Thompson Sampling online adaptation.',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB, Beijing',
        role: 'Research Intern',
        period: 'Aug. 2026 – Present',
        summary:
          'Researching multimodal LLM agents for software engineering and human–computer interaction.',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: 'マルチモーダルLLMエージェント · AIを活用したソフトウェア工学 · ヒューマン・コンピュータ・インタラクション',
      interests: [
        'マルチモーダルLLMエージェント',
        'AIを活用したソフトウェア工学',
        'ヒューマン・コンピュータ・インタラクション',
      ],
      about:
        '研究分野は、マルチモーダル大規模言語モデルエージェント、AIを活用したソフトウェア工学、ヒューマン・コンピュータ・インタラクションです。',
    },
    labels: {
      education: '学歴',
      publications: '論文',
      selectedProjects: '主要プロジェクト',
      experience: '実務経験',
      allProjects: 'プロジェクト',
      viewProject: '詳細',
    },
    publications: [
      {
        title: 'PilotBench: 安全制約を伴う一般航空エージェントのベンチマーク',
        venue: 'IJCNN 2026・採択',
        role: '共同筆頭著者',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'LLMエージェントの長期記憶ガバナンス',
        venue: 'ICASSP 2027・査読中',
        role: '筆頭著者',
      },
      {
        title: '口語的中国語調達クエリのノイズロバスト検索のための較正語彙融合',
        venue: 'ICASSP 2027・査読中',
        role: '共同筆頭著者',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '708件の実飛行軌跡、34チャネルのテレメトリ、9飛行段階から安全制約付き評価基盤を共同開発。',
        result: '41モデルの評価と精度・制御性、動的複雑性の分析に貢献。',
        status: '完了',
        href: sharedProjects.links.pilotbench,
        selected: true,
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
          'LLMエンティティ抽出、ハイブリッド検索、施設特性対応ランキングを用いる実運用調達検索システムに貢献。',
        result:
          'システムはMRR 0.95、NDCG@5 0.91を達成し、報告されたA/Bテストで初回CTRが6.2%と9.8%向上。',
        status: '査読中',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI：Collaborative Evidence-Constrained Task Interpretation',
        summary:
          'リポジトリの証拠を原子単位のタスク制約（Records）に変換し、コーディング前に開発者が検査・修正できるレビュー方式を設計。',
        result:
          '24名・72ケースの研究で、Records-2はFreeChat-2に対して調整済みで17.2ポイント高い記述的理解向上を示した（95% CI [−6.0, 40.5]）。別の引き継ぎ分析では、10タスク・3モデル・504回のコーディング試行を分析。',
        status: '進行中',
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
        summary: '文脈適応型調達検索の研究開発と実運用に従事。',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB（北京）',
        role: 'リサーチインターン',
        period: '2026年8月 – 現在',
        summary:
          'マルチモーダルLLMエージェントのソフトウェア工学・HCI応用を研究。',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
  zh: {
    nav: { home: '主页', projects: '项目', cv: '简历' },
    identity: {
      name: '刘浩天',
      role: '多模态大语言模型智能体 · 人工智能赋能的软件工程 · 人机交互',
      interests: [
        '多模态大语言模型智能体',
        '人工智能赋能的软件工程',
        '人机交互',
      ],
      about:
        '我的研究兴趣包括多模态大语言模型智能体、人工智能赋能的软件工程，以及人机交互。',
    },
    labels: {
      education: '教育经历',
      publications: '论文',
      selectedProjects: '精选项目',
      experience: '行业经历',
      allProjects: '项目',
      viewProject: '查看',
    },
    publications: [
      {
        title: 'PilotBench：面向安全约束的通用航空智能体基准',
        venue: 'IJCNN 2026 · 已录用',
        role: '共同一作',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: '面向大语言模型智能体的长程记忆治理',
        venue: 'ICASSP 2027 · 审稿中',
        role: '第一作者',
      },
      {
        title: '面向口语化中文采购查询的噪声鲁棒检索校准词汇融合',
        venue: 'ICASSP 2027 · 审稿中',
        role: '共同一作',
      },
    ],
    projects: [
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '基于 708 条真实轨迹、34 通道遥测数据和 9 个飞行阶段共同开发安全约束评测基准。',
        result: '参与 41 个模型的评测及精度—可控性与动态复杂度分析。',
        status: '已完成',
        href: sharedProjects.links.pilotbench,
        selected: true,
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
          '参与已部署采购搜索系统，采用 LLM 实体抽取、混合检索、画像感知排序与 Thompson Sampling。',
        result:
          '系统达到 MRR 0.95、NDCG@5 0.91；报告的 A/B 测试中首击 CTR 提高 6.2% 和 9.8%。',
        status: '审稿中',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI：协作式证据约束任务解释',
        summary:
          '设计面向代码生成前审查的工作流，将仓库证据组织为与源码片段绑定的原子任务约束（Records），供开发者在智能体编码前检查和修订。',
        result:
          '24 名参与者、72 个案例的研究中，Records-2 的描述性理解提升最大：相对 FreeChat-2 的调整后差异为 17.2 个百分点（95% CI [−6.0, 40.5]）。另有 504 次编码尝试，覆盖 10 个任务和 3 个模型。',
        status: '进行中',
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
        summary: '参与上下文感知采购搜索系统的研究与落地。',
        logo: '/hworld-logo.ico',
      },
      {
        organization: 'ZGC LAB（北京）',
        role: '科研实习生',
        period: '2026 年 8 月 – 至今',
        summary: '研究多模态大语言模型智能体在软件工程与人机交互中的应用。',
        logo: '/zgc-lab-logo.png',
      },
    ],
  },
};
