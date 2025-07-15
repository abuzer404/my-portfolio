export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title:string;
  institution: string;
  description: string;
}

export interface Certification {
  issuer: string;
  name: string;
  items?: string[];
}
