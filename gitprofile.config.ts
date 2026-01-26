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
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Haotian Liu | LLM/MLLM/AI Research',
    description: 'Haotian Liu, undergraduate student at Xiamen University majoring in Software Engineering, focusing on LLM, MLLM, Role-Playing AI, and Embodied Intelligence. Research intern at H World Group.',
    imageURL: '',
  },
  social: {
    linkedin: 'haotian-liu-a92492347',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'haotian_me',
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
    phone: '+86-18116986081',
    email: 'liuhaotian@stu.xmu.edu.cn',
    // Chinese platforms
    bilibili: 'https://space.bilibili.com/499812030',
    zhihu: 'https://www.zhihu.com/people/qing-xia-36-10',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/5d1b50f50000000016027fc9',
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
      company: 'H World Group',
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
      authors: 'Boyang Wang, Yueling Liu, Yalun Wu, Haotian Liu, Xianjie Wu, Zhoujun Li',
      link: 'https://openreview.net/forum?id=25959',
      description: 'This paper proposes Long-Horizon Memory Governance (LHMG), a framework that augments LLM agents with principled memory management to address key failure modes in long-range reasoning. LHMG introduces conflict-aware revision graphs, strict No-Silent-Overwrite principles, and Risk-Gated Memory Conditioning mechanisms to ensure reliable long-term memory over extended interactions.',
    },
    {
      title: 'FLY-EVAL++: Agentic Verification for Safety-Constrained Modeling in Embodied Contexts',
      conferenceName: 'ICML 2026',
      journalName: '',
      authors: 'Yalun Wu, Boyang Wang, Junfeng Fang, Jiawei Wang, Haotian Liu, Qijun Yang, Hongcheng Guo, Zhoujun Li',
      link: 'https://openreview.net/forum?id=32836',
      description: 'FLY-EVAL++ is an Agentic Verification methodology for evaluating LLM predictions in safety-constrained embodied contexts, instantiated and validated in real-world flight modeling. This work addresses the evaluation gap in physics-governed systems where success depends not only on numerical accuracy but also on producing structurally valid, operationally usable outputs that respect physical feasibility and safety constraints.',
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


