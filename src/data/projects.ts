export type Project = {
  title: string
  description: string
  highlight?: string
  tech: string[]
  github: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'UptimeMonitor',
    description:
      'Full-stack API health monitor with public status pages, automatic incident detection, latency percentiles, and Slack, Discord, and webhook alerts.',
    highlight: 'Java 21 · Spring Boot 4 · real-time over WebSocket',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'Docker'],
    github: 'https://github.com/tanaysinghh/uptime-monitor',
    live: 'https://uptime-monitor-client.onrender.com/',
  },
  {
    title: 'Meridian',
    description:
      'PR risk scoring and review intelligence. Ingests GitHub webhooks, scores every pull request with an explainable model, and surfaces the ones most likely to cause an incident.',
    highlight: 'Explainable scores with rule-only fallback',
    tech: ['Spring Boot', 'React', 'FastAPI', 'LightGBM', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/tanaysinghh/meridian',
    live: 'https://meridian-web-1pi4.onrender.com',
  },
  {
    title: 'Loan Performance Intelligence Engine',
    description:
      'End-to-end loan risk system on Freddie Mac loan-level data: calibrated delinquency, default, and prepayment prediction with stress testing and SHAP explanations.',
    highlight: 'Top 20 of ~12,000 · Intain FinTech Challenge 2026',
    tech: ['Python', 'LightGBM', 'scikit-learn', 'lifelines'],
    github: 'https://github.com/tanaysinghh/loan-performance-intelligence-engine',
  },
  {
    title: 'Last-Mile Delivery Tracker',
    description:
      'Delivery management platform with database-driven zone pricing, automatic agent assignment, and email notifications at every status change.',
    highlight: 'Role-based access for customers, agents, and admins',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React'],
    github: 'https://github.com/tanaysinghh/last-mile-delivery-tracker',
    live: 'https://last-mile-delivery-tracker-weld.vercel.app',
  },
]
