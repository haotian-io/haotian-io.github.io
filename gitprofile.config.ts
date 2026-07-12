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
          title: 'MLLM: Role-Playing Consistency Evaluation and Enhancement',
          description:
            'Built a 90-role bilingual benchmark with 100k+ instructions; surfaced a ~40% gap between open-source (LLaMA, ChatGLM) and GPT-5 on character knowledge; applied Context-Instruct tuning to cut persona OOC and lift CUS/style mimicry of 7B models by 10.4%; delivered automated+manual evaluation with >0.68 human correlation and solid OOD generalization.',
          link: 'https://github.com/haotian-io',
        },
        {
          title: 'MLLM: Clinical Reasoning for Brain Disease Detection',
          description:
            'Reproduced IntrA 3D point cloud and TOF-MRA diagnostics to ~70% accuracy; mapped 3D/imaging features into structured JSON and VLM reasoning to surface 5% occult rupture risks; validated weak-label schemes that doubled 3D aneurysm labeling efficiency with no detection drop.',
          link: 'https://github.com/haotian-io',
        },
        {
          title: 'AI4S: Agent-driven Peptide Functional Prediction',
          description:
            'Reproduced CPPpred-En to 97.27% accuracy (MCC 0.945) on CPP924, beating SiameseCPP; engineered an agent pipeline blending 69 physico-chemical features with 8 PLM embeddings and automated evaluation of 552 pairs via soft-voting ensemble; ablations+t-SNE showed a 2.19% gain from physico-chemical features.',
          link: 'https://github.com/haotian-io',
        },
        {
          title: 'Unity AI Interactive Picture Book',
          description:
            'Partnered with Xiaoqian Tech end-to-end; piloted at Yanwu Primary School and secured national software copyright; built a multi-agent UnityWebRequest system orchestrating 3 AIGC APIs (Tongyi, Baidu, etc.) for dynamic text, illustration, and music; drove requirements through OKRs and standardized rollout/rollback.',
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
    linkedin: 'haotian-liu-a92492347',
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
    email: 'haotianliu.me@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/haotian-io/haotian-io.github.io/raw/main/LIUHAOTIAN_CV.pdf',
  },
  skills: [
    'Python',
    'Java',
    'JavaEE',
    'Spring Boot',
    'SQL',
    'Data Analysis',
    'Feature Engineering',
    'Model Evaluation',
    'Git',
    'Linux',
    'VS Code',
    'DevOps',
    'Scrum',
    'LLM/MLLM',
    'PyTorch',
  ],
  experiences: [
    {
      company: 'H World Group, Shanghai',
      position: 'Research Intern',
      from: 'January 2026',
      to: 'Present',
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
      title: 'Long-Horizon Memory Governance for LLM Agents',
      conferenceName: 'ICML 2026',
      journalName: '',
      authors:
        'Boyang Wang, Yueling Liu, Yalun Wu, Haotian Liu, Xianjie Wu, Zhoujun Li',
      link: 'https://openreview.net/forum?id=25959',
      description:
        'This paper proposes Long-Horizon Memory Governance (LHMG), a framework that augments LLM agents with principled memory management to address key failure modes in long-range reasoning. LHMG introduces conflict-aware revision graphs, strict No-Silent-Overwrite principles, and Risk-Gated Memory Conditioning mechanisms to ensure reliable long-term memory over extended interactions.',
    },
    {
      title:
        'FLY-EVAL++: Agentic Verification for Safety-Constrained Modeling in Embodied Contexts',
      conferenceName: 'ICML 2026',
      journalName: '',
      authors:
        'Yalun Wu, Boyang Wang, Junfeng Fang, Jiawei Wang, Haotian Liu, Qijun Yang, Hongcheng Guo, Zhoujun Li',
      link: 'https://openreview.net/forum?id=32836',
      description:
        'FLY-EVAL++ is an Agentic Verification methodology for evaluating LLM predictions in safety-constrained embodied contexts, instantiated and validated in real-world flight modeling. This work addresses the evaluation gap in physics-governed systems where success depends not only on numerical accuracy but also on producing structurally valid, operationally usable outputs that respect physical feasibility and safety constraints.',
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
