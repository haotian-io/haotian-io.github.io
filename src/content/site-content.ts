import type { Locale, SiteContent } from './types';

const sharedProjects = {
  links: {
    pilotbench: 'https://arxiv.org/abs/2604.08987',
    lhmg: 'https://github.com/haotian-io/Long-Horizon-Memory-Governance-for-LLM-Agents',
    procuraclaw: 'https://github.com/haotian-io/ProcuraClaw',
    ddrg: 'https://github.com/haotian-io/DDRG',
    concordcoder: 'https://github.com/haotian-io/ConcordCoder',
    neuromark: 'https://github.com/haotian-io/NeuroMark',
  },
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    nav: { home: 'Home', projects: 'Projects', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: 'Software Engineering undergraduate working on reliable, human-centered AI systems.',
      interests: ['LLM Agents', 'Multimodal LLMs', 'AI for SE & HCI'],
      about:
        'I am pursuing a B.Eng. in Software Engineering at Xiamen University (2023–2027). My research focuses on evaluating and improving AI agents in safety-critical, long-horizon, and collaborative settings.',
    },
    labels: {
      publications: 'Publications',
      selectedProjects: 'Selected Projects',
      experience: 'Current Experience',
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
        venue: 'EMNLP 2026 · Under review',
        role: 'First author',
      },
      {
        title: 'ProcuraClaw: Context-Aware Procurement Search',
        venue: 'CIKM 2026 · Under review',
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
        href: sharedProjects.links.lhmg,
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
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary:
          'Prototyped an inference-time reasoning-graph pipeline that probes answer-sensitive claims and gates local repairs conservatively.',
        result:
          'Evaluated Llama 3.1 70B on multiple reasoning benchmarks; controlled diagnostics informed conservative selection gates.',
        status: 'Ongoing',
        href: sharedProjects.links.ddrg,
      },
      {
        id: 'concordcoder',
        title: 'ConcordCoder',
        summary:
          'Pre-generation alignment that confirms task constraints and risks before AI-generated code changes.',
        result:
          'Inspectable AlignmentRecord and controlled evaluation protocol',
        status: 'Ongoing',
        href: sharedProjects.links.concordcoder,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark',
        summary:
          'Evaluated 20 LLMs on 2,379 clinical questions and 16 VLMs across six brain-imaging tasks.',
        result:
          'Contributed reliability analyses using safety compliance, effective accuracy, and difficulty discrimination.',
        status: 'Ongoing',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: 'H World Group, Shanghai',
      role: 'AI Research Intern',
      period: 'Jan. 2026 – Apr. 2026',
      summary: 'Researching and deploying context-aware procurement search.',
      logo: '/hworld-logo.ico',
    },
  },
  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: '信頼性と人間中心設計を重視するAIシステムを研究するソフトウェア工学専攻生。',
      interests: ['LLMエージェント', 'マルチモーダルLLM', 'AI for SE・HCI'],
      about:
        '厦門大学でソフトウェア工学のB.Eng.取得を目指す学部生（2023–2027）です。安全性が重要な環境、長期的な対話、協調作業におけるAIエージェントの評価と改善に取り組んでいます。',
    },
    labels: {
      publications: '論文',
      selectedProjects: '主要プロジェクト',
      experience: '現在の所属',
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
        venue: 'EMNLP 2026・査読中',
        role: '筆頭著者',
      },
      {
        title: 'ProcuraClaw: 文脈適応型調達検索',
        venue: 'CIKM 2026・査読中',
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
        href: sharedProjects.links.lhmg,
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
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary:
          '回答に影響する主張を検証し、局所修復を保守的に制御する推論時グラフパイプラインを試作。',
        result:
          'Llama 3.1 70Bを複数の推論ベンチマークで評価し、統制診断から保守的選択ゲートを設計。',
        status: '進行中',
        href: sharedProjects.links.ddrg,
      },
      {
        id: 'concordcoder',
        title: 'ConcordCoder',
        summary: 'コード生成前に制約とリスクを確認する事前整合フレームワーク。',
        result: '検証可能なAlignmentRecordと統制評価プロトコル',
        status: '進行中',
        href: sharedProjects.links.concordcoder,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark',
        summary:
          '2,379問の臨床問題で20のLLM、6つの脳画像タスクで16のVLMを評価。',
        result: '安全性遵守、実効精度、難易度識別を用いた信頼性分析に貢献。',
        status: '進行中',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: 'H World Group（上海）',
      role: 'AIリサーチインターン',
      period: '2026年1月 – 4月',
      summary: '文脈適応型調達検索の研究開発と実運用に従事。',
      logo: '/hworld-logo.ico',
    },
  },
  zh: {
    nav: { home: '主页', projects: '项目', cv: '简历' },
    identity: {
      name: '刘浩天',
      role: '关注可靠、人本人工智能系统的软件工程本科生。',
      interests: ['大语言模型智能体', '多模态大模型', 'AI for SE 与 HCI'],
      about:
        '厦门大学软件工程专业工学学士（B.Eng.）在读（2023–2027）。研究聚焦于安全关键、长程交互与人机协作场景中的智能体评测和改进。',
    },
    labels: {
      publications: '论文',
      selectedProjects: '精选项目',
      experience: '当前经历',
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
        venue: 'EMNLP 2026 · 审稿中',
        role: '第一作者',
      },
      {
        title: 'ProcuraClaw：上下文感知的采购搜索',
        venue: 'CIKM 2026 · 审稿中',
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
        href: sharedProjects.links.lhmg,
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
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary: '试制推理时图管线，探测答案敏感主张并对局部修复进行保守门控。',
        result:
          '使用 Llama 3.1 70B 在多个推理基准上评测；受控诊断用于收束保守选择门。',
        status: '进行中',
        href: sharedProjects.links.ddrg,
      },
      {
        id: 'concordcoder',
        title: 'ConcordCoder',
        summary: '在代码生成前确认任务约束与风险的预生成对齐框架。',
        result: '可审计 AlignmentRecord 与受控评测协议',
        status: '进行中',
        href: sharedProjects.links.concordcoder,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark',
        summary:
          '在 2,379 道临床问题上评测 20 个 LLM，并在 6 个脑影像任务上评测 16 个 VLM。',
        result: '参与基于安全合规、有效准确率与难度区分度的可靠性分析。',
        status: '进行中',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: '华住集团（上海）',
      role: 'AI 研究实习生',
      period: '2026 年 1 月 – 4 月',
      summary: '研究并落地上下文感知的采购搜索系统。',
      logo: '/hworld-logo.ico',
    },
  },
};
