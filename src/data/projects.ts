import hiretrack1600 from '../assets/images/hiretrack-1600.webp'
import hiretrack800 from '../assets/images/hiretrack-800.webp'
import loan1600 from '../assets/images/loan-1600.webp'
import loan800 from '../assets/images/loan-800.webp'
import meridian1600 from '../assets/images/meridian-1600.webp'
import meridian800 from '../assets/images/meridian-800.webp'
import uptime1600 from '../assets/images/uptimemonitor-1600.webp'
import uptime800 from '../assets/images/uptimemonitor-800.webp'

export type Screenshot = {
  src: string
  srcSet: string
  width: number
  height: number
}

export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
  screenshot: Screenshot
}

const screenshot = (small: string, large: string, height: number): Screenshot => ({
  src: large,
  srcSet: `${small} 800w, ${large} 1600w`,
  width: 1600,
  height,
})

export const projects: Project[] = [
  {
    title: 'UptimeMonitor',
    description:
      'Full-stack API health monitor with public status pages, automatic incident detection, latency percentiles, and Slack, Discord, and webhook alerts.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'Docker'],
    github: 'https://github.com/tanaysinghh/uptime-monitor',
    live: 'https://uptime-monitor-client.onrender.com/',
    screenshot: screenshot(uptime800, uptime1600, 865),
  },
  {
    title: 'Meridian',
    description:
      'PR risk scoring and review intelligence. Ingests GitHub webhooks, scores every pull request with an explainable model, and surfaces the ones most likely to cause an incident.',
    tech: ['Spring Boot', 'React', 'FastAPI', 'LightGBM', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/tanaysinghh/meridian',
    live: 'https://meridian-web-1pi4.onrender.com',
    screenshot: screenshot(meridian800, meridian1600, 857),
  },
  {
    title: 'Loan Performance Intelligence Engine',
    description:
      'End-to-end loan risk system on Freddie Mac loan-level data: calibrated delinquency, default, and prepayment prediction with stress testing and SHAP explanations.',
    tech: ['Python', 'LightGBM', 'scikit-learn', 'lifelines', 'Streamlit'],
    github: 'https://github.com/tanaysinghh/loan-performance-intelligence-engine',
    live: 'https://loan-performance-intel-engine-tanaysinghh.streamlit.app/',
    screenshot: screenshot(loan800, loan1600, 862),
  },
  {
    title: 'HireTrack',
    description:
      'A job-search tracker where every application becomes a single tick on one line, moving from Applied through OA and Interview to an offer, with live analytics behind JWT auth.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/tanaysinghh/hiretrack',
    live: 'https://hiretrack-client.onrender.com',
    screenshot: screenshot(hiretrack800, hiretrack1600, 856),
  },
]
