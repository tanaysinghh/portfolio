export type Hackathon = {
  event: string
  date: string
  built: string
  description: string
  role?: string
  outcome?: string
  link?: string
}

export const hackathons: Hackathon[] = [
  {
    event: 'Intain Campus FinTech Challenge 2026, AI Track',
    date: '2026',
    built: 'Loan Performance Intelligence Engine',
    description:
      'Loan-level risk engine on Freddie Mac data with calibrated delinquency, default, and prepayment models, macro stress simulation, and SHAP-based explanations for reviewers.',
    role: 'Data Preprocessing',
    outcome: 'Top 20 out of ~12,000, advanced to Round 2',
    link: 'https://github.com/tanaysinghh/loan-performance-intelligence-engine',
  },
  {
    event: 'Honeywell Campus Connect',
    date: '2026',
    built: 'Autonomous Production Choke Controller',
    description:
      'Built entirely solo: a constraint-aware model predictive controller that sets the choke position of a flowing oil well every hour to maximise oil rate without taking wellhead, flowline, or bottom-hole pressure below its limit. Zero true constraint violations across 82,150 controlled hours and 700 Monte Carlo runs, robust to ±30% model error, with a 3.3 ms median solve time.',
    link: 'https://github.com/tanaysinghh/honeywell-choke-mpc',
  },
]
