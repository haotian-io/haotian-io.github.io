// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'haotian-io', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'LHMG: Long-Horizon Memory Governance for LLM Agents',
          description:
            'First-authored framework that augments LLM agents with conflict-aware revision graphs, No-Silent-Overwrite semantics, and Risk-Gated Memory Conditioning to prevent silent state corruption in long-range reasoning. Observed a 13.3-point GPT-4o gain in cross-turn decision consistency over flat memory. Under review at ICASSP 2027 after reviews at ICML.',
          link: 'https://github.com/haotian-io/Long-Horizon-Memory-Governance-for-LLM-Agents',
        },
        {
          title: 'CETI: Evidence-Constrained Collaborative Task Interpretation',
          description:
            'First-authored system (with ZGC Lab/PKU and Waseda University) that intercepts the cognitive gap–intent gap in repository-level AI coding. CETI generates atomic task-constraint Records bound to repository evidence, letting developers inspect and revise an agent's interpretation before a patch is generated. Includes a three-condition human study over ten FEA-Bench cases.',
          link: 'https://github.com/haotian-io',
        },
        {
          title: 'PilotBench: Safety-Critical Benchmark for Aviation Agents',
          description:
            'Co-developed a benchmark from 708 real flight trajectories, 34-channel telemetry, and nine flight phases; evaluated 41 models. Contributed to Pilot-Score design and analyses identifying a precision–controllability dichotomy and a dynamic-complexity gap in high-workload phases. Accepted at IJCNN 2026.',
          link: 'https://arxiv.org/abs/2604.08987',
        },
        {
          title: 'Calibrated Lexical Fusion for Colloquial Chinese Procurement Retrieval',
          description:
            'Built and deployed a B2B procurement-search system for H World Group (华住) handling colloquial, misspelled, and alias-rich Chinese queries. Designed a four-path hybrid retrieval pipeline (exact / fuzzy / synonym / selective semantic) fused with RRF and a hotel-profile-driven quality function. Achieved MRR 0.95, NDCG@5 0.91 with 6.2%/9.8% CTR gains in A/B tests. Under review at ICASSP 2027.',
          link: 'https://github.com/haotian-io',
        },
      ],
    },
  },
  seo: {
    title: 'Haotian Liu | AI Research',
    description:
      'Haotian Liu is a Software Engineering undergraduate at Xiamen University researching LLM agents, multimodal models, and AI for software engineering and HCI.',
    imageURL: '',
  },
  social: {
    linkedin: 'haotian-liu-978010403',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'haotianliu.me[AT]gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/haotian-io/haotian-io.github.io/raw/main/LIUHAOTIAN_CV.pdf',
  },
  skills: [
    'Python',
    'PyTorch',
    'HuggingFace',
    'LLM Agents',
    'RAG / IR',
    'Benchmark Design',
    'Model Evaluation',
    'Java / Spring Boot',
    'SQL',
    'C/C++',
    'Git',
    'Linux',
    'Docker',
  ],
  experiences: [
    {
      company: 'H World Group, Shanghai',
      position: 'AI Research Intern',
      from: 'November 2025',
      to: 'April 2026',
      companyLink: 'https://www.hworld.com',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Xiamen University (XMU)',
      degree: 'Bachelor of Software Engineering',
      from: '2023',
      to: '2027',
    },
  ],
  publications: [
    {
      title: 'PilotBench: A Benchmark for General Aviation Agents with Safety Constraints',
      conferenceName: 'IJCNN 2026 · Accepted',
      journalName: '',
      authors:
        'Yalun Wu, Boyang Wang, Haotian Liu, et al.',
      link: 'https://arxiv.org/abs/2604.08987',
      description:
        'PilotBench is a safety-critical benchmark built from 708 real flight trajectories with 34-channel telemetry across nine flight phases. It evaluates 41 models using Pilot-Score, revealing a precision–controllability dichotomy and a dynamic-complexity gap in high-workload phases.',
    },
    {
      title: 'Long-Horizon Memory Governance for LLM Agents',
      conferenceName: 'ICASSP 2027 · Under review',
      journalName: '',
      authors:
        'Boyang Wang, Yueling Liu, Yalun Wu, Haotian Liu, Xianjie Wu, Zhoujun Li',
      link: '',
      description:
        'Proposes LHMG, a framework augmenting LLM agents with conflict-aware revision graphs, No-Silent-Overwrite semantics, and Risk-Gated Memory Conditioning to stabilize long-range reasoning. Observed a 13.3-point GPT-4o gain in cross-turn decision consistency over flat memory.',
    },
    {
      title: 'Calibrated Lexical Fusion for Noise-Robust Retrieval of Colloquial Chinese Procurement Queries',
      conferenceName: 'ICASSP 2027 · Under review',
      journalName: '',
      authors:
        'Haotian Liu, et al.',
      link: '',
      description:
        'Addresses retrieval of colloquial, misspelled, and alias-rich Chinese B2B procurement queries via calibrated lexical fusion. A four-path hybrid pipeline (exact, fuzzy, synonym, selective semantic) fused with RRF and hotel-profile-driven ranking achieves MRR 0.95, NDCG@5 0.91 with significant CTR gains in live A/B tests.',
    },
    {
      title: 'FLY-EVAL++: Agentic Verification for Safety-Constrained Modeling in Embodied Contexts',
      conferenceName: 'COLM 2026',
      journalName: '',
      authors:
        'Yalun Wu, Boyang Wang, Junfeng Fang, Jiawei Wang, Haotian Liu, Qijun Yang, Hongcheng Guo, Zhoujun Li',
      link: 'https://arxiv.org/abs/2609.04021',
      description:
        'An Agentic Verification methodology for evaluating LLM predictions in safety-constrained embodied contexts, instantiated in real-world flight modeling. Addresses the evaluation gap in physics-governed systems where success depends on structural validity and operational feasibility, not just numerical accuracy.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-PC0LEV8P2G', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
