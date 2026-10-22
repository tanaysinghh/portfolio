export type Hackathon = {
  event: string
  date: string
  built: string
  description: string
  role: string
  outcome: string
  link?: string
}

export const hackathons: Hackathon[] = [
  {
    event: 'Intain Campus FinTech Challenge 2026, AI Track',
    date: 'TODO: month 2026',
    built: 'Loan Performance Intelligence Engine',
    description:
      'Loan-level risk engine on Freddie Mac data with calibrated delinquency, default, and prepayment models, macro stress simulation, and SHAP-based explanations for reviewers.',
    role: 'TODO: your role (e.g. solo developer, team lead)',
    outcome: 'Top 20 out of ~12,000, advanced to Round 2',
    link: 'https://github.com/tanaysinghh/loan-performance-intelligence-engine',
  },
  {
    event: 'Honeywell Campus Connect',
    date: 'TODO: month and year',
    built: 'Autonomous Production Choke Controller',
    description:
      'Constraint-aware model predictive controller that maximises oil rate from a flowing well while keeping every pressure above its limit, with zero true violations across 82,150 simulated hours.',
    role: 'TODO: your role (e.g. solo developer, team lead)',
    outcome: 'TODO: result (e.g. finalist, winner, rank)',
    link: 'https://github.com/tanaysinghh/honeywell-choke-mpc',
  },
]
