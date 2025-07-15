import { Skill, Project, TimelineEvent, Certification } from './types';

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'HTML/CSS/JS', level: 90, category: 'Frontend' },
  { name: 'Flutter', level: 70, category: 'Frontend' },
  { name: 'Web Development', level: 85, category: 'Frontend' },
  // Backend
  { name: 'Node.js/Express', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 70, category: 'Backend' },
  // DevOps
  { name: 'Linux/Windows OS', level: 85, category: 'DevOps' },
  { name: 'Virtualization', level: 80, category: 'DevOps' },
  { name: 'Prometheus', level: 70, category: 'DevOps' },
  // Tools
  { name: 'Networking', level: 75, category: 'Tools' },
  { name: 'Troubleshooting', level: 90, category: 'Tools' },
  { name: 'Team Work', level: 95, category: 'Tools' },
  { name: 'Problem Solving', level: 95, category: 'Tools' },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Social Media Platform',
    description: 'Designed and developed a platform for a university community to enhance student collaboration, featuring user profiles, posts, and real-time messaging.',
    tech: ['Web Tools', 'Authentication', 'Real-time Messaging'],
    liveUrl: 'https://github.com/abuzer404',
    repoUrl: 'https://github.com/abuzer404',
  },
  {
    title: 'Time Delivery App',
    description: 'Delivered a full-stack solution with a customer app, driver app, and admin dashboard. Designed wireframes, collaborated with a team, and developed the backend.',
    tech: ['Flutter', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://github.com/abuzer404',
    repoUrl: 'https://github.com/abuzer404',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with a modern frontend framework and a robust backend API.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://github.com/abuzer404',
    repoUrl: 'https://github.com/abuzer404',
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'An interactive dashboard for visualizing and analyzing datasets. Features include dynamic charts, data filtering, and export functionality, showcasing data handling skills.',
    tech: ['Python', 'Flask', 'Pandas', 'Chart.js'],
    liveUrl: 'https://github.com/abuzer404',
    repoUrl: 'https://github.com/abuzer404',
  },
];

export const EDUCATION_DATA: TimelineEvent = {
  year: 'Graduating June 2025',
  title: 'B.Sc. in Computer Science and Engineering',
  institution: 'Adama Science and Technology University',
  description: 'Achieved a CGPA of 3.48 (With Distinction) and passed the national exit exam with 76%.'
};

export const CERTIFICATIONS_DATA: Certification[] = [
    { 
        issuer: 'Cisco', 
        name: 'CCNA & More',
        items: [
            'CCNA: Introduction to Networks',
            'CCNA: Switching, Routing, and Wireless Essentials',
            'IT Customer Support Basics',
            'Operating Systems Basics'
        ]
    },
    { issuer: 'Udacity', name: 'Data Analysis Fundamentals' },
    { issuer: 'Udacity', name: 'Artificial Intelligence Fundamentals' }
];

export const EXPERIENCE_DATA: TimelineEvent[] = [
  {
    year: 'July 2024 - Sep 2024',
    title: 'Web Development Intern',
    institution: 'Sheger Systems PLC',
    description: 'Developed front-end and back-end components for a referral platform, collaborated with a team of developers, and assisted in testing and deployment.'
  },
  {
    year: 'July 2023 - Sep 2023',
    title: 'System Administration Intern',
    institution: 'Jimma University',
    description: 'Administered Linux and Windows environments, performed system diagnostics, and supported virtualization and basic network maintenance.'
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/abuzer404',
  linkedin: 'https://www.linkedin.com/',
  telegram: 'https://t.me',
};

export const CONTACT_INFO = {
  email: 'abzr3457@gmail.com',
  phone: '0941 646 090',
  address: 'Jimma, Ethiopia'
};