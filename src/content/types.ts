export type Locale = 'en' | 'ja' | 'zh';

export interface Publication {
  title: string;
  venue: string;
  role: string;
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  result: string;
  status: string;
  href?: string;
  selected?: boolean;
}

export interface SiteContent {
  nav: { home: string; projects: string; cv: string };
  identity: { name: string; role: string; interests: string[]; about: string };
  labels: {
    education: string;
    publications: string;
    selectedProjects: string;
    experience: string;
    allProjects: string;
    viewProject: string;
  };
  publications: Publication[];
  projects: Project[];
  education: {
    organization: string;
    degree: string;
    period: string;
    logo: string;
    rankings: Array<{ label: string; href: string }>;
  };
  experience: {
    organization: string;
    role: string;
    period: string;
    summary: string;
    logo: string;
  };
}
