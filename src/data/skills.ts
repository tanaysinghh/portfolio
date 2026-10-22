export type SkillIcon = 'languages' | 'frontend' | 'backend' | 'data' | 'ml'

export type SkillGroup = {
  title: string
  icon: SkillIcon
  summary: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'languages',
    summary: 'Core languages for data structures, algorithms, and production services.',
    items: ['C++', 'Java', 'Python'],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    summary: 'Component-driven, accessible interfaces.',
    items: ['React'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    summary: 'REST APIs, auth, webhooks, and real-time services.',
    items: ['Spring Boot', 'FastAPI', 'Node.js', 'Express'],
  },
  {
    title: 'Data and DevOps',
    icon: 'data',
    summary: 'Relational data, containers, and cloud deployment.',
    items: ['PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'ML',
    icon: 'ml',
    summary: 'Gradient-boosted models behind product features.',
    items: ['LightGBM'],
  },
]
