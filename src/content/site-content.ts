import type { Locale, SiteContent } from './types';

const sharedProjects = {
  links: {
    pilotbench: 'https://arxiv.org/abs/2604.08987',
    lhmg: 'https://github.com/haotian-io',
    procuraclaw: 'https://github.com/haotian-io',
    ddrg: 'https://github.com/haotian-io/DDRG',
    concordcoder: 'https://github.com/haotian-io/ConcordCoder',
    neuromark: 'https://github.com/haotian-io',
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
        'I am a B.S. student at Xiamen University (2023–2027). My research focuses on evaluating and improving AI agents in safety-critical, long-horizon, and collaborative settings.',
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
          'A safety-constrained benchmark for general aviation agents built from real flight trajectories.',
        result: '708 trajectories · 41 models · accepted at IJCNN 2026',
        status: 'Completed',
        href: sharedProjects.links.pilotbench,
        selected: true,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary:
          'An auditable memory layer that prevents silent overwrite and unsafe conditioning in long-horizon agents.',
        result: 'Conflict update accuracy: 40.0% → 100.0% on GPT-4o',
        status: 'Under review',
        href: sharedProjects.links.lhmg,
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          'A deployed procurement-search agent with entity extraction, hybrid retrieval, and profile-aware ranking.',
        result: 'MRR 0.95 · NDCG@5 0.91 · first-hit CTR +6.2% / +9.8%',
        status: 'Under review',
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary:
          'Inference-time verification and repair for conflicting sampled reasoning graphs.',
        result: 'Evaluated on five reasoning benchmarks with LLaMA-3.1-70B',
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
          'Multimodal clinical-reasoning evaluation across neurological and psychiatric tasks.',
        result: '36 foundation models · 10+ datasets and examinations',
        status: 'Ongoing',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: 'H World Group, Shanghai',
      role: 'AI Research Intern',
      period: 'Jan. 2026 – Present',
      summary: 'Researching and deploying context-aware procurement search.',
    },
  },
  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', cv: 'CV' },
    identity: {
      name: 'Haotian Liu',
      role: '信頼性と人間中心設計を重視するAIシステムを研究するソフトウェア工学専攻生。',
      interests: ['LLMエージェント', 'マルチモーダルLLM', 'AI for SE・HCI'],
      about:
        '厦門大学ソフトウェア工学科の学部生（2023–2027）です。安全性が重要な環境、長期的な対話、協調作業におけるAIエージェントの評価と改善に取り組んでいます。',
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
          '実飛行軌跡に基づく、安全制約付き一般航空エージェントの評価基盤。',
        result: '708軌跡・41モデル・IJCNN 2026採択',
        status: '完了',
        href: sharedProjects.links.pilotbench,
        selected: true,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary:
          '長期エージェントの暗黙的な上書きと危険な記憶利用を防ぐ監査可能な記憶層。',
        result: 'GPT-4oの競合更新精度：40.0% → 100.0%',
        status: '査読中',
        href: sharedProjects.links.lhmg,
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          '実運用された、ハイブリッド検索と施設特性対応ランキングを備える調達検索エージェント。',
        result: 'MRR 0.95・NDCG@5 0.91・初回CTR +6.2% / +9.8%',
        status: '査読中',
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary: '複数の推論グラフ間の矛盾を推論時に検証・修復する手法。',
        result: 'LLaMA-3.1-70Bを用い5種の推論ベンチマークで評価',
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
        summary: '神経・精神科領域におけるマルチモーダル臨床推論評価。',
        result: '36基盤モデル・10以上のデータセットと試験',
        status: '進行中',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: 'H World Group（上海）',
      role: 'AIリサーチインターン',
      period: '2026年1月 – 現在',
      summary: '文脈適応型調達検索の研究開発と実運用に従事。',
    },
  },
  zh: {
    nav: { home: '主页', projects: '项目', cv: '简历' },
    identity: {
      name: '刘浩天',
      role: '关注可靠、人本人工智能系统的软件工程本科生。',
      interests: ['大语言模型智能体', '多模态大模型', 'AI for SE 与 HCI'],
      about:
        '厦门大学软件工程本科生（2023–2027）。研究聚焦于安全关键、长程交互与人机协作场景中的智能体评测和改进。',
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
        summary: '基于真实飞行轨迹构建的安全约束通用航空智能体评测基准。',
        result: '708 条轨迹 · 41 个模型 · IJCNN 2026 录用',
        status: '已完成',
        href: sharedProjects.links.pilotbench,
        selected: true,
      },
      {
        id: 'lhmg',
        title: 'Long-Horizon Memory Governance',
        summary: '防止长程智能体静默覆盖与高风险记忆注入的可审计记忆治理层。',
        result: 'GPT-4o 冲突更新准确率：40.0% → 100.0%',
        status: '审稿中',
        href: sharedProjects.links.lhmg,
        selected: true,
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary: '结合实体抽取、混合检索与酒店画像排序的已部署采购搜索智能体。',
        result: 'MRR 0.95 · NDCG@5 0.91 · 首击 CTR +6.2% / +9.8%',
        status: '审稿中',
        href: sharedProjects.links.procuraclaw,
        selected: true,
      },
      {
        id: 'ddrg',
        title: 'DDRG',
        summary: '对多条采样推理图中的冲突进行推理时验证与修复。',
        result: '使用 LLaMA-3.1-70B 在五个推理基准上评测',
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
        summary: '面向神经与精神疾病任务的多模态临床推理评测。',
        result: '36 个基础模型 · 10+ 数据集与专业考试',
        status: '进行中',
        href: sharedProjects.links.neuromark,
      },
    ],
    experience: {
      organization: '华住集团（上海）',
      role: 'AI 研究实习生',
      period: '2026 年 1 月 – 至今',
      summary: '研究并落地上下文感知的采购搜索系统。',
    },
  },
};
