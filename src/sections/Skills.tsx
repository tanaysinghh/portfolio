import { BrainCircuit, Code2, Database, Monitor, Server, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { skillGroups, type SkillIcon } from '../data/skills'

const icons: Record<SkillIcon, LucideIcon> = {
  languages: Code2,
  frontend: Monitor,
  backend: Server,
  data: Database,
  ml: BrainCircuit,
}

const spans = ['lg:col-span-2', '', '', '', 'sm:col-span-2 lg:col-span-1']

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The tools I reach for."
      intro="A focused stack I use across coursework, hackathons, and shipped projects."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Reveal
              as="li"
              key={group.title}
              delay={i * 0.05}
              className={`group rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong sm:p-7 ${spans[i] ?? ''}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-fg">{group.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{group.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface-2 px-3 py-1.5 font-mono text-sm text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
