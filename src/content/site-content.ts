import type { Locale, SiteContent } from './types';

const sharedProjects = {
  links: {
    pilotbench: 'https://arxiv.org/abs/2604.08987',
    flyeval: 'https://arxiv.org/abs/2609.04021',
    ddrg: 'https://arxiv.org/abs/2610.18606',
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
          'PilotBench: A Benchmark for General Aviation Agents',
        venue: 'IJCNN 2026 · Accepted',
        role: 'Co-first author',
        href: sharedProjects.links.pilotbench,
      },
      {
        title:
          'FLY-EVAL++: An Evidence-Driven Evaluation Protocol for Flight Prediction with Large Language Models',
        venue: 'COLM 2026 · Accepted',
        role: 'Co-author',
        href: sharedProjects.links.flyeval,
      },
      {
        title:
          'Beyond Answer Voting: Fine-Grained Correction of LLM Reasoning through Graph Alignment across Sampled Traces',
        venue: 'ARR · Under review',
        role: 'First author',
        href: sharedProjects.links.ddrg,
      },
      {
        title:
          'LFUSE: Learned Evidence Fusion for Noisy Spoken and Image-Grounded Product Search',
        venue: 'ICASSP 2027 · Under review',
        role: 'First author',
      },
      {
        title:
          'Before the Agent Acts: Understanding, Task Accounts, and Implementation in Pre-Coding Review',
        venue: 'EMSE · Under review',
        role: 'First author',
      },
    ],
    projects: [
      {
        id: 'ddrg',
        title: 'DDRG: Beyond Answer Voting',
        summary:
          'With the Matsuo–Iwasawa Lab at the University of Tokyo (Dr. Zihui (Irene) Li), proposed a framework that aligns source-grounded claim graphs across sampled reasoning traces and sends localized conflicts to an answer-blind verifier, repairing only when the majority answer’s supporting path is refuted.',
        result:
          'Across five benchmarks, improved macro-average accuracy over direct answering by 8.65 and 15.83 points for Qwen2.5-7B and Llama3.1-8B, exceeding CoT, GoT, GoV, and self-consistency.',
        status: 'Under review',
        href: sharedProjects.links.ddrg,
        selected: true,
      },
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          'Co-developed a constraint-aware benchmark from 708 real trajectories, 34-channel telemetry, and nine flight phases.',
        result:
          'Evaluated 41 models with Pilot-Score; identified a precision–controllability dichotomy between conventional forecasters and LLMs.',
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
        status: 'Manuscript',
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          'Contributed to a deployed procurement-search system and its LFUSE retrieval layer, which fuses lexical and dense evidence for noisy typed, spoken, and image-grounded product requests.',
        result:
          'LFUSE improves MRR@10 by 7.8% on average across three Chinese domains, with 80–100× lower fusion-stage latency than LLM-adaptive fusion; transferred to a 1,854-SKU hotel catalog.',
        status: 'Under review',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI: Before the Agent Acts',
        summary:
          'Designed a pre-coding review workflow that turns repository evidence into atomic, source-linked task constraints (Records) for developers to inspect and revise before an agent codes.',
        result:
          'Across 24 participants and 72 cases, Records-2 showed a 17.2-point adjusted contrast in descriptive understanding over FreeChat-2; the study traced 504 coding attempts across 10 tasks and 3 models.',
        status: 'Under review',
        selected: true,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark: Multimodal Reliability Evaluation for Neuropsychiatry',
        summary:
          'Contributed to a multimodal benchmark evaluating clinical reasoning and brain-imaging interpretation across 2,379 clinical questions and six imaging tasks.',
        result:
          'Evaluated 20 LLMs and 16 VLMs; contributed to SCR, EA, DDI, and JTI metrics for constraint compliance, effective accuracy, difficulty sensitivity, and cross-modal reliability.',
        status: 'Completed',
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
          'Developed LFUSE for ProcuraClaw, a learned evidence-fusion ranker over BM25 and dense candidates with rank, character, pinyin, and query-agreement features.',
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
        title: 'PilotBench: 一般航空エージェントのベンチマーク',
        venue: 'IJCNN 2026・採択',
        role: '共同筆頭著者',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'FLY-EVAL++：LLMによる飛行予測のための証拠駆動型評価プロトコル',
        venue: 'COLM 2026・採択',
        role: '共著者',
        href: sharedProjects.links.flyeval,
      },
      {
        title: 'Beyond Answer Voting：サンプル推論過程間のグラフ整合によるLLM推論の細粒度修正',
        venue: 'ARR・査読中',
        role: '筆頭著者',
        href: sharedProjects.links.ddrg,
      },
      {
        title: 'LFUSE：ノイズの多い音声・画像指示商品検索のための学習型証拠融合',
        venue: 'ICASSP 2027・査読中',
        role: '筆頭著者',
      },
      {
        title: 'Before the Agent Acts：コーディング前レビューにおける理解・タスク記述・実装',
        venue: 'EMSE・査読中',
        role: '筆頭著者',
      },
    ],
    projects: [
      {
        id: 'ddrg',
        title: 'DDRG：Beyond Answer Voting',
        summary:
          '東京大学 松尾・岩澤研究室のDr. Zihui (Irene) Liと共同で、サンプルした推論過程から根拠付きクレームグラフを構築・整合し、局所的な不一致を回答非依存の検証器に送り、多数派回答の根拠経路が反証された場合のみ修正するフレームワークを提案。',
        result:
          '5つのベンチマークで、直接回答比のマクロ平均精度をQwen2.5-7Bで8.65ポイント、Llama3.1-8Bで15.83ポイント改善し、CoT・GoT・GoV・自己整合性を上回った。',
        status: '査読中',
        href: sharedProjects.links.ddrg,
        selected: true,
      },
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '708件の実飛行軌跡、34チャネルのテレメトリ、9飛行段階から運用制約付き評価基盤を共同開発。',
        result: 'Pilot-Scoreで41モデルを評価し、従来予測器とLLMの精度・制御性の二分構造を特定。',
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
        status: '投稿準備中',
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          '実運用の調達検索システムと、語彙・密ベクトルの証拠を融合してノイズの多い文字・音声・画像指示の商品検索に対応するLFUSE層に貢献。',
        result:
          '3つの中国語人手評価ドメインでMRR@10を平均7.8%改善し、LLM適応融合より融合段階の遅延を80–100分の1に抑制。1,854 SKUのホテルカタログへ転移。',
        status: '査読中',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI：Before the Agent Acts',
        summary:
          'リポジトリの証拠を原子単位のタスク制約（Records）に変換し、コーディング前に開発者が検査・修正できるレビュー方式を設計。',
        result:
          '24名・72ケースの研究で、Records-2はFreeChat-2に対して17.2ポイント高い記述的理解の調整済み差異を示した。10タスク・3モデル・504回のコーディング試行も追跡。',
        status: '査読中',
        selected: true,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark：神経精神医学のマルチモーダル信頼性評価',
        summary:
          '臨床推論と脳画像解釈を、2,379件の臨床質問と6つの画像課題で評価するマルチモーダルベンチマークに貢献。',
        result:
          '20 LLMと16 VLMを評価し、制約遵守・実効精度・難易度感度・モダリティ間信頼性を測るSCR、EA、DDI、JTI指標に貢献。',
        status: '完了',
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
          'ProcuraClaw向けに、BM25と密ベクトル候補を順位・文字・ピンイン・クエリ一致特徴で再順位付けするLFUSEを開発。',
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
        title: 'PilotBench：通用航空智能体基准',
        venue: 'IJCNN 2026 · 已录用',
        role: '共同一作',
        href: sharedProjects.links.pilotbench,
      },
      {
        title: 'FLY-EVAL++：面向大语言模型飞行预测的证据驱动评测协议',
        venue: 'COLM 2026 · 已录用',
        role: '合作者',
        href: sharedProjects.links.flyeval,
      },
      {
        title: 'Beyond Answer Voting：基于采样推理轨迹图对齐的 LLM 推理细粒度纠错',
        venue: 'ARR · 审稿中',
        role: '第一作者',
        href: sharedProjects.links.ddrg,
      },
      {
        title: 'LFUSE：面向噪声语音与图像指代商品搜索的学习式证据融合',
        venue: 'ICASSP 2027 · 审稿中',
        role: '第一作者',
      },
      {
        title: 'Before the Agent Acts：代码生成前审查中的理解、任务描述与实现',
        venue: 'EMSE · 审稿中',
        role: '第一作者',
      },
    ],
    projects: [
      {
        id: 'ddrg',
        title: 'DDRG：Beyond Answer Voting',
        summary:
          '与东京大学松尾·岩泽研究室 Zihui (Irene) Li 博士合作，提出一种框架：在多条采样推理轨迹之间对齐有来源依据的论断图，将局部冲突交给不看答案的验证器，仅当多数答案的支撑路径被反驳时才进行一次定向修复。',
        result:
          '在五个基准上，相比直接回答，Qwen2.5-7B 与 Llama3.1-8B 的宏平均准确率分别提升 8.65 和 15.83 个百分点，优于 CoT、GoT、GoV 与自洽投票。',
        status: '审稿中',
        href: sharedProjects.links.ddrg,
        selected: true,
      },
      {
        id: 'pilotbench',
        title: 'PilotBench',
        summary:
          '基于 708 条真实轨迹、34 通道遥测数据和 9 个飞行阶段共同开发运行约束评测基准。',
        result: '使用 Pilot-Score 评测 41 个模型，识别传统预测器与 LLM 之间的精度—可控性二分现象。',
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
        status: '投稿准备中',
      },
      {
        id: 'procuraclaw',
        title: 'ProcuraClaw',
        summary:
          '参与已部署采购搜索系统及其 LFUSE 检索层，融合词法与稠密检索证据，处理噪声文本、语音和图像指代商品请求。',
        result:
          '在三个中文人工评测域上，LFUSE 的 MRR@10 平均提升 7.8%，融合阶段延迟比 LLM 自适应融合低 80–100 倍，并迁移到 1,854 个 SKU 的酒店目录。',
        status: '审稿中',
        selected: true,
      },
      {
        id: 'ceti',
        title: 'CETI：Before the Agent Acts',
        summary:
          '设计面向代码生成前审查的工作流，将仓库证据组织为与源码片段绑定的原子任务约束（Records），供开发者在智能体编码前检查和修订。',
        result:
          '24 名参与者、72 个案例的研究中，Records-2 相对 FreeChat-2 的描述性理解调整后差异为 17.2 个百分点；另追踪了覆盖 10 个任务和 3 个模型的 504 次编码尝试。',
        status: '审稿中',
        selected: true,
      },
      {
        id: 'neuromark',
        title: 'NeuroMark：神经精神医学多模态可靠性评测',
        summary:
          '参与多模态基准，覆盖 2,379 个临床问题和 6 个脑影像任务，用于评测临床推理与脑影像理解。',
        result:
          '评测 20 个 LLM 和 16 个 VLM，并参与 SCR、EA、DDI、JTI 指标设计，衡量约束遵循、有效准确率、难度敏感性和跨模态可靠性。',
        status: '已完成',
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
        summary: '为 ProcuraClaw 开发 LFUSE，利用排序、字符、拼音和查询一致性特征对 BM25 与稠密候选进行学习式融合排序。',
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
